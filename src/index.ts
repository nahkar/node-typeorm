import 'reflect-metadata';
import { createConnection } from 'typeorm';

import { Photo } from './entity/Photo';
import { PhotoMetadata } from './entity/PhotoMetadata';

createConnection()
  .then(async connection => {
    let photo = new Photo();
    photo.name = 'Me and Bears';
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
    metadata.photo = photo;

    let photoRepository = connection.getRepository(Photo);
    let metadataRepository = connection.getRepository(PhotoMetadata);

    await photoRepository.save(photo);
    await metadataRepository.save(metadata);
  })
  .catch(error => console.log(error));
