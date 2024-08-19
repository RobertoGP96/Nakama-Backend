"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiKeySchema = void 0;
exports.validateApiKey = validateApiKey;
var zod_1 = require("zod");
exports.ApiKeySchema = (0, zod_1.object)({
    name: zod_1.z.string(),
    status: zod_1.z.boolean(),
    token: zod_1.z.string()
}).partial();
function validateApiKey(input) {
    return exports.ApiKeySchema.safeParse(input);
}
