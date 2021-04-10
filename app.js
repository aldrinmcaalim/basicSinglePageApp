function getContent(fragmentId, callback) {
  const pages = {
    home: "This is the homepage. Welcome to my site!",
    about: `This page describes me`,
    contact: `Contact me on this page if you have any questions`,
  };
  callback(pages[fragmentId]);
}
function loadContent() {
  let contentDiv = document.querySelector("#app");
  let fragmentId = location.hash.substr(1);
  getContent(fragmentId, function (content) {
    contentDiv.innerText = content;
  });
}

if (!location.hash) {
  location.hash = "#home";
}

loadContent();

window.addEventListener("hashchange", loadContent);
