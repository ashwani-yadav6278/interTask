import express from 'express';
import cors from 'cors';
import 'dotenv/config';
const app=express();
app.use(express.json());
const PORT=process.env.PORT || 5000;
import internRoutes from './routes/routes.js';
app.use(cors({
    origin: 'http://localhost:5173',
}));

app.get("/",(req,res)=>{
    res.send("Hello from server");
}

)
app.use("/api",internRoutes);
app.listen(PORT,()=>{
    console.log(`server is running on port: ${PORT}`);
})