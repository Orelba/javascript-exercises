const findTheOldest = function(peopleArr) {
  peopleArr.forEach(person => {
    if (person.yearOfDeath) {
      person.age = person.yearOfDeath - person.yearOfBirth
    } else {
      person.age = new Date().getFullYear() - person.yearOfBirth
    }
  });
  const ordered = peopleArr.sort((a, b) => a.age < b.age ? 1 : -1)
  return ordered[0]
};

// Do not edit below this line
module.exports = findTheOldest;
