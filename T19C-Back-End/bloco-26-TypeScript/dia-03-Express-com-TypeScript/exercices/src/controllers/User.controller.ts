import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import UserService from '../services/User.service';

class UserController {
  constructor(private userService = new UserService()) { }

  public getAll = async (req: Request, res:Response) => {
    const result = await this.userService.getAll();

    return res.status(StatusCodes.OK).json(result);
  };
}

export default UserController;
