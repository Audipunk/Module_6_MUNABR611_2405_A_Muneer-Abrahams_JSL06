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
        // QUESTION: What HTML elements represent the order items list and the order total?
        const orderItemsList = document.getElementById("order-items");
        const orderTotal = document.getElementById("order-total");
      
        // QUESTION: Create a list item for the order here.
        const orderItem = document.createElement("li");
      
        // QUESTION: How can you set the text content of the list item to the item name?
        orderItem.textContent = itemName;
      
        // Add a click event listener to the order item for removal
        orderItem.addEventListener("click", () =>
          removeFromOrder(orderItem, itemName)
        );
      
        // QUESTION: How can you append the list item to the order items list?
        orderItemsList.appendChild(orderItem);
      
        // QUESTION: Calculate and update the total price. How can you access the current total and item price?
        let currentTotal = parseFloat(orderTotal.textContent.replace(" ", "")) || 0;
        currentTotal += getItemPrice(itemName);
      
        // QUESTION: How can you update the text content of the order total element with the new total?
        orderTotal.textContent = `${currentTotal.toFixed(2)}`;
      }
      // Function to remove an item from the order
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
          "Garlic Bread": 69,
          Bruschetta: 62,
          "Margherita Pizza": 85,
          "Spaghetti Carbonara": 410,
          Tiramisu: 78,
          Cheesecake: 85,
        };
        return prices[itemName] || 0;
      }
      
      // QUESTION: What's the first step to initialize the menu system and display the menu?
      
      // Function to initialize the menu system
      function initMenuSystem(menu) {
        // QUESTION: What function should you call to display the menu?
        displayMenuItems(menu);
      }
      
      // QUESTION: How can you start the menu system? What function should you call here?
      
      // Call the init function to start the menu system
      document.addEventListener("DOMContentLoaded", () => initMenuSystem(menu));