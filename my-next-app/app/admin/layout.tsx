import AdminLayout from "@/components/layouts/admin/AdminLayout";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <AdminLayout>{children}</AdminLayout>;
};

export default Layout;
