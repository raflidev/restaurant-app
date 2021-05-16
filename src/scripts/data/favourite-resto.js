import { openDB } from 'idb';
import CONFIG from '../globals/config';

const { dbName, dbVersion, dbStoreName } = CONFIG;

const dbPromise = openDB(dbName, dbVersion, {
  upgrade(database) {
    database.createObjectStore(dbStoreName, { keyPath: 'id' });
  },
});

const favouriteResto = {

  async getResto(id) {
    return (await dbPromise).get(dbStoreName, id);
  },

  async getAllResto() {
    return (await dbPromise).getAll(dbStoreName);
  },

  async putResto(resto) {
    return (await dbPromise).put(dbStoreName, resto);
  },

  async deleteResto(id) {
    return (await dbPromise).delete(dbStoreName, id);
  },

};

export default favouriteResto;
