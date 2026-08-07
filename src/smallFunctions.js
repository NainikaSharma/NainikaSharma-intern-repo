function validateOrder(order) {
  return order.customerName && order.items.length > 0;
}

function calculateTotal(items) {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
}

function applyDiscount(total, customerType) {
  if (customerType === 'premium') {
    return total * 0.9;
  }

  return total;
}

function createInvoice(customerName, total) {
  return `
Customer: ${customerName}
Total: $${total}
`;
}

function sendNotification(customerName) {
  console.log(`Email sent to ${customerName}: Order completed`);
}

function processOrder(order) {
  if (!validateOrder(order)) {
    return 'Invalid order';
  }

  let total = calculateTotal(order.items);

  total = applyDiscount(total, order.customerType);

  const invoice = createInvoice(order.customerName, total);

  sendNotification(order.customerName);

  return invoice;
}

export default processOrder;
