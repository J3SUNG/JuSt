import Component from "../core/Component.js";
import Swirl from "../components/Swirl.js";
import "../styles/swirl.css";

export default class SwirlPage extends Component {
  template() {
    return `
      <h1>Swirl Page</h1>
      <div data-component="swirl"></div>
    `;
  }
  mounted() {
    const $swirl = this.$target.querySelector('[data-component="swirl"]');
    new Swirl($swirl);
  }
}
