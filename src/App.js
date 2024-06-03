
import CreateNewAccount from "./CreateNewAccount";
import BusinessInformation from "./BusinessInformation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<CreateNewAccount />} />
          <Route path="/business-info" element={<BusinessInformation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
