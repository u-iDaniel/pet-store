# Pet Store Fullstack App

Built with React + Express + PostgreSQL

A sample pet store e-commerce website that supports adding items into carts

Steps to replicate project:
1. `git clone` the repo

Now set up the Backend:
1. `cd backend/`
2. `npm install`
3. `npx prisma generate` 
4. `npm run seed` to seed your database (remember to add ENV vars)
5. `npm run start` to start the backend server @ localhost:${PORT}

Finally, set up the Frontend:
1. `cd frontend/`
2. `npm install`
3. `npm run dev` to start the server @ localhost:5173