"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3001;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Serve static files from the React app build directory
app.use(express_1.default.static(path_1.default.join(__dirname, '../../client/build')));
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Server is running' });
});
// Handle client-side routing - send all requests to index.html
app.get('*', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../../client/build/index.html'));
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
