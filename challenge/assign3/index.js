// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

const txt = document.querySelector(".text");

const superEventHandler = {
  mouse_enter: function () {
    txt.style.color = colors[2];
    txt.innerText = "1zaadfqwer";
  },
  mouse_leave: function () {
    txt.style.color = colors[3];
    txt.innerText = "13u2yuisoadf";
  },
  window_resize: function () {
    txt.style.color = colors[4];
    txt.innerText = "1usdakfbxcz";
  },
  right_click: function () {
    txt.style.color = colors[0];
    txt.innerText = "dhcosas";
  }
};

txt.addEventListener("mouseenter", superEventHandler.mouse_enter);
txt.addEventListener("mouseleave", superEventHandler.mouse_leave);
window.addEventListener("resize", superEventHandler.window_resize);
txt.addEventListener("contextmenu", superEventHandler.right_click);

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
