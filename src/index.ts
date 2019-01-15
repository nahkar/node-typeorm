import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { Photo } from './entity/Photo';

createConnection()
  .then(async connection => {
    console.log('Inserting a new user into the database...');
    const photo = new Photo();
    photo.name = 'Timber';
    photo.description = 'Saw';
    photo.filename = 'pic_001';
    photo.views = 1;
    photo.isPublished = true;

    let photoRepository = connection.getRepository(Photo);

    await photoRepository.save(photo);
    console.log('Saved a new photo with id: ' + photo.id);

    console.log('Loading photos from the database...');
    const photos = await photoRepository.find();
    console.log('Loaded photos: ', photos);

    console.log('Here you can setup and run express/koa/any other framework.');
  })
  .catch(error => console.log(error));
