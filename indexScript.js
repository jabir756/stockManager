$(document).ready(()=>{

    $(document).on('click','.list-products-button',()=>{
        window.location.href = 'listProducts.html';      
    });

    $(document).on('click', '.remove-products-button', () => {
        window.location.href = 'removeProducts.html';
    });

    $(document).on('click','.add-products-button', () => {       
        window.location.href = 'addProducts.html';
    });


})