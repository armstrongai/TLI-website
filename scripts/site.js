(function () {
  "use strict";

  function currentPageFile() {
    var path = (window.location.pathname || "").replace(/\/+$/, "");
    var parts = path.split("/").filter(Boolean);
    var last = parts.length ? parts[parts.length - 1] : "";
    if (!last) return "index.html";
    if (last.indexOf(".") === -1) return last + ".html";
    return last;
  }

  function loadPartial(selector, url) {
    var host = document.querySelector(selector);
    if (!host) return Promise.resolve();
    return fetch(url)
      .then(function (res) {
        if (!res.ok) throw new Error("Failed to load " + url);
        return res.text();
      })
      .then(function (html) {
        host.innerHTML = html;
      });
  }

  function setActiveNav() {
    var file = currentPageFile();
    document.querySelectorAll('.nav-links a[data-nav]').forEach(function (a) {
      if (a.getAttribute("data-nav") === file) {
        a.classList.add("is-active");
      }
    });
  }

  function initNav() {
    var header = document.getElementById("site-header");
    var inner = document.getElementById("nav-inner");
    var toggle = document.getElementById("nav-toggle");
    if (!header || !inner || !toggle) return;

    window.addEventListener(
      "scroll",
      function () {
        if (window.scrollY > 8) header.classList.add("is-scrolled");
        else header.classList.remove("is-scrolled");
      },
      { passive: true }
    );

    toggle.addEventListener("click", function () {
      var open = inner.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });

    var menu = document.getElementById("nav-menu");
    if (menu) {
      menu.querySelectorAll("a").forEach(function (a) {
        a.addEventListener("click", function () {
          if (window.matchMedia("(max-width: 959px)").matches) {
            inner.classList.remove("is-open");
            toggle.setAttribute("aria-expanded", "false");
            toggle.setAttribute("aria-label", "Open menu");
          }
        });
      });
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    Promise.all([
      loadPartial('[data-include="nav"]', "partials/nav.html"),
      loadPartial('[data-include="footer"]', "partials/footer.html"),
    ])
      .then(function () {
        setActiveNav();
        initNav();
      })
      .catch(function (err) {
        console.error(err);
      });
  });
})();
