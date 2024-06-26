import mongoose from "mongoose";
import { connect , disconnect } from "mongoose";

export async function connectDB(){
    try{
        await connect("mongodb+srv://foody:foody@cluster0.k5ol8ax.mongodb.net/foody");
        console.log("done connection")
    }
    catch(error){
        console.log(error);
        throw new Error("not connected")
    }
}