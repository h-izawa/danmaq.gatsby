webpackJsonp([0xec07415cb876],{4181:function(l,n){l.exports={data:{markdownRemark:{html:'<ul>\n<li>\n<p>定数定義(弾幕風にはマクロやconst、finalなどの機能がないので変数で代用)は大文字及びアンダースコアのみ使用する。</p>\n<ul>\n<li>変数は原則<a href="http://ja.wikipedia.org/wiki/%E3%83%8F%E3%83%B3%E3%82%AC%E3%83%AA%E3%82%A2%E3%83%B3%E8%A8%98%E6%B3%95">ハンガリアン記法</a>の接頭語を用い、単語の頭文字のみ大文字にし単語を繋げる。</li>\n<li>ライブラリ内のグローバル変数は上記接頭語に続いてライブラリ名を繋げると尚良い。</li>\n<li>[Can]特にスコープの狭いローカル変数などは無理に命名規約に従う必要はない。</li>\n<li>\n<p><em>メンバ変数・グローバル変数にはアクセサを用いず直接アクセスする</em>。本来、世間一般ではやってはいけない行為の一つなのだが、弾幕風の場合これが大きなオーバーヘッドの原因となる。</p>\n<h2>ハンガリアン記法で使用する接頭語</h2>\n</li>\n</ul>\n</li>\n</ul>\n<ul>\n<li>m_ : <em>メンバ変数、グローバル変数</em></li>\n<li>a : 配列</li>\n<li>n : 数値(long・double型) ※1</li>\n<li>c : 単文字(char型)</li>\n<li>sz : 文字列(char[]型) ※2</li>\n<li>※1 弾幕風の場合longとdoubleの境界が曖昧(むしろ全部doubleくさい)なので接頭語も統一して構わないと思う。</li>\n<li>※2 文字列はchar[]型だが原則acとかaszとはしない。</li>\n</ul>',frontmatter:{cover:null,date:"2008-04-26T00:00:07+09:00",strDate:"2008/4/25",title:"変数"}}},pathContext:{path:"/ja/blog/2008/04/26-変数/",langKey:"ja"}}}});
//# sourceMappingURL=path---ja-blog-2008-04-26-変数-b98b8cb334a36bc179de.js.map