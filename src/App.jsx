import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";

function App() {
  return (
    <div>
      <Header />
      <div className="container mx-auto">
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default App;
