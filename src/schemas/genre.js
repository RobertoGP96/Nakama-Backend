"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenreSchema = void 0;
exports.validateGenre = validateGenre;
var zod_1 = require("zod");
var cast_1 = require("./cast");
exports.GenreSchema = zod_1.default.object({
    genres: cast_1.CastSchema.required().array()
});
function validateGenre(input) {
    return exports.GenreSchema.safeParse(input);
}
