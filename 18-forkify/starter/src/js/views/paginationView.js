import View from './View';
import icons from 'url:../../img/icons.svg';
import { mark } from 'regenerator-runtime';
class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');
  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const button = e.target.closest('.btn--inline');

      if (!button) return;
      const goToPage = +button?.dataset.goto;

      handler(goToPage);
    });
  }
  _generateMarkupHelper(data) {
    return `
        <button data-goto="${
          data + 1
        }" class="btn--inline pagination__btn--next">
          <span>Page ${data + 1}</span>
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
          </svg>
        </button>
      `;
  }

  _generateMarkup() {
    const currPage = this._data.page;
    console.log(currPage);
    //Page 1 and there are other pages
    console.log(this._data);
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    console.log(numPages);
    // page 1 and there are no other pages
    if (currPage === 1 && numPages > 1) {
      return this._generateMarkupHelper(currPage);
    }
    //page 2 and there are other pages
    if (currPage === numPages && numPages > 1) {
      return `<button data-goto="${
        currPage - 1
      }" class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-left"></use>
      </svg>
      <span>Page ${currPage - 1}</span>
    </button>`;
    }
    // Other page
    if (currPage < numPages) {
      return `<button data-goto="${
        currPage - 1
      }" class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-left"></use>
      </svg>
      <span>Page ${currPage - 1}</span>
    </button>
    <button data-goto="${
      currPage + 1
    }" class="btn--inline pagination__btn--next">
    <span>Page ${currPage + 1}</span>
    <svg class="search__icon">
      <use href="${icons}#icon-arrow-right"></use>
    </svg>
  </button>`;
    }
    return '';
  }
}
export default new PaginationView();
