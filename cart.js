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

})