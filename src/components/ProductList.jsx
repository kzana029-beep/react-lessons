import React, {useState} from 'react'
import './Product.css'

function ProductList() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [quantity, setQuantity] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState("");
    const [products, setProducts] = useState([]);
    const createNewProduct = (e) => {
        e.preventDefault();
        console.log("Creating new product:", { name, price, category, quantity, description });
        if(name.trim() ===""){
            setError("Name is required");
        }else if(price.trim() ===""){
            setError("Price is required");
        }else if(category.trim() ===""){
            setError("Category is required");
        }else if(quantity.trim() ===""){
            setError("Quantity is required");
        }else if(description.trim() ===""){
            setError("Description is required");
        }else{
            const newProduct = { id: Date.now(), 
                name: name,
                 price: price, 
                 category: category,
                  quantity: quantity, 
                  description: description };
            setProducts([...products, newProduct]);
        }
    }
   

  return (
    <div className='app'>
        <header className='header'>
            <h1>Manage products</h1>
        </header>
            <main className="container">
                <div className="stats">
                    <div className="stat-card">
                        <p>Total products</p>
                        <h2>34</h2>
                    </div>
                </div>
            </main>
        <div className="card">
            <h2>Add new products</h2>
            <form onSubmit={createNewProduct}>
                <div className="form-grid">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="category">Category</label>
                        <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                            <option value="">Select a category</option>
                            <option value="electronics">Electronics</option>
                            <option value="clothing">Clothing</option>
                            <option value="books">Books</option>
                        </select>
                    </div>
                      <div className="form-group">
                        <label htmlFor="price">Price</label>
                        <input type="number" id="price" value={price} onChange={(e) => setPrice(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="quantity">Quantity</label>
                        <input type="number" id="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                    </div>
                    

                </div>
                {error && <p className="error">{error}</p>}
                <button type="submit" className="add-btn">Create new Product</button>
            </form>
        </div>
        <div className="products">
            {
                products.map((product) => (
                    <div className="product" key={product.id}>
                        <h3>{product.name}</h3>
                        <p>Price: ${product.price}</p>
                        <p>Category: {product.category}</p>
                        <p>Quantity: {product.quantity}</p>
                        <p>Description: {product.description}</p>
                    </div>
                ))
            }
        </div>
        <div className="no-product" style={{ display: products.length === 0 ? 'block' : 'none' }}>
            <p>No products available</p>
        </div>
     
    </div>
  )
}

export default ProductList