
"use client";

const orders = [
  {
    id: "ORD-001",
    date: "2024-01-15",
    status: "Delivered",
    total: "$159.97",
    items: [
      { name: "Solar Power Bank 20000mAh", quantity: 1, price: "$79.99" },
      { name: "Bamboo Wireless Charger", quantity: 2, price: "$34.99" }
    ]
  },
  {
    id: "ORD-002",
    date: "2024-01-10",
    status: "In Transit",
    total: "$74.98",
    items: [
      { name: "Biodegradable Phone Case", quantity: 2, price: "$24.99" },
      { name: "Recycled Cable Organizer", quantity: 1, price: "$24.99" }
    ]
  },
  {
    id: "ORD-003",
    date: "2024-01-05",
    status: "Processing",
    total: "$89.99",
    items: [
      { name: "Kinetic Energy Charger", quantity: 1, price: "$89.99" }
    ]
  }
];

function getStatusColor(status: string) {
  switch (status) {
    case "Delivered":
      return "bg-green-100 text-green-800";
    case "In Transit":
      return "bg-blue-100 text-blue-800";
    case "Processing":
      return "bg-yellow-100 text-yellow-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
}

export function OrderHistory() {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6">
      <h2 className="text-xl font-semibold mb-6">Recent Orders</h2>
      
      <div className="space-y-6">
        {orders.map((order) => (
          <div key={order.id} className="border-b border-gray-100 pb-6 last:border-b-0 last:pb-0">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-4">
                <span className="font-semibold">{order.id}</span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                  {order.status}
                </span>
              </div>
              <div className="text-right">
                <div className="font-semibold">{order.total}</div>
                <div className="text-sm text-gray-600">{order.date}</div>
              </div>
            </div>
            
            <div className="space-y-2">
              {order.items.map((item, index) => (
                <div key={index} className="flex justify-between text-sm">
                  <span className="text-gray-600">
                    {item.quantity}x {item.name}
                  </span>
                  <span>{item.price}</span>
                </div>
              ))}
            </div>
            
            <div className="flex gap-2 mt-4">
              <button className="px-3 py-1 text-xs border border-gray-300 rounded hover:bg-gray-50">
                View Details
              </button>
              <button className="px-3 py-1 text-xs border border-gray-300 rounded hover:bg-gray-50">
                Track Package
              </button>
              {order.status === "Delivered" && (
                <button className="px-3 py-1 text-xs bg-green-600 text-white rounded hover:bg-green-700">
                  Review Products
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <button className="w-full mt-6 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
        View All Orders
      </button>
    </div>
  );
}
