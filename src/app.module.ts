import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose'
import {ConfigModule, ConfigService} from '@nestjs/config';
import {GameTypeModule} from './game-type/game-type.module';
import {config} from './config/config'
import { GameArticleModule } from './game-article/game-article.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.development.env',
            isGlobal: true,
            load: [config]
        }),
        //MongooseModule.forRoot(`mongodb://${}:${process.env.DB_PWD}@${process.env.DB_NAME}:${process.env.DB_PORT}`,),
        MongooseModule.forRootAsync({
           imports: [ConfigModule],
           useFactory: async (configService: ConfigService) => {
               const username: string = configService.get('DB_USER');
               const password: string = configService.get('DB_PWD');
               const database: string = configService.get('DB_NAME');
               const host: string = configService.get('DB_HOST');
               const port: string = configService.get('DB_PORT');

               console.log(`mongodb://${username}:${password}@${host}:${port}`)
               return {
                   uri: `mongodb://${username}:${password}@${host}:${port}`,
                   dbName: `${database}`
               }
           },
            inject: [ConfigService]
        }),
        GameTypeModule,
        GameArticleModule,
    ],
})


export class AppModule {}