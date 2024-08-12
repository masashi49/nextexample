const Page = () => {
  return <div>hello next.js</div>;
};

export default Page;

/* 
Reactの場合、ルーティング機能はないのでReactルーターなど必要だが、
next.jsは標準機能として搭載されている。

pageを作成するためのファイルはhoge.indexではない、page.tsxまたは(page.js)にする必要がある。
 - page.tsxでは、componentをexportする必要がある。(export const ... としても機能しない)
動的ルーティングでは、ディレクトリ名に[hoge]を使用する。（だいたいid）
 - hoge/edit/hoge , hoge/edit/123 などでページを表示できる
  - componentの中でパラメータを取得する場合、params.hoge とする。これを使えばどの記事の情報をとってくるかの引数として使える。


 - pagesルーター
 - appルーター: next.js13.4から安定版となった
   - appルーター直下にpage.tsx = メインページ
    ┗ taskディレクトリにpage.tsx = /task
      ┗ editディレクトリにpage.tsx = /hoge/edit
        ┗ [id]にpage.tsx = /hoge/edit/1 (動的ルーティング)
    ┗ fooディレクトリにpage.tsx = /foo

存在しないpageにアクセスすると、404になる。
*/
