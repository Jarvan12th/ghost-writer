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
