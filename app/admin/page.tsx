import getProducts from "@/actions/getProducts";
import Summary from "./Summary";
import getOrders from "@/actions/getOrders";
import getUsers from "@/actions/getUsers";
import Container from "../components/Container";
import BarGraph from "./BarGraph";
import getGraphData from "@/actions/getGraphData";
import ProductCard from "../components/products/ProductCard";
import getCurrentUser from "@/actions/getCurrentUser";
import NullData from "../components/NullData";

const Admin = async () => {
  const currentUser = await getCurrentUser();
  const products = await getProducts({ category: null });
  const orders = await getOrders();
  const users = await getUsers();

  if (!currentUser || currentUser.role !== "ADMIN") {
    return <NullData title="Oops! Access denied. You are not an ADMIN" />;
  }

  return (
    <div className="pt-8 ">
      <Container>
        <Summary products={products} orders={orders} users={users} />
      </Container>

      <div className="ml-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 mt-10">
        {products.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Admin;
