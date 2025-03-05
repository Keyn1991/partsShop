import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post('register')
    register(@Body() body: { username: string; password: string; role?: 'admin' | 'client' }) {
        return this.usersService.register(body.username, body.password, body.role);
    }

    @Post('login')
    login(@Body() body: { username: string; password: string }) {
        return this.usersService.login(body.username, body.password);
    }
}
