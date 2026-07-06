import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import colors from "colors"
import sequelize from "./db/connection.js"
import db from "./models/index.js"

const app = express()
const PORT = 3001

await db.sequelize.sync();

app.use(express())
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`.bgYellow);
});