import Options from "./component/Options";
import InputPanel from "./component/InputPanel";
import OutputPanel from "./component/OutputPanel";
import { useEffect, useState } from "react";
import { useChatCompletion, GPT35, ChatRole } from "./util/chat-hook";

function App() {
  const [instruction, setInstruction] = useState("");

  const [text, setText] = useState("");

  const [result, setResult] = useState("");

  const [messages, submitMessage] = useChatCompletion({
    model: GPT35.TURBO,
    apiKey: "YOU_WILL_NEVER_KNOW",
  });

  const handleInstructionChange = (instruction: string) => {
    setInstruction(instruction);
  };

  const handleTextChange = (text: string) => {
    console.log(text);
    setText(text);
  };

  const sendPrompt = () => {
    const prompt = "```" + text + "``` " + instruction;
    console.log(prompt);

    submitMessage([{ content: prompt, role: ChatRole.USER }]);
  };

  useEffect(() => {
    setResult(messages[messages.length - 1]?.content);
  }, [messages]);

  return (
    <div>
      <div>
        <div className="my-3">
          <Options handleInstructionChange={handleInstructionChange} />
        </div>
        <button
          type="button"
          className="btn btn-primary my-1"
          onClick={sendPrompt}
        >
          Send
        </button>
      </div>
      <div className="my-2">
        <h4>Input</h4>
        <InputPanel handleTextChange={handleTextChange}></InputPanel>
      </div>
      <div className="my-2">
        <h4>Output</h4>
        <OutputPanel result={result}></OutputPanel>
      </div>
    </div>
  );
}

export default App;
