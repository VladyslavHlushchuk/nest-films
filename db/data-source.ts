import { DataSource, DataSourceOptions } from "typeorm";

const dataSourceOptions: DataSourceOptions = {
    type: 'sqlite',
    database: 'films.sqlite',
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    migrations: [__dirname + '/migrations/*.js'],
    //synchronize: true,
};

const dataSource = new DataSource(dataSourceOptions);
export { dataSourceOptions };
export default dataSource;
