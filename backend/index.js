require("dotenv").config()
const PORT=process.env.PORT
const express=require("express")
const connect=require("./config/db")
const mongoose=require("mongoose")
const Razorpay=require('razorpay')
const productRoute=require("./src/prduct/product.router")
const userRoute=require("./src/user/user.router")
const cartRoute=require("./src/cart/cart.router")
const cors=require("cors")



const app=express()
app.use(express.urlencoded({extended:true}))
app.use(express.json()) 
app.use(cors())


//razorPay
const OrderSchema=mongoose.Schema({
    isPaid:Boolean,
    amount:Number,
    razorpay:{
        orderId:String,
        paymentId:String,
        signature:String
    }
})
const Order=mongoose.model('Order',OrderSchema)

const RAZORPAY_KEY_ID="rzp_test_Bn5TdTC1ufwLap"
const RAZORPAY_SECRET="6LmqZ5BJaErjEJWblgDbskz3"
app.get('/get-razorpay-key',(req,res)=>{
    res.send({key:RAZORPAY_KEY_ID})
})

app.post('/create-order',async(req,res)=>{
    try{
 const instance=new Razorpay({
    key_id:RAZORPAY_KEY_ID,
    key_secret:RAZORPAY_SECRET
 });
 const options={
    amount:req.body.amount,
    currency:"INR",
 };
 const order=await instance.orders.create(options);
 if(!order) return res.status(500).send('Some error occured');
 res.send(order)
    }
    catch(e){
res.status(500).send(e)
    }
})

app.post('/pay-order',async(req,res)=>{
    try{
        const {amount,razorpayPaymentId,razorpayOrderId,razorpaySignature}=req.body;
        const newPayment=Order({
            isPaid:true,
            amount:amount,
            razorpay:{
                orderId:razorpayOrderId,
                paymentId:razorpayPaymentId,
                signature:razorpaySignature
            },
        });
        await newPayment.save()
res.send({
    msg:'Payment was Successfull'
});
    }
    catch(e){
console.log(e)
res.status(500).send(e)
    }
});

app.get('/list-orders',async(req,res)=>{
    const orders=await Order.find();
    res.send(orders)
})




///end of razorpay


app.use("/users",userRoute)
 app.use("/product",productRoute)
app.use("/cart",cartRoute)




app.listen(PORT,async()=>{
    await connect()
    console.log("server is running")
})
