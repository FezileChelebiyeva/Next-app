import PublicLayout from "@/components/layouts/site/PublicLayout";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <PublicLayout>{children}</PublicLayout>;
}
