import Options from "./components/Options";
import InputPanel from "./components/InputPanel";
import OutputPanel from "./components/OutputPanel";
import { useState } from "react";

function App() {
  const [instruction, setInstruction] = useState("");

  const [text, setText] = useState("");
  const [prompt, setPrompt] = useState("");

  const [result, setResult] = useState("");

  const handleInstructionChange = (instruction: string) => {
    console.log(instruction);
    setInstruction(instruction);

    handlePromptChange;
  };

  const handleTextChange = (text: string) => {
    setText(text);

    handlePromptChange;
  };

  const handlePromptChange = () => {
    setPrompt(instruction + " " + "```" + text + "```");
  };

  const sendPrompt = () => {
    console.log(prompt);

    setResult("Loading...");
  };

  return (
    <div>
      <Options handleInstructionChange={handleInstructionChange} />
      <button type="button" className="btn" onClick={sendPrompt}>
        Send
      </button>
      <InputPanel handleTextChange={handleTextChange}></InputPanel>
      <OutputPanel result={result}></OutputPanel>
    </div>
  );
}

export default App;
