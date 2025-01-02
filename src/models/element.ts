import { Nprisma } from "../../prisma/prisma";
import {
  createElement,
  editElement,
  Element,
  simpleElement,
} from "../types/element";

export class ElementModel {
  static async getAll() {
    return await Nprisma.element.findMany({
      include: {
        genres: {select:{
          id:true,
          genres:true
        }},
        ratings: true,
        external_ids: true,
      },
    });
  }

  static async getByID({ id }: { id: number }) {
    return await Nprisma.element.findUnique({
      where: {
        id: id,
      },
      include: {
        genres: true,
        ratings: true,
        external_ids: true,
      },
    });
  }
  static async create({ input }: { input: createElement }) {
    return await Nprisma.element.create({
      data: {
        abstract: input.abstract,
        plot: input.plot,
        category: input.category,

        title: input.title,
        title_original: input.title_original,

        backdrop: input.backdrop,
        poster: input.poster,

        year: input.year,

        popularity: input.popularity,

        country: input.country,

        //Generos
        genres: {
          create: {
            genres: input.genres.genres,
          },
        },

        //ExternalIDS
        external_ids: {
          create: {
            imdb_id: input.external_ids.imdb_id,
            tmdb_id: input.external_ids.tmdb_id,
            omdb_id: input.external_ids.omdb_id,
          },
        },

        //Ratings
        ratings: {
          create: {
            imdb_rating: input.ratings.imdb_rating,
            imdb_votes: input.ratings.imdb_votes,
            mc_rating: input.ratings.mc_rating,
            mc_votes: input.ratings.mc_votes,
            rotten_rating: input.ratings.rotten_rating,
            rotten_votes: input.ratings.rotten_votes,
          },
        },

        //Credits
        credits: {
          create: {
            cast_members: {
              create: input.credits.cast_members,
            },
          },
        },
      },
    });
  }
  static async createSimple({ input }: { input: simpleElement }) {
    return await Nprisma.element.create({
      data: {
        abstract: input.abstract,
        plot: input.plot,
        category: input.category,

        title: input.title,
        title_original: input.title_original,

        backdrop: input.backdrop,
        poster: input.poster,

        year: input.year,

        popularity: input.popularity,

        country: input.country,
      },
    });
  }

  static async delete({ id }: { id: number }) {
    return await Nprisma.element.delete({
      where: {
        id: id,
      },
    });
  }

  static async update({ id, input }: { id: number; input: editElement }) {
    return await Nprisma.element.update({
      where: {
        id: id,
      },
      data: {
        abstract: input.abstract,
        plot: input.plot,
        category: input.category,

        title: input.title,
        title_original: input.title_original,

        backdrop: input.backdrop,
        poster: input.poster,

        year: input.year,

        popularity: input.popularity,

        country: input.country,
      },
    });
  }
  static async findMany({ IDs }) {
    return await Nprisma.element.findMany({
      where: {
        id: IDs,
      },
    });
  }
}
