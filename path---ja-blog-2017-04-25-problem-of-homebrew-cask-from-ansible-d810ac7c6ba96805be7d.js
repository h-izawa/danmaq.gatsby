webpackJsonp([0xd39ec4ed5a8],{4284:function(e,n){e.exports={data:{markdownRemark:{html:"<h2>原因</h2>\n<p>中で <code>sudo</code> してるみたいでパスワード待ちになる。</p>\n<h2>処方箋</h2>\n<p>先んじてこのタスクを入れてから <code>homebrew_cask</code> するだけ。</p>\n<!-- more -->\n<pre><code class=\"language-YAML\">- name: Unlock sudo\n  lineinfile:\n    dest: /etc/sudoers\n    regexp: '{{ ansible_env.USER }} ALL=\\(ALL\\) NOPASSWD: ALL'\n    line: '{{ ansible_env.USER }} ALL=(ALL) NOPASSWD: ALL'\n    validate: visudo -cf %s\n  become: yes\n</code></pre>\n<p>満足するまでインストールできたら、後片付けを忘れずに。</p>\n<pre><code class=\"language-YAML\">- name: Lock sudo\n  lineinfile:\n    dest: /etc/sudoers\n    regexp: '{{ ansible_env.USER }} ALL=\\(ALL\\) NOPASSWD: ALL'\n    line: ''\n    validate: visudo -cf %s\n  become: yes\n</code></pre>\n<h2>そいえば <a href=\"../02/09-wordpress-to-jekyll\">Jekyll 化計画</a>どうしたんだよ？</h2>\n<p>TOP ページのモックアップが大雑把にできたよ！ ナマケモノのフレンズだから牛歩以上にゆっくりな動きだよ！</p>",frontmatter:{cover:null,date:"2017-04-25T11:29:56+09:00",strDate:"2017/4/25",title:"Ansible で homebrew_cask を使うとフリーズする場合の処方箋"}}},pathContext:{path:"/ja/blog/2017/04/25-problem-of-homebrew-cask-from-ansible/",langKey:"ja"}}}});
//# sourceMappingURL=path---ja-blog-2017-04-25-problem-of-homebrew-cask-from-ansible-d810ac7c6ba96805be7d.js.map