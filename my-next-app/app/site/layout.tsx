import PublicLayout from "@/components/layouts/site/PublicLayout";

export const metadata = {
  title: "Home",
  description: "A simple Next.js app with header and footer",
};

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <PublicLayout>{children}</PublicLayout>;
}
