const cart_system = document.getElementById('cart_system')
const cart = document.getElementById('cart');
const cart_number = document.getElementById('cart_number')

button1.addEventListener('click', function(){
            
    counting_num +=1;
  
    cart_list.push(
      [product_name.innerText,
      `Quantity Ordered: ${quantity_num.value}`, 
      `Weight:  ${poll || '1kg'}`,
      price.innerText]
  )      
  cart_number.innerText = cart_list.length//cart_list.length
  console.log(cart_list)
})

const butt = document.createElement('button');
butt.innerText = 'Order Now';
butt.classList.add('butt')
cart_system.style.display = 'none';
var l = 0;
cart.addEventListener('click', function() {
  
  if(getComputedStyle(cart_system).display === 'block'){
    cart_system.style.display = 'none';
  }
  else{
    cart_system.style.display = 'block';
  }
  // Show the cart system
  

  // Clear previous items to avoid duplicates
  cart_system.innerHTML = '';

  // Loop through the cart list and create elements
  for (var i = 0; i < cart_list.length; i++) {
    // Debugging alert (you can remove this in production)
    alert(i);

    // Create a container div for each cart item
    const div1 = document.createElement('div');
    div1.classList.add('div11');

    // Create a close icon (you might want to add event listeners to this)
    const j = document.createElement('i');
    j.innerHTML = '&#10006;'; // HTML entity for cross icon
    j.addEventListener('click', function(){
      console.log(j.parentElement)
      let p = j.parentElement.id;
      p = p.replace('d')
      p = parseInt(p)
      j.parentElement.remove()
      cart_list.splice(p,1)
      if(cart_list.length ===0){
        cart_system.style.display = 'none';
      }
      
    })
    // Create h4 elements for each piece of information
    const h41 = document.createElement('h4');
    h41.innerText = cart_list[i][0]; // Example: item name
    const h42 = document.createElement('h4');
    h42.innerText = cart_list[i][1]; // Example: item price
    const h43 = document.createElement('h4');
    h43.innerText = cart_list[i][2]; // Example: item quantity
    const h44 = document.createElement('h4');
    h44.innerText = cart_list[i][3]; // Example: item total price
    l+=1
    div1.id = 'd'+l
    // Append elements to the item container
    div1.appendChild(j);
    div1.appendChild(h41);
    div1.appendChild(h42);
    div1.appendChild(h43);
    div1.appendChild(h44);
    // Append the item container to the cart system
    cart_system.appendChild(div1);
  }

  // Append a checkout button or other controls (assumed already defined as 'butt')
  cart_system.appendChild(butt);
});

/*function cart_m(){
  for(var i = 0; i<cart_list.length; i++){
    const div1 = document.createElement('div');
    const j = document.createElement('i');
    j.innerText = '&#10006'
    const h41 = document.createElement('h4');
    h41.innerText = cart_list[i][0];
    const h42 = document.createElement('h4');
    h42.innerText = cart_list[i][1];
    const h43 = document.createElement('h4')
    h43.innerText = cart_list[i][2];
    const h44 = document.createElement('h4')
    h44.innerText = cart_list[i][3];
    cart_system.appendChild(div1)
    div1.classList.add('div11')
    div1.appendChild(j)
    div1.appendChild(h41)
    div1.appendChild(h42)
    div1.appendChild(h43)
    div1.appendChild(h44)
    return div1

  }
}
cart.addEventListener('click', function(){  
  cart_system.innerHTML = `${cart_m().outerHTML}` + `${butt.outerHTML}`
  cart_system.style.display = 'block';
  
})*/