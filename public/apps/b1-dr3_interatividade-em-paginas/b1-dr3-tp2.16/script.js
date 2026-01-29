const accordionsItems = document.querySelectorAll(".accordion-item");

accordionsItems.forEach((item) => {
  item.classList.add("collapsed");

  item.addEventListener("click", () => {
    if (item.classList.contains("expanded")) {
      item.classList.replace("expanded", "collapsed");
      return;
    }

    accordionsItems.forEach((item) =>
      item.classList.replace("expanded", "collapsed")
    );
    item.classList.replace("collapsed", "expanded");
  });
});
