import ProductLoader from "@/components/ProductLoader";
import Products from "@/components/products/Products";
import axios from "axios";

// GET ALL PRODUCTS
const getProducts = async () => {
  const data = await axios.get("https://api.timbu.cloud/products?organization_id=504dd1761d5e4c53b5f40c28ff392823&reverse_sort=false&page=1&size=30&Appid=488ZQ399NFI05MT&Apikey=45484c7d98584984ba6d94a00252b27b20240712185813062278")
  return data;
}

export default async function Home() {
  const response = await getProducts()
  // console.log("DATA: ", response.data.items)

// FILTER OUT ONLY REQUIRED DATA
  const dataArr = response.data.items.map((item:any)=>{
    return {
      name: item.name,
      desciption: item.description,
      id: item.id,
      category: item.categories[0].name,
      images: item.photos.map((photo: any)=>{
        return {
          url:photo.url
        }
      }),
      price: item.current_price[0].AUD[0],
      availaible_quantity: item.available_quantity
    }
  })

  return (
      <main className="mt-[9rem] max-w-[1440px] mx-auto px-9">
        <h1 className="text-black text-4xl font-semibold">
          Explore Collections
        </h1>
        <Products productsData={dataArr} />
      </main>
  );
}
