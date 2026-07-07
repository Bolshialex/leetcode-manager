import sequelize from "../db/connection.js";
import { DataTypes } from "sequelize";

const UserPerformanceLog = sequelize.define("user_performance_log", {
    log_id:{
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    user_id:{
        type: DataTypes.INTEGER,
    },
    problem_id:{
        type: DataTypes.INTEGER
    },
    timestamp:{
        type: DataTypes.DATEONLY
    },
    confidence_score:{
        type: DataTypes.INTEGER
    },
    completion_time:{
        type: DataTypes.INTEGER
    }
})

export default UserPerformanceLog