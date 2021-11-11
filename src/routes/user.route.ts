import express from 'express';
import { validate } from '../middlewares/validateResource';
import { UserSchema } from '../schema/user.schema';
import {store, login} from './../controllers/user.controller'


const router = express.Router();
const PREFIX:string = 'user';

// @route   GET api/users
// @desc    Get all users
// @access  Public

router.post(`/${PREFIX}/register`, validate(UserSchema),  store);
router.post(`/${PREFIX}/login`, login);


export default router;