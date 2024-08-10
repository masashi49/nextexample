import React from 'react';

const page = () => {
  return <div>hello next.js</div>;
};

export default page;

/* 
Reactの場合、ルーティング機能はないのでReactルーターなど必要だが、
next.jsは標準機能として搭載されているぞ
 - pagesルーター
 - appルーター: next.js13.4から安定版となった
   - appルーター直下にpage.tsx = メインページ
    ┗ hogeディレクトリにpage.tsx = /hoge
      ┗ hugaディレクトリにpage.tsx = /hoge/huga
    ┗ fooディレクトリにpage.tsx = /foo
*/
