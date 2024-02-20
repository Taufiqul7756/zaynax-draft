import getCurrentUser from "@/actions/getCurrentUser";
import PromoCodesPage from "./PromoCodesPage";
import NullData from "@/app/components/NullData";

const Page = async () => {
  const currentUser = await getCurrentUser();
  if (!currentUser || currentUser.role !== "ADMIN") {
    return <NullData title="Oops! Access denied. You are not an ADMIN" />;
  }
  return <PromoCodesPage />;
};

export default Page;
