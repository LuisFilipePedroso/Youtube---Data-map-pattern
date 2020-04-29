import { Router } from 'express';

const usersRouter = Router();

import UserRepository from '../repositories/UserRepository';
import CreateUserService from '../services/CreateUserService';

const userRepository = new UserRepository();

// Get listar os usuarios;
// Post Salvar um usuario

usersRouter.get('/', (request, response) => {
  const users = userRepository.find();

  response.json(users)
})

usersRouter.post('/', async (request, response) => {
  const { name, email, password } = request.body;

  try {
    const createUserService = new CreateUserService(userRepository);

    const user = await createUserService.execute({ name, email, password });

    return response.json(user);
  } catch (e) {
    return response.status(400).json(e.message)
  }
})

export default usersRouter;
