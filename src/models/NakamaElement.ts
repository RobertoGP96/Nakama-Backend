import { Nprisma } from "../../prisma/prisma";
import { element } from "../types/element";

export default class NakamaElementModel {
  static async getAll() {
    return await Nprisma.element.findMany();
  }

  static async getByID({ id }: { id: number }) {
    return await Nprisma.element.findUnique({
      where: {
        id: id,
      },
    });
  }
  static async create({ input }: { input: element }) {
    return await Nprisma.element.create({
      data: {
        abstract: input.abstract,
        plot: input.plot,
        category: input.Category,

        title: input.title,
        title_original: input.original_title,

        backdrop: input.backdrop_path,
        poster: input.poster_path,

        year: input.year,

        popularity: input.popularity,

        country: input.country,

        //Generos
        genres: {
          create: {
            genres: input.genres,
          },
        },

        //ExternalIDS
        external_ids: {
          create: {
            imdb_id: input.externalids.imdb_id,
            tmdb_id: input.externalids.tmdb_id,
            omdb_id: input.externalids.omdb_id,
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

        //Metadata
        metadata: {
          create: {
            audio: input.metadata.audio,
            codec: input.metadata.codec,
            duration: input.metadata.duration,
            fps: input.metadata.fps,
            resolution: input.metadata.resolution,
            storage: input.metadata.storage,
            subtitle: input.metadata.subt,
          },
        },
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
  static async update({ id, input }: { id: number; input: element }) {
    return await Nprisma.element.update({
      where: {
        id: id,
      },
      data: {
        abstract: input.abstract,
        plot: input.plot,
        category: input.Category,

        title: input.title,
        title_original: input.original_title,

        backdrop: input.backdrop_path,
        poster: input.poster_path,

        year: input.year,

        popularity: input.popularity,

        country: input.country,
        
      },
    });
  }
}
