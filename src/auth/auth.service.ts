import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { User, UserRole } from '../user/user.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async register(data: {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
    role: string;
    phoneNo: string;
  }) {
    const { username, email, password } = data;

    // Check if the username or email already exists
    const existingUser = await this.userRepository.findOne({
      where: [{ username }, { email }],
    });

    if (existingUser) {
      throw new Error('User with this username or email already exists');
    }

    // Hash the password and save the user
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = this.userRepository.create({ ...data, password: hashedPassword,role: data.role as UserRole });
    await this.userRepository.save(user);

    return { message: 'User registered successfully', user };
  }

  async login(identifier: string, password: string) {
    const user = await this.userRepository.findOne({
      where: [{ username: identifier }, { email: identifier }],
    });
    // console.log('User found:', user);
    const isPasswordValid = user && (await bcrypt.compare(password, user.password));
    console.log('Password valid:', isPasswordValid);


    if (!user || !(await bcrypt.compare(password, user.password))) {
      return { message: 'Invalid credentials' };
    }

    const payload = { id: user.id, username: user.username, role: user.role };
    return { access_token: this.jwtService.sign(payload) };
  }

  async validateUser(username: string): Promise<any> {
    return await this.userRepository.findOne({ where: { username } });
  }
}
