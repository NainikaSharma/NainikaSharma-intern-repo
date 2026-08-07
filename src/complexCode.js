function calculateUserDiscount(user) {
  let discount = 0;

  if (user !== null) {
    if (user.isMember === true) {
      if (user.purchaseAmount > 100) {
        discount = user.purchaseAmount * 0.2;
      } else {
        discount = user.purchaseAmount * 0.1;
      }
    } else {
      if (user.purchaseAmount > 200) {
        discount = user.purchaseAmount * 0.05;
      } else {
        discount = 0;
      }
    }
  }

  return discount;
}

export default calculateUserDiscount;
