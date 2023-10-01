import Component from "../core/Component.js";

export default class SvgText extends Component {
  template() {
    return `
      <section class="svg-text-section">
        <svg viewBox="0 0 800 800">
          <symbol id="s-text">
            <text text-anchor="middle" x="50%" y="35%" class="svg-text__symbol__text">Jeseong Lee</text>
            <text text-anchor="middle" x="50%" y="68%" class="svg-text__symbol__text">이제성</text>
          </symbol>
          <g class="g-ants">
            <use href="#s-text" class="svg-text__symbol__text__text-copy"></use>
            <use href="#s-text" class="svg-text__symbol__text__text-copy"></use>
            <use href="#s-text" class="svg-text__symbol__text__text-copy"></use>
            <use href="#s-text" class="svg-text__symbol__text__text-copy"></use>
            <use href="#s-text" class="svg-text__symbol__text__text-copy"></use>
        </svg>
      </section>
    `;
  }
}
