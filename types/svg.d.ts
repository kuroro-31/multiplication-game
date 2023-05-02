/*
|--------------------------------------------------------------------------
| SVGファイルの型定義
|--------------------------------------------------------------------------
*/
declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}
