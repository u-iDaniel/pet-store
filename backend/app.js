const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();

const allowedOrigins = process.env.NODE_ENV === "production"
? ["https://pet-store-nine.vercel.app"]
: ["http://localhost:5173", "http://127.0.0.1:5173"];

app.use(cors({
  origin: allowedOrigins,
}));

app.get('/api/pets', async (req, res) => {
  const pets = await prisma.pets.findMany();
  return res.json(pets);
});

app.get('/api/pets/:category', async (req, res) => {
  let category = req.params.category.toLocaleLowerCase();
  // Capitalize first letter
  category = category[0].toLocaleUpperCase() + category.slice(1);

  const pets = await prisma.pets.findMany({
    where: {category: category},
  });
  return pets.length > 0 ? res.json(pets) : res.status(404).json({ error: 'Category not found' });
});

app.listen(process.env.PORT, () => console.log(`Listening on PORT ${process.env.PORT}`));