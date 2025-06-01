import "@/styles/globals.css";
import Button from "@/components/button";
import Layout from "@/components/Layout";

export default function HomePage() {
  return (
    <Layout title="홈" hasHomeIndicator>
      <div className="space-y-4">
        <h2 className="text-xl font-bold">환영합니다</h2>
        <p>메인 페이지 내용입니다.</p>
      </div>
    </Layout>
  );
}
