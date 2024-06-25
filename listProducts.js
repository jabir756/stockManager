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
            alert('Veuillez entrer un nom de produit et un prix valides.');
        }
    });

    // Rechercher un produit
    $('.search').on('click', () => {
        let productToRemove = $('.remove-product').val().trim().toLowerCase();
        find = false;
        index = -1;

        for(let i = 0; i < tabName.length; i++){
            if(tabName[i].toLowerCase() === productToRemove) {
                alert(`Votre produit est: ${tabName[i]} = ${tabPrice[i]}$`);
                find = true;
                index = i;
                break;
            }
        }

        if(!find) {
            alert(`Votre produit n'est pas dans la liste`);
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
            alert(`Votre produit ${removedProductName} = ${removedProductPrice}$ est supprimé`);
            find = false;
            index = -1;
        } else {
            alert('Veuillez d\'abord rechercher un produit à supprimer.');
        }
    });

    // Redirection vers une autre page
    $(document).on('click', '.return', () => {
        window.location.href = 'index.html';
    });

});
