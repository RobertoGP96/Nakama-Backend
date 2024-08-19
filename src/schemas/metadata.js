"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetadataSchema = void 0;
exports.validateMetadata = validateMetadata;
var zod_1 = require("zod");
exports.MetadataSchema = zod_1.default.object({
    storage: zod_1.default.number({
        invalid_type_error: 'storage must be a number'
    }),
    duration: zod_1.default.number({
        invalid_type_error: 'storage must be a number'
    }),
    fps: zod_1.default.number({
        invalid_type_error: 'storage must be a number'
    }),
    resolution: zod_1.default.string({
        invalid_type_error: 'storage must be a String'
    }),
    codec: zod_1.default.string({
        invalid_type_error: 'Codec must be a String'
    }),
    audio: zod_1.default.string({
        invalid_type_error: 'Audio must be a String'
    }),
    subtitle: zod_1.default.string({
        invalid_type_error: 'Subtitle must be a String'
    })
}).partial();
function validateMetadata(input) {
    return exports.MetadataSchema.safeParse(input);
}
