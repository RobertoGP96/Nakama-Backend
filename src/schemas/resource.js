"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceSchema = void 0;
exports.validateResource = validateResource;
var zod_1 = require("zod");
exports.ResourceSchema = zod_1.default.object({
    addres: zod_1.default.string({
        invalid_type_error: "Addres must be a string",
        required_error: "Addres is required"
    }),
    type: zod_1.default.string({
        invalid_type_error: "Type must be a string",
    }),
    e_found_count: zod_1.default.number({
        invalid_type_error: "E_Found must be a string",
    }),
    e_pending_count: zod_1.default.number({
        invalid_type_error: "E_pend must be a string",
    }),
    e_founds: zod_1.default.number({
        invalid_type_error: "E_ids must be a number array",
    }).array()
}).partial();
function validateResource(input) {
    return exports.ResourceSchema.safeParse(input);
}
