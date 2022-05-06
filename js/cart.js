const url = "http://localhost:3000/api/products/";

const sectionCartItem = document.getElementById("cart__items");
const totalQuantity = document.getElementById("totalQuantity");
const totalPrice = document.getElementById("totalPrice");
let article = "";
let divCartItemImg = "";
let img = "";
let divCartItemContent = " ";
let divCartItemContentDescription = "";
let h2 = "";
let pColors = "";
let pPrice = "";
let divCartItemContentSettings = "";
let divCartItemContentSettingQuantity = "";
let pQuantiter = "";
let inputProduitQuantiter = "";
let divCartItemContentsettingsDelete = "";
let pDeleteItem = "";

function creatElement() {
  article = document.createElement("article");
  divCartItemImg = document.createElement("div");
  img = document.createElement("img");
  divCartItemContent = document.createElement("div");
  divCartItemContentDescription = document.createElement("div");
  h2 = document.createElement("h2");
  pColors = document.createElement("p");
  pPrice = document.createElement("p");
  divCartItemContentSettings = document.createElement("div");
  divCartItemContentSettingQuantity = document.createElement("div");
  pQuantiter = document.createElement("p");
  inputProduitQuantiter = document.createElement("input");
  divCartItemContentsettingsDelete = document.createElement("div");
  pDeleteItem = document.createElement("p");
  sectionCartItem.appendChild(article);
  article.appendChild(divCartItemImg);
  divCartItemImg.appendChild(img);
  article.appendChild(divCartItemContent);
  divCartItemContent.appendChild(divCartItemContentDescription);
  divCartItemContentDescription.appendChild(h2);
  divCartItemContentDescription.appendChild(pColors);
  divCartItemContentDescription.appendChild(pPrice);
  divCartItemContent.appendChild(divCartItemContentSettings);
  divCartItemContentSettings.appendChild(divCartItemContentSettingQuantity);
  divCartItemContentSettingQuantity.appendChild(pQuantiter);
  divCartItemContentSettingQuantity.appendChild(inputProduitQuantiter);
  divCartItemContentSettings.appendChild(divCartItemContentsettingsDelete);
  divCartItemContentsettingsDelete.appendChild(pDeleteItem);
}

function addClass() {
  article.classList.add("cart__item");
  divCartItemImg.classList.add("cart__item__img");
  divCartItemContent.classList.add("cart__item__content");
  divCartItemContentDescription.classList.add(
    "cart__item__content__description"
  );
  divCartItemContentSettings.classList.add("cart__item__content__settings");
  divCartItemContentSettingQuantity.classList.add(
    "cart__item__content__settings__quantity"
  );
  inputProduitQuantiter.classList.add("itemQuantity");
  divCartItemContentsettingsDelete.classList.add(
    "cart__item__content__settings__delete"
  );
  pDeleteItem.classList.add("deleteItem");
}

function addAttribut(id, info, data) {
  inputProduitQuantiter.setAttribute("type", "number");
  inputProduitQuantiter.setAttribute("name", "itemQuantity");
  inputProduitQuantiter.setAttribute("min", "1");
  inputProduitQuantiter.setAttribute("max", "100");
  inputProduitQuantiter.setAttribute("value", info.quantiter);
  img.setAttribute("src", data.imageUrl);
  img.setAttribute("alt", data.altTxt);

  article.setAttribute("data-id", id);
  article.setAttribute("data-color", info.color);
  h2.textContent = data.name;
  pColors.textContent = info.color;
  pPrice.textContent = data.price;
  pQuantiter.textContent = "Qté : ";
  pDeleteItem.textContent = "Supprimer";
}
function infoPanier() {
  let panier = localStorage.getItem("panier");
  if (panier == null) {
    return [];
  } else {
    return JSON.parse(panier);
  }
}
function afficherPanier() {
  let panier = infoPanier();
  for (let info of panier) {
    let id = info.id;
    fetch(url + id)
      .then((res) => res.json())
      .then((data) => {
        creatElement();
        addClass();
        addAttribut(id, info, data);
        console.log(data);
      });
  }
}

function totalPriceQuantity() {
  let panier = infoPanier();
  let quantity = 0;
  let Price = 0;
  for (let info of panier) {
    fetch(url + info.id)
      .then((res) => res.json())
      .then((data) => {
        quantity += info.quantiter;
        Price += info.quantiter * data.price;
        totalPrice.textContent = Price;
        totalQuantity.textContent = quantity;
      });
  }
}
afficherPanier();
totalPriceQuantity();
// les regExp pour valider email & addresse-postal//
let emailRegExp = new RegExp(
  
);
let addressRegExp = new RegExp(
  
);