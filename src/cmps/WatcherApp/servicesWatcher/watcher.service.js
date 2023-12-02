//watcher.service.js

import { storageService } from "./async-storage.service";

const getAllWatchers = async () => {
  try {
    const watchers = await storageService.query();
    return watchers;
  } catch (error) {
    console.error("Error getting all watchers:", error);
    throw error;
  }
};

const getWatcherById = async (watcherId) => {
  const watcher = await storageService.get(watcherId);
  return watcher;
};

const addWatcher = async (newWatcher) => {
  const addedWatcher = await storageService.post(newWatcher);
  return addedWatcher;
};

const removeWatcher = async (watcherId) => {
  const updatedWatchers = await storageService.remove(watcherId);
  return updatedWatchers;
};

const updateWatcherName = async (watcherId, newName) => {
  await storageService.put(watcherId, { name: newName });
};

export const watcherController = {
  getAllWatchers,
  getWatcherById,
  addWatcher,
  removeWatcher,
  updateWatcherName,
};
