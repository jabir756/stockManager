document.addEventListener('DOMContentLoaded', () => {

    document.addEventListener('click', (event) => {
        if (event.target.classList.contains('list-products-button')) {
            window.location.href = 'listProducts.html';
        } else if (event.target.classList.contains('remove-products-button')) {
            window.location.href = 'removeProducts.html';
        } else if (event.target.classList.contains('add-products-button')) {
            window.location.href = 'addProducts.html';
        }
    });

});
