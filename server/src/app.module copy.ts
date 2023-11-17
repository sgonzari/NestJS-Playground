import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { SharedModule } from './shared/shared.module';
import { ApiConfigService } from './shared/services/api-config.service';
import { dataSourceOptions } from '../config/ormconfig';

@Module({
  imports: [
    // De manera global tiene acceso a las variables de entorno
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env']
    }),
    // Trae la configuración realizada de TypeOrm
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      // useFactory: (configService: ApiConfigService) => configService.typeOrmConfig,
      inject: [ConfigService],
      useFactory: async () => {return dataSourceOptions as TypeOrmModuleOptions}
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
