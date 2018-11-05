import { getConnection } from 'typeorm';
import { Photo } from '../../entity/Photo';

export const getUser = async () =>
  await getConnection()
    .getRepository(Photo)
    .find({ relations: ['albums'] });
