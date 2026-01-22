export const getSubTotal = (cartItems) => {
  return cartItems.reduce((sub, item) => sub + item.price * item.quantity, 0);
};

export const getTotalAmt = (cartItems) => {
  return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
};

export const formatPrice = (amount) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(amount);
};