const observer = new IntersectionObserver((entries) => {
  // Iterate through each entry in the intersection observer's list
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // If the observed element is intersecting, add the "show" class to it
      entry.target.classList.add("show");
    } else {
      // If the observed element is not intersecting, remove the "show" class from it
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");

// Iterate through each hidden element and observe them with the IntersectionObserver
hiddenElements.forEach((element) => observer.observe(element));
