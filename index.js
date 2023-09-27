const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(driversArray, name) {
  
  const matchingDrivers = driversArray.filter(driver => {
   
  
    const driverLowerCase = driver.toLowerCase();
    const nameLowerCase = name.toLowerCase();
    
  
    return driverLowerCase.includes(nameLowerCase);
  });

  return matchingDrivers;
}

function fuzzyMatch(driversArray, letters) {
  const matchingDrivers = driversArray.filter(driver => {

return driver.startsWith(letters)


  })
return matchingDrivers
}

// Sample data structure (an array of driver objects)
const driversData = [
  { name: 'Bobby', hometown: 'Pittsburgh' },
  { name: 'Sammy', hometown: 'New York' },
  { name: 'Sally', hometown: 'Cleveland' },
  { name: 'Annette', hometown: 'Los Angeles' },
  { name: 'Bobby', hometown: 'Tampa Bay' }
];

function matchName(dataArray, nameToMatch) {
  
  const matchingDrivers = dataArray.filter(driver => {

    return driver.name === nameToMatch;
  });

  return matchingDrivers;
}

