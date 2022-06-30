exports.html = (collection) => {
  const navElements = collection.map((item) => `
      <li class="navbar__item" data-js-navitem>
        <a href="${item.url}">${item.data.title}</a></li>
      </li>`);

  return `<nav class="main-navigation" data-js-nav>
  <button class="menu-trigger" data-js-dropdown="level-1" data-state="active">
    <i class="icon icon--xl open">menu</i
    ><i class="icon icon--xl close">close</i>
  </button>
  
  <ul class="navbar" data-js-dropdown-target="level-1" data-state="hidden">
    ${navElements.join('')}
  </ul>
  </nav>`;
};
