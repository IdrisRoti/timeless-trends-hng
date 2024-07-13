import SingleProduct from "@/components/productsPage/SingleProduct";


export default function SingleProdut({ params }: { params: { id: string } }) {
  const { id } = params;
  return (
    <SingleProduct />
  );
}