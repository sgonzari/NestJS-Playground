import { DataSource, DataSourceOptions } from "typeorm";

export const dataSourceOptions : DataSourceOptions = {
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: +process.env.POSTGRES_PORT,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    entities: [],
    logging: false,
    // namingStrategy: '',// Estandariza los nombres de los moodelos, relaciones...,
    migrations: ['migrations/*{.ts,.js}'],
    synchronize: false, // Sincroniza los modelos con la base de datos en cada cambio
};

const dataSource = new DataSource (dataSourceOptions);
export default  dataSource;