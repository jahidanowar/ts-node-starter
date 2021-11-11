import './utils/env.util';
import app from './app';

const DEFAULT_PORT:Number = 1337;
const PORT:Number = Number(process.env.PORT) || DEFAULT_PORT;
app.listen( PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
})