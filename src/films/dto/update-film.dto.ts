import { IsOptional, IsString, IsDate, IsNumber } from 'class-validator';

export class UpdateFilmDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  genres?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsDate()
  releasedDate?: Date;

  @IsOptional()
  @IsNumber()
  rating?: number;
}
