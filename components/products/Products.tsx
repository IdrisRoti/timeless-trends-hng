import { productsData } from "@/data";
import ProductCard from "./ProductCard";

export default function Products() {
  return (
    <div className="max-w-[1100px] mx-auto mt-11">
      {productsData.map((item, i) => (
        <section key={i} className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">{item.category}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4  gap-[1rem]">
            {item.products.map((product, i) => (
              <ProductCard key={i} product={product} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
