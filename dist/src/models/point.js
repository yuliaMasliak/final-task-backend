"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const pointScheme = new Schema({
    title: {
        type: String,
        required: true,
    },
    taskId: {
        type: String,
        required: true,
    },
    boardId: {
        type: String,
        required: true,
    },
    done: {
        type: Boolean,
        required: true,
    },
}, { versionKey: false });
exports.default = mongoose_1.default.model('Point', pointScheme);
