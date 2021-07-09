/* eslint-disable import/extensions */
import Comments from './modules/comments.js';
import Navigation from './modules/navigation.js';
import Dropdown from './modules/dropdown.js';
import ScrollSpy from './modules/scrollspy.js';

document.addEventListener('DOMContentLoaded', () => {
  const navigation = new Navigation();
  navigation.init();

  const dropdown = new Dropdown();
  dropdown.init();

  const menu = document.querySelector('.subnavbar');
  const sections = document.querySelectorAll('[data-js-scrollspy]');
  const scrollSpy = new ScrollSpy(menu, sections);
  scrollSpy.init();

  const comments = new Comments('https://mi-classroom.github.io/fd-2021-content/js-session-2/comments.json');
  comments.init();
});
