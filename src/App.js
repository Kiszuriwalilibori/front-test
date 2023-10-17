import { useSelector } from "react-redux";

import "./App.css";
import Header from "./components/Header";
import List from "./components/List";
import { getTheme } from "./reducers/theme";


function App() {
  const theme = useSelector(getTheme);
  // use class "'dark-mode' to change theme"
  return (
    <div className={theme}>
      <Header />
      <List />
    </div>
  );
}

export default App;
