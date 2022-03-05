import "../styles/pages/Landing.css";
import { Link, useHistory } from "react-router-dom";

export default function Landing() {
  return (
    <div className="landing">
      <div className="landingText">
        <h1 className="landingTitle">Seja bem vindo!</h1>
        <h1 className="landingSubtitle">Entre ou cadastre-se em nossa rede.</h1>
      </div>
      <div className="landingText">
            <button className="loginBtn">
              Submit
            </button>
            <button className="loginBtn">
              Submit
            </button>
      </div>
    </div>
  );
}
