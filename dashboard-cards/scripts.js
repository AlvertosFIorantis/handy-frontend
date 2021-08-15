const editBtn = document.getElementById("edit");
const deleteBtn = document.getElementById("delete");
const main = document.getElementById("commentDiv");
const textArea = document.getElementById("commentInput");
const note = document.getElementById("note");
const editIcon = document.getElementById("editIcon");

deleteBtn.addEventListener("click", () => {
  main.innerHTML = "";
  textArea.value = "";
});

editBtn.addEventListener("click", () => {
  main.classList.toggle("hidden");
  textArea.classList.toggle("hidden");

  //manualy change the icon of the edit button

  if (editIcon.classList.contains("fa-edit")) {
    editIcon.className = "fas fa-file";
  } else {
    editIcon.className = "fas fa-edit";
  }
});

textArea.addEventListener("input", (e) => {
  const { value } = e.target;

  main.innerHTML = value;
});
