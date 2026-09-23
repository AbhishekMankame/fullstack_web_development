// Example 1: Accessing DOM Elements
document.getElementById("changeTextButton").addEventListener("click", function(){
    let paragraph = document.getElementById("myParagraph");
    //console.log(paragraph.textContext);
    paragraph.textContent = "The paragraph is changed!!!"
});

// Example 2: Traversing the DOM
document.getElementById("highlightFirstCity").addEventListener('click', function(){
    let citiesList = document.getElementById("citiesList")
    // console.log(citiesList.firstElementChild)
    // console.log(citiesList.firstElementChild.classList)
    citiesList.firstElementChild.classList.add("highlight");
});

// Example 3 - Manipulating DOM elements
document.getElementById("changeOrder").addEventListener('click',function() {
    let coffeeType = document.getElementById("coffeeType");
    coffeeType.textContent = "Espresso";
    coffeeType.style.backgroundColor = "white"
    coffeeType.style.padding = "5px";
    coffeeType.style.color = "rgb(4, 33, 33)"
});

// Example 4: Creating and Inserting Elements
document.getElementById("addNewItem").addEventListener('click', function() {
    let newItem = document.createElement("li");
    newItem.textContent = "Eggs";
    document.getElementById("shoppingList").appendChild(newItem);
});

// Example 5: Removing DOM Elements
document.getElementById("removeLastTask").addEventListener('click', function() {
    let taskList = document.getElementById("taskList");
    taskList.lastElementChild.remove();
});

// Example 6: Event Handling in the DOM