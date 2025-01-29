document.addEventListener("DOMContentLoaded", () => {
  // Populate music section
  const musicGrid = document.getElementById("musicGrid");
  const songs = [
    { title: "Unstoppable", embedUrl: "https://open.spotify.com/embed/track/123456" },
    { title: "Boundaries", embedUrl: "https://open.spotify.com/embed/track/654321" },
  ];

  songs.forEach(song => {
    const songDiv = document.createElement("div");
    songDiv.innerHTML = `
      <iframe src="${song.embedUrl}" frameborder="0" allowfullscreen></iframe>
      <p>${song.title}</p>
    `;
    musicGrid.appendChild(songDiv);
  });

  // Populate merchandise section
  const merchGrid = document.getElementById("merchGrid");
  const merch = [
    { name: "T-shirt", imageUrl: "tshirt.jpg" },
    { name: "Cap", imageUrl: "cap.jpg" },
  ];

  merch.forEach(item => {
    const itemDiv = document.createElement("div");
    itemDiv.innerHTML = `
      <img src="${item.imageUrl}" alt="${item.name}" />
      <p>${item.name}</p>
    `;
    merchGrid.appendChild(itemDiv);
  });

  // Contact form validation
  const form = document.getElementById("contactForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const socialLinks = document.querySelectorAll(".social-links .btn");
  socialLinks.forEach((btn, index) => {
    btn.style.opacity = "0";
    btn.style.transform = "translateY(20px)";
    setTimeout(() => {
      btn.style.opacity = "1";
      btn.style.transform = "translateY(0)";
      btn.style.transition = "all 0.5s ease";
    }, index * 100); // Stagger animation
  });
});
document.addEventListener("DOMContentLoaded", () => {
  // Animate Progress Bar
  const progressBar = document.querySelector(".progress-bar .progress");
  setTimeout(() => {
    progressBar.style.width = "70%"; // Example progress
  }, 500);

  // Form Submission Handler
  const form = document.getElementById("signupForm");
  const confirmationMessage = document.getElementById("confirmationMessage");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const emailInput = document.getElementById("emailInput").value;

    // Simulate API request (you can replace this with actual API integration)
    setTimeout(() => {
      confirmationMessage.style.display = "block";
      form.reset();
    }, 500);
  });
});
