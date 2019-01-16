import 'reflect-metadata';
import { createConnection } from 'typeorm';

import { Photo } from './entity/Photo';

createConnection()
  .then(async connection => {
    let photoRepository = connection.getRepository(Photo);
    const photos = await photoRepository.find({ relations: ['metadata'] });
  })
  .catch(error => console.log(error));
