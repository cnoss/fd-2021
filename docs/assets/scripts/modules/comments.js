export default class Comments {
  constructor(url) {
    this.url = url;
    this.target = document.querySelector('[data-js-comment-list]');
  }

  init() {
    if (this.target) {
      fetch(this.url)
        .then((data) => data.json())
        .then((data) => {
          this.renderData(data);
        })
        .catch((error) => {
          this.renderError(error);
        });
    }
  }

  renderError(error) {
    this.target.innerHTML = `<li>Die Kommentare konnten leider nicht geladen werden.  Fehler: ${error}</li>`;
  }

  renderData(data) {
    const html = [];
    data.forEach((entry) => {
      html.push(`
        <li class="comment-list__item">
          <figure class="comment">
            <img src="https://mi-classroom.github.io/fd-2021-content/js-session-2/avatars/${entry.avatar}">
            <figcaption>
              <h3 class="comment-title">${entry.firstname} ${entry.lastname}, ${entry.date}</h3>
              <p class="comment-body">${entry.comment} </p>
            </figcaption>
          </figure>
        </li>
      `);
    });

    this.target.innerHTML = html.join('\n');
  }
}
