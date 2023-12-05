import { useEffect } from "react";
import "./WatcherApp.css";
import { watcherController } from "./servicesWatcher/watcher.service.js";

const CardWatcher = ({ watcher, getData, setSelectedWatcher, setIsModal }) => {

  const onDelete = async () => {
    await watcherController.removeWatcher(watcher.id);
    getData();
  };

  const onSeeModal = () => {
    setIsModal(true)
    setSelectedWatcher(watcher.id)
  }

  const randomBackgroundColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    const color = 'rgb(' + red + ',' + green + ',' + blue + ')';

    return color;
}


  return (
    <li style={{backgroundColor: randomBackgroundColor()}}>
      <img src="./NP_Watcher.svg.png" alt={watcher?.name} />
      <h1>{watcher?.name}</h1>
      <hr />
      <div className="btn">
        <button onClick={() => onDelete(watcher.id)}>X</button>
        <button onClick={onSeeModal}>Select</button>
      </div>
    </li>
  );
};

export default CardWatcher;
