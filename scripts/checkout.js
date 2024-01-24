import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { calculatePaymentSummaryItems } from "../data/cart.js";

renderOrderSummary();
renderPaymentSummary();
calculatePaymentSummaryItems();