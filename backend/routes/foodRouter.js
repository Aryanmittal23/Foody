import express from "express"
import { addfood ,listfood,removefood} from "../controllers/foodcontroller.js"
import multer from "multer"

const foodRouter = express.Router();

//image storage engine

const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})

//to add the food items 
foodRouter.post("/add",upload.single("image"),addfood)
// to fetch the food items
foodRouter.get("/list",listfood)
//to remove the food items
foodRouter.post("/remove",removefood)

export default foodRouter