import FirstPage from "./components/FirstPage";
import FirstPageDes from "./components/FirstPageDes";
import SecondPage from "./components/SecondPage";

import { namesArray } from "./data/data";

function App() {
    return (
    <div className="App">
      <FirstPage firstname={namesArray[1]} lastname={namesArray[3]} />
      <SecondPage lastname={namesArray[3]} />
      <FirstPageDes {...namesArray} lastname={namesArray[3]} age="44" />
    </div>
  );
}

export default App;
