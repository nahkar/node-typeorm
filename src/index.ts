import 'reflect-metadata';
import { createConnection } from 'typeorm';

import { Photo } from './entity/Photo';
import { PhotoMetadata } from './entity/PhotoMetadata';

createConnection()
  .then(async connection => {
    let photo = new Photo();
    photo.name = 'QWE';
    photo.description = 'I am near polar bears';
    photo.filename = 'photo-with-bears.jpg';
    photo.isPublished = true;
    photo.views = 10;

    let metadata = new PhotoMetadata();
    metadata.height = 640;
    metadata.width = 480;
    metadata.compressed = true;
    metadata.comment = 'cybershoot';
    metadata.orientation = 'portait';

    photo.metadata = metadata;

    let photoRepository = connection.getRepository(Photo);
    await photoRepository.save(photo);

    let photos = await connection
      .getRepository(Photo)
      .createQueryBuilder('photo')
      .innerJoinAndSelect('photo.metadata', 'metadata')
      .getMany();

    console.warn(photos);
  })
  .catch(error => console.log(error));
