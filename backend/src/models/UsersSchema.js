import sequelize from "../db/connection.js";
import { DataTypes } from "sequelize";

const User = sequelize.define("user", {
    user_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username:{
        type: DataTypes.STRING(60),
        allowNull: false,
        unique: true
    },
    auth_hash:{
        type: DataTypes.STRING(60),
        allowNull: false
    },
    is_active:{
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
})

export default User