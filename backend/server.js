import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import { connectDB } from './libs/ConnectDB.js';
import UserRouter from './routes/User.route.js'
import cookieParser from 'cookie-parser';



const app = express();
dotenv.config()
const PORT = process.env.PORT || 4000;
app.use(cors());
app.use(cookieParser())
app.use(express.json());

app.use('/api/users', UserRouter);
app.listen(PORT, () => {
    connectDB()
  console.log(`Server is running on http://localhost:${PORT}`);
});