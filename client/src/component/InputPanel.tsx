import { BaseSyntheticEvent } from "react";

interface Props {
  handleTextChange: (text: string) => void;
}

function InputPanel({ handleTextChange }: Props) {
  return (
    <div>
      <div>
        <textarea
          rows={10}
          cols={120}
          placeholder="Enter text here"
          onMouseLeave={(e: BaseSyntheticEvent) =>
            handleTextChange(e.target.value)
          }
        ></textarea>
      </div>
    </div>
  );
}

export default InputPanel;
