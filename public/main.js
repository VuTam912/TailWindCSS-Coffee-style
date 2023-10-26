const topMenu = document.getElementById("ct-top-menu");
const toggleTopMenuIcon = document.getElementById("ct-toggle-top-menu-icon"); // icon menu

document.addEventListener("click", (e) => {
  // contains => chứa các thẻ child từ thẻ parent (toggleTopMenuIcon)
  if (toggleTopMenuIcon.contains(e.target)) {
    // click to toggle top menu icon
    topMenu.classList.toggle("hidden"); // add hidden
    topMenu.classList.toggle("ct-topmenu-expanded"); // add class from input.css
  } else {
    // click Outside from toggle top menu icon
    // nếu navbar có chứa or đã có class là ct-topmenu...
    if (topMenu.classList.contains("ct-topmenu-expanded")) {
      // remove class
      topMenu.classList.remove("ct-topmenu-expanded"); // remove class from input.css
      topMenu.classList.add("hidden"); //add hidden for navbar
    }
  }
});
