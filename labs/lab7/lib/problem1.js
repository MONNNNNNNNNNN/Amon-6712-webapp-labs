// problem1.js — implement handleMenuClick, then register it ONCE.
const menu = document.querySelector("#menu");
const selection = document.querySelector("#selection");
const count = document.querySelector("#count");
 
let picks = 0; // module-level counter
 
function handleMenuClick(e) {
  // 1. If e.target is not an <li>, do nothing 
  if (!e.target.matches("li")) {
    return;
  }
  // 2. Set selection content to “You picked: <item>”
  selection.textContent = `You picked: ${e.target.textContent}`;
  // 3. Set the item background color to a highlight colour.
  e.target.style.backgroundColor = "#f0e68c"; // หรือ "lightyellow" ก็ได้
  // 4. Increment picks to “Total picks: <picks>”
  picks += 1;
  count.textContent = `Total picks: ${picks}`;
}
 
menu.addEventListener("click", handleMenuClick);