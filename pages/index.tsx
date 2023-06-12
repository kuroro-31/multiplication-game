/*
|--------------------------------------------------------------------------
| トップページ
|--------------------------------------------------------------------------
*/
import Slider from "@/components/atoms/product/slider";
import Footer from "@/components/molecules/Footer";
import Header from "@/components/molecules/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Slider
          images={[
            "https://placehold.jp/250x250.png",
            "https://placehold.jp/1150x250.png",
            "https://placehold.jp/250x1250.png",
            "https://placehold.jp/1250x1250.png",
            "https://placehold.jp/250x150.png",
          ]}
        />
      </main>
      <Footer />
    </div>
  );
}
