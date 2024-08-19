"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElementSchema = void 0;
exports.validateElement = validateElement;
var zod_1 = require("zod");
var genre_1 = require("./genre");
var credits_1 = require("./credits");
var externalids_1 = require("./externalids");
var metadata_1 = require("./metadata");
var rating_1 = require("./rating");
exports.ElementSchema = zod_1.default.object({
    year: zod_1.default.number({
        invalid_type_error: "Year must be a number",
        required_error: "Year is required",
    }),
    country: zod_1.default.string({
        invalid_type_error: "Country must be a number",
    }),
    backdrop_path: zod_1.default
        .string({
        invalid_type_error: "Backdrop must be a number",
        required_error: "Backdrop is required",
    })
        .url(),
    poster_path: zod_1.default
        .string({
        invalid_type_error: "Poster must be a number",
        required_error: "Poster is required",
    })
        .url(),
    category: zod_1.default.string({
        invalid_type_error: "Category must be a number",
        required_error: "Category is required",
    }),
    popularity: zod_1.default.number({
        invalid_type_error: "Popularity must be a number",
    }),
    title: zod_1.default.string({
        invalid_type_error: "Title must be a number",
        required_error: "Title is required",
    }),
    original_title: zod_1.default.string({
        invalid_type_error: "OG_title must be a number",
        required_error: "OG_title is required",
    }),
    plot: zod_1.default.string({
        invalid_type_error: "Plot must be a number",
        required_error: "Plot is required",
    }),
    abstract: zod_1.default.string({
        invalid_type_error: "Abstract must be a number",
        required_error: "Abstract is required",
    }),
    genres: genre_1.GenreSchema.required(),
    credits: credits_1.CreditsSchema.required(),
    externalids: externalids_1.ExternalIdsSchema.required(),
    metadata: metadata_1.MetadataSchema.required(),
    ratings: rating_1.RatingSchema.required(),
}).partial();
function validateElement(input) {
    return exports.ElementSchema.safeParse(input);
}
