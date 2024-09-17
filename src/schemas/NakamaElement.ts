import z from "zod";
import { GenreSchema } from "./genre";
import { CreditsSchema } from "./credits";
import { ExternalIdsSchema } from "./externalids";
import { MetadataSchema } from "./metadata";
import { RatingSchema } from "./rating";

export const ElementSchema = z.object({
  year: z.string({
    invalid_type_error: "Year must be a string",
    required_error: "Year is required",
  }),
  country: z.string({
    invalid_type_error: "Country must be a number",
  }),
  backdrop_path: z
    .string({
      invalid_type_error: "Backdrop must be a number",
      required_error: "Backdrop is required",
    })
    .url(),
  poster_path: z
    .string({
      invalid_type_error: "Poster must be a number",
      required_error: "Poster is required",
    })
    .url(),
  category: z.string({
    invalid_type_error: "Category must be a number",
    required_error: "Category is required",
  }),
  popularity: z.number({
    invalid_type_error: "Popularity must be a number",
  }),

  title: z.string({
    invalid_type_error: "Title must be a number",
    required_error: "Title is required",
  }),
  original_title: z.string({
    invalid_type_error: "OG_title must be a number",
    required_error: "OG_title is required",
  }),

  plot: z.string({
    invalid_type_error: "Plot must be a number",
    required_error: "Plot is required",
  }),
  abstract: z.string({
    invalid_type_error: "Abstract must be a number",
    required_error: "Abstract is required",
  }),

  genres: GenreSchema.required(),
  credits: CreditsSchema.required(),
  externalids: ExternalIdsSchema.required(),
  metadata: MetadataSchema.required(),
  ratings: RatingSchema.required(),
}).partial();

export function validateElement(input) {
  return ElementSchema.safeParse(input);
}
