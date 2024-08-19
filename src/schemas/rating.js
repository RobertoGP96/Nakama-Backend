"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatingSchema = void 0;
exports.validateRating = validateRating;
var zod_1 = require("zod");
exports.RatingSchema = (0, zod_1.object)({
    imdb_rating: (0, zod_1.number)({
        invalid_type_error: 'Rating must be a number.',
        required_error: 'Rating is required'
    }),
    imdb_votes: (0, zod_1.number)({
        invalid_type_error: 'Votes must be a number.',
        required_error: 'Votes is required'
    }),
    rotten_rating: (0, zod_1.number)({
        invalid_type_error: 'Rating must be a number.',
        required_error: 'Rating is required'
    }),
    rotten_votes: (0, zod_1.number)({
        invalid_type_error: 'Votes must be a number.',
        required_error: 'Votes is required'
    }),
    mc_rating: (0, zod_1.number)({
        invalid_type_error: 'Rating must be a number.',
        required_error: 'Rating is required'
    }),
    mc_votes: (0, zod_1.number)({
        invalid_type_error: 'Votes must be a number.',
        required_error: 'Votes is required'
    }),
}).partial();
function validateRating(input) {
    return exports.RatingSchema.safeParse(input);
}
