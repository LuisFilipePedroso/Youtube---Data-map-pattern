import UserRepository from '../repositories/UserRepository';
import { hash } from 'bcryptjs';
import User from '../models/User';

interface Request {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {

  private userRepository: UserRepository;

  constructor(repository: UserRepository) {
    this.userRepository = repository;
  }

  public async execute({ name, email, password }: Request): Promise<User> {

    const users = this.userRepository.find();
    const checkUser = users.find((user: User) => user.email === email);

    if(checkUser) {
      throw new Error('User already exists');
    }

    const hashedPassword = await hash(password, 8);

    const user = this.userRepository.create({
      name,
      email,
      password: hashedPassword
    })

    delete user.password;

    return user;
  }
}

export default CreateUserService;
