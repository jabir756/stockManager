$(document).ready(()=>{

    $(document).on('click','.list-products-button',()=>{
        window.location.href = '../html/listProducts.html';      
    });

    $(document).on('click', '.remove-products-button', () => {
        window.location.href = '../html/removeProducts.html';
    });

    $(document).on('click','.add-products-button', () => {       
        window.location.href = '../html/addProducts.html';
    });


})