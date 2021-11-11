import express from 'express';
import connect from './utils/db.util';
import userRoute from './routes/user.route';

const app = express();
app.use(express.json());

(async () => connect())()

// Routes
app.use('/api/v1/', userRoute);

export default app;