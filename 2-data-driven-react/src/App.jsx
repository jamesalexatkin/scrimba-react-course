import Header from "./components/Header";
import Entry from "./components/Entry";
import data from "./data";

function App() {
  const entries = data.map(function (e) {
    return <Entry key={e.id} {...e}></Entry>;
  });
  return (
    <>
      <Header></Header>
      {entries}
    </>
  );
}

export default App;
