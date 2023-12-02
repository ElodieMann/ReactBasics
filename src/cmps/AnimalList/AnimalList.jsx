import "./AnimalList.css";

export const AnimalList = () => {
  const animalInfos = [
    { type: "Malayan Tiger", count: 787 },
    { type: "Mountain Gorilla", count: 212 },
    { type: "Fin Whale", count: 28 },
  ];
  return (
    <div>
      <h1>Rare Animals</h1>
      <table>
        <tbody>
        {animalInfos.map((animal, index) => (
          <tr key={index}>
            <td>{animal.type}</td>
            <td>{animal.count}</td>
            <td>
              <a href={`https://www.google.com/search?q=${animal.type}`} target="blank">
                Search
              </a>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};
