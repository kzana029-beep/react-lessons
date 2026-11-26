import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Nuk u morën produktet.");
        }
        return response.json();
      })
      .then((data) => setProducts(data.products))
      .catch(() => setErrors("Produktet nuk mund të ngarkoheshin."))
      .finally(() => setLoading(false));
  }, []);

  const filteredProducts = products.filter((product) => {
    const searchText = search.toLowerCase();

    return (
      product.title.toLowerCase().includes(searchText) ||
      product.category.toLowerCase().includes(searchText)
    );
  });

  if (loading) return <p>Duke ngarkuar produktet...</p>;
  if (errors) return <p>{errors}</p>;

  return (
    <main>
      <h1>Produktet</h1>

      <input
        className="search-input"
        type="text"
        placeholder="Kërko produkte..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredProducts.length === 0 ? (
        <p className="not-found">Result not found</p>
      ) : (
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <article className="product-card" key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <h2>{product.title}</h2>
              <p>Kategoria: {product.category}</p>
              <p>Çmimi: €{product.price}</p>
              <Link
                to={`/details/${product.id}`}
                className="details-button"
              >
                Shiko detajet
              </Link>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}

export default Products;