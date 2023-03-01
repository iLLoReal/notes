"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const app_1 = __importDefault(require("./app"));
const hostname = '127.0.0.1';
const port = 3000;
app_1.default.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
module.exports = app_1.default;
//# sourceMappingURL=server.js.map