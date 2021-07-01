const setNavState = () => {

  const slug = window.location.pathname;
  const navItems = document.querySelectorAll('[data-js-navitem]');
  
  navItems.forEach(item => {
    const anchor = item.querySelector('[href]');

    if (!anchor.href.match(slug)) return;
    item.setAttribute("data-state", "active");

    if (!item.querySelector('.subnavbar')) return;
    item.querySelector('.subnavbar').setAttribute("data-state", "active");
    //}
  });
  return;
}

const initDropdowns = () => {
  const trigger = document.querySelectorAll('[data-js-dropdown]');
  trigger.forEach(
    ele => {
      ele.addEventListener('click', (event) => {
        const dropDownTargetName = event.currentTarget.dataset.jsDropdown;
        const dropDownTarget = document.querySelector(`[data-js-dropdown-target=${dropDownTargetName}]`);

        if (dropDownTarget.dataset.state === 'visible') {
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

const initScrollSpy = () => {

  let lastActiveItem = false;
  const menu = document.querySelector('.subnavbar');
  const sections = document.querySelectorAll('[data-js-scrollspy]');

  const imageObserver = new IntersectionObserver ((entries, observer)=>{
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        const pattern = `[href$=${id}]`;
        const anchor = menu.querySelector(pattern);
        const menuItem = anchor.closest('.subnavbar__item');

        if (lastActiveItem) { lastActiveItem.removeAttribute("data-state"); }
        menuItem.setAttribute("data-state", "active");
        lastActiveItem = menuItem;
      }
    });
  });
  
  sections.forEach(function(section) {
    imageObserver.observe(section);
  });
}


document.addEventListener("DOMContentLoaded", () => {
  initDropdowns();
  setNavState();
  initScrollSpy();
});