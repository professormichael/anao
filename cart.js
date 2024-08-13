document.getElementById('order-success-container').style.display = 'none';
const cart_system = document.getElementById('cart_system')
const cart = document.getElementById('cart');
const cart_number = document.getElementById('cart_number')
button1.addEventListener('click', function(){            
  counting_num +=1;
  alert(`Total Price: NGN ${quantity_num.value * parseInt(iii)}`)
  cart_list.push(
      [product_name.innerText,
      `Quantity Ordered: ${quantity_num.value}`, 
      `Weight:  ${poll || '1kg'}`,
      `Total Price: NGN ${parseInt( price.innerText.replace('Total Price: NGN ', ''))* parseInt(quantity_num.value)}`]
  )      
  cart_number.innerText = cart_list.length//cart_list.length
  
})

document.getElementById('order-success-container').addEventListener('click', function(){
  if(getComputedStyle(document.getElementById('order-success-container')).display === 'none'){
    document.getElementById('order-success-container').style.display = 'block';
  }
  else{
    document.getElementById('order-success-container').style.display = 'none';
  }
})
function clearOrderSYS(){
  product_name.innerText = '';
  quantity_num.value = '';
  product_selection.value = '';
  click_name.innerText = '';
  click_quantity.innerText = '';
  click_size.innerText = '';
  price.innerText ='';


}
document.getElementById('button1').addEventListener('click', function() {
  if(getComputedStyle(document.getElementById('order-success-container')).display === 'none'){
    document.getElementById('order-success-container').style.display = 'block';
  }
  else{
    document.getElementById('order-success-container').style.display = 'block';
  }
  var orderSuccessMessage = document.getElementById('orderSuccessMessage');
  orderSuccessMessage.classList.add('show');
  window.location.href = '#order-success-container'
  // Optional: Remove the 'show' class after the animation completes if you want to reset it
  setTimeout(function() {
    button2.click()
    document.getElementById('order-success-container').style.display = 'none';
    orderSuccessMessage.classList.remove('show');
    clearOrderSYS()
  }, 3000); // Extend this timeout to 3s to allow all animations to complete
});

const butt = document.createElement('button');
butt.innerText = 'Order Now';
butt.classList.add('butt')
cart_system.style.display = 'none';
var l = 0;
butt.addEventListener('click', function(){
  div.style.display = 'none';
  const a = document.createElement('a');
  a.href = `https://wa.me/2348158549310?text=${encodeURIComponent(`${cart_list.toString()}`)}`;
  a.click();
  document.body.appendChild(a);

})

cart.addEventListener('click', function() {
  
  if(getComputedStyle(cart_system).display === 'block'){
    cart_system.style.display = 'none';
  }
  else{
    cart_system.style.display = 'block';
    butt.style.display = 'block';
  }
  if(cart_list.length === 0){
    cart_system.innerHTML = '<p> There Is Nothing In Your Cart</p>';  
    butt.style.display = 'none';
  }
  else{
    cart_system.innerHTML = '';
  }
  for (var i = 0; i < cart_list.length; i++) {
    const div1 = document.createElement('div');
    div1.classList.add('div11');
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
    div1.appendChild(j);
    div1.appendChild(h41);
    div1.appendChild(h42);
    div1.appendChild(h43);
    div1.appendChild(h44);
    cart_system.appendChild(div1);
  }
  cart_system.appendChild(butt);
});