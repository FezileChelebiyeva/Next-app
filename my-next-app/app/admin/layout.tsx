import AdminLayout from "@/components/layouts/admin/AdminLayout";

export const metadata = {
  title: "Admin Dashboard",
  description: "Admin section of the site",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AdminLayout>{children}</AdminLayout>;
}
