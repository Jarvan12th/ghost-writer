import { useEffect, useState } from "react";
import Selector from "./Selector";

const actionElements = ["Translate", "Proofread", "Summarize", "Brainstorm"];

const languageElements = ["English", "Chinese"];

const toneElements = ["professional", "joyful"];

interface Props {
  handleInstructionChange: (instruction: string) => void;
}

function Options({ handleInstructionChange }: Props) {
  const [action, setAction] = useState(actionElements[0]);
  const [language, setLanguage] = useState(languageElements[0]);
  const [tone, setTone] = useState(toneElements[0]);

  const onChange = (topic: string, selectedValue: string) => {
    console.log(topic, selectedValue);
    if (topic === "action") {
      setAction(selectedValue);
    } else if (topic === "language") {
      setLanguage(selectedValue);
    } else if (topic === "tone") {
      setTone(selectedValue);
    }

    console.log(action, language, tone);
  };

  useEffect(() => {
    handleInstructionChange(
      action +
        " the following text into " +
        language +
        " in the " +
        tone +
        " tone"
    ),
      [];
  });

  return (
    <div>
      <Selector
        topic="action"
        elements={actionElements}
        handleChange={onChange}
      />
      the following text into
      <Selector
        topic="language"
        elements={languageElements}
        handleChange={onChange}
      />
      in the
      <Selector topic="tone" elements={toneElements} handleChange={onChange} />
    </div>
  );
}

export default Options;
