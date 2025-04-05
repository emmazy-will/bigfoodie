let menu = [
    {image: 'h.webp', title: 'Hambugar', price: 5 },
    {image: 'pp.jpg', title: 'Pizza', price: 12},
    {image: 'ww.webp', title: 'Hot dog', price: 20},
    {image: 'cc.jpg', title: 'Cocunut rice', price: 25},
    {image: 'jj.webp', title: 'Jellof rice', price: 14},
    {image: 'mmm.webp', title: 'Fried rice', price: 20},
    {image: 'pop.webp', title: 'Pop corn', price: 15},
    {image: 'Doghnut', title: 'doni.webp', price: 9},
    {image: 'crispy-egg-rolls-white-background-golden-crunchy-eggrolls-appetizer-fried_906385-30586.jpg', title: 'Egg roll', price: 11}
 ];
let localCart = localStorage.getItem('cart')
let Cart = !localCart ? [] : JSON.parse(localCart)
 let cart = [];
 let total = 0;
 
 // Function to update the cart count
 function updateCartCount() {
     document.getElementById('span').textContent = cart.length;
 }
 function updateTotalPrice(total) {
   let totalPriceElement = document.getElementById('total-price');
   if (totalPriceElement) {
     totalPriceElement.textContent = `Total: $${total}`;
   } else {
      return total
   }
   
 }
 
 // Function to add item to cart
 function addToCart(item) {
     cart.push(item);
     total += item.price;
     updateCartCount();
     updateTotalPrice();
      
 }
 
 // Function to check the total price
 function checkTotal() {
     alert(`Your Total is: $${total} thanks for patronizing`);
 }
 
 document.getElementById('find-item').addEventListener('click',()=>{
    let searchInput = document.getElementById('search-for-item')
    let dishName = searchInput.value.trim().toUpperCase()
    let regexp = /^[a-zA-Z ]*$/
    if (dishName == ''){
       alert('input dish name')
    }
    else if(!regexp.test(dishName)){
       alert('a dish name cannot contain numbers or characters')
       searchInput.value = ''
    }
    else{
       let food = menu.find((f)=> f.title.toUpperCase() == dishName)
       if(!food){
          alert('dish not in menu')
          searchInput.value =''
       }else{
          addToCart(food)
          alert(`${food.title} \nprice :$${food.price} \n added successfully`)
          searchInput.value = ''
       }
    }
 })
 
 document.getElementById('add').addEventListener('click', () => {
     let item = menu.find((f) => f.title === 'Hambugar');
     addToCart(item);
     alert('Hambuger  added successfully')
 });
 
 document.getElementById('add-btn').addEventListener('click', () => {
    let item = menu.find((f) => f.title === 'Pizza');
    addToCart(item);
    alert('Pizza added successfully')
 });
 
 document.getElementById('add-btn-one').addEventListener('click', () => {
    let item = menu.find((f) => f.title === 'Hot dog');
    addToCart(item);
    alert('Hot dog added successfully')
 });
 
 document.getElementById('add-btn-two').addEventListener('click', () => {
    let item = menu.find((f) => f.title === 'Cocunut rice');
    addToCart(item);
    alert('Cocunut rice added successfully')
 });
 
 document.getElementById('add-btn-three').addEventListener('click', () => {
    let item = menu.find((f) => f.title === 'Jellof rice');
    addToCart(item);
    alert('Jellof rice added successfully')
 });
 
 document.getElementById('add-btn-four').addEventListener('click', () => {
    let item = menu.find((f) => f.title === 'Fried rice');
    addToCart(item);
    alert('Fried rice added successfully')
 });
 
 document.getElementById('add-btn-five').addEventListener('click', () => {
    let item = menu.find((f) => f.title === 'Pop corn');
    addToCart(item);
    alert('Pop corn added successfully')
 });
 
 document.getElementById('add-btn-six').addEventListener('click', () => {
    let item = menu.find((f) => f.title === 'Egg roll');
    addToCart(item);
    alert('egg row')
 });
 
 document.getElementById('add-btn-seven').addEventListener('click', () => {
    let item = menu.find((f) => f.title === 'Doughnut');
    addToCart(item);
    alert('Doughnut added successfully')
 });

  // Add event listeners to all the add to cart buttons
let addButtons = document.querySelectorAll('.add');
addButtons.forEach(button => {
    button.addEventListener('click', () => {
        let item = menu.find((f) => f.title === button.getAttribute('data-title'));
        addToCart(item);
        alert(`${item.title} \nprice :$${item.price} \n added successfully`)
    });
});

// Add event listeners to the quantity input fields
const quantityInputs = document.querySelectorAll('.quantity-input');
quantityInputs.forEach(input => {
  input.addEventListener('change', () => {
    const itemIndex = input.dataset.itemIndex;
    const newQuantity = parseInt(input.value);
    updateCartQuantity(itemIndex, newQuantity);
  });
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