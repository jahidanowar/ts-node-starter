import express from 'express';
import userRoute from './routes/user.route';

const app = express();
app.use(express.json());

// Routes
app.use('/api/v1/', userRoute);

export default app;