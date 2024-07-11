let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

pronoun.forEach((articulo) => {
  adj.forEach((adj) => {
    noun.forEach((noun) => {
      console.log(articulo + adj + noun + ".com");
    });
  });
});
