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


document.addEventListener("DOMContentLoaded", () => {
  initDropdowns();
  setNavState();
});