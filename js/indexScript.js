$(document).ready(()=>{

    $(document).on('click','.list-products-button',()=>{
        window.location.href = '../html/listProducts.html';      
    });

    $(document).on('click', '.return', () => {
        window.location.href = '../index.html';
    });

    $(document).on('click','.add-products-button', () => {       
        window.location.href = '../html/addProducts.html';
    });


})