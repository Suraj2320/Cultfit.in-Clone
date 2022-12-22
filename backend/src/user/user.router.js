const express=require("express")
const UserModel=require("./user.model")
const app=express.Router()
const jwt=require("jsonwebtoken")
const argon2=require("argon2")

app.post("/signup",async(req,res)=>{
const {username,email,password}=req.body
//console.log(username,email,password);
const hash=await argon2.hash(password)
try{
    const user=new UserModel({username,email,password:hash})
    await user.save()
    return res.status(201).send("user created")

}
catch(e){
    console.log(e.message)
    return res.send(e.message)
}
})


app.post("/login",async(req,res)=>{
    const {email,password}=req.body;
    const user=await UserModel.findOne({email});
  console.log(user,password)
  if(user){
    if(user.password==password || await argon2.verify(user.password,password)){
        const token=jwt.sign({id:user._id,username:user.username,email:user.email},"SECRET",{expiresIn:"24 hours"})
        const refreshToken=jwt.sign({id:user._id,username:user.username,email:user.email},"REFRESH",{expiresIn:"7 days"})
        return res.status(201).send({message:"login sucess",token,refreshToken,user})
    }
    else{
        return res.status(401).send("wrong credentials")
    }
  }
  else{
    return res.status(401).send("wrong credentials")
}

    
})

//update 
app.put("/:id",async(req,res)=>{
    let token=req.headers["authorization"]
    if(token){
        const decoded=jwt.decode(token)

        if(decoded.id==req.params.id){
           
console.log(req.params.id,req.body.creds)
            try{
                const updateUser=await UserModel.findByIdAndUpdate(req.params.id,
                    {
                        $set:req.body.creds,
                    },{new:true})
                res.status(200).send(updateUser)
            }catch(e){
                res.status(401).send("you can update only your account")
            }
        }
    }
})










//delete
app.delete("/:id",async(req,res)=>{
    let token=req.headers["authorization"]

if(token){
const decoded=jwt.decode(token)

if(decoded.id===req.params.id ){
    console.log(decoded.id)
try{
    const user=await UserModel.findById(req.params.id)
    await PostModel.deleteMany({userID:req.params.id})
    await UserModel.findByIdAndDelete(req.params.id)
    return res.status(200).send("account deleted");

}catch(e){
    return res.send(e.message)
}
}

else if(decoded.role=="admin"){
    try{
        const user=await PostModel.findById(req.params.id)
        await PostModel.deleteMany({userID:user.userID})
        await UserModel.findByIdAndDelete(req.params.id)
        return res.status(200).send("account deleted")
    
    }catch(e){
        return res.send(e.message)
    }
}
else{
    return res.status(401).send("you can only delete your account")
}
}
    
})


//Get
app.get("/:id",async(req,res)=>{
const token=req.headers["authorization"]
if(token){
    const decoded=jwt.decode(token)
    if(decoded.id==req.params.id){

        try{
            const user=await UserModel.findById(req.params.id)
            const {password,...others}=user._doc
            return res.send(others)
        }
        catch(e){
            res.status(500).send(e.message)
        }

    }
}
   
});

app.get("/", async(req,res)=>{
    const token=req.headers["authorization"]
    console.log(token)

    if(token){
       
        
        const decoded=jwt.decode(token)
        console.log(decoded)
        if(decoded.role=="admin"){
    
            try{
                const user=await UserModel.find({role:"users"})
                return res.send(user)
            }
            catch(e){
                res.status(500).send(e.message)
            }
    
        }
            


        }
        else{

            res.send("token required")

        }





    

       
    });



module.exports=app;
