import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFilmDto } from './dto/create-film.dto';
import { UpdateFilmDto } from './dto/update-film.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Film } from './entities/film.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FilmsService {
  constructor(
    @InjectRepository(Film)
    private filmsRepository: Repository<Film>,
  ) {}

  async create(createFilmDto: CreateFilmDto): Promise<Film> {
    const newFilm = this.filmsRepository.create(createFilmDto);
    return await this.filmsRepository.save(newFilm);
  }

  async findAll(): Promise<Film[]> {
    return await this.filmsRepository.find();
  }

  async findOne(id: number): Promise<Film> {
    const film = await this.filmsRepository.findOne({ where: { id } });
    if (!film) {
      throw new NotFoundException(`Film with ID ${id} not found`);
    }
    return film;
  }

  async update(id: number, updateFilmDto: UpdateFilmDto): Promise<Film> {
    const film = await this.findOne(id);
    if (!film) {
      throw new NotFoundException(`Film with ID ${id} not found`);
    }
    this.filmsRepository.merge(film, updateFilmDto);
    return await this.filmsRepository.save(film);
  }

  async remove(id: number): Promise<void> {
    const film = await this.findOne(id);
    if (!film) {
      throw new NotFoundException(`Film with ID ${id} not found`);
    }
    await this.filmsRepository.remove(film);
  }

  async findByGenre(genre: string): Promise<Film[]> {
    return await this.filmsRepository.createQueryBuilder('film')
      .where('film.genres LIKE :genre', { genre: `%${genre}%` })
      .getMany();
  }

  async findByRating(rating: number): Promise<Film[]> {
    return await this.filmsRepository.createQueryBuilder('film')
      .where('film.rating = :rating', { rating })
      .getMany();
  }
}
