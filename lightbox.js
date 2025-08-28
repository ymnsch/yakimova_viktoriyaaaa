document.querySelectorAll(".lightbox").forEach((lb) => {
  lb.addEventListener("click", (e) => {
    if (e.target === lb) {
      history.pushState(
        "",
        document.title,
        window.location.pathname + window.location.search
      );
    }
  });
});
