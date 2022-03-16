const returningGuys = () => {
  const members = ["Sujit", "Vignesh", "Seere", " Kams", "Goku"]; //should be fetched from the discord api in the future
  let removingIndex = Math.round(Math.random() * members.length); // for now single value
  return members.filter((elem) => elem !== members[removingIndex]);
};

module.exports = returningGuys;
