"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreditsSchema = void 0;
exports.validateCredits = validateCredits;
var zod_1 = require("zod");
var cast_1 = require("./cast");
exports.CreditsSchema = zod_1.default.object({
    elemetnId: zod_1.default.number({
        invalid_type_error: 'Element_id must be a number.',
        required_error: 'Element_id is required'
    }),
    cast_members: cast_1.CastSchema.required().array()
}).partial();
function validateCredits(input) {
    return exports.CreditsSchema.safeParse(input);
}
