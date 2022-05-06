
function addProducts(data) {

  // forEach (boucler) permet d'executer les fonction donnée dans un tableau (array)

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