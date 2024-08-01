button2.addEventListener('click', function(){
    div.style.display = 'none';
})
continue1.addEventListener('click', function(){
    div.style.display = 'none';
    const a = document.createElement('a');
    a.href = `https://wa.me/2348158549310?text=${encodeURIComponent(`${click_name.innerText} \n ${click_quantity.innerText} \n ${click_size.innerText} \n ${price.innerText} \n I will be expecting your response on this`)}`;
    a.click()
    document.body.appendChild(a);

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
        alert(each.alt)
        if(each.alt === 'Rice'){
            price.innerText = `Total Price: NGN ${quantity_num.value * parseInt(img_price[0])}`
        }
        else if(each.alt === 'Beans'){
            price.innerText = `Total Price: NGN ${quantity_num.value * parseInt(img_price[1])}`
        }
        else if(each.alt === 'Potatoes'){
            price.innerText = `Total Price: NGN ${quantity_num.value * parseInt(img_price[2])}`
        }
        else if(each.alt === 'Yam'){
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
        alert(true)
        
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