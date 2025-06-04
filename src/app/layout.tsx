import "@/styles/globals.css";
import Layout from "@/components/Layout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
