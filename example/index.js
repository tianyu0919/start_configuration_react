import React from "react";
import ReactDom from "react-dom";
import AudioControl from "./bundle";
import "./bundle.css";

ReactDom.render(
  <AudioControl src={`http://localhost:9000/assets/audio/hi.mp3`} />,
  document.getElementById("app")
);
