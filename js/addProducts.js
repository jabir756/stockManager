
$(document).ready(()=>{

    let name;
    let price;

    $(document).on('click','.validation',()=>{
        $('.product-name').value = name;
        $('.product-price').value = price;
        tab.push(name, price);
    });
    
    $(document).on('click','.return',()=>{
        window.location.href = '../index.html';
    });
    

});

