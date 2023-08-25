import { hash } from 'bcrypt';
import { inject, injectable } from 'tsyringe';

import { IUserRepository } from '../../repositories/IUserRepository';

export interface ICreateUser {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUserRepository
  ) {}

  async execute({
    first_name,
    last_name,
    email,
    password
  }: ICreateUser): Promise<void> {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new Error('User already exists.');
    }

    const password_hash = await hash(password, 8);

    await this.usersRepository.create({
        first_name,
        last_name,
        email,
        password: password_hash
    });
  }
}

export { CreateUserUseCase };