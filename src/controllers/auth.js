"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
var auth_1 = require("../schemas/auth");
var user_1 = require("../models/user");
var bcrypt_1 = require("bcrypt");
var dotenv_1 = require("dotenv");
var jsonwebtoken_1 = require("jsonwebtoken");
dotenv_1.default.config();
var AuthController = /** @class */ (function () {
    function AuthController() {
    }
    AuthController.login = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var inputv, userLoguin, validPassw, token, infoOut;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        inputv = (0, auth_1.validateLogin)(req.body);
                        if (!inputv.error) return [3 /*break*/, 1];
                        return [2 /*return*/, res.status(400).json(inputv.error.message)];
                    case 1: return [4 /*yield*/, user_1.UserModel.getByEmail({
                            email: inputv.data.email,
                        })];
                    case 2:
                        userLoguin = _a.sent();
                        if (userLoguin) {
                            validPassw = bcrypt_1.default.compareSync(inputv.data.password, userLoguin.password);
                            if (validPassw) {
                                token = jsonwebtoken_1.default.sign({
                                    id: userLoguin.id,
                                    nickname: userLoguin.nickname,
                                }, process.env.SECRET_KEY, {
                                    expiresIn: "1h",
                                });
                                infoOut = {
                                    nickname: userLoguin.nickname,
                                    email: userLoguin.email,
                                    token: token,
                                };
                                res
                                    .cookie("access_token", token, {
                                    httpOnly: true,
                                    secure: process.env.NODE_ENV === "production",
                                    sameSite: "strict",
                                    maxAge: 1000 * 60 * 60,
                                })
                                    .send(infoOut);
                            }
                            else {
                                res.status(400).json({ message: "Wrong password" });
                            }
                        }
                        else
                            res.status(400).json({ message: "Email does not exist" });
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AuthController.register = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var inputv, checkUniq, hashedpassword, userCreate, outInfo, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        inputv = (0, auth_1.validateRegister)(req.body);
                        if (!inputv.error) return [3 /*break*/, 1];
                        return [2 /*return*/, res.status(400).json(inputv.error.message)];
                    case 1: return [4 /*yield*/, user_1.UserModel.uniqueCheck({
                            input: {
                                email: inputv.data.email,
                                nickname: inputv.data.nickname,
                                phone: inputv.data.phone,
                            },
                        })];
                    case 2:
                        checkUniq = _b.sent();
                        if (!checkUniq) return [3 /*break*/, 3];
                        return [2 /*return*/, res.status(400).json({ message: "User already exist" })];
                    case 3:
                        hashedpassword = bcrypt_1.default.hashSync(inputv.data.password, Number(process.env.SALT_ROUNDS));
                        userCreate = __assign(__assign({}, inputv.data), { role: "client", password: hashedpassword });
                        _b.label = 4;
                    case 4:
                        _b.trys.push([4, 6, , 7]);
                        return [4 /*yield*/, user_1.UserModel.create({ input: userCreate })];
                    case 5:
                        outInfo = _b.sent();
                        return [2 /*return*/, res.status(201).json({
                                username: outInfo.username,
                                email: outInfo.email,
                            })];
                    case 6:
                        _a = _b.sent();
                        res.status(400).json({ message: "Error on creating" });
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    AuthController.logout = function (_req, res) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                res.clearCookie('access_token')
                    .json({
                    message: 'Logout successful'
                });
                return [2 /*return*/];
            });
        });
    };
    AuthController.protected = function (_req, res) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, res.send("Protected Content")];
            });
        });
    };
    return AuthController;
}());
exports.AuthController = AuthController;
