const express=require("express")
const CartModel=require("./cart.model")
const app=express.Router()


//create post
app.post("/",async(req,res)=>{

    console.log(req.body)
    
        const {title,desc,category,image,price,count}=req.body
        
        try{
            const newCart=new CartModel({title,desc,category,image,price,count})
           const cart= await newCart.save()
            res.status(200).send({message:"Product added to cart",cart})
        }
        catch(e){
            res.status(401).send(e)
        }
  
    
});


app.get("/",async(req,res)=>{
  
    // console.log("hii")
    try{
        // console.log("first")
           let posts=await CartModel.find()
            // console.log(posts)
         
         res.status(200).send(posts)
    }catch(e){
       res.send(e)
    }
})


app.put("/:id",async(req,res)=>{

    const cart=await CartModel.findById(req.params.id)
    
       const updateProduct=await CartModel.findByIdAndUpdate(req.params.id,
        {
            $set:req.body,
        },{new:true})
        res.status(200).send(updateProduct)
   


})


app.delete("/:id",async(req,res)=>{
    
        const post=await CartModel.findById(req.params.id)
      
           await CartModel.deleteOne(post);
           res.status(200).send("post has been deleted")

    
    
    })

    app.delete("/",async(req,res)=>{
       await CartModel.deleteMany({});
       res.status(200).send("all post deleted")
    })


    // app.get("/:id",async(req,res)=>{
        
    //     try{
    //         const product=await ProductModel.findById(req.params.id)
    //         res.status(200).send(product)
    //     }
    //     catch(e){
    //         res.send(e)
    //     }
       
    // })
  




module.exports=app
