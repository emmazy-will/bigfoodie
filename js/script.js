// Sample cart items array (replace this with your actual cart data)
let cartItems = [
    { name: 'Hambuger', price: 5 },
    { name: 'Pizza', price: 12 },
    { name: 'Hot dog', price: 20 },
    { name: 'cocunut rice', price: 45 },
    { name: 'jellof rice', price: 14 },
    { name: 'fried rice', price: 20 },
    { name: 'pop corn', price: 15 },
    { name: 'doughnut', price: 9 },
    { name: 'egg row', price: 11 },
];

const cartDetails = document.getElementById('cart-details');
let totalAmount = 0;

// Function to display cart items
function displayCartItems() {
    // Clear previous items
    cartDetails.innerHTML = '';
    totalAmount = 0; // Reset total amount
    
    cartItems.forEach(item => {
        let itemDiv = document.createElement('div');
        itemDiv.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartDetails.appendChild(itemDiv);
        totalAmount += item.price; // Update total amount
    });
}

// Initially display items when the page loads
displayCartItems();

// Function to check total
document.getElementById('check').addEventListener('click', function () {
    document.getElementById('total').textContent = `Total: $${totalAmount.toFixed(2)}`; // Update the displayed total amount
});

// Function to place the order
document.getElementById('order').addEventListener('click', function () {
    alert('Order placed successfully!'); // Placeholder action
    cartItems = []; // Clear cart items
    displayCartItems(); // Update display
    document.getElementById('total').textContent = 'Total: $0.00'; // Reset total display
});

  // Display cart items and calculate total 
  items.forEach(item => {
      let itemDiv = document.createElement('div');
      itemDiv.textContent = `${item.name} - $${item.price.toFixed(2)}`;
      cartDetails.appendChild(itemDiv);
      totalAmount += item.price; // Update total amount
  });

  // Function to check total
  document.getElementById('check').addEventListener('click', function () {
      totalElement.textContent = totalAmount.toFixed(2); // Update the displayed total amount
  });

  // Function to place an order
  document.getElementById('order').addEventListener('click', function() {
      let name = document.getElementById('input-name').value.trim();
      let address = document.getElementById('input-address').value.trim();
      let phone = document.getElementById('input-phone').value.trim();
      
      if (!name || !address || !phone) {
          alert('Please fill in all fields.');
          return;
      }

      // Here you can add logic to process the order
      alert(`Order placed! Total amount: $${totalAmount.toFixed(2)}`);
      // Clear input fields after placing the order
      document.getElementById('input-name').value = '';
      document.getElementById('input-address').value = '';
      document.getElementById('input-phone').value = '';
  });
    // Event listener for the "Place Order" button
    document.getElementById('order').addEventListener('click', function() {
        // Display a confirmation dialog
        const confirmOrder = confirm("Are you sure you want to place the order?");
        
        if (confirmOrder) {
            // Logic to handle order placement
            // For example, clear the cart and notify the user
            alert("Order placed successfully!");
            
            // Optionally, you can clear the cart here
            cartItems = []; // Assuming you have cartItems defined in your script
            updateLocalStorage(); // Update Local Storage
            document.querySelector('.total').innerText = 'Total: $0'; // Reset total display
        } else {
            alert("Order canceled.");
        }
    });

   // Back button functionality to go to the menu page
   document.getElementById('back').addEventListener('click', function() {
    // Navigate to the menu page (ensure 'menu.html' exists)
    window.location.href = 'menu.html';
   });