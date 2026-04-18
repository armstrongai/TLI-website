(function () {
  "use strict";

  document.addEventListener("submit", function (e) {
    var form = e.target;
    if (!(form instanceof HTMLFormElement)) return;
    if (!form.hasAttribute("data-netlify")) return;
    if (form.dataset.ajax !== "true") return;
    e.preventDefault();
    var fd = new FormData(form);
    fetch("/", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: new URLSearchParams(fd).toString() })
      .then(function () {
        form.innerHTML = '<p class="form-success">Thanks. We’ll be in touch shortly.</p>';
      })
      .catch(function () {
        alert("Something went wrong. Please try again or email us directly.");
      });
  });
})();
