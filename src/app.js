import express from "express";
import userRoutes from './routes/userRoutes.js';

const app = express();

// Middleware to parse JSON
app.use(express.json());

// ✅ Quick test route
app.get('/ping', (req, res) => {
  res.send('pong');
});

// User routes
app.use("/api/v1/users", userRoutes);

export default app;
