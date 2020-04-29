import { uuid } from 'uuidv4';

class User {

  id: string;
  name: string;
  email: string;
  password: string;

  constructor(name: string, email: string, password: string) {
    this.id = uuid();
    this.name = name;
    this.email = email;
    this.password = password;
  }
}

export default User;
