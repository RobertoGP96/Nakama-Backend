"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginSchema = exports.registerSchema = void 0;
exports.validateRegister = validateRegister;
exports.validateLogin = validateLogin;
var zod_1 = require("zod");
exports.registerSchema = (0, zod_1.object)({
    username: zod_1.z.string(),
    lastname: zod_1.z.string(),
    nickname: zod_1.z.string(),
    password: zod_1.z.string(),
    email: zod_1.z.string(),
    phone: zod_1.z.string(),
});
function validateRegister(input) {
    return exports.registerSchema.safeParse(input);
}
exports.loginSchema = (0, zod_1.object)({
    email: zod_1.z.string(),
    password: zod_1.z.string()
});
function validateLogin(input) {
    return exports.loginSchema.safeParse(input);
}
