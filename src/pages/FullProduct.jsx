import { useParams, Link } from 'react-router-dom';
import { productData } from './ProductPage'// Import the shared array data

export const FullProduct = () => {
  // Grab the ':id' parameter out of the active URL string
  const { id } = useParams();

  // Find the single product whose ID matches the parameter (convert id to a number)
  const product = productData.find(prod => prod.id === Number(id));

  // Handle case where an invalid ID is typed into the address bar
  if (!product) {
    return <h2>Product not found!</h2>;
  }

  return (
    <div style={{ padding: '40px', maxWidth: '600px', margin: '0 auto' }}>
      <Link to="/">← Back to Products</Link>
      
      <h1 style={{ marginTop: '20px' }}>{product.title}</h1>
      <p style={{ fontSize: '18px', fontWeight: 'bold' }}>Price: ${product.price}</p>
      <p>Rating: {product.rating} / 5 ⭐</p>
      
      {/* Displays the complete, uncut description text */}
      <h3 style={{ marginTop: '30px' }}>Product Description:</h3>
      <p style={{ lineHeight: '1.6', fontSize: '16px' }}>{product.description}</p>
    </div>
  );
}
