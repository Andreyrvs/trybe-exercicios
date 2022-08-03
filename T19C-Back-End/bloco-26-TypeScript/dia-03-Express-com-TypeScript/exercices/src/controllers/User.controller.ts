import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import UserService from '../services/User.service';

class UserController {
  constructor(private userService = new UserService()) { }

  public getAll = async (req: Request, res:Response) => {
    const result = await this.userService.getAll();

    return res.status(StatusCodes.OK).json(result);
  };

  public getById = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const result = await this.userService.getById(id);

    return res.status(StatusCodes.OK).json(result);
  };

  public create = async (req: Request, res: Response) => {
    const user = req.body;

    const result = await this.userService.create(user);

    if (!result) {
      return res.status(StatusCodes.BAD_GATEWAY).send('BadRequest');
    }

    return res.status(StatusCodes.OK).json(result);
  };
}

export default UserController;
