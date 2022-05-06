
// 1 - Récupérer les produits de l'api
// 2 - Parcours les produits récupérer et les insérer dans le DOM

// Pointer sur élément du dom
let container = document.querySelector('#items')

// Récupération des produits
fetch('http://localhost:3000/api/products')
  .then(blob => blob.json())
  .then(data => {
      console.log(data)

      // Parcours des produits
      for(item of data){
          console.log(item)

        // Insertion dans le DOM avec un template
        container.insertAdjacentHTML('beforeend', `
            <a href="./product.html?id=${item._id}">
                <article>
                    <img src="${item.imageUrl}" alt="${item.altTxt}">
                    <h3 class="productName">${item.name}</h3>
                    <p class="productDescription">${item.description}</p>
                </article>
            </a>
        `)

    //       let article = document.createElement('article')
    //       let img = document.createElement('img')
    //       let h3 = document.createElement('h3')
    //       let p = document.createElement('p')

    //       article.appendChild(img)
    //       article.appendChild(h3)
    //       article.appendChild(p)

    //       a.appendChild(article)

    //       container.appendChild(a)
       }
    })
  .catch(error => console.log(error) )










// function addProducts(data) {

//   // forEach (boucler) permet d'executer les fonction donnée dans un tableau (array)

//   data.forEach((canape) => {
//     const { _id, imageUrl, altTxt, name, description } = canape;
//     const sofa = makeAnchor(_id);
//     const article = document.createElement("article");
//     const image = makeImage(imageUrl, altTxt);
//     const h3 = makeH3(name);
//     const p = makeParagraph(description);
//     appendElementsToArticle(article, [image, h3, p]);
//     appendArticleTosofa(sofa, article);
//   });
// }






// function makeAnchor(id) {

//   // Pour récuperer les id des images et crée l'élément a
//   const sofa = document.createElement("a");
//   sofa.href = "./product.html?id=" + id;
//   return sofa;
// }