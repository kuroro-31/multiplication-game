/*
|--------------------------------------------------------------------------
| 全ページ共通 HTMLの構造（<html>, <head>, <body> タグなど）を定義するために使用されます
| 通常、ページ間で変化しないため、サーバーサイドで一度だけレンダリングされるようになっています
|--------------------------------------------------------------------------
*/
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
