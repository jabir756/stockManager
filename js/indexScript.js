$(document).ready(()=>{
    
    $('.return-container>button').hide();
    $('.list-products').hide();    
    $('.remove-product-container').hide();
    $('.add-product').hide();   

    $(document).on('click','.list-products-button',()=>{
        $('.options-container').hide();
        $('.remove-product-container').hide();
        $('.add-product').hide();
        $('.list-products').show();
        $('.return-container>button').show();
    });

    $(document).on('click', '.remove-products-button', () => {
        $('.options-container').hide();
        $('.list-products').hide();
        $('.add-product').hide();
        $('.remove-product-container').show();
        $('.return-container>button').show();
    });

    $(document).on('click','.add-products-button', () => {  
        $('.options-container').hide();
        $('.list-products').hide();    
        $('.remove-product-container').hide();       
        $('.add-product').show();
        $('.return-container>button').show();
    });

    $(document).on('click','.return-container>button', () => {
        $('.options-container').show();
        $('.list-products').hide();    
        $('.remove-product-container').hide();       
        $('.add-product').hide();
        $('.return-container>button').hide();
    });


})