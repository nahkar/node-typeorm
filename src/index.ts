import 'reflect-metadata';
import { createConnection } from 'typeorm';

import { Photo } from './entity/Photo';
import { Author } from './entity/Author';

createConnection()
  .then(async connection => {
    let photo = new Photo();
    photo.name = 'new photo';
    photo.description = 'I am near polar bears';
    photo.filename = 'photo-with-bears.jpg';
    photo.isPublished = true;
    photo.views = 10;

    let author = new Author();
    author.name = 'John Doe';

    photo.author = author;

    let photoRepository = connection.getRepository(Photo);
    await photoRepository.save(photo);

    let photos = await connection
      .getRepository(Photo)
      .createQueryBuilder('photo')
      .innerJoinAndSelect('photo.author', 'author')
      .getMany();

    console.warn(photos);
  })
  .catch(error => console.log(error));
