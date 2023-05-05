import express from "express";
import morgan  from "morgan";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./db/mongo.js";
import userRoutes from "./routes/user.js"
import mongoose from "mongoose";

const app=express();
dotenv.config();
const MONGO_URL=process.env.MONGO_URL;
const PORT=process.env.PORT;

//middleware
app.use(morgan('dev')); //To  http request 
app.use(express.json()); //To handle json object
app.disable('x-powered-by');
app.use(cors());


//
app.use('/api',userRoutes);
var server;
//Connect data base and start the server
connectDB(MONGO_URL).then(()=>{
    try {
        server=app.listen(PORT,()=>{
            console.log(`server running at http://localhost:${PORT}\non Process Id : ${process.pid}`);
        })
    } catch (error) {
        console.log(err);
    }
}).catch(error=>{
    console.log("Invalid database connection....!");
});

process.on('SIGTERM',()=>{
    //for the production
    console.log("SIGTERM recived");
    console.log("server is closed for the new user , but old user have time to complete their process");
    server.close(()=>{
        console.log("All ");
        mongoose.connection.close(false,()=>{
            process.exit(0);
        });//false for the gracefull close
        
    })
});
process.on('SIGINT',()=>{//this is for the devlopment
    console.log("SIGINT recived");
    console.log("server is closed for the new user , but old user have time to complete their process");
    server.close(()=>{
        console.log("All request is processed");
        mongoose.connection.close(false);//false for the gracefull close
        process.exit(0);
    })
    
});

