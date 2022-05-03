const findTheOldest = function(people) {
  const currentYear = 2022;
  people = people.sort((personA, personB) => {
    let ageA = ageB = 0;
    if (!("yearOfDeath" in personA)) {
      ageA = currentYear - personA.yearOfBirth;
    } else {
      ageA = personA.yearOfDeath - personA.yearOfBirth;
    }
    if (!("yearOfDeath" in personB)) {
      ageB = currentYear - personB.yearOfBirth;
    } else {
      ageB = personB.yearOfDeath - personB.yearOfBirth;
    }

    return ageA > ageB ? -1 : 1;
  });
  // return people.slice(0, 1);
  return people[0];
  // console.log(people[0].name);
};

// Do not edit below this line
module.exports = findTheOldest;
