import "./WatcherApp.css";
import CardWatcher from "./CardWatcher";
import { useEffect, useState } from "react";
import { watcherController } from "./servicesWatcher/watcher.service.js";
import AddWatcher from "./AddWatcher.jsx";
import ModalWatcher from "./ModalWatcher.jsx";

export const WatcherApp = () => {
  const [watchers, setWatchers] = useState([]);
  const [selectedWatcher, setSelectedWatcher] = useState(null);
  const [updateWatcher, setUpdateWatcher] = useState(false)


  useEffect(() => {
    getData()
  }, []);
  useEffect(() => {
    getData()
    setUpdateWatcher(false)
  }, [updateWatcher]);



  const getData = async () => {
    try {
      const watchers = await watcherController.getAllWatchers();
      setWatchers(watchers)
    } catch (error) {
      console.error("Error fetching watchers:", error);
    }
  };

  return (
    <div>
      <AddWatcher
        getData={getData} 
      />
      <ul>
        {watchers?.map((watcher) => (
          <CardWatcher key={watcher.id} watcher={watcher} getData={getData} setSelectedWatcher={setSelectedWatcher}/>
        ))}
      </ul>
      {selectedWatcher && <ModalWatcher selectedWatcher={selectedWatcher}setUpdateWatcher={setUpdateWatcher} />}
    </div>

  
  );
};
