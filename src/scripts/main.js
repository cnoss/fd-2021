class Navigation {

  constructor() {
    this.slug = window.location.pathname;
    this.navItems = document.querySelectorAll('[data-js-navitem]');
  }

  showActiveSubmenu() {
    this.navItems.forEach(item => {
      const anchor = item.querySelector('[href]');

      if (!anchor.href.match(this.slug)) return;
      item.setAttribute("data-state", "active");

      if (!item.querySelector('.subnavbar')) return;
      item.querySelector('.subnavbar').setAttribute("data-state", "active");

    });
  }
}

class Dropdown {
  constructor() {
    this.trigger = document.querySelectorAll('[data-js-dropdown]');
    this.init();
  }

  init() {
    this.trigger.forEach(
      ele => {
        ele.addEventListener('click', (event) => {
          const dropDownTargetName = event.currentTarget.dataset.jsDropdown;
          const dropDownTarget = document.querySelector(`[data-js-dropdown-target=${dropDownTargetName}]`);

          if (dropDownTarget.dataset.state === 'active') {
            dropDownTarget.dataset.state = 'closed';
            ele.dataset.state = 'closed';
          } else {
            dropDownTarget.dataset.state = 'active';
            ele.dataset.state = 'active';
          }
        });
      }
    );
  }
}

class ScrollSpy {

  constructor(menu, sections) {
    this.menu = menu;
    this.sections = sections;
    this.lastActiveItem = false;

    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.refreshNavigation(entry);
        }
      });
    });

    this.sections.forEach(function (section) {
      imageObserver.observe(section);
    });
  }

  refreshNavigation(targetNavElement) {
    const id = targetNavElement.target.id;
    const pattern = `[href$=${id}]`;
    const anchor = this.menu.querySelector(pattern);
    const menuItem = anchor.closest('.subnavbar__item');

    if (this.lastActiveItem) { this.lastActiveItem.removeAttribute("data-state"); }
    menuItem.setAttribute("data-state", "active");
    this.lastActiveItem = menuItem;
  }
}

class Comments {

  constructor(url) {
    this.url = url;
    this.target = document.querySelector('[data-js-comment-list]');
    this.fetchData();
  }

  fetchData() {
    fetch(this.url)
      .then((data) => data.json())
      .then((data) => {
        this.renderData(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  renderData(data) {
    let html = [];
    data.forEach(entry => {
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

    this.target.innerHTML = html.join("\n");
  }

}

document.addEventListener("DOMContentLoaded", () => {

  const navigation = new Navigation();
  navigation.showActiveSubmenu();

  new Dropdown();

  const menu = document.querySelector('.subnavbar');
  const sections = document.querySelectorAll('[data-js-scrollspy]');
  new ScrollSpy(menu, sections);

  new Comments("https://mi-classroom.github.io/fd-2021-content/js-session-2/comments.json");

});