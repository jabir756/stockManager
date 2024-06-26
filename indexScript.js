$(document).ready(()=>{
    
    $('.list-products').hide();    
    $('.remove-product-container').hide();
    $('.add-product').hide();   

    $(document).on('click','.list-products-button',()=>{
        $('.remove-product-container').hide();
        $('.add-product').hide();
        $('.list-products').show();
    });

    $(document).on('click', '.remove-products-button', () => {
        $('.list-products').hide();
        $('.add-product').hide();
        $('.remove-product-container').show();
    });

    $(document).on('click','.add-products-button', () => {  
        $('.list-products').hide();    
        $('.remove-product-container').hide();       
        $('.add-product').show();
    });


})