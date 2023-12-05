import { useEffect, useState } from "react";
import { watcherController } from "./servicesWatcher/watcher.service.js";
import "./WatcherApp.css";

export const ModalWatcher = ({ selectedWatcher, setUpdateWatcher, setIsModal, isModal }) => {
  const [dataWatcher, setDataWatcher] = useState({});
  const [newName, setNewName] = useState("");

  useEffect(() => {
    getData();
  }, [selectedWatcher]);

  const getData = async () => {
    const watcherData = await watcherController.getWatcherById(selectedWatcher);
    setDataWatcher(watcherData);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    await watcherController.updateWatcherName(selectedWatcher, newName);
    setUpdateWatcher(true);
    setNewName("");
    getData();
  };

  return (
    isModal && (
      <div className="modal">
        <button onClick={() => setIsModal(false)}>X</button>
        <h1>{dataWatcher?.name}</h1>
        <ul>
          {dataWatcher?.movies?.map((movie, index) => (
            <li key={index}>{movie}</li>
          ))}
        </ul>

        <h2>Want to change his name ?</h2>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <input type="submit" value="Send" />
        </form>
      </div>
    )
  );
};

export default ModalWatcher;
