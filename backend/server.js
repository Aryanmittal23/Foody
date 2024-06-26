import express from "express";
import cors from "cors"
import foodRouter from "./routes/foodRoute.js"
import {connectdb} from "./config/db.js"
import userRouter from "./routes/userRoute.js";
import 'dotenv/config'

const app = express();
const port =4000

//middleware
app.use(express.json());
app.use(cors())

//db connection
connectdb();

//api endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("api/user",userRouter)

app.get('/',(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`)
})