"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
exports.validateUser = validateUser;
var zod_1 = require("zod");
exports.UserSchema = zod_1.default.object({
    username: zod_1.default.string(),
    lastname: zod_1.default.string(),
    nickname: zod_1.default.string(),
    password: zod_1.default.string(),
    email: zod_1.default.string(),
    phone: zod_1.default.string(),
    role: zod_1.default.string()
}).partial();
function validateUser(input) {
    return exports.UserSchema.safeParse(input);
}
