"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastSchema = void 0;
exports.validateCast = validateCast;
var zod_1 = require("zod");
exports.CastSchema = (0, zod_1.object)({
    name: (0, zod_1.string)({
        invalid_type_error: 'Rating must be a string.',
        required_error: 'Rating is required'
    }),
    originalName: (0, zod_1.string)({
        invalid_type_error: 'Original Name must be a string.'
    }),
    character: (0, zod_1.string)({
        invalid_type_error: 'Character must be a string.',
    }),
    department: (0, zod_1.string)({
        invalid_type_error: 'Department must be string.',
        required_error: 'Department is required.',
    })
}).partial();
function validateCast(input) {
    return exports.CastSchema.safeParse(input);
}
