const navigation = require('./partials/navigation.11ty');

exports.render = function (pageData) {
  const data = pageData;
  return `
  <!doctype html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width,initial-scale=1.0">
      <title>Online Sports Communities // ${data.title}</title>
      <link rel="icon" type="image/png" href="/assets/images/outline_face_black_24dp.png">
      <link rel="stylesheet" href="/assets/main.css" />
      <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
      <script type="module" src="/assets/scripts/main.js"></script>
    </head>
    <body>
      <header class="hero" style="background-image: url('/images/dmitry-i-v5GLMK38Zqk-unsplash.jpg');">
        <h1 class="title">Online Sports Communities</h1>
        <h2 class="subtitle">A concept for supporting the user’s participation in team sports</h2>
        <p class="author">Kephas Nguyen</p>
      </header>
      <div class="content-wrap">
        ${navigation.html(data.collections.chapters)}
        <main>
          ${data.content}
        </main>
      </div>
    </body>
  </html>
  `;
};
