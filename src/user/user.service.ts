import { Injectable } from '@nestjs/common';
import { User } from './entities/users.enity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
    @InjectRepository(User)
    private userRepository: Repository<User>;

    async getUser(): Promise<User[]> {

        
        return this.userRepository.find();
    }
}
