import { Sequelize, DataTypes } from "sequelize";

export const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./db/analytics.sqlite"
});

const UserInterests = sequelize.define('Interests',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    uniqueId: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ip: {
        type: DataTypes.STRING,
        allowNull: false
    },
    interest: {
        type: DataTypes.JSON,
        defaultValue: []
    },
},{
    tableName: 'interests'
})