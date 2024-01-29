import { renderOrderSummary } from "scripts/checkout/orderSummary.js";
import { renderPaymentSummary } from "scripts/checkout/paymentSummary.js";
import { calculatePaymentSummaryItems, calculateCheckoutQuantity } from "data/cart.js";

renderOrderSummary();
renderPaymentSummary();
calculatePaymentSummaryItems();
calculateCheckoutQuantity();
