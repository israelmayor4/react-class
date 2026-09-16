import { Link } from "react-router-dom";

export const productData = [
  { id: 1, title: "Bag", price: 1000, description: "This spacious, chocolate-brown polyester backpack features three large main compartments, a dedicated internal laptop sleeve, and thick, padded shoulder straps designed to comfortably carry up to 35 liters of daily essentials in any weather condition.", rating: 5 },
  { id: 2, title: "Book", price: 1000, description: "This beautifully bound book features a striking, embossed cover that opens to reveal hundreds of crisp, cream-colored pages filled with elegant typography and captivating stories.", rating: 4 },
  { id: 3, title: "Jug", price: 1000, description: "This elegant, crystal-clear glass jug features a wide, easy-pour spout, an ergonomic handle for smooth serving, and a generous two-litre capacity perfect for holding chilled water, fresh juices, or iced tea.", rating: 2 },
  { id: 4, title: "Phone", price: 3000, description: "This sleek, ultra-slim smartphone features a vibrant, edge-to-edge display, a professional-grade triple-lens camera system, and a powerful all-day battery built to handle seamless multitasking and high-performance gaming.", rating: 5 },
  { id: 5, title: "laptop", price: 5000, description: "This premium, ultra-lightweight laptop features a brilliant high-resolution display, a lightning-fast processor for seamless multitasking, and a durable aluminum chassis with an all-day battery life built for professionals on the move.", rating: 5 }
]

export const ProductPage = () => {
  // Word limit helper function
  const truncateWords = (text, limit) => {
    return text.split(" ").slice(0, limit).join(" ") + "...";
  };

  return (
    <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
      {productData.map(prod => (
        <div key={prod.id} style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', width: '200px' }}>
          <h3>{prod.title}</h3>
          <p>Price: ${prod.price}</p>

          {/* Displays only the first 4 words */}
          <p>{truncateWords(prod.description, 4)}</p>

          {/* Moves to the single route using the ID parameter */}
          <Link to={`/product/${prod.id}`}>
            <button style={{ background: 'orange', color: 'white', border: 'none', padding: '8px 12px', cursor: 'pointer' }}>
              See More
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
}
