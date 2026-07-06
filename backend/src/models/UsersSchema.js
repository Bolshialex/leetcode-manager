import sequelize from "../db/connection";
import { DataTypes } from "sequelize";

const User = sequelize.define("user", {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
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