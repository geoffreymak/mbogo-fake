import { Router } from 'express';
import PayementsController from '@controllers/payements.controller';
import { CreatePayementDto } from '@dtos/payements.dtos';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';

class PayementsRoute implements Routes {
  public path = '/payements';
  public router = Router();
  public payementsController = new PayementsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}`, validationMiddleware(CreatePayementDto, 'body'), this.payementsController.payeFees);
  }
}

export default PayementsRoute;
