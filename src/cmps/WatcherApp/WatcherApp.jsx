import "./WatcherApp.css";
import CardWatcher from "./CardWatcher";
import { useEffect, useState } from "react";
import { watcherController } from "./servicesWatcher/watcher.service.js";
import AddWatcher from "./AddWatcher.jsx";
import ModalWatcher from "./ModalWatcher.jsx";

export const WatcherApp = () => {
  const [watchers, setWatchers] = useState([]);
  const [selectedWatcher, setSelectedWatcher] = useState(null);
  const [updateWatcher, setUpdateWatcher] = useState(false);
  const [isModal, setIsModal] = useState(false);


  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
    setUpdateWatcher(false);
  }, [updateWatcher]);

  const onAddWatch = async (newWatcher) => {
    const watcher = await watcherController.addWatcher(newWatcher);
    setWatchers((prev) => [...prev, watcher]);
  };

  const getData = async () => {
    try {
      const watchers = await watcherController.getAllWatchers();
      setWatchers(watchers);
    } catch (error) {
      console.error("Error fetching watchers:", error);
    }
  };

  return (
    <div>
      <AddWatcher onAddWatch={onAddWatch} />
      <ul>
        {watchers?.map((watcher) => (
          <CardWatcher
            key={watcher.id}
            watcher={watcher}
            getData={getData}
            setSelectedWatcher={setSelectedWatcher}
            setIsModal={setIsModal}
          />
        ))}
      </ul>
      {selectedWatcher && (
        <ModalWatcher
          selectedWatcher={selectedWatcher}
          setUpdateWatcher={setUpdateWatcher}
          isModal={isModal}
          setIsModal={setIsModal}
        />
      )}
    </div>
  );
};
