import { Sequelize, DataTypes, } from 'sequelize';

const sequelize = new Sequelize('product_db', 'postgres', 'postgres', {
    host: 'localhost',
    port: 5433,
    dialect: 'postgres', // or 'sqlite', 'postgres', 'mssql'
    logging: false,
});

const Product = sequelize.define('Product', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
}, {
    tableName: 'products',
    timestamps: false, // Disable createdAt and updatedAt fields
});

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        await sequelize.sync({ alter: true }); // Sync models with the database
        console.log('Database synchronized successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        process.exit(1)
    }
}

export { sequelize, Product, connectDB };