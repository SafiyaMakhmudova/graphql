import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';


async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix('api');
    const config = app.get(ConfigService);

    const PORT = config.get<number>('PORT');
    
    const configg = new DocumentBuilder()
    .setTitle('Mini Graphql project')
    .setDescription('REST API')
    .setVersion('1.0.0')
    .addTag('Nestjs, Typeorm ')
    .build();

  const document = SwaggerModule.createDocument(app, configg);
  SwaggerModule.setup('/api/docs', app, document);



    await app.listen(PORT || 3003, () => {
      console.log(`Server ${PORT}-portda ishga tushdi`);
    });
  } catch (error) {
    console.log(error);
  }
}

bootstrap();
