


// Quand le Then au dessus reçois des data il les renvois à addProducts pour faire fonctionneer les const et fonction en dessous


function addProducts(data) {

  // forEach permet d'executer les fonction donnée dand un tableau (array)

  data.forEach((canape) => {
    const { _id, imageUrl, altTxt, name, description } = canape;
    const sofa = makeAnchor(_id);
    const article = document.createElement("article");
    const image = makeImage(imageUrl, altTxt);
    const h3 = makeH3(name);
    const p = makeParagraph(description);
    appendElementsToArticle(article, [image, h3, p]);
    appendArticleTosofa(sofa, article);
  });
}






function makeAnchor(id) {

  // Pour récuperer les id des images et crée l'élément a
  const sofa = document.createElement("a");
  sofa.href = "./product.html?id=" + id;
  return sofa;
}