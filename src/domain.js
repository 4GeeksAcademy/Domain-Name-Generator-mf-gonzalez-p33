let pronoun = ["the", "our"];

let adj = ["great", "big"];

let noun = ["jogger", "racoon"];

let domain = ['.com', '.net', '.es', '.org'];

pronoun.forEach((articulo) => {
  adj.forEach((adj) => {
    noun.forEach((noun) => {
        domain.forEach((domain) => {
          console.log(articulo + adj + noun + domain);
      });
    });
  });
});
