import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";

import "./App.css";
import DisplayCounter from "./components/DisplayCounter";
import Container from "./components/Container";
import Controls from "./components/Controls";
import { useSelector } from "react-redux";
import PrivacyMeassage from "./components/PrivacyMessage";

function App() {
  const privacy = useSelector((store) => store.privacy);
  return (
    <>
      <div className="col-lg-6 ad-rootdiv">
        <Container>
          <Header />
          {privacy ? <PrivacyMeassage /> : <DisplayCounter />}
          <Controls />
        </Container>
      </div>
    </>
  );
}

export default App;
