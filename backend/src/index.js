import express from 'express';
import connect from './connect/connect.js';
import cors from  "cors";
import router from './router/router.js'
import dotenv from 'dotenv';

dotenv.config();

const app=express();
const PORT=process.env.PORT || 8000;
//middlewares

app.use(cors());
app.use(express.json());

app.use("/",router);

app.listen(PORT,()=>{
    connect();
    console.log(`server is running on ${PORT}`);
})