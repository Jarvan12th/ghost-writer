interface Props {
  result: string;
}

function OutputPanel({ result }: Props) {
  const handleCopy = () => {
    const textarea = document.querySelector("textarea");
    if (textarea) {
      textarea.select();
      navigator.clipboard.writeText(textarea.value).then(
        function () {
          console.log("Text copied to clipboard");
        },
        function () {
          console.log("Copy failed");
        }
      );
    }
  };
  return (
    <div className="panel panel-default">
      <div className="panel-body">
        <textarea
          className="form-control"
          defaultValue={result}
        ></textarea>
        <button
          type="button"
          className="btn btn-default copy-btn"
          onClick={handleCopy}
        >
          <i className="fa fa-copy"></i>
        </button>
      </div>
    </div>
  );
}

export default OutputPanel;
