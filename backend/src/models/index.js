import Problems from './ProblemsSchema.js'
import SrsTracking from './SrsTrackingSchema.js'
import User from "./UsersSchema.js"
import UserPerformanceLog from './UserPerformanceLogSchema.js'
import sequelize from "../db/connection.js";

// user < user_perf_log
User.hasMany(UserPerformanceLog, {
    foreignKey: "user_id"
})
UserPerformanceLog.belongsTo(User, {foreignKey: "user_id"})

// user < srs_tracking
User.hasMany(SrsTracking, {
    foreignKey: "user_id"
})
SrsTracking.belongsTo(User, {foreignKey: "user_id"})

// problem < problem_perf_log
Problems.hasMany(UserPerformanceLog, {
    foreignKey: "problem_id"
})
UserPerformanceLog.belongsTo(Problems, {foreignKey: "problem_id"})

// problem < srs_tracking
Problems.hasMany(SrsTracking, {
    foreignKey: "problem_id"
})
SrsTracking.belongsTo(Problems, {foreignKey: "problem_id"})

const db = {
    sequelize,
    Problems,
    SrsTracking,
    User,
    UserPerformanceLog
}

export default db