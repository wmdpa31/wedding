window.onload = () => {
  for (let i of document.querySelectorAll("#gallery img")) {
    i.onclick = () => i.classList.toggle("full");
  }
};
