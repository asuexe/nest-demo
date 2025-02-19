import { Controller, Post, Body, UseGuards, Get, Request, BadRequestException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("register")
async register(@Body() body: { username: string; password: string }) {
  try {
    return await this.authService.register(body.username, body.password);
  } catch (error) {
    throw new BadRequestException(error.message);
  }
}


  @Post('login')
  login(@Body() body: { username: string; password: string }) {
    return this.authService.login(body.username, body.password);
  }

  @Get('profile')
  @UseGuards(JwtAuthGuard) // Protect route with JWT authentication
  getProfile(@Request() req) {
    return { message: 'Profile data', user: req.user };
  }
}
