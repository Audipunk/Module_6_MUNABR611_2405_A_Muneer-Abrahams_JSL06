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

        
        menu[category].forEach(item => {
        
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
 

 
    orderItemsList.appendChild(orderItemElement);
    
    const itemPrice = prices [itemName];
    let currentTotal = parseFloat(orderTotalElement.textContent);
    currentTotal += itemPrice;
    
    orderTotalElement.textContent = currentTotal.toFixed(2);
}


// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
}

// Start the menu system by calling the init function
initMenuSystem(menu);
