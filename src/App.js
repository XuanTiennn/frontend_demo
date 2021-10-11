import "./App.css";
import Header from "./feature/layout/header";
import Banner from "./feature/layout/banner";
import Footer from "./feature/layout/footer";
import Introduct from "./feature/pages/01_Wht30s_main/introduce/main";
import BestProduct from "./feature/pages/01_Wht30s_main/bestProduct/main";
import Products from "./feature/pages/01_Wht30s_main/products/main";
import BranStory from "./feature/pages/01_Wht30s_main/brandStory/main";
import News from "./feature/pages/01_Wht30s_main/news/main";
import Video from "./feature/pages/01_Wht30s_main/video/main";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Introduct />
      <BestProduct />
      <Products />
      <BranStory />
      <News />
      <Video />
      <Footer />
    </div>
  );
}

export default App;
