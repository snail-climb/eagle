import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as r,c as i,b as u,w as a,d as p,a as s,e}from"./app-MrYqimkW.js";const d={},g=p('<h1 id="获取类路径下资源" tabindex="-1"><a class="header-anchor" href="#获取类路径下资源"><span>获取类路径下资源</span></a></h1><h2 id="一、方式" tabindex="-1"><a class="header-anchor" href="#一、方式"><span>一、方式</span></a></h2><h3 id="_1-classpathresource" tabindex="-1"><a class="header-anchor" href="#_1-classpathresource"><span>1. ClassPathResource</span></a></h3><blockquote><p>ClassPathResource是Spring Framework提供的一个类，用于获取类路径下的资源文件。通过提供资源文件的路径，可以创建一个ClassPathResource对象，并使用该对象获取资源文件的输入流、文件路径、URL等。</p></blockquote><p><strong>注意</strong>：这种方式不要求资源文件的路径以斜杠<code>/</code>开头。ClassPathResource会根据类路径来查找资源文件。</p><h3 id="_2-getclass-getresourceasstream" tabindex="-1"><a class="header-anchor" href="#_2-getclass-getresourceasstream"><span>2. getClass().getResourceAsStream()</span></a></h3><blockquote><p>getClass().getResourceAsStream(String resourcePath)是Java中的方法，用于从类路径中获取资源文件的输入流。它是通过指定资源文件的路径作为参数来获取该资源文件的输入流。</p></blockquote><p><strong>注意</strong>：这种方式要求资源文件的路径以斜杠<code>/</code>开头，表示相对于类路径的根目录的路径。资源文件将被作为类路径中的资源来查找和获取。</p><h3 id="_3-getclass-getclassloader-getresourceasstream" tabindex="-1"><a class="header-anchor" href="#_3-getclass-getclassloader-getresourceasstream"><span>3. getClass().getClassLoader().getResourceAsStream()</span></a></h3><blockquote><p>getClass().getClassLoader().getResourceAsStream(String resourcePath)是Java中的另一个方法，也是用于从类路径中获取资源文件的输入流。与getClass().getResourceAsStream()类似，它也是通过指定资源文件的路径作为参数来获取该资源文件的输入流。</p></blockquote><p><strong>注意</strong>：这种方式不要求资源文件的路径以斜杠<code>/</code>开头。它使用的是类加载器来获取资源文件，相对于类路径的位置。</p><h2 id="二、示例" tabindex="-1"><a class="header-anchor" href="#二、示例"><span>二、示例</span></a></h2>',12),h=s("div",{class:"language-java line-numbers-mode","data-ext":"java","data-title":"java"},[s("pre",{class:"language-java"},[s("code",null,[s("span",{class:"token class-name"},"ClassPathResource"),e(" resource "),s("span",{class:"token operator"},"="),e(),s("span",{class:"token keyword"},"new"),e(),s("span",{class:"token class-name"},"ClassPathResource"),s("span",{class:"token punctuation"},"("),s("span",{class:"token string"},'"path/resource.file"'),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";"),e(`
`),s("span",{class:"token class-name"},"InputStream"),e(" is "),s("span",{class:"token operator"},"="),e(" resource"),s("span",{class:"token punctuation"},"."),s("span",{class:"token function"},"getInputStream"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";"),e(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),m=s("div",{class:"language-java line-numbers-mode","data-ext":"java","data-title":"java"},[s("pre",{class:"language-java"},[s("code",null,[s("span",{class:"token class-name"},"InputStream"),e(" is "),s("span",{class:"token operator"},"="),e(),s("span",{class:"token function"},"getClass"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},"."),s("span",{class:"token function"},"getResourceAsStream"),s("span",{class:"token punctuation"},"("),s("span",{class:"token string"},'"/path/resource.file"'),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";"),e(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),k=s("div",{class:"language-java line-numbers-mode","data-ext":"java","data-title":"java"},[s("pre",{class:"language-java"},[s("code",null,[s("span",{class:"token class-name"},"InputStream"),e(" is "),s("span",{class:"token operator"},"="),e(),s("span",{class:"token function"},"getClass"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},"."),s("span",{class:"token function"},"getClassLoader"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},"."),s("span",{class:"token function"},"getResourceAsStream"),s("span",{class:"token punctuation"},"("),s("span",{class:"token string"},'"path/resource.file"'),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";"),e(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),v=s("p",null,[s("strong",null,"注意"),e("：getClass().getResourceAsStream()和getClass().getClassLoader().getResourceAsStream()都是通过反射来获取资源文件的输入流，而ClassPathResource是Spring Framework提供的一种资源访问方式，可以与Spring的其他功能和组件进行集成使用。")],-1);function _(b,C){const c=l("Tabs");return r(),i("div",null,[g,u(c,{id:"42",data:[{id:"方式一（推荐）"},{id:"方式二"},{id:"方式三"}],active:0},{title0:a(({value:t,isActive:n})=>[e("方式一（推荐）")]),title1:a(({value:t,isActive:n})=>[e("方式二")]),title2:a(({value:t,isActive:n})=>[e("方式三")]),tab0:a(({value:t,isActive:n})=>[h]),tab1:a(({value:t,isActive:n})=>[m]),tab2:a(({value:t,isActive:n})=>[k]),_:1}),v])}const S=o(d,[["render",_],["__file","classpath-resource.html.vue"]]),A=JSON.parse('{"path":"/note/basic/classpath-resource.html","title":"获取类路径下资源","lang":"zh-CN","frontmatter":{"isOriginal":true,"category":"基础","tag":"语法"},"headers":[{"level":2,"title":"一、方式","slug":"一、方式","link":"#一、方式","children":[{"level":3,"title":"1. ClassPathResource","slug":"_1-classpathresource","link":"#_1-classpathresource","children":[]},{"level":3,"title":"2. getClass().getResourceAsStream()","slug":"_2-getclass-getresourceasstream","link":"#_2-getclass-getresourceasstream","children":[]},{"level":3,"title":"3. getClass().getClassLoader().getResourceAsStream()","slug":"_3-getclass-getclassloader-getresourceasstream","link":"#_3-getclass-getclassloader-getresourceasstream","children":[]}]},{"level":2,"title":"二、示例","slug":"二、示例","link":"#二、示例","children":[]}],"git":{"createdTime":1710603610000,"updatedTime":1710603610000,"contributors":[{"name":"Forrest","email":"workmail20201112@gmail.com","commits":1}]},"readingTime":{"minutes":1.52,"words":457},"filePathRelative":"note/basic/classpath-resource.md","localizedDate":"2024年3月16日","excerpt":"\\n<h2>一、方式</h2>\\n<h3>1. ClassPathResource</h3>\\n<blockquote>\\n<p>ClassPathResource是Spring Framework提供的一个类，用于获取类路径下的资源文件。通过提供资源文件的路径，可以创建一个ClassPathResource对象，并使用该对象获取资源文件的输入流、文件路径、URL等。</p>\\n</blockquote>\\n<p><strong>注意</strong>：这种方式不要求资源文件的路径以斜杠<code>/</code>开头。ClassPathResource会根据类路径来查找资源文件。</p>\\n<h3>2. getClass().getResourceAsStream()</h3>"}');export{S as comp,A as data};
