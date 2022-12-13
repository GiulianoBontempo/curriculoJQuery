document.addEventListener("DOMContentLoaded", () => {
    let parametroURL = new URLSearchParams(window.location.search);
    let id = +parametroURL.get('id');
    document.getElementById("id").value = id;
  });