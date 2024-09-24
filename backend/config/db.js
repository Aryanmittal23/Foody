import mongoose from "mongoose";
import { connect , disconnect } from "mongoose";

export async function connectdb(){
    try{
        await connect("mongodb+srv://foodwebsite:foodwebsite123@cluster0.11jx5fm.mongodb.net");
        console.log("done connection")
    }
    catch(error){
        console.log(error);
        throw new Error("not connected")
    }
}