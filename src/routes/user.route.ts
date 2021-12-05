import express from 'express';
import { validate } from '../middlewares/validateResource';
import { LoginSchema } from '../schema/login.schema';
import { UserSchema } from '../schema/user.schema';
import { register, login } from './../controllers/user.controller'


const router = express.Router();
const PREFIX: string = 'user';

/**
 * POST /user/register
 * route to register a new user
 * @body {name, email, password, passwordConfirmation}
 * @response {user, token}
 */
router.post(`/${PREFIX}/register`, validate(UserSchema), register);

/**
 * POST /user/login
 * route to login a user
 * @body {email, password}
 * @response {user, token}
 */
router.post(`/${PREFIX}/login`, validate(LoginSchema), login);


export default router;