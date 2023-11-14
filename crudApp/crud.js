let add_button = document.getElementById("add-btn");
add_button.addEventListener("click", add);
let parentli = document.getElementById("parentli");
let parentInput = document.getElementById("parentInput");
let newMsg = document.createElement("h3");
let submission = document.getElementById("submit");
let dueDate = document.getElementById("DueDate");
let urgency = document.getElementById("Urgency");


function add(e) {
  if (
    parentli.children[0].className == "checking" ||
    parentli.lastElementChild.textContent == "please Enter the input"
  ) {
    parentli.lastElementChild.remove();
  }

  let current_btn = e.currentTarget;
  let current_input = current_btn.previousElementSibling;

  if (current_input.value.length > 0) {
    let CourseName = current_input.value;

    let newli = document.createElement("li");

    newli.className = "list-group-item d-flex justify-content-between mt-3 ";
    newli.innerHTML = `<h5 class="flex-grow-1">${CourseName}</h5>
        <button class="btn btn-warning me-2 " id="edit" onclick="editChapter(this)">Edit</button> 
        <button class="btn btn-danger me-1" onclick="removeChapter(this)">Remove</button>`;

    //  let parentInput=document.getElementById('parentInput')

    parentli.appendChild(newli);
  } else {
    let noInput = document.createElement("h3");
    
    noInput.classList.add("checking");

    noInput.innerHTML = `<h3 id="noInput">please Enter the input</h3>`;
    parentli.appendChild(noInput);
   

  }
}
function removeChapter(currElement) {
  let parentli = document.getElementById("parentli");
  currElement.parentElement.remove();

  if (parentli.children.length <= 0) {
    let newMsg = document.createElement("h6");
    //for checkin msg exists or not
    newMsg.classList.add("checking");

    newMsg.innerHTML = `<h3 id="emptyMsg">Your list is empty!!</h3>`;
    parentli.appendChild(newMsg);
  }
}
function editChapter(e) {
  if (e.textContent == "Done") {
    e.textContent = "Edit";
    let curChapterName = e.previousElementSibling.value;
    let newHeading = document.createElement("h4");
    newHeading.className = "flex-grow-1";
    newHeading.textContent = curChapterName;

    e.parentElement.replaceChild(newHeading, e.previousElementSibling);
  } else {
    e.textContent = "Done";
    let curChapterName = e.previousElementSibling.textContent;
    let newInput = document.createElement("input");
    newInput.type = "text";
    newInput.className = "form-control";
    newInput.placeholder = "chapter name";
    newInput.value = curChapterName;

    e.parentElement.replaceChild(newInput, e.previousElementSibling);
  }
}
function submitTask(e) {

  if (
    urgency.children[0].children[0].nextElementSibling.children[0].textContent=="Urgent"
  ) {
    let CourseName = parentli.children[0].children[0].textContent;
    let date = dueDate.children[0].children[1].value;
    let add_task = document.createElement("h6");
    add_task.innerHTML = `<h3  class="container-fluid col-12  bg-info "
  id="container4" ">Complete the course of ${CourseName} and due date is ${date}</h3>`;
    submission.parentNode.replaceChild(add_task, submission);
  }
  // if(    urgency.children[0].children[0].nextElementSibling.children[1].textContent=="Non-Urgent"){
  //   let CourseName = parentli.children[0].children[0].textContent;
  //   let date = dueDate.children[0].children[1].value;
  //   let add_task = document.createElement("h6");
  //   add_task.innerHTML = `<h3  class="container-fluid mb-4 mt-4  col-12 bg-danger pt-2 pb-2"
  // id="container4" ">Complete the course of ${CourseName} and due date is ${date}</h3>`;
  //   submission.parentNode.replaceChild(add_task, submission);
  // }

  }


