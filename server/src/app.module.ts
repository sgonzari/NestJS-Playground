import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SharedModule } from './shared/shared.module';
import { ApiConfigService } from './shared/services/api-config.service';

@Module({
  imports: [
    // De manera global tiene acceso a las variables de entorno
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env']
    }),
    // Trae la configuración realizada de TypeOrm
    TypeOrmModule.forRootAsync({
      imports: [SharedModule],
      useFactory: (configService: ApiConfigService) => configService.typeOrmConfig,
      inject: [ApiConfigService]
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
