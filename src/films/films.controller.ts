import { Controller, Get, Post, Body, Param, Put, Delete, Query } from '@nestjs/common';
import { FilmsService } from './films.service';
import { CreateFilmDto } from './dto/create-film.dto';
import { UpdateFilmDto } from './dto/update-film.dto';
import { Film } from './entities/film.entity';

@Controller('films')
export class FilmsController {
  constructor(private readonly filmsService: FilmsService) {}

  @Post()
  create(@Body() createFilmDto: CreateFilmDto): Promise<Film> {
    return this.filmsService.create(createFilmDto);
  }

  @Get()
  findAll(): Promise<Film[]> {
    return this.filmsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Film> {
    return this.filmsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateFilmDto: UpdateFilmDto): Promise<Film> {
    return this.filmsService.update(id, updateFilmDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.filmsService.remove(id);
  }

  @Get('genre/:genre')
  findByGenre(@Param('genre') genre: string): Promise<Film[]> {
    return this.filmsService.findByGenre(genre);
  }

  @Get('rating/:rating')
  findByRating(@Param('rating') rating: number): Promise<Film[]> {
    return this.filmsService.findByRating(rating);
  }

  @Get('search')
  findByGenreQuery(@Query('genre') genre: string, @Query('rating') rating?: number): Promise<Film[]> {
    if (genre) {
      return this.filmsService.findByGenre(genre);
    } else if (rating !== undefined) {
      return this.filmsService.findByRating(rating);
    } else {
      throw new Error('Query parameters are missing');
    }
  }
}
