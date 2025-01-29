document.getElementById("upload-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const message = document.getElementById("upload-message");
  message.textContent = "Your content has been uploaded successfully!";
  setTimeout(() => {
    message.textContent = "";
  }, 5000);
});
