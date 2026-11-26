import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ProductsDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
   fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Produkti nuk u gjet.");
        }
        return response.json();
      })
      .then((data) => setProduct(data))
      .catch(() => setError("Detajet e produktit nuk mund të ngarkoheshin."))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Duke ngarkuar detajet...</p>;
  if (error) return <p>{error}</p>;

  return (
    <main className="product-details">
      <Link to="/products" className="back-link">
  ← Kthehu te produktet
</Link>
      <h1>{product.title}</h1>
      <img src={product.thumbnail} alt={product.title} width="250" />
      <p>{product.description}</p>
      <p>Kategoria: {product.category}</p>
      <p>Çmimi: €{product.price}</p>
      <p>Vlerësimi: {product.rating} / 5</p>
    </main>
  );
}

export default ProductsDetails;