import { NextFunction, Request, Response } from 'express';
import { CreatePayementDto } from '@dtos/payements.dtos';
import { RequestWithUser } from '@interfaces/auth.interface';
import { Payement } from '@interfaces/payements.interface';
import PayementService from '@services/payements.service';

class PayementsController {
  public payementService = new PayementService();

  public payeFees = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const payementData: CreatePayementDto = req.body;
      const payedData = await this.payementService.paye(payementData);
      res.status(201).json({ data: payedData, message: 'payed' });
    } catch (error) {
      next(error);
    }
  };
}

export default PayementsController;
