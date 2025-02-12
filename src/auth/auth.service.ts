import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  private users:{ id: number; username: string; password: string }[] = []; // In-memory storage (replace with database)

  constructor(private jwtService: JwtService) {}

  async register(username: string, password: string) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = { id: Date.now(), username, password: hashedPassword };
    this.users.push(user);
    return { message: 'User registered successfully', user };
  }

  async login(username: string, password: string) {
    const user = this.users.find((u) => u.username === username);
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return { message: 'Invalid credentials' };
    }

    const payload = { id: user.id, username: user.username };
    return { access_token: this.jwtService.sign(payload) };
  }

  async validateUser(username: string): Promise<any> {
    return this.users.find((user) => user.username === username) || null;
  }
}
