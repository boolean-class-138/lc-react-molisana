import ProductCard from "./ProductCard";
import products from "../data/products";

export default function ProductsList() {
  return (
    <section className="products">
      <div className="container">
        <h2>Lista Prodotti</h2>

        <div className="row">
          {products.map((product) => {
            return (
              <div className="col" key={product.id}>
                <ProductCard image={product.src} title={product.title} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
