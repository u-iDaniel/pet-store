require("dotenv").config();
const { exec } = require('child_process')
const { promisify } = require('util')

const execAsync = promisify(exec);

const seedDatabase = async () => {
  try {
    console.log("Seeding database...");

    // Run the SQL dump using psql command
    const command = `PGPASSWORD=${process.env.REMOTE_DATABASE_PASSWORD} psql -h ${process.env.DATABASE_HOST} -p 5432 -U ${process.env.DATABASE_USER} -d ${process.env.DATABASE_NAME} -f ./local_pet_dump.sql`;

    await execAsync(command);

    console.log("Database seeded successfully!");
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
};

seedDatabase();