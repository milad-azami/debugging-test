import { useState } from "react";

import Input from "./components/Input";

function App() {
  const [value, setValue] = useState("");
  //   const [label, setLabel] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  //   useEffect(() => {
  //     if (value.trim()) {
  //       setLabel(value);
  //     } else {
  //       setLabel("Searchbox");
  //     }
  //   }, [value]);

  //   let label = "";
  //   if (value) {
  //     label = value;
  //   } else {
  //     label = "Searchbox";
  //   }

  // ||
  // first truthy

  return (
    <div>
      <Input hint={value || "Searchbox"} handleChange={handleChange} />
    </div>
  );
}

export default App;
