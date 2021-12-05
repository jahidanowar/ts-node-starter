import express, { Request, Response } from 'express';

// import connect from './utils/db.util';
import userRoute from './routes/user.route';


const app = express();
app.use(express.json());

// (async () => connect())()

// Routes
app.use('/api/v1/', userRoute);

app.get('*', (req: Request, res: Response) => {
    res.status(200).json({
        message: 'Welcome to the ts wordld'
    })
});

export default app;