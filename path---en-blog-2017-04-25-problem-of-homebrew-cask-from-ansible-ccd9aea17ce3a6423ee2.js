webpackJsonp([24563409353057],{3327:function(e,n){e.exports={data:{markdownRemark:{html:"<h2>Cause</h2>\n<p>I seem to <code>sudo</code> in while waiting for a password.</p>\n<h2>prescription</h2>\n<p>Just go <code>homebrew_cask</code> after putting this task ahead.</p>\n<pre><code class=\"language-YAML\">- name: Unlock sudo \n  lineinfile: \n    dest: /etc/sudoers \n    regexp: '{{ ansible_env.USER }} ALL=\\(ALL\\) NOPASSWD: ALL' \n    line: '{{ ansible_env.USER }} ALL=(ALL) NOPASSWD: ALL' \n    validate: visudo -cf %s \n  become: yes \n</code></pre>\n<p>If you can install it until you are satisfied, do not forget to clean up again.</p>\n<pre><code class=\"language-YAML\">- name: Lock sudo \n  lineinfile: \n    dest: /etc/sudoers \n    regexp: '{{ ansible_env.USER }} ALL=\\(ALL\\) NOPASSWD: ALL' \n    line: '' \n    validate: visudo -cf %s \n  become: yes \n</code></pre>\n<h2>So what happened to <a href=\"../02/09-wordpress-to-jekyll\">Jekyll's plan</a> ?</h2>\n<p>The mockup on the TOP page was roughly done! Because it's a sloth Friends, it's a slow movement beyond cattle!</p>",frontmatter:{cover:null,date:"2017-04-25T11:29:56+09:00",strDate:"2017/4/25",title:"A prescription for freezing when using homebrew_cask with Ansible"}}},pathContext:{path:"/en/blog/2017/04/25-problem-of-homebrew-cask-from-ansible/",langKey:"en"}}}});
//# sourceMappingURL=path---en-blog-2017-04-25-problem-of-homebrew-cask-from-ansible-ccd9aea17ce3a6423ee2.js.map