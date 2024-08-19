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
exports.NakamaElementController = void 0;
var NakamaElement_1 = require("../models/NakamaElement");
var NakamaElement_2 = require("../schemas/NakamaElement");
var externalids_1 = require("../models/externalids");
var NakamaElementController = /** @class */ (function () {
    function NakamaElementController() {
    }
    NakamaElementController.getAll = function (_req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var getall;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, NakamaElement_1.NakamaElementModel.getAll()];
                    case 1:
                        getall = _a.sent();
                        if (!getall)
                            return [2 /*return*/, res.status(400).json({ message: "Empty Source" })];
                        return [2 /*return*/, res.status(200).json(getall)];
                }
            });
        });
    };
    NakamaElementController.getByID = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, numID, getbyId, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        id = req.params.id;
                        numID = Number(id);
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, NakamaElement_1.NakamaElementModel.getByID({ id: numID })];
                    case 2:
                        getbyId = _b.sent();
                        if (!getbyId)
                            return [2 /*return*/, res.status(400).json({ message: "Element not found" })];
                        return [2 /*return*/, res.status(200).json(getbyId)];
                    case 3:
                        _a = _b.sent();
                        return [2 /*return*/, res.status(200).json({ message: "Error serching by id" })];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    NakamaElementController.delete = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, numId, idCheck, deleted, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        id = req.params.id;
                        numId = Number(id);
                        idCheck = NakamaElement_1.NakamaElementModel.getByID({ id: numId });
                        if (!idCheck)
                            return [2 /*return*/, res.status(400).json({ message: "Id not found" })];
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, NakamaElement_1.NakamaElementModel.delete({ id: id })];
                    case 2:
                        deleted = _b.sent();
                        if (!deleted)
                            return [2 /*return*/, res.status(400).json({ message: "Element not found" })];
                        return [2 /*return*/, res.status(200).json({ message: "Element deleted" })];
                    case 3:
                        _a = _b.sent();
                        return [2 /*return*/, res.status(400).json({ message: "Error deleting" })];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    NakamaElementController.create = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var input, inputV, createdL, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        input = req.body;
                        inputV = (0, NakamaElement_2.validateElement)(req.body);
                        if (!inputV.error) return [3 /*break*/, 1];
                        res.status(400).json({ message: JSON.parse(inputV.error.message) });
                        return [3 /*break*/, 4];
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, NakamaElement_1.NakamaElementModel.create({ input: input })];
                    case 2:
                        createdL = _b.sent();
                        if (!createdL)
                            return [2 /*return*/, res.status(400).json({ message: "Element not created" })];
                        return [2 /*return*/, res.status(201).json({ message: "Element created" })];
                    case 3:
                        _a = _b.sent();
                        res.status(400).json({ message: "Error creating" });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    NakamaElementController.update = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, input, updatedL;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        input = req.body;
                        return [4 /*yield*/, NakamaElement_1.NakamaElementModel.update({ id: id, input: input })];
                    case 1:
                        updatedL = _a.sent();
                        try {
                            if (!updatedL)
                                return [2 /*return*/, res.status(400).json({ message: "Element not found" })];
                            return [2 /*return*/, res.status(200).json({ message: "Element updated" })];
                        }
                        catch (_b) {
                            return [2 /*return*/, res.status(400).json({ message: "Error updating" })];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    NakamaElementController.createMany = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var input;
            return __generator(this, function (_a) {
                input = req.body;
                try {
                    input.data.map(function (e) {
                        NakamaElement_1.NakamaElementModel.create({ input: e });
                    });
                }
                catch (_b) {
                    res.status(400).json({ message: "Error creating many" });
                }
                return [2 /*return*/];
            });
        });
    };
    NakamaElementController.search = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var filters, results;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        filters = req.body;
                        return [4 /*yield*/, NakamaElement_1.NakamaElementModel.getAll()];
                    case 1:
                        results = (_a.sent()).filter(function (e) {
                            return filters.title.toLowerCase().includes(e.title) || filters.title.toLowerCase().includes(e.title_original) ||
                                (filters.year[0] >= e.year && filters.year[1] <= e.year) || (filters.country == e.country) ||
                                (filters.category.toLocaleString().includes(e.category));
                        });
                        res.status(200).json(results);
                        return [2 /*return*/];
                }
            });
        });
    };
    NakamaElementController.searchByExternal = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var IDs, resultsIds, results, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        IDs = req.body;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, externalids_1.ExtermalIdsModel.getAll()];
                    case 2:
                        resultsIds = ((_b.sent()).filter(function (e) {
                            e.imdb_id == IDs.imdb_id || e.omdb_id == IDs.omdb_id || e.tmdb_id == IDs.tmdb_id;
                        }));
                        return [4 /*yield*/, NakamaElement_1.NakamaElementModel.findMany({ IDs: resultsIds })];
                    case 3:
                        results = (_b.sent());
                        return [2 /*return*/, res.status(200).json(results)];
                    case 4:
                        _a = _b.sent();
                        return [2 /*return*/, res.status(400).json({ message: "Error on filtering" })];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    return NakamaElementController;
}());
exports.NakamaElementController = NakamaElementController;
