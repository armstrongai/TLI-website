(function () {
  "use strict";

  var config = window.TLI_CONFIG || {};
  var embedEl = document.getElementById("flodesk-embed");
  var uid =
    config.flodeskFormUid ||
    (embedEl && embedEl.getAttribute("data-uid")) ||
    "";

  if (!uid || !embedEl) return;

  var fallback = document.querySelector(".contact-form--fallback");
  embedEl.hidden = false;
  embedEl.setAttribute("data-uid", uid);
  if (fallback) fallback.hidden = true;

  (function (w, d, t, h, s, n) {
    w.FlodeskObject = n;
    var fn = function () {
      (w[n].q = w[n].q || []).push(arguments);
    };
    w[n] = w[n] || fn;
    fn();
    var f = d.getElementsByTagName(t)[0];
    var e = d.createElement(t);
    e.async = true;
    e.src = h + s + "?ver=" + ~~(Date.now() / (1e3 * 60 * 60 * 24));
    f.parentNode.insertBefore(e, f);
  })(window, document, "script", "https://assets.flodesk.com/", "/universal", "fd");

  window.fd("form", {
    formId: uid,
    containerEl: "#flodesk-embed",
  });
})();
