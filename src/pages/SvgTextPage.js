import Component from "../core/Component.js";
import SvgText from "../components/SvgText.js";
import "../styles/svgText.css";

export default class SvgTextPage extends Component {
  template() {
    return `
      <h1>SvgText Page</h1>
      <div data-component="svg-text"></div>
    `;
  }
  mounted() {
    const $svgText = this.$target.querySelector('[data-component="svg-text"]');
    new SvgText($svgText);
  }
}
