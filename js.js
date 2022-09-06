// Variables
// Add Task Stuff
var addTaskBtn = document.getElementById("addTaskBtn");
var taskInput = document.getElementById("taskInputContainer");
var closeTaskInput = document.getElementById("closeTaskInput");

// Add Item Stuff
var addItemBtn = document.getElementById("addItemBtn");
var itemInput = document.getElementById("itemInputContainer");
var closeItemInput = document.getElementById("closeItemInput");

// Tasks (Cards) Container where the task will be added
var cardContainer = document.getElementById("cardContainer");

// For no tasks message
var noTasks = document.getElementById("noTasks");

// For the current card where add_item event has been triggered
var current_card = "";

// Add Task Functionality
document.getElementById("addTask").addEventListener("click", openAddTask);
addTaskBtn.addEventListener("click", function () {
    addTask(getTask());
    closeAddTask();
    task.value = "";
});
closeTaskInput.addEventListener("click", closeAddTask);

// Add Item Functionality
addItemBtn.addEventListener("click", () => addItem());
closeItemInput.addEventListener("click", closeAddItem);

// For Add Task Functionality
// Opens Add Task Dialog Box
function openAddTask() {
    taskInput.style.visibility = "visible";
}
// Closes Add Task Dialog Box
function closeAddTask() {
    taskInput.style.visibility = "hidden";
}
// Gets the Task entered into the input field
function getTask() {
    var task = document.getElementById("task");
    var res = task.value;
    task.value = "";
    return res;
}
// Creates a card (task) and adds it
function addTask(title) {
    var card = document.createElement("div");
    card.className = "card";
    var cardContent = `
            <div class="cardHeading blue">
                <p>${title}</p>
            </div>
            <div class="itemContainer">
            </div>
        `;
    card.innerHTML = cardContent;
    cardContainer.appendChild(card);

    var card = document.querySelectorAll(".cardHeading");
    card = card[card.length - 1];
    card.addEventListener("click", () => openAddItem(card));
    noTasks.style.display = "none";
}

// For Add Item Functionality
// Open Add Item Dialog Box and stores the card where the event was triggered in current_card variable
function openAddItem(card) {
    itemInput.style.visibility = "visible";
    current_card = card;
}
// Closes Add Item Dialog Box
function closeAddItem() {
    itemInput.style.visibility = "hidden";
}
// Gets the Item entered into the input field
function getItem() {
    var item = document.getElementById("item");
    var res = item.value;
    item.value = "";
    return res;
}
// Creates a item and adds it to the current_card
function addItem() {
    var card = current_card;
    var currentTask = card.parentElement;
    var itemContainer = currentTask.getElementsByClassName("itemContainer")[0];

    var item = document.createElement("div");
    item.className = "item";
    var itemContent = `
                    <input type="checkbox" id="">
                    <span>${getItem()} &nbsp;</span>
                `;
    item.innerHTML = itemContent;
    itemContainer.appendChild(item);

    item.querySelector("input").addEventListener("click", () => removeItem(item));

    closeAddItem();
}
// Removes an item by striking it
function removeItem(item) {
    item.querySelector("input").disabled = true;
    item.querySelector("span").classList.add("strike");
}
