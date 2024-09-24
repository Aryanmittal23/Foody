import express from "express";
import cors from "cors"
import foodRouter from "./routes/foodRouter.js"
import {connectdb} from "./config/db.js"
import userRouter from "./routes/userRoute.js";
import 'dotenv/config'
const app = express();
app.use(express.json());
app.use(cors())
connectdb();

//api endpoints
app.use("/api/food",foodRouter)
app.use("/api/user",userRouter)
app.get('/',(req,res)=>{
    res.send("hello")
})

app.listen(3000,()=>{
    console.log("server runs on 3000")
})