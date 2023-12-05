import { useState } from "react";
import "./WatcherApp.css";
import { watcherController } from "./servicesWatcher/watcher.service.js";

const AddWatcher = ({ onAddWatch }) => {
  const [newWatcher, setNewWatcher] = useState({
    name: "",
    movies: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setNewWatcher((prevWatcher) => ({
      ...prevWatcher,
      [name]:
        name === "movies"
          ? value.split(",").map((movie) => movie.trim())
          : value,
    }));
  };

  const addWatcher = async (e) => {
    e.preventDefault();

    onAddWatch(newWatcher);

    setNewWatcher({
      name: "",
      movies: [],
    });
  };

  return (
    <div>
      <h1>Add Watcher</h1>
      <form onSubmit={addWatcher}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={newWatcher.name}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Separate with commas"
          name="movies"
          value={newWatcher.movies.join(", ")}
          onChange={handleChange}
        />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default AddWatcher;
