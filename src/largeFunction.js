function processOrder(order) {
  // Validate order
  if (!order.customerName || !order.items.length) {
    return 'Invalid order';
  }

  // Calculate total
  let total = 0;

  order.items.forEach((item) => {
    total += item.price * item.quantity;
  });

  // Apply discount
  if (order.customerType === 'premium') {
    total = total * 0.9;
  }

  // Format invoice
  const invoice = `
    Customer: ${order.customerName}
    Total: $${total}
  `;

  // Send notification
  console.log(`Email sent to ${order.customerName}: Order completed`);

  return invoice;
}

export default processOrder;
