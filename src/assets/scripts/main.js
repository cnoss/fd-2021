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

  const commentsUrl = 'https://mi-classroom.github.io/fd-2021-content/js-session-2/comments.json';
  const comments = new Comments(commentsUrl);
  comments.init();

  async function fetchData(url) {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }

    return true;
  }

  const commentList = new Vue({
    el: '#commentList',
    data: {
      comments: [],
    },
    async mounted() {
      this.comments = await fetchData(commentsUrl);
    },
  });
});
