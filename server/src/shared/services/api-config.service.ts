import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";

// Lee las variables de entorno
@Injectable()
export class ApiConfigService {
    constructor(private configService: ConfigService) {};

    // Convierte a number
    private getNumber (key: string, defaultValue?: number) : number {
        const value = this.configService.get(key, defaultValue);

        if (value === undefined) throw new Error(key + ' env var is not setted.');
        try {
            const result = Number(value);
            if (isNaN(result)) {
                throw new Error(key + 'value is not a number.');
            }

            return result;
        } catch (err) {
            throw new Error(key + 'env var is not a number.');
        }
    };

    // Convierte a string 
    private getString (key: string, defaultValue?: string) : string {
        const value = this.configService.get(key, defaultValue);

        if (!value) throw new Error(key + ' env var is not setted.');

        return value.toString().replace(/\n/g, '\n');
    };

    // Obtiene la configuración de TypeOrm
    get typeOrmConfig(): TypeOrmModuleOptions {
        let entities = [__dirname + '/../../**/**/*.entity{.ts,.js}'];
        let migrations = [__dirname + '/../../**/migrations/*{.ts,.js}'];

        // Needs @types/webpack-env library
        if (module.hot) {
            const entityContext = require.context(
                './../../modules',
                true,
                /\.entity\.ts$/,
            );
            entities = entityContext.keys().map((id) => {
                const entityModule = entityContext(id);
                const [entity] = Object.values(entityModule);
                return entity as string;
            });
            const migrationContext = require.context(
                './../../migrations',
                false,
                /\.ts$/,
            );

            migrations = migrationContext.keys().map((id) => {
                const migrationModule = migrationContext(id);
                const [migration] = Object.values(migrationModule);
                return migration as string;
            });
        }

        return {
            entities,
            migrations,
            keepConnectionAlive: false,
            type: 'postgres',
            host: this.getString('POSTGRES_HOST', 'localhost'),
            port: this.getNumber('POSTGRES_PORT', 5432),
            username: this.getString('POSTGRES_USER'),
            password: this.getString('POSTGRES_PASSWORD'),
            database: this.getString('POSTGRES_DATABASE'),
            migrationsRun: true,
            logging: false,
            synchronize: false,
            autoLoadEntities: true,
        };
    };
}