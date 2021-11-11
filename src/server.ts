import dotenv from 'dotenv';
import app from './app';

dotenv.config();



const DEFAULT_PORT:Number = 1337;
const PORT:Number = Number(process.env.PORT) || DEFAULT_PORT;
app.listen( PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
})