const Page = () => {
  return <div>hello next.js</div>;
};

export default Page;

/* 
Reactの場合、ルーティング機能はないのでReactルーターなど必要だが、
next.jsは標準機能として搭載されている。

pageを作成するためのファイルはhoge.indexではない、page.tsxまたは(page.js)にする必要がある。
page.tsxでは、componentをexportする必要がある。(export const ... としても機能しない)


 - pagesルーター
 - appルーター: next.js13.4から安定版となった
   - appルーター直下にpage.tsx = メインページ
    ┗ hogeディレクトリにpage.tsx = /hoge
      ┗ hugaディレクトリにpage.tsx = /hoge/huga
    ┗ fooディレクトリにpage.tsx = /foo


存在しないpageにアクセスすると、404になる。
*/
