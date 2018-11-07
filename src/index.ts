import 'reflect-metadata';
import { createConnection } from 'typeorm';

import { Photo } from './entity/Photo';
import { Album } from './entity/Album';

createConnection()
  .then(async connection => {
    let album1 = new Album();
    album1.name = 'Bears';
    await connection.manager.save(album1);

    let album2 = new Album();
    album2.name = 'Me';
    await connection.manager.save(album2);

    let photo = new Photo();
    photo.name = 'Me and Bears';
    photo.description = 'I am near polar bears';
    photo.filename = 'photo-with-bears.jpg';
    photo.albums = [album1, album2];
    await connection.manager.save(photo);

    const loadedPhoto = await connection.getRepository(Photo).find({ relations: ['albums'] });
  })
  .catch(error => console.log(error));
