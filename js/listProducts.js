$(document).ready(() => { 

    let tabName = ['biere'];
    let tabPrice = [4];

    let find = false;
    let index = -1;

    // Fonction pour mettre à jour la liste des produits affichés
    function updateProductList() {
        $('.list-products-container>nav>ul').empty();
        for(let i = 0; i < tabName.length; i++){
            $('.list-products-container>nav>ul').append(`
                <li>${tabName[i]} = ${tabPrice[i]}$</li>
            `);
        }
    }

    // Initialiser la liste des produits
    updateProductList();

    // Ajouter un produit
    $('.add').on('click', () => {
        let productName = $('.products-name').val().trim();
        let productPrice = parseFloat($('.products-price').val().trim());

        if (productName && !isNaN(productPrice)) {
            tabName.push(productName);
            tabPrice.push(productPrice);
            updateProductList();
            $('.products-name').val('');
            $('.products-price').val('');
        } else {
            alert('Please enter a valide name and price.');
        }
    });

    // Rechercher un produit
    $('.search').on('click', () => {
        let productToRemove = $('.remove-product').val().trim().toLowerCase();
        find = false;
        index = -1;

        for(let i = 0; i < tabName.length; i++){
            if(tabName[i].toLowerCase() === productToRemove) {
                alert(`Your product is: ${tabName[i]} = ${tabPrice[i]}$`);
                find = true;
                index = i;
                break;
            }
        }

        if(!find) {
            alert(`Your product is not in the list`);
        }
    });

    // Supprimer un produit
    $('.remove').on('click', () => {
        if(find && index > -1) {
            let removedProductName = tabName[index];
            let removedProductPrice = tabPrice[index];
            tabName.splice(index, 1);
            tabPrice.splice(index, 1);
            updateProductList();
            alert(`Your product ${removedProductName} = ${removedProductPrice}$ is deleted`);
            find = false;
            index = -1;
        } else {
            alert('Please search product to delete first.');
        }
    });

});
