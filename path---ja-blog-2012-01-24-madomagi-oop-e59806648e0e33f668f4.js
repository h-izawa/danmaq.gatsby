webpackJsonp([0x9605e5e52425],{4297:function(n,o){n.exports={data:{markdownRemark:{html:'<p><a href="http://b0r0nji.blogspot.com/2011/12/blog-post.html">「ぐへへお姉ちゃんパンツ何色」から始めるクラス解説</a>が大変面白かったので、2か月遅れですが風邪でぶっ倒れながら二番煎じをやってみるテスト。\n多分本家程テンポ良い展開にはならないと思う。\nあと少し難易度上がります。</p>\n<p>この世界には(きっと)魔法少女と魔女がいます。\nそれぞれクラス化してみます。\n名前は <code>Syojo</code> と <code>Majo</code> で良いでしょう (<code>MahouSyojo</code> とか長くてダレる……)</p>\n<p>さて、魔法少女は魔女を狩るため、早速その機能をつけましょう。</p>\n<pre><code class="language-C++">class Syojo\n{\npublic:\n    virtual void hunt(Majo *m);\n};\n</code></pre>\n<p>まぁ、雑ですがこんなところでしょうか。実際に魔女を狩るためには、以下のようにメソッドを呼び出せばおｋです。</p>\n<pre><code class="language-C++">Syojo syojo;\nMajo majo;\nsyojo.hunt(&#x26;majo);\n</code></pre>\n<p>ところで、魔法少女と一口に言っても色々なキャラがいて、それぞれ狩り方も異なります。\nこれだけだと狩り方がワンパターンになってしまいます。\nまるで魔法少女のはずが魔獣のようです。</p>\n<p>一つの解法として、キャラクタ識別定数を持って、分岐させる手があります。</p>\n<pre><code class="language-C++">void Syojo::hunt(Majo *m)\n{\n    switch(this->id)\n    {\n    case MADOKA:\n        arrow(m);\n        break;\n    case BLOSSOM:\n        oshiri_punch(m);\n        break;\n        :\n        :\n    }\n}\n</code></pre>\n<p>ただ、このやり方だと、例えば「仲間割れ」とか新しい機能を積むたびに <code>switch</code> 分岐を増やすのもなんかダサいですよね。</p>\n<p>そこでオブジェクト指向でクラスの次に覚えさせられるアレ、継承が出てきます。</p>\n<pre><code class="language-C++">class Sayaka : public Syojo\n{\npublic:\n    void hunt(Majo *m); /* 滅多斬り */\n};\n\nclass Homuhomu : public Syojo\n{\npublic:\n    void hunt(Majo *m); /* 完全な世界 */\n};\n\nclass Mami : public Syojo\n{\npublic:\n    void hunt(Majo *m); /* ティロなんとか() */\n};\n</code></pre>\n<p>これならちゃんと個性を持った行動ができますね。\nこの場合の、狩りをさせるロジックも表記してみましょう。</p>\n<pre><code class="language-C++">Sayaka sayaka;\nHomuhomu homu;\nMami mami;\nMajo majo;\nsayaka.hunt(&#x26;majo);\nhomu.hunt(&#x26;majo);\nmami.hunt(&#x26;majo);\n</code></pre>\n<p>ここでちょっと不便なことに気づきます。\nもしかしたら <code>Homuhomu</code> の代わりに <code>Kyoko</code> がいるかもしれないし、そういう状況のたびにコードを書き換えるのはちょっとダサいですよね。\nそこで、下記のように解釈を変えてみましょう。</p>\n<ul>\n<li>「数人の魔法少女が魔女を狩っている。誰が誰だかはよく判らない」</li>\n</ul>\n<p>これならクラスの多態性を生かして、このように記述することが可能です。</p>\n<pre><code class="language-C++">Syojo *sisters［］ = { &#x26;sayaka, &#x26;homu, &#x26;mami };\nfor(int i = sizeof(sisters) / sizeof(Syojo *); --i >= 0; )\n{\n    sisters［i］->hunt(&#x26;majo);\n}\n</code></pre>\n<p>これで狩りをさせる側は「狩りをしろ」と指示するだけで、<code>sisters</code> 1号(実体は <code>homu</code> )は時を止めて戦い、<code>sisters</code> 2号(実体は <code>mami</code> )は中二病な必殺技で敵を射止めます。</p>\n<p>ところで、ここまでは便宜上その場で即席魔法少女オブジェクトを作っていましたが、実際はもっと早い段階で契約して魔法少女を作り、魔力を持たせて、徐々に強い魔女をけしかけて育てています。\nつまり、魔法少女は戦わせるよりも、死なせる(そして新しい魔法少女を作る)ことのほうがコストがかかるのです。</p>\n<pre><code class="language-C++">void Syojo::init(Kyubey *q)\n{\n    this->keiyaku(q); /* 魔法少女の */\n    this->teatime();　/* 初期化は */\n    this->reajuu();　 /* 手間がかかる！ */\n}\n</code></pre>\n<p>例えば、某プルプル魔女を狩ることを想定すると、魔法少女が数十人単位で必要になります。\nしかし、調達できる魔法少女にも限りがあります。</p>\n<p>仮に調達できた魔法少女を 5 人とします。\nこの 5 人だけでは倒すのは困難でしょう。\nそのため下記のプロセスを繰り返すことになります。</p>\n<ul>\n<li>戦う</li>\n<li>死骸を破棄する</li>\n<li>魔法少女を生成する (生成～契約～育てる etc.)</li>\n</ul>\n<p>とても効率が良いとは思えないですよね？\n実はこれはプログラム側から見ても効率が悪いのです。\n魔法少女の生成・破棄には <code>new</code>・<code>delete</code>、即ちメモリの確保と解放を行うのですが、これは実はとっても重い処理なのです。</p>\n<p>そこで QB さんは考えました。<br>\n「肉体と魂を分離して、肉体は使いまわせばいいじゃないか」<br>\n早速 QB さんの構想をコードに書き起こしてみましょう。</p>\n<pre><code class="language-C++">class Syojo\n{\npublic:\n    Syojo(void);\n    Soul *soul = NULL; /* アクセサとかめんどくせーし */\n    void hunt(majo *m) { soul->hunt(majo); };\n};\n\nclass Soul\n{\npublic:\n    virtual void hunt(majo *m) = 0;\n};\n</code></pre>\n<p>その上で、このように魂を実装すればよいのです。</p>\n<pre><code class="language-C++">class Mami : public Soul\n{\npublic:\n    static Soul *getInstance()\n    {\n        static Mami instance;\n        return &#x26;instance;\n    }\n    void hunt(majo *m); /* ティロなんとか() */\nprivate:\n    Mami(void) {}\n};\n</code></pre>\n<p>魔女と戦わせるには、下記のようにすればおｋです。</p>\n<pre><code class="language-C++">Syojo syojo\nMajo majo;\nsyojo.soul = Mami::getInstance();\nsyojo.hunt(&#x26;majo);\n</code></pre>\n<p>ただの抜け殻だった魔法少女に魂を入れることでマミさんに変化しました。\nこのノリで <code>Madoka</code> や <code>Sayaka</code> などの魂を作って、入れてあげるとその場で魔法少女の攻撃パターンが変化します。\n体はマミさんなのに、攻撃パターンを見るとちょっとガサツな槍使い、なんてこともできるようになります。</p>\n<p>ただし、魂が入っていないままで魔女をけしかけると、<strong>ぬるぽ</strong>(C++ では <code>AccessViolation</code> でしょうか)の原因となりますので、空っぽのソウルジェムを常に持たせておかなければなりません。\nここは本編とちょっと異なるルールなので注意が必要です。</p>\n<pre><code class="language-C++">class EmptySoul : public Soul\n{\npublic:\n    static Soul *getInstance()\n    {\n    static EmptySoul instance;\n    return &#x26;instance;\n    }\n    void hunt(majo *m) {} /* 何もしない */\nprivate:\n    EmptySoul(void) {}\n};\n\nSyojo::syojo(void)\n{\n    this->soul = EmptySoul::getInstance();\n}\n</code></pre>',frontmatter:{cover:null,date:"2012-01-24T16:36:49+09:00",strDate:"2012/1/24",title:"魔法少女で学ぶオブジェクト指向(ソウルジェムはGoFの香り)"}}},pathContext:{path:"/ja/blog/2012/01/24-madomagi-oop/",langKey:"ja"}}}});
//# sourceMappingURL=path---ja-blog-2012-01-24-madomagi-oop-e59806648e0e33f668f4.js.map