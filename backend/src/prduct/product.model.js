const {Schema,model}=require("mongoose")

const ProductSchema=new Schema({
    title:{
        type:String,
         required:true,
        
    },
desc:{
    type:String,
    required:true,
},
price:{
type:Number,
required:false
},
image:{
    type:String,
    required:false
},
category:{
    type:String
}

},{timestamps:true});

const ProductModel=model("post",ProductSchema)
module.exports=ProductModel