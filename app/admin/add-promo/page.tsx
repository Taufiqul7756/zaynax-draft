import Container from "@/app/components/Container";
import FormWrap from "@/app/components/FormWrap";
import getCurrentUser from "@/actions/getCurrentUser";
import NullData from "@/app/components/NullData";
import AddPromoForm from "./AddPromoForm";

const AddPromoCodes = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser || currentUser.role !== "ADMIN") {
    return <NullData title="Oops! Access denied. You are not an ADMIN" />;
  }

  return (
    <div className="px-8">
      <Container>
        <FormWrap>
          <AddPromoForm />
        </FormWrap>
      </Container>
    </div>
  );
};

export default AddPromoCodes;
