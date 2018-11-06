import { Request, Response } from 'express';
import * as userService from '../services/user.service';

export const getUser = async (req: Request, res: Response) => {
  const users = await userService.getUser();
  res.send(users);
};
