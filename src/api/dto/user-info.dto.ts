import {
  IsNotEmpty,
  IsNumber,
  IsString,
  IsEmail,
  IsDateString,
} from 'class-validator';

export class UserInfoDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly gender: string;

  @IsDateString()
  @IsNotEmpty()
  readonly date: Date;

  @IsString()
  readonly status: string;

  @IsNumber()
  @IsNotEmpty()
  readonly childCounter: number;

  @IsEmail()
  readonly email: string;

  @IsString()
  readonly comment: string;
}
