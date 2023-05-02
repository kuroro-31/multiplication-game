/*
|--------------------------------------------------------------------------
| Headの共通処理
|--------------------------------------------------------------------------
*/
import Head from "next/head";
import { useRouter } from "next/router";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  // SEO対策 indexされるページの重複を防ぐ
  const { asPath } = useRouter();
  const canonicalURL =
    process.env.NEXT_PUBLIC_BASE_URL + asPath.split(/[?#]/)[0];

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Comiee" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={canonicalURL} />

        {/*
        |--------------------------------------------------------------------------
        |　　タイトル
        |--------------------------------------------------------------------------
        */}
        <title>Comiee | ニッチなマンガが集まるプラットフォーム</title>
        <meta
          property="og:title"
          content="Comiee | ニッチなマンガが集まるプラットフォーム"
        />
        <meta
          name="twitter:title"
          content="Comiee | ニッチなマンガが集まるプラットフォーム"
        />
        {/*
        |--------------------------------------------------------------------------
        |　　説明文
        |--------------------------------------------------------------------------
        */}
        <meta
          name="description"
          itemProp="description"
          content="Comiee（コミー）は誰もがマンガを投稿でき、創作を楽しめる場所です。気になるクリエイターをフォローして応援したり、自分で投稿して収入を得ることもできます。"
        />
        <meta
          property="og:description"
          content="Comiee（コミー）は誰もがマンガを投稿でき、創作を楽しめる場所です。気になるクリエイターをフォローして応援したり、自分で投稿して収入を得ることもできます。"
        />
        <meta
          name="twitter:description"
          content="Comiee（コミー）は誰もがマンガを投稿でき、創作を楽しめる場所です。気になるクリエイターをフォローして応援したり、自分で投稿して収入を得ることもできます。"
        />
        {/*
        |--------------------------------------------------------------------------
        |　　OGP
        |--------------------------------------------------------------------------
        */}
        <meta property="og:image" content="/ogp.png" />
        <meta property="og:image:secure_url" content="/ogp.png" />
        <meta name="twitter:image" content="/ogp.png" />
        <meta property="og:url" content="/" />
        <meta property="og:site_name" content="Comiee" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/*
        |--------------------------------------------------------------------------
        |　　ここにページコンポーネントの中身が入ってくる
        |--------------------------------------------------------------------------
        */}
      {children}
    </>
  );
};

export default Layout;
