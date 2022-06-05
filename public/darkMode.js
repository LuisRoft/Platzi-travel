const htmlElement = document.querySelector("html");
const toggleButton = document.querySelector("#toggle");
const toggleButtonSm = document.querySelector("#toggleSm");

// const toggleDarkMode = () => {
//     htmlElement.classList.contains("dark")?
//     htmlElement.classList.remove("dark"):
//     htmlElement.classList.add("dark")
// };

// toggleButton.addEventListener("click", () => toggleDarkMode());

toggleButton.addEventListener("click", () => {
    htmlElement.classList.toggle("dark");
})

toggleButtonSm.addEventListener("click", () => {
    htmlElement.classList.toggle("dark");
})
