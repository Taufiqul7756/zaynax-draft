import AdminNav from "../components/admin/AdminNav";

export const metadata = {
  title: "Zaynax Admin",
  description: "Zaynax Admin Dashboard",
};

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex gap-5">
      <div>
        <AdminNav />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default AdminLayout;
