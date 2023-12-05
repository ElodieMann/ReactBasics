export const TableAnimals = ({ index, animal }) => {
  return (
    <tr key={index}>
      <td>{animal.type}</td>
      <td>{animal.count}</td>
      <td>
        <a
          href={`https://www.google.com/search?q=${animal.type}`}
          target="blank"
        >
          Search
        </a>
      </td>
    </tr>
  );
};
