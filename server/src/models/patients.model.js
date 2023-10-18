import { DataTypes, Model, Sequelize } from "sequelize";

const sequelize = new Sequelize({
	dialect: "sqlite",
	storage: "./database.sqlite",
});

class Patient extends Model {}
Patient.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		heart_rate: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		temperature: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		frequent_sickness: {
			type: DataTypes.STRING,
		},
		NID: {
			type: DataTypes.INTEGER,
			unique: true,
			allowNull: false,
		},
	},
	{
		sequelize,
		modelName: "Patient",
		timestamps: true,
	}
);

sequelize.sync();

export default Patient;
