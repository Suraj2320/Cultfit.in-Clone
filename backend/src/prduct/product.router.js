const express=require("express")
const ProductModel=require("./product.model")
const app=express.Router()


//create post
app.post("/",async(req,res)=>{

    console.log(req.body)
    
        const {title,desc,category,image,price}=req.body
        
        try{
            const newProduct=new ProductModel({title,desc,category,image,price})
           const product= await newProduct.save()
            res.status(200).send({message:"Product ceated",product})
        }
        catch(e){
            res.status(401).send(e)
        }
  
    
});


app.put("/:id",async(req,res)=>{

    const product=await ProductModel.findById(req.params.id)
    
       const updateProduct=await ProductModel.findByIdAndUpdate(req.params.id,
        {
            $set:req.body,
        },{new:true})
        res.status(200).send(updateProduct)
   


})


// app.delete("/:id",async(req,res)=>{
//     let token=req.headers["authorization"]
//     if(token){
//         const decoded=jwt.decode(token)
//         const post=await PostModel.findById(req.params.id)
//         if(post.userID==decoded.id){
//            await PostModel.deleteOne(post);
//            res.status(200).send("post has been deleted")

//         }
    
//         else{
//             res.send("you can only delete your post")
//         }
    
//     }
//     })


    app.get("/:id",async(req,res)=>{
        
        try{
            const product=await ProductModel.findById(req.params.id)
            res.status(200).send(product)
        }
        catch(e){
            res.send(e)
        }
       
    })
    app.get("/",async(req,res)=>{
        console.log(req.query.cat)
        const catName=req.query.cat;
        // console.log("hii")
        try{
            // console.log("first")
             let posts;
              if(catName){
                posts=await ProductModel.find({category:catName})
             }
             else{
                posts=await ProductModel.find()
                // console.log(posts)
             }
             res.status(200).send(posts)
        }catch(e){
           res.send(e)
        }
    })




module.exports=app
