webpackJsonp([49082466136155],{4262:function(o,e){o.exports={data:{markdownRemark:{html:'<!--2ちゃんねるビューア(通称●)のアカウント情報流出した件について、中の人: 停止信号 ★氏が流出対象者のメールアドレス一覧を公開していたので適当に集計してみました。-->\n<p>2ちゃんねるビューア(通称●)のアカウント情報流出した件で一騒ぎ起きていますね。 中の人: 停止信号 ★氏が<a href="http://j416.dip.jp/2ch/">http://j416.dip.jp/2ch/</a> で流出対象者の一意IDとそれに紐づくメールアドレスが公開されています。 んで、40000件超の流出アカウントのメールアドレスが公開されているので、折角だから統計とってみました。 8月27日の時点でうｐろだが流れてしまって404になっていますが、一度公開された情報ゆえ誰かしらがミラーなり魚拓なりとっているかと思いますのでそちらを探してご参照戴ければ幸いです。(元ファイルを上書きして消してしまい、CSV化したテキストしか残っていないため転載断念しました)  <em>Excel使って派手派手なグラフとか作ってみようと一瞬考えたけどﾏﾝﾄﾞｸｾ。</em>どうせ誰か勝手にやるだろうし。</p>\n<h2>■概要</h2>\n<p>上記の公開データのうち、メールアドレスの部分を適当にCSVに整形して、MySQLに食わせて色々と集計してみました。</p>\n<h2>●集計件数</h2>\n<p><code>41,591件</code> メールアドレスとして明らかにおかしいのが数十件あったので手動で補正しましたが、元のアドレスが予想不能なまでにおかしいデータが数件あったので、そちらについては除外しました。 なので元データより少し少ないです。</p>\n<h2>●ドメイン別件数</h2>\n<p><code>4,155件</code> 以下ドメインと書いた場合、サブドメインを除外した集計です。 (例：<code>xxx.yyy.ne.jp</code> → <code>yyy.ne.jp</code> で判断)</p>\n<h2>●サーバ管理者と思われるユーザの件数</h2>\n<p><code>257件</code> メールのユーザ名が下記のものを集計しました。 <code>abuse, admin, administrator, anyone, contact, info, mailmaster, noone, nothing, postmaster, someone, support, webmaster</code> そんなにいないだろうと思っていましたが結構多くてビックリ。 かくいう私も仲間なんですけどね。(ただし今回私はリスト入りしていませんでした)</p>\n<h2>●TLD別集計TOP10</h2>\n<p>順位\nTLD\n件数</p>\n<p><code>1</code>\n<code>.jp</code>\n<code>33,472</code></p>\n<p><code>2</code>\n<code>.com</code>\n<code>6,293</code></p>\n<p><code>3</code>\n<code>.net</code>\n<code>966</code></p>\n<p><code>4</code>\n<code>.org</code>\n<code>155</code></p>\n<p><code>5</code>\n<code>.to</code>\n<code>131</code></p>\n<p><code>6</code>\n<code>.us</code>\n<code>67</code></p>\n<p><code>7</code>\n<code>.info</code>\n<code>55</code></p>\n<p><code>8</code>\n<code>.cc</code>\n<code>50</code></p>\n<p><code>8</code>\n<code>.name</code>\n<code>50</code></p>\n<p><code>10</code>\n<code>.tv</code>\n<code>32</code>\nやっぱりというか、日本ドメインが圧倒的ですね。</p>\n<h2>●属性型JPドメイン集計TOP10</h2>\n<p>順位\nドメイン\n件数</p>\n<p><code>1</code>\n<code>.ne.jp</code>\n<code>25,540</code></p>\n<p><code>2</code>\n<code>.or.jp</code>\n<code>2,731</code></p>\n<p><code>3</code>\n<code>.co.jp</code>\n<code>623</code></p>\n<p><code>4</code>\n<code>.ac.jp</code>\n<code>217</code></p>\n<p><code>5</code>\n<code>.gr.jp</code>\n<code>45</code></p>\n<p><code>6</code>\n<code>.ad.jp</code>\n<code>17</code></p>\n<p><code>7</code>\n<code>.go.jp</code>\n<code>5</code></p>\n<p><code>8</code>\n<code>.ed.jp</code>\n<code>2</code>\n8件のみでした。 lg.jpとかもちょっと期待していましたが見つかりませんでした。</p>\n<h2>●ドメイン集計TOP20</h2>\n<p>順位\nドメイン\n件数</p>\n<p><code>1</code>\n<code>ocn.ne.jp</code>\n<code>3,805</code></p>\n<p><code>2</code>\n<code>nifty.com</code>\n<code>3,382</code></p>\n<p><code>3</code>\n<code>docomo.ne.jp</code>\n<code>3,346</code></p>\n<p><code>4</code>\n<code>ezweb.ne.jp</code>\n<code>2,510</code></p>\n<p><code>5</code>\n<code>so-net.ne.jp</code>\n<code>2,489</code></p>\n<p><code>6</code>\n<code>biglobe.ne.jp</code>\n<code>1,956</code></p>\n<p><code>7</code>\n<code>softbank.jp</code>\n<code>1,568</code></p>\n<p><code>8</code>\n<code>plala.or.jp</code>\n<code>1,502</code></p>\n<p><code>9</code>\n<code>ybb.ne.jp</code>\n<code>1,362</code></p>\n<p><code>10</code>\n<code>dion.ne.jp</code>\n<code>1,209</code></p>\n<p><code>11</code>\n<code>softbank.ne.jp</code>\n<code>713</code></p>\n<p><code>12</code>\n<code>odn.ne.jp</code>\n<code>649</code></p>\n<p><code>13</code>\n<code>home.ne.jp</code>\n<code>618</code></p>\n<p><code>14</code>\n<code>dti.ne.jp</code>\n<code>614</code></p>\n<p><code>15</code>\n<code>eonet.ne.jp</code>\n<code>604</code></p>\n<p><code>16</code>\n<code>nifty.ne.jp</code>\n<code>528</code></p>\n<p><code>17</code>\n<code>email.ne.jp</code>\n<code>466</code></p>\n<p><code>18</code>\n<code>me.com</code>\n<code>427</code></p>\n<p><code>19</code>\n<code>iij4u.or.jp</code>\n<code>347</code></p>\n<p><code>20</code>\n<code>vodafone.ne.jp</code>\n<code>325</code>\n結構ばらけたので20位まで集計しました。 携帯キャリアの序列がわかりやすいですｗ 巻き添え規制の喰らいやすさで定評のあるプロバイダがちらほら見えますね。</p>\n<h2>●.co.jpユーザ集計TOP20</h2>\n<p>順位\nドメイン\n件数</p>\n<p><code>1</code>\n<code>yahoo.co.jp</code>\n<code>34</code></p>\n<p><code>2</code>\n<code>vip.co.jp</code>\n<code>16</code></p>\n<p><code>3</code>\n<code>ybb.co.jp</code>\n<code>12</code></p>\n<p><code>4</code>\n<code>docomo.co.jp</code>\n<code>10</code></p>\n<p><code>5</code>\n<code>design.co.jp</code>\n<code>6</code></p>\n<p><code>6</code>\n<code>hot.co.jp</code>\n<code>5</code></p>\n<p><code>6</code>\n<code>nec.co.jp</code>\n<code>5</code></p>\n<p><code>8</code>\n<code>drive.co.jp</code>\n<code>4</code></p>\n<p><code>8</code>\n<code>kyodotokai.co.jp</code>\n<code>4</code></p>\n<p><code>10</code>\n<code>chunichi.co.jp</code>\n<code>3</code></p>\n<p><code>10</code>\n<code>satelight.co.jp</code>\n<code>3</code></p>\n<p><code>10</code>\n<code>seiwado.co.jp</code>\n<code>3</code></p>\n<p><code>10</code>\n<code>softbank.co.jp</code>\n<code>3</code></p>\n<p><code>14</code>\n<code>brother.co.jp</code>\n<code>2</code></p>\n<p><code>14</code>\n<code>cs-grp.co.jp</code>\n<code>2</code></p>\n<p><code>14</code>\n<code>daifuku.co.jp</code>\n<code>2</code></p>\n<h2>Comments</h2>\n<p><strong><a href="#22" title="2013-08-27 23:29:52">yasudonok</a>:</strong> [●情報流出]アカウントのメルアドで統計とってみた by @danmaq <a href="http://t.co/SU3FbMydwi">http://t.co/SU3FbMydwi</a></p>',frontmatter:{cover:null,date:"2013-08-27T23:14:25+09:00",strDate:"2013/8/27",title:"[●情報流出]アカウントのメルアドで統計とってみた"}}},pathContext:{path:"/ja/blog/2013/08/27-maru2ch/",langKey:"ja"}}}});
//# sourceMappingURL=path---ja-blog-2013-08-27-maru-2-ch-42f085a7d96ee8eb27ca.js.map