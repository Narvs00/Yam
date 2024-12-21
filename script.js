// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("revealButton");
    const hiddenMessage = document.getElementById("hiddenMessage");
  
    button.addEventListener("click", () => {
      hiddenMessage.classList.toggle("hidden");
      button.textContent = hiddenMessage.classList.contains("hidden") 
        ? "Click Me" 
        : "Hide Message";
    });
  });
  