import User from '../models/User';

class UserRepository {
  private users: User[] = [];

  public create({ name, email, password }: Omit<User, 'id'>): User {
    const user = new User(name, email, password);
    this.users.push(user);

    return user;
  }

  public find() {
    return this.users;
  }
}

export default UserRepository;
