import * as dotenv from 'custom-env';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import app from './app';

dotenv.env(process.env.NODE_ENV);

const init = async () => {
  try {
    await createConnection();
  } catch (err) {
    console.warn(err);
  }

  try {
    await app.listen(app.get('port'));
    console.warn(`Server started on port ${process.env.PORT}`);
  } catch (err) {
    console.warn(err);
  }
};

init();
