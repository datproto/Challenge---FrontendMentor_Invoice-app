import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  Connection,
  EntitySubscriberInterface,
  InsertEvent,
  Repository,
} from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    private connection: Connection,
  ) {}

  create(createUserDto: CreateUserDto) {
    this.usersRepository.save(createUserDto);
    return `Users: ${createUserDto}`;
  }

  async createMany(users: User[]) {
    const queryRunner = this.connection.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      for (let u = 0; u <= users.length; u++) {
        await queryRunner.manager.save(users[u]);
      }

      await queryRunner.commitTransaction();
    } catch (err) {
      // since we have errors lets rollback the changes we made
      await queryRunner.rollbackTransaction();
    } finally {
      // you need to release a queryRunner which was manually instantiated
      await queryRunner.release();
    }
  }

  findAll() {
    return this.usersRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}

// export class UserSubscriber implements EntitySubscriberInterface<User> {
//   constructor(connection: Connection) {
//     connection.subscribers.push(this);
//   }

//   listenTo() {
//     return User;
//   }

//   beforeInsert(e: InsertEvent<User>) {
//     console.log(`Before USER inserted: `, e.entity);
//   }

//   afterInsert(e: InsertEvent<User>): void | Promise<any> {
//     console.log(`Afer USER inserted: `, e.entity);
//   }
// }
