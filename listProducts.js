document.addEventListener('DOMContentLoaded', () => { 

    let tabName = ['biere'];
    let tabPrice = [4];

    let find = false;
    let index = -1;

    // Fonction pour mettre à jour la liste des produits affichés
    function updateProductList() {
        const ul = document.querySelector('.list-products-container > nav > ul');
        ul.innerHTML = '';
        for(let i = 0; i < tabName.length; i++){
            const li = document.createElement('li');
            li.textContent = `${tabName[i]} = ${tabPrice[i]}$`;
            ul.appendChild(li);
        }
    }

    // Initialiser la liste des produits
    updateProductList();

    // Ajouter un produit
    document.querySelector('.add').addEventListener('click', () => {
        let productName = document.querySelector('.products-name').value.trim();
        let productPrice = parseFloat(document.querySelector('.products-price').value.trim());

        if (productName && !isNaN(productPrice)) {
            tabName.push(productName);
            tabPrice.push(productPrice);
            updateProductList();
            document.querySelector('.products-name').value = '';
            document.querySelector('.products-price').value = '';
        } else {
            alert('Veuillez entrer un nom de produit et un prix valides.');
        }
    });

    // Rechercher un produit
    document.querySelector('.search').addEventListener('click', () => {
        let productToRemove = document.querySelector('.remove-product').value.trim().toLowerCase();
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
    document.querySelector('.remove').addEventListener('click', () => {
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
    document.addEventListener('click', (event) => {
        if (event.target.classList.contains('return')) {
            window.location.href = '../index.html';
        }
    });

});
