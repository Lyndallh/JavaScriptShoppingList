let shoppingListItems = ["milk","eggs","bread"];
updateItems()

function addItem() {
    let item = document.getElementById("new-item-text").value;
    shoppingListItems.push(item);
    updateItems();
    clearInput();
    clearList();
}

function updateItems() {
    let listElement = document.getElementById("shopping-list-items");//Taking the ul from the HTML by using the get ELEMENT by ID
    listElement.innerHTML = "";
    for (const shoppingItem of shoppingListItems) {
        let itemElement = document.createElement("li"); // creates a list element for each shoppingItem
        itemElement.innerText = shoppingItem; // adds the inner text to the list element
        listElement.appendChild(itemElement); // adds the list element to the ul
    }   
}

function clearInput() {
    let itemClear = "";
    document.getElementById("new-item-text").value = itemClear;
}

function clearList() {
    let listElement = document.getElementById("shopping-list-items");
    listElement.innerHTML = "";
}