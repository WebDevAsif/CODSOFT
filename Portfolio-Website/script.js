// Selecting tab links and tab contents for the about section
let tablinks = document.querySelectorAll(".tab-links");
let tabcontents = document.querySelectorAll(".tab-contents");

// Adding click event listeners to tab links for tab functionality
tablinks.forEach(function (tablink) {
  tablink.addEventListener("click", function () {
    // Removing the "active-link" class from all tab links
    tablinks.forEach(function (link) {
      link.classList.remove("active-link");
    });

    // Removing the "active-tab" class from all tab contents
    tabcontents.forEach(function (tabcontent) {
      tabcontent.classList.remove("active-tab");
    });

    // Adding the "active-link" class to the clicked tab link
    tablink.classList.add("active-link");

    // Finding the corresponding tab content and adding the "active-tab" class
    const tabIndex = Array.from(tablinks).indexOf(tablink);
    tabcontents[tabIndex].classList.add("active-tab");
  });
});

// Selecting elements for the open and close buttons in the navigation bar
let closeBtn = document.querySelector(".fa-xmark");
let openBtn = document.querySelector(".fa-bars");
let sideMenu = document.querySelector("#side-menu");
let lists = document.querySelectorAll("ul li");

// Adding click event listeners for the open and close buttons
closeBtn.addEventListener("click", function () {
  sideMenu.classList.remove("active");
  openBtn.classList.remove("active");
  closeBtn.classList.remove("active");
});

openBtn.addEventListener("click", function () {
  sideMenu.classList.add("active");
  openBtn.classList.add("active");
  closeBtn.classList.add("active");
});

// Adding click event listeners to the list items in the side menu to close the menu
lists.forEach((list) => {
  list.addEventListener("click", () => {
    sideMenu.classList.remove("active");
    closeBtn.classList.remove("active");
    openBtn.classList.remove("active");
  });
});
