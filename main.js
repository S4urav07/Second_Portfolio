// for menu icon in mobile and tab
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle('ri-menu-line');  // Toggle the menu icon class
    menu.classList.toggle('ri-close-line'); // Toggle the 'x' icon class
    navbar.classList.toggle('open');
};


//add back when opwn project when clicked

  function goBack() {
    window.history.back();
  }


// to add navigation active, inspired from https://codepen.io/dbilanoski/pen/LabpzG
const sections = document.querySelectorAll(".div-wrapper[id]")

window.addEventListener("scroll", addNavActive);

function addNavActive() {
  // get current y scroll position
  let scrollY = window.pageYOffset;
  // get height, top and ID values for each section
  sections.forEach(current => {
    let sectionHeight = current.offsetHeight;
    let sectionTop = current.offsetTop - 50;
    let sectionId = current.getAttribute("id");
  // check position to add or remove active
 
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelector("#navbar a[href*=" + sectionId + "]").classList.add("active");
    } else {
        document.querySelector("#navbar a[href*=" + sectionId + "]").classList.remove("active");
    }

  });

}


 
//inspired from w3schools.com
// Execute the function and show all columns
filterSelection("all");

// Function to filter projects
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("projectno1");
  
  // If the category is "all," show all projects
  if (c == "all") {
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "block";
    }
  } else {
    // Otherwise, hide projects that don't belong to the selected category
    for (i = 0; i < x.length; i++) {
      if (x[i].className.indexOf(c) > -1) {
        x[i].style.display = "block";
      } else {
        x[i].style.display = "none";
      }
    }
  }

  // Add the "active" class to the selected filter button
  var btns = document.getElementsByClassName("proj");
  for (i = 0; i < btns.length; i++) {
    btns[i].classList.remove("active");
    if (btns[i].getAttribute("data-filter") === c) {
      btns[i].classList.add("active");
    }
  }
}

// Add click event listeners to filter buttons
var btns = document.getElementsByClassName("proj");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    filterSelection(this.getAttribute("data-filter"));
  });
}

