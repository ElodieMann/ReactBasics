// //async-storage.service.js

import { utilService } from "./util.service";

const STORAGE_KEY = "watchers";

async function query() {
  try {
    return (await utilService.getData(STORAGE_KEY)) || [];
  } catch (error) {
    console.error(error);
  }
}

async function get(watcherId) {
  try {
    const entities = await query();
    const entity = entities.find((entity) => entity.id === watcherId);

    return entity;
  } catch (error) {
    console.error(error);
  }
}

async function post(newWatcher) {
  try {
    const watchers = await query();
    newWatcher = JSON.parse(JSON.stringify(newWatcher));
    newWatcher.id = utilService.makeId();

    watchers.push(newWatcher);
    await utilService.addToData(STORAGE_KEY, watchers);
    return newWatcher;
  } catch (error) {
    console.error(error);
  }
}

async function remove(watcherId) {
  try {
    const watchers = await query();
    const updatedWatchers = watchers.filter(
      (watcher) => watcher.id !== watcherId
    );
    await utilService.addToData(STORAGE_KEY, updatedWatchers);
    return updatedWatchers;
  } catch (error) {
    console.error(error);
  }
}

async function put(watcherId, updatedWatcher) {
  try {
    const watchers = await query();
    const updatedWatchers = watchers.map((watcher) => {
      if (watcher.id === watcherId) {
        return { ...watcher, ...updatedWatcher };
      }
      return watcher;
    });

    await utilService.addToData(STORAGE_KEY, updatedWatchers);
    return updatedWatchers;
  } catch (error) {
    console.error(error);
  }
}

export const storageService = {
  query,
  get,
  post,
  remove,
  put
};
