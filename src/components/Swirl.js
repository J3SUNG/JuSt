import Component from "../core/Component.js";

export default class Swirl extends Component {
  template() {
    const moleList = [1, 2, 3, 4];
    const atomList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    return `
      <section class="swirl-section">
        ${moleList
          .map(
            (moleItem) => `<div class="swirl-section__loader" style="--j:${moleItem};">
          ${atomList
            .map((atomItem) => `<span key=${atomItem} style="--i:${atomItem};"></span>`)
            .join("")}`
          )
          .join("</div>")}
      </section>
    `;
  }
}
