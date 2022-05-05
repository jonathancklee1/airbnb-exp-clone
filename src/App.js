import "./styles/styles.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

console.log(data);
function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });
  return (
    <div className="App">
      <Nav />
      <Hero />
      <section className="card-list">{cards}</section>
    </div>
  );
}

export default App;
