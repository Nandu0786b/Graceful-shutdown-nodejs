import express from "express";
import morgan  from "morgan";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./Db.js/mongoc.js";

const app=express();
dotenv.config();
const MONGO_URL=process.env.MONGO_URL;
const PORT=process.env.PORT;

//middleware
app.use(morgan('dev')); //To  http request 
app.use(express.json()); //To handle json object
app.disable('x-powered-by');
app.use(cors());


//Connect data base and start the server
connectDB(MONGO_URL).then(()=>{
    try {
        app.listen(PORT,()=>{
            console.log(`server running at http://localhost:${PORT}`)
        })
    } catch (error) {
        console.log(err)
    }
}).catch(error=>{
    console.log("Invalid database connection....!")
})
