import sequelize from "../db/connection.js";
import { DataTypes } from "sequelize";

const Problems = sequelize.define("problems", {
    problem_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title:{
        type: DataTypes.STRING,
        allowNull: false,
    },    
    url:{
        type: DataTypes.STRING,
        allowNull: false,
    },    
    difficulty_level:{
        type: DataTypes.ENUM('Easy', 'Medium', 'Hard'),
        allowNull: false,
    },
    topic:{
        type: DataTypes.STRING,
        allowNull: false,
    }
})

export default Problems