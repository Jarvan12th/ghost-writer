import { useRef } from "react";

interface Props {
  result: string;
}

function OutputPanel({ result }: Props) {
  const outputTextAreaRef = useRef<HTMLTextAreaElement>(null);
  const handleCopy = () => {
    const textarea = outputTextAreaRef.current;
    if (!textarea) return;
    navigator.clipboard.writeText(textarea.value).then(
      function () {
        console.log("Text copied to clipboard");
      },
      function () {
        console.log("Copy failed");
      }
    );
  };
  return (
    <div>
      <div>
        <textarea
          id="output-textarea"
          rows={10}
          cols={120}
          defaultValue={result}
          ref={outputTextAreaRef}
        ></textarea>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={handleCopy}
        >
          Copy
        </button>
      </div>
    </div>
  );
}

export default OutputPanel;
