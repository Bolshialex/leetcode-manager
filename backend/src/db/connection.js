import {Sequelize} from "sequelize"
import dotenv from "dotenv"
import colors from "colors"

dotenv.config()

const {DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DATABASE} = process.env

const sequelize = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
    host: DB_HOST,
    dialect: "postgres",
    port: DB_PORT,
    logging: (q) => console.log(`Sequelize Query: ${q}`),
})

try {
    await sequelize.authenticate()
    console.log("Connected to the PSQL".bgGreen)
} catch (error) {
    console.log("Can not connect to db. Error: ".bgRed, error);
}

export default sequelize;