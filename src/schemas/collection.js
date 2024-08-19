"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectionSchema = void 0;
exports.validateCollection = validateCollection;
var zod_1 = require("zod");
exports.CollectionSchema = zod_1.default.object({
    title: zod_1.default.string({
        invalid_type_error: "Title must be a string",
    }),
    description: zod_1.default.string({
        invalid_type_error: "Description must be a string",
    }),
    content: zod_1.default.number({
        invalid_type_error: "Conetent must be a number array"
    }).array(),
}).partial();
function validateCollection(input) {
    return exports.CollectionSchema.safeParse(input);
}
