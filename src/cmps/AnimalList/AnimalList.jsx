import { TableAnimals } from "./TableAnimals";
import "./AnimalList.css";

export const AnimalList = ({ animalInfos }) => {
  return (
    <div>
      <h1>Rare Animals</h1>
      <table>
        <tbody>
          {animalInfos.map((animal, index) => (
            <TableAnimals key={index} animal={animal} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
