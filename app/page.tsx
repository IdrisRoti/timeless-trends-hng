import Products from "@/components/products/Products";
import axios from "axios";

// GET ALL PRODUCTS
const getProducts = async () => {
  const data = await axios.get(`https://api.timbu.cloud/products?organization_id=${process.env.ORG_ID}&reverse_sort=false&page=1&size=30&Appid=${process.env.APP_ID}&Apikey=${process.env.API_KEY}`)
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
      category: item.categories ? item.categories[0].name : "Casual Fit",
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
