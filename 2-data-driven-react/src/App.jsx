import Header from "./components/Header";
import Entry from "./components/Entry";
import data from "./data";

function App() {
  const entries = data.map(function (e) {
    return (
      <Entry
        key={e.id}
        img={e.img}
        title={e.title}
        country={e.country}
        googleMapsLink={e.googleMapsLink}
        dates={e.dates}
        text={e.text}
      ></Entry>
    );
  });
  return (
    <>
      <Header></Header>
      {entries}
    </>
  );
}

export default App;
