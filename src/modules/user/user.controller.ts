import express = require('express');
const router = express.Router();

import { Request, Response } from 'express';
import * as userService from './user.service';

router.route('/').get(async (req: Request, res: Response) => {
  const users = await userService.getUser();
  res.send(users);
});

export default router;
