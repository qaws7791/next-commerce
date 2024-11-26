// OrderItem
export type OrderItemId = UniqueNumberId;
export type OrderItemProduct = UniqueNumberId;
export type OrderItemQuantity = number;

// Order
export type OrderId = UniqueNumberId;
export type OrderUser = number;
export type OrderProducts = OrderItem[];
export type OrderStatus = "pending" | "completed" | "cancelled";
export type OrderCreatedAt = DateTimeString;
export type OrderUpdatedAt = DateTimeString;
export type OrderAmount = number;

export type OrderItem = {
  id: OrderItemId;
  product: OrderItemProduct;
  quantity: OrderItemQuantity;
};

export type Order = {
  id: OrderId;
  user: OrderUser;
  products: OrderProducts;
  status: OrderStatus;
  createdAt: OrderCreatedAt;
  updatedAt: OrderUpdatedAt;
  totalAmount: OrderAmount;
};

export function getOrderStatusText(order: Order): string {
  switch (order.status) {
    case "pending":
      return "대기중";
    case "completed":
      return "완료";
    case "cancelled":
      return "취소";
  }
}
