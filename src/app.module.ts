import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShelterModule } from './shelter/shelter.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config/dist/config.module';
import { ConfigService } from '@nestjs/config';
import { PetModule } from './pet/pet.module';

@Module({
  imports: [
  ConfigModule.forRoot(), 
  MongooseModule.forRootAsync({
    imports:[ConfigModule],
    inject:[ConfigService],
    useFactory: async (config: ConfigService) => ({
      uri: config.get<string>('DB_CONNECTION_STRING'),
    }),
  }),
  ShelterModule,
  PetModule,
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
