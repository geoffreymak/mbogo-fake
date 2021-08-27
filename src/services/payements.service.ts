import axios, { AxiosResponse } from 'axios';
import { CreatePayementDto } from '@dtos/payements.dtos';
import { HttpException } from '@exceptions/HttpException';
import { Payement } from '@interfaces/payements.interface';
// import userModel from '@models/users.model';
import { isEmpty } from '@utils/util';

class PayementService {
  // public users = userModel;

  public async paye(payementData: CreatePayementDto): Promise<Payement> {
    if (isEmpty(payementData)) throw new HttpException(400, "You're not userData");
    const result: AxiosResponse = await axios.post(payementData.fallback, { data: payementData.type });
    return result.data;
  }
}

export default PayementService;
