import data from "../data";
import Header from "./Header";
import MainContent from "./MainContent/MainContent";

const App = () => {
  return (
    <>
      <Header />
      <MainContent data={data} />
    </>
  );
};

export default App;
