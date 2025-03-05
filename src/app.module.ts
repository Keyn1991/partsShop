import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './config/database.module';
import { PartsModule } from './parts/parts.module';
import { UsersModule } from './users/users.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        DatabaseModule,
        PartsModule,
        UsersModule,
        JwtModule.register({ secret: 'secretKey', signOptions: { expiresIn: '1h' } }),
    ],
})
export class AppModule {}
