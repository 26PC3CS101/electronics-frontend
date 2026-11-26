
import { useEffect, useState } from "react";
import api from "../services/api";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

function Products() {
  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("All");

  const [budget, setBudget] = useState("All");

  const [sort, setSort] = useState("");

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    try {
      const response = await api.get("/products");
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteProduct(id) {
    await api.delete(`/products/${id}`);

    setProducts(
      products.filter(product => product.id !== id)
    );
  }

  const filteredProducts = products.filter(product => {

    const searchMatch =
      product.name?.toLowerCase().includes(search.toLowerCase());

    const categoryMatch =
      category === "All" ||
      product.category?.toLowerCase() === category.toLowerCase();

    const price = Number(product.price);

    const budgetMatch =
      budget === "All" ||
      (budget === "Low" && price < 10000) ||
      (budget === "Medium" && price >= 10000 && price <= 50000) ||
      (budget === "High" && price > 50000);

    return (
      searchMatch &&
      categoryMatch &&
      budgetMatch
    );
  });

  let finalProducts = [...filteredProducts];

  if (sort === "high") {
    finalProducts.sort(
      (a, b) => Number(b.price) - Number(a.price)
    );
  }

  if (sort === "low") {
    finalProducts.sort(
      (a, b) => Number(a.price) - Number(b.price)
    );
  }

  return (
    <>
      <h1>Popular Electronics Products</h1>

      <Link
        to="/add-product"
        className="submit-btn"
      >
        Add Product
      </Link>

      <div className="filters">

        <input
          type="text"
          placeholder="Search Product"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>All</option>
          <option>Mobile</option>
          <option>Laptop</option>
          <option>Headphones</option>
          <option>Smartwatch</option>
        </select>

        <select
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
        >
          <option>All</option>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="">Select</option>
          <option value="high">Price: High To Low</option>
          <option value="low">Price: Low To High</option>
        </select>

      </div>

      <div className="destinations">
        {finalProducts.length === 0 ? (
          <h2>No products found</h2>
        ) : (
          finalProducts.map((product) => (
            <ProductCard
              key={product.id}
              onDelete={deleteProduct}
              product={product}
            />
          ))
        )}
      </div>
    </>
  );
}

export default Products;
