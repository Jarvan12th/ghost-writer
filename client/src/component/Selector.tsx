interface Props {
  topic: string;
  elements: string[];
  handleChange: (topic: string, selectedValue: string) => void;
}

function Selector({ topic, elements, handleChange }: Props) {
  return (
    <select
      className="mx-1"
      aria-label="Default select example"
      onChange={(e) => handleChange(topic, e.target.value)}
    >
      {elements.map((element, index) => (
        <option key={index} value={element}>
          {element}
        </option>
      ))}
    </select>
  );
}

export default Selector;
