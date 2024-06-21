import { IsString, IsNotEmpty, IsDate, IsNumber } from 'class-validator';

export class CreateFilmDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  genres: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsDate()
  releasedDate: Date;

  @IsNotEmpty()
  @IsNumber()
  rating: number;
}
