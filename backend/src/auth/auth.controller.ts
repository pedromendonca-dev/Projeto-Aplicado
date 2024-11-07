import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request, Response } from 'express';

export interface UserProfile {
  id: string;
  email: string;
  name: string;
  photo?: string;
}

@Controller('auth')
export class AuthController {
  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleAuth() {}

  @Get('google/redirect')
  @UseGuards(AuthGuard('google'))
  async googleAuthRedirect(
    @Req() req: Request & { user: UserProfile },
    @Res() res: Response,
  ) {
    res.redirect('http://localhost:3000/categorias');
  }
}
