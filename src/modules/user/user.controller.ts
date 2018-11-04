import express = require('express');
import { Request, Response } from 'express';
import * as userService from './user.service';
import * as httpStatus from 'http-status';

const router = express.Router();

router.route('/').get(async (req: Request, res: Response) => {
  const users = await userService.getUser();
  res.status(httpStatus.OK).json(users);
});

export default router;
