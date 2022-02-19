"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Core1 = void 0;
class Core1 {
    constructor(_fileHelper) {
        this.fileHelper = _fileHelper;
    }
    version() {
        return "Core 1 / tag 0.0.1" + "\n" +
            "    " + this.fileHelper.version();
    }
}
exports.Core1 = Core1;
