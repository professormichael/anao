button2.addEventListener('click', function(){
    div.style.display = 'none';
})
img.forEach(each =>{
    each.addEventListener('click', function(){
        div.style.display = 'grid'
        document.body.style.position = 'relative';
        product_selection.addEventListener('change', function(){
            poll = product_selection.value;   
})    
    window.location.href = '#div_upp';
    product_name.innerText = `Product Name: ${each.alt}`;    
    continue1.style.display = 'block';
    click_name.innerText = `Product Name: ${each.alt}`;
    click_quantity.innerText = `Quantity Ordered: ${quantity_num.value}`;
    
    if(poll !== ''){
        click_size.innerText = `Weight:  ${poll}`;

    }
    if(poll === ''){
        click_size.innerText = `Weight: 1KG`
    }
    if(each.alt === 'Rice'){
        i = img1_price[0];
        price.innerText = `Total Price: NGN ${quantity_num.value * parseInt(img_price[0])}`
    }
    else if(each.alt === 'Beans'){
        i = img1_price[1];
        price.innerText = `Total Price: NGN ${quantity_num.value * parseInt(img_price[1])}`
    }
    else if(each.alt === 'Potatoes'){
        i = img1_price[2];
        price.innerText = `Total Price: NGN ${quantity_num.value * parseInt(img_price[2])}`
    }
    else if(each.alt === 'Yam'){
        i = img1_price[3];
        price.innerText = `Total Price: NGN ${quantity_num.value * parseInt(img_price[3])}`
    }
    
})

})
    


img1.src = img_list[a]
img2.src = img_list[b]
img3.src = img_list[c]
img1.alt = img_alt[a]
img2.alt = img_alt[b]
img3.alt = img_alt[c]
img1_name.innerText = img1.alt;
img1_price.innerText = `NGN ${img_price[a]}`;
img2_price.innerText = `NGN ${img_price[b]}`;
img3_price.innerText = `NGN ${img_price[c]}`;
img2_name.innerText = img2.alt;
img3_name.innerText = img3.alt;

document.getElementById('swipeRight').addEventListener('click', function(){
    a+=1
    b+=1
    c +=1;
    img1.src = img_list[a]
    img2.src = img_list[b]
    img3.src = img_list[c]
    img1.alt = img_alt[a]
    img2.alt = img_alt[b]
    img3.alt = img_alt[c]
    img1_name.innerText = img1.alt;
    img2_name.innerText = img2.alt;
    img3_name.innerText = img3.alt;
    img1_price.innerText = `NGN ${img_price[a]}`;
    img2_price.innerText = `NGN ${img_price[b]}`;
    img3_price.innerText = `NGN ${img_price[c]}`;
    const h = getComputedStyle(div_img2)
    
    if(h.display ==='none'){
      console.log(a)
      if(a>img_list.length-1){
        
        
        c -=1
        b -=1
        a -=1
        img3.src = img_list[c]
        img2.src = img_list[b]
        img1.src = img_list[a]
        img1.alt = img_alt[a]
        img2.alt = img_alt[b]
        img3.alt = img_alt[c]
        img1_name.innerText = img1.alt;
        img2_name.innerText = img2.alt;
        img3_name.innerText = img3.alt;
        img1_price.innerText = `NGN ${img_price[a]}`;
        img2_price.innerText = `NGN ${img_price[b]}`;
        img3_price.innerText = `NGN ${img_price[c]}`;
    }
    
    }
    else{
      if(c>img_list.length-1){
        
        c -=1
        b -=1
        a -=1
        img3.src = img_list[c]
        img2.src = img_list[b]
        img1.src = img_list[a]
        img1.alt = img_alt[a]
        img2.alt = img_alt[b]
        img3.alt = img_alt[c]
        img1_name.innerText = img1.alt;
        img2_name.innerText = img2.alt;
        img3_name.innerText = img3.alt;
        img1_price.innerText = `NGN ${img_price[a]}`;
        img2_price.innerText = `NGN ${img_price[b]}`;
        img3_price.innerText = `NGN ${img_price[c]}`;
    }
    }

})
document.getElementById('swipeLeft').addEventListener('click', function(){
    a-=1
    b-=1
    c -=1;
    img1.src = img_list[a]
    img2.src = img_list[b]
    img3.src = img_list[c]
    img1.alt = img_alt[a]
    img2.alt = img_alt[b]
    img3.alt = img_alt[c]
    img1_name.innerText = img1.alt;
    img2_name.innerText = img2.alt;
    img3_name.innerText = img3.alt;
    img1_price.innerText = `NGN ${img_price[a]}`;
    img2_price.innerText = `NGN ${img_price[b]}`;
    img3_price.innerText = `NGN ${img_price[c]}`;
    if(a<0){
        
        c +=1
        b +=1
        a +=1
        img3.src = img_list[c]
        img2.src = img_list[b]
        img1.src = img_list[a]
        img1.alt = img_alt[a]
        img2.alt = img_alt[b]
        img3.alt = img_alt[c]
        img1_name.innerText = img1.alt;
        img2_name.innerText = img2.alt;
        img3_name.innerText = img3.alt;
        img1_price.innerText = `NGN ${img_price[a]}`;
        img2_price.innerText = `NGN ${img_price[b]}`;
        img3_price.innerText = `NGN ${img_price[c]}`;
    }
    
})