import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';

// Routes Import
import bookRoutes from './routes/bookRoutes.js';
import characterRoutes from './routes/characterRoutes.js';

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// --- ROUTES ---
app.use('/api/books', bookRoutes);
app.use('/api/characters', characterRoutes);

app.get('/', (req, res) => {
  res.send('Humayun Ahmed Archive API is running...');
});

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
  console.log(`Open: http://localhost:${PORT}`);
});