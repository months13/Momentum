const controller = document.body;

controller.style.backgroundColor = "#123456";

function resize_window() {
  let window_width = window.innerWidth;
  console.log(window_width);

  if (window_width > 500) {
    controller.style.backgroundColor = "blue";
  } else if (window_width < 500 && window_width > 250) {
    controller.style.backgroundColor = "yellow";
  } else {
    controller.style.backgroundColor = "green";
  }
}

window.addEventListener("resize", resize_window);
