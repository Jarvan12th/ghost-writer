interface Props {
  handleTextChange: (text: string) => void;
}

function InputPanel({ handleTextChange }: Props) {
  return (
    <div className="panel panel-default">
      <div className="panel-body">
        <textarea
          className="form-control"
          placeholder="Enter text here"
          onChange={(e) => handleTextChange(e.target.value)}
        ></textarea>
      </div>
    </div>
  );
}

export default InputPanel;
