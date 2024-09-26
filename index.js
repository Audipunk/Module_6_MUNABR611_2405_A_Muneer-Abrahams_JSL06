const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};


function displayMenuItems(menu) { 

    const menuContainer = document.getElementById("menu");

  
    for (const [category, items] of Object.entries(menu)) {
        
        const categoryElement = document.createElement("h3");
    
        categoryElement.textContent = category;
      
        menuContainer.appendChild(categoryElement);
    }
    const itemsList = document.createElement("ul");

    menuContainer.appendChild(itemsList);

        
    items.forEach((item) => {
        
        const itemElement = document.createElement('li');
        itemElement.textContent = item;
        

            

       
            itemElement.addEventListener('click', () => addToOrder(item));
           
            itemsList.appendChild(itemElement);
        });
    }
            

function addToOrder(itemName) {
   
    const orderItemsList = document.getElementById('order-items');
    const orderTotalElement = document.getElementById('order-total');

   
    const orderItemElement = document.createElement('li');
    orderItemElement.textContent = itemName;
 
    orderItem.addEventListener("click", () =>
        removeFromOrder(orderItem, itemName)
);

    orderItemsList.appendChild(orderItemElement);
    
    let currentTotal = parseFloat(orderTotal.textContent.replace(" ", "")) || 0;
  currentTotal += getItemPrice(itemName);

  orderTotal.textContent = `${currentTotal.toFixed(2)}`;
}

function removeFromOrder(orderItem, itemName) {
    const orderItemsList = document.getElementById("order-items");
    const orderTotal = document.getElementById("order-total");
  
    orderItemsList.removeChild(orderItem);
  
    let currentTotal = parseFloat(orderTotal.textContent.replace("$", "")) || 0;
    currentTotal -= getItemPrice(itemName);
    orderTotal.textContent = `${currentTotal.toFixed(2)}`;
  }   


  function getItemPrice(itemName) {
    const prices = {
      "Garlic Bread": 49,
      Bruschetta: 32,
      "Margherita Pizza": 85,
      "Spaghetti Carbonara": 110,
      Tiramisu: 70,
      Cheesecake: 65,
    };
    return prices[itemName] || 0;
  }


// Start the menu system by calling the init function
function initMenuSystem(menu) {
    displayMenuItems(menu);
}

document.addEventListener("DOMContentLoaded", () => initMenuSystem(menu));