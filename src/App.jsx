import Header from "./components/Header";
import Hero from "./components/Hero";
import Shortener from "./components/Shortener";

export default function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <Hero />
        <Shortener />
      </main>
    </div>
  );
}
