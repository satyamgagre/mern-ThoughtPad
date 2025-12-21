import express from "express";
import dotenv from "dotenv";
import notesRoutes from "./routes/notesroutes.js";
import { connectDB } from "./config/db.js";

// ✅ CORRECT for src/.env
dotenv.config();

console.log("MONGO_URI =", process.env.MONGO_URI);

const app = express();
app.use(express.json());

connectDB();

// middlewares
app.use(express.json());

app.use("/api/notes", notesRoutes);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
