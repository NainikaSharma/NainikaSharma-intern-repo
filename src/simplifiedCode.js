const MEMBER_HIGH_DISCOUNT = 0.2;
const MEMBER_DISCOUNT = 0.1;
const NON_MEMBER_DISCOUNT = 0.05;

function calculateDiscount(user) {
  if (!user) return 0;

  const { isMember, purchaseAmount } = user;

  if (isMember && purchaseAmount > 100) {
    return purchaseAmount * MEMBER_HIGH_DISCOUNT;
  }

  if (isMember) {
    return purchaseAmount * MEMBER_DISCOUNT;
  }

  if (purchaseAmount > 200) {
    return purchaseAmount * NON_MEMBER_DISCOUNT;
  }

  return 0;
}

export default calculateDiscount;
