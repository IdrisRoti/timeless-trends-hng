import SingleProduct from "@/components/productsPage/SingleProduct";
import axios from "axios";

// GET SINGLE PRODUCT

// GET SINGLE PRODUCT
const getProduct = async (id: string) => {
  const data = await axios.get(
    `https://api.timbu.cloud/products/${id}?organization_id=504dd1761d5e4c53b5f40c28ff392823&Appid=488ZQ399NFI05MT&Apikey=45484c7d98584984ba6d94a00252b27b20240712185813062278`
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
