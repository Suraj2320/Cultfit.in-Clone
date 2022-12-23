const {Schema,model}=require("mongoose")

const CartSchema=new Schema({
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
},
count:{
    type:Number,
    default:1

}

},{timestamps:true});

const CartModel=model("cart",CartSchema)
module.exports=CartModel