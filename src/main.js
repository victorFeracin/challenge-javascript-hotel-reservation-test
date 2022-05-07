function getCheapestHotel(input) { //DO NOT change the function's name.
  const typeOfClient = input.split(": ");
  let dates = typeOfClient[1].split(", ");
  let lakewoodPrice = 0,
    bridgewoodPrice = 0,
    ridgewoodPrice = 0;

  for (let i = 0; i < dates.length; i++) {
    dates[i] = new Date(dates[i]);
  }

  switch (typeOfClient[0]) {
    case "Regular":
      for (let i = 0; i < dates.length; i++) {
        if (dates[i].getDay() == 0 || dates[i].getDay() == 6) {
          lakewoodPrice += 90;
          bridgewoodPrice += 60;
          ridgewoodPrice += 150;
        } else {
          lakewoodPrice += 110;
          bridgewoodPrice += 160;
          ridgewoodPrice += 220;
        }
      }
      return findHotel(lakewoodPrice, bridgewoodPrice, ridgewoodPrice);
      break;

    case "Rewards":
      for (let i = 0; i < dates.length; i++) {
        if (dates[i].getDay() == 0 || dates[i].getDay() == 6) {
          lakewoodPrice += 80;
          bridgewoodPrice += 50;
          ridgewoodPrice += 40;
        } else {
          lakewoodPrice += 80;
          bridgewoodPrice += 110;
          ridgewoodPrice += 100;
        }
      }
      return findHotel(lakewoodPrice, bridgewoodPrice, ridgewoodPrice);
      break;

    default:
      break;
  }
}

function hasDuplicates(array) {
  return new Set(array).size !== array.length;
}

function findHotel(lakewoodPrice, bridgewoodPrice, ridgewoodPrice) {
  let min = Math.min(lakewoodPrice, bridgewoodPrice, ridgewoodPrice);
  if (hasDuplicates([lakewoodPrice, bridgewoodPrice, ridgewoodPrice])) {
    if (ridgewoodPrice == min) return "Ridgewood";
    else if (ridgewoodPrice != min && bridgewoodPrice == lakewoodPrice) return "Bridgewood";
  } else {
    if (lakewoodPrice == min) return "Lakewood";
    else if (bridgewoodPrice == min) return "Bridgewood";
    else return "Ridgewood";
  }
}

exports.getCheapestHotel = getCheapestHotel;
