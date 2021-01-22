import React from "react";
import ReactDOM from "react-dom";

(() => {
  const App = () => {
    return (
      <div>
        <div id="header" />
        <h1>Container</h1>
      </div>
    );
  };

  ReactDOM.render(<App />, document.getElementById('root'));
  window["mountHeader"]("header");
})();
