import { IsString, IsDataURI, IsUrl } from 'class-validator';

export class CreatePayementDto {
  @IsUrl()
  public fallback: string;

  @IsString()
  public type: string;
}
