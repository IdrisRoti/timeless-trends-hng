import SingleProduct from "@/components/productsPage/SingleProduct";
import axios from "axios";

// GET SINGLE PRODUCT

// GET SINGLE PRODUCT
const getProduct = async (id: string) => {
  const data = await axios.get(
    `https://api.timbu.cloud/products/${id}?organization_id=${process.env.ORG_ID}&reverse_sort=false&page=1&size=30&Appid=${process.env.APP_ID}&Apikey=${process.env.API_KEY}&currency_code=AUD`
  );
  return data;
};

export default async function SingleProdut({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const item: any = await getProduct(id);

  // FILTER OUT IMPORTANT DATA
  const productData = {
    name: item.data.name,
    desciption: item.data.description,
    id: item.data.id,
    category: item.data.categories[0].name,
    images: item.data.photos.map((photo: any) => {
      return {
        url: photo.url,
      };
    }),
    price: item.data.current_price || 500,
    availaible_quantity: item.data.available_quantity,
  };

  // console.log(productData);

  return <SingleProduct productData={productData}/>;
}
