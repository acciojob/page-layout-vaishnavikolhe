import React from "react";
import './../styles/App.css';
import Parent from "./Parent";
const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <Parent>
          <p>This is the content of my website.</p>
        </Parent>
    </div>
  )
}

export default App