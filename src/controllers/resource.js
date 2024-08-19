"use strict";
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
exports.ResourceController = void 0;
var resource_1 = require("../models/resource");
var resource_2 = require("../schemas/resource");
var ResourceController = /** @class */ (function () {
    function ResourceController() {
    }
    ResourceController.getAll = function (_req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var getall;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, resource_1.ResourceModel.getAll()];
                    case 1:
                        getall = _a.sent();
                        if (!getall) {
                            return [2 /*return*/, res.status(404).json({ message: "Is Empty" })];
                        }
                        else {
                            res.status(200).json(getall);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ResourceController.getByID = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, numbId, getbyId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        numbId = Number(id);
                        return [4 /*yield*/, resource_1.ResourceModel.getByID({ id: numbId })];
                    case 1:
                        getbyId = _a.sent();
                        //Id check
                        if (!getbyId) {
                            return [2 /*return*/, res.status(400).json({ message: "Id not foud" })];
                        }
                        else {
                            res.status(200).json(getbyId);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ResourceController.delete = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, numbId, idCheck, deleted, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        numbId = Number(id);
                        return [4 /*yield*/, resource_1.ResourceModel.getByID({ id: numbId })];
                    case 1:
                        idCheck = _a.sent();
                        if (!!idCheck) return [3 /*break*/, 2];
                        return [2 /*return*/, res.status(400).json({ message: "Id not foud" })];
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, resource_1.ResourceModel.delete({ id: numbId })];
                    case 3:
                        deleted = _a.sent();
                        return [2 /*return*/, res.status(200).json(deleted)];
                    case 4:
                        error_1 = _a.sent();
                        return [2 /*return*/, res
                                .status(400)
                                .json({ message: "Resource not deleted", error: error_1 })];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    ResourceController.create = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var input, inputV, uqcheck, createdL, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        input = req.body;
                        inputV = (0, resource_2.validateResource)(req.body);
                        if (!inputV.error) return [3 /*break*/, 1];
                        res.status(400).json({ message: JSON.parse(inputV.error.message) });
                        return [3 /*break*/, 9];
                    case 1:
                        if (!inputV.success) return [3 /*break*/, 9];
                        return [4 /*yield*/, resource_1.ResourceModel.uqcheck({ addres: input.addres })];
                    case 2:
                        uqcheck = _b.sent();
                        if (!uqcheck) return [3 /*break*/, 7];
                        _b.label = 3;
                    case 3:
                        _b.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, resource_1.ResourceModel.create({ input: input })];
                    case 4:
                        createdL = _b.sent();
                        return [2 /*return*/, res.status(201).json({ message: "Resource created" })];
                    case 5:
                        _a = _b.sent();
                        return [2 /*return*/, res.status(400).json({ message: "Resource not created" })];
                    case 6: return [3 /*break*/, 9];
                    case 7: return [4 /*yield*/, res.status(409).json({ message: "Addres must be unique" })];
                    case 8: 
                    //Unespected error
                    return [2 /*return*/, _b.sent()];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    ResourceController.update = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, input, inputV, numbId, idCheck, uqcheck, updatedL, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        id = req.params.id;
                        input = req.body;
                        inputV = (0, resource_2.validateResource)(req.body);
                        if (!inputV.error) return [3 /*break*/, 1];
                        res.status(400).json({ message: JSON.parse(inputV.error.message) });
                        return [3 /*break*/, 13];
                    case 1:
                        if (!inputV.success) return [3 /*break*/, 13];
                        numbId = Number(id);
                        return [4 /*yield*/, resource_1.ResourceModel.getByID({ id: numbId })];
                    case 2:
                        idCheck = _b.sent();
                        if (!idCheck) {
                            return [2 /*return*/, res.status(404).json({ message: "Id not foud" })];
                        }
                        return [4 /*yield*/, resource_1.ResourceModel.uqcheck({ addres: input.addres })];
                    case 3:
                        uqcheck = _b.sent();
                        if (!uqcheck) return [3 /*break*/, 11];
                        _b.label = 4;
                    case 4:
                        _b.trys.push([4, 8, , 10]);
                        return [4 /*yield*/, resource_1.ResourceModel.update({
                                id: numbId,
                                input: input.data,
                            })];
                    case 5:
                        updatedL = _b.sent();
                        if (!updatedL) return [3 /*break*/, 7];
                        return [4 /*yield*/, res.status(201).json({ message: "Resource updated" })];
                    case 6: return [2 /*return*/, _b.sent()];
                    case 7: return [3 /*break*/, 10];
                    case 8:
                        _a = _b.sent();
                        return [4 /*yield*/, res
                                .status(500)
                                .json({ message: "Resource not created " })];
                    case 9: return [2 /*return*/, _b.sent()];
                    case 10: return [3 /*break*/, 13];
                    case 11: return [4 /*yield*/, res.status(409).json({ message: "Addres must be unique" })];
                    case 12: return [2 /*return*/, _b.sent()];
                    case 13: return [2 /*return*/];
                }
            });
        });
    };
    return ResourceController;
}());
exports.ResourceController = ResourceController;
