import Products from "@/components/products/Products";
import CartProvider from "@/context/CartProvider";

export default function Home() {
  return (
      <main className="mt-[9rem] max-w-[1440px] mx-auto px-9">
        <h1 className="text-black text-4xl font-semibold">
          Explore Collections
        </h1>
        <Products />
      </main>
  );
}
