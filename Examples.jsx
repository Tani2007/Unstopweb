import { TabButton } from "./TabButton";
import { useState } from "react";
import Tabs from "./Tabs.jsx";
import { EXAMPLES } from "../data.js";
import Section from "./Section.jsx";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState("");
  const handleClick = (selectedButton) => {
    setSelectedTopic(selectedButton);
    console.log(selectedButton);
  };
  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <Section title="Benefits" id="examples">
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "Why"}
              onClick={() => handleClick("Why")}
            >
              Why?
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "Advanteges"}
              onClick={() => handleClick("Advanteges")}
            >
              Advantages
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "TeamWork"}
              onClick={() => handleClick("TeamWork")}
            >
              TeamWork
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "More"}
              onClick={() => handleClick("More")}
            >
              More
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}
<input type="text" />;
