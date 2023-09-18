import HomePage from "./HomePage.js";
import CounterPage from "./CounterPage.js";
import FetchPage from "./FetchPage.js";
import SwirlPage from "./SwirlPage.js";
import "../styles/index.css";

export default (main) => {
  const home = () => new HomePage(main);
  const counter = () => new CounterPage(main);
  const fetch = () => new FetchPage(main);
  const swirl = () => new SwirlPage(main);

  return {
    home,
    counter,
    fetch,
    swirl,
  };
};
