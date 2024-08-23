import { Nprisma } from "../../prisma/prisma";
import { createElement, editElement, Element } from "../types/element";

export class ElementModel {
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
  static async create({ input }: { input: createElement }) {
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
            genres: input.genres.genres
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

        //Metadata
        metadata: {
          create: {
            audio: input.metadata.audio,
            codec: input.metadata.codec,
            duration: input.metadata.duration,
            fps: input.metadata.fps,
            resolution: input.metadata.resolution,
            storage: input.metadata.storage,
            subtitle: input.metadata.subtitle,
          },
        },
        
        //Ratings
        ratings: {
          create:{
            imdb_rating: input.ratings.imdb_rating,
            imdb_votes: input.ratings.imdb_votes,
            mc_rating: input.ratings.mc_rating,
            mc_votes: input.ratings.mc_votes,
            rotten_rating: input.ratings.rotten_rating,
            rotten_votes: input.ratings.rotten_votes,
          }
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
  static async findMany({IDs}){
    return await Nprisma.element.findMany({
      where:{
        id:IDs
      }
    })
  }
}
