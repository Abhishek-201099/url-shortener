import Cta from "./components/Cta";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Shortener from "./components/Shortener";
import Stats from "./components/Stats";

export default function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <Hero />
        <Shortener />
        <Stats />
        <Cta />
      </main>
    </div>
  );
}
