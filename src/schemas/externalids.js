"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExternalIdsSchema = void 0;
exports.validateExternalIds = validateExternalIds;
var zod_1 = require("zod");
exports.ExternalIdsSchema = zod_1.default.object({
    imdb_id: zod_1.default.string({
        invalid_type_error: 'Imdb must be a string.',
        required_error: 'Imdb is required'
    }),
    tmdb_id: zod_1.default.string({
        invalid_type_error: 'Tmdb must be a string.',
        required_error: 'Imdb is required'
    }),
    omdb_id: zod_1.default.string({
        invalid_type_error: 'Omdb must be a string.'
    })
}).partial();
function validateExternalIds(input) {
    return exports.ExternalIdsSchema.safeParse(input);
}
