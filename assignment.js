function kilometerToMeter(km) {
  if (km < 0) {
    return "Please Input Positive Value?";
  } else {
    return km * 1000;
  }
}

function budgetCalculator(watch, phone, laptop) {
  let watchPrice = 50;
  let phonePrice = 100;
  let laptopPrice = 500;

  if (watch < 0 || phone < 0 || laptop < 0) {
    return "Please Input Positive Value?";
  }
  return watch * watchPrice + phone * phonePrice + laptop * laptopPrice;
}

function hotelCost(day) {
  let normalDayCost = 10;
  let nextTenDayCost = 5;
  if (day <= 0) {
    return "Please Input Positive Value?";
  } else if (day <= 10) {
    return normalDayCost * day;
  } else if (day > 10) {
    let overTenDays = day - 10;
    return normalDayCost * 10 + overTenDays * nextTenDayCost;
  }
}

function megaFriend(friendsArry) {
  let longestName = "";
  if (friendsArry.length <= 0) {
    return "It does not work empty array.";
  }
  for (let i = 0; i < friendsArry.length; i++) {
    if (friendsArry[i].length > lgth.length) {
      longestName = friendsArry[i];
    }
  }
  return longestName;
}
