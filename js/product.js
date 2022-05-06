const url = new URL(window.location.href);
const searchParam = new URLSearchParams(url.search);
let id = "";
if (searchParam.get("id")) {
  id = searchParam.get("id");
} else {
  if (confirm("pas de produits selectionner un produit")) {
    window.location.href = "index.html";
  }
}
console.log(id);

const productImg = document.querySelector(".item__img");
const productName = document.querySelector("#title");
const productPrice = document.querySelector("#price");
const productDesc = document.querySelector("#description");
const productColor = document.querySelector("#colors");
const quantiter = document.querySelector("#quantity");
const pImage = document.createElement("img");
const productTitle = document.querySelector(".item__content__titlePrice");
const parentDescrip = document.querySelector(".item__content__description");
const ajouterProduit = document.querySelector("#addToCart");

function panier() {
  let panier = localStorage.getItem("panier");
  if (panier == null) {
    return [];
  } else {
    return JSON.parse(panier);
  }
}

fetch("http://localhost:3000/api/products/" + id)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    pImage.setAttribute("src", data.imageUrl);
    pImage.setAttribute("alt", data.altTxt);
    productImg.appendChild(pImage);
    productPrice.textContent = data.price;
    productName.textContent = data.name;
    productTitle.appendChild(productName);
    productDesc.textContent = data.description;
    parentDescrip.appendChild(productDesc);
    for (let color of data.colors) {
      const optionColor = document.createElement("option");
      optionColor.setAttribute("value", color);
      optionColor.textContent = color;
      productColor.appendChild(optionColor);
    }
    ajouterProduit.addEventListener("click", function () {
      let infoPanier = panier();
      let produit = new Object();
      produit.id = id;
      produit.color = productColor.value;
      produit.quantiter = parseInt(quantiter.value);
      let produitIdentique = false;
      for (let objet of infoPanier) {
        if (objet.id == produit.id && objet.color == produit.color) {
          objet.quantiter += produit.quantiter;
          produitIdentique = true;
        }
      }
      if (produitIdentique == false) {
        infoPanier.push(produit);
      }
      localStorage.setItem("panier", JSON.stringify(infoPanier));
      if (
        confirm(
          "Votre produit a été ajouter au panier pou, cliquer sur OK, consulter le panier ou annuler pour continuer votre commande."
        )
      ) {
        window.location.href = "cart.html";
      }
    });
  });



