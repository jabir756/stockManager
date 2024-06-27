$(document).ready(() => {

    let productName = "default";
    let productPrice = 0;

    //get values
    productName = $(".product-name").trim().val().toString().toLowerCase();
    productPrice = $(".product-price").trim().val().toNumber();

    let productNameTab = [];
    let productPriceTab = [];

    //on click to add product
    $(".add").on("click", () => {
        productNameTab.push(productName);
        productPriceTab.push(productPrice);

        const fs = require("fs");

        // Objet à écrire dans le fichier JSON
        const data = {
            name: productNameTab.join,
            price: productPriceTab.join,
        };

        // Convertir l'objet en une chaîne JSON
        const jsonData = JSON.stringify(data, null, 2);

        // Chemin du fichier JSON
        const filePath = "./list.json";

        // Écrire dans le fichier
        fs.writeFile(filePath, jsonData, "utf8", (err) => {
            if (err) {
                console.error("Erreur lors de l'écriture du fichier JSON:", err);
                return;
            }
            console.log("Fichier JSON écrit avec succès.");
        });
    });

    $('.search').on('click',() => {

        




    })


});
