import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as s,d as t}from"./app-MrYqimkW.js";const p={},e=t(`<h1 id="ip校验" tabindex="-1"><a class="header-anchor" href="#ip校验"><span>IP校验</span></a></h1><h2 id="_1-pom依赖" tabindex="-1"><a class="header-anchor" href="#_1-pom依赖"><span>1. POM依赖</span></a></h2><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>commons-validator<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>commons-validator<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.7<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-示例" tabindex="-1"><a class="header-anchor" href="#_2-示例"><span>2. 示例</span></a></h2><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token class-name">InetAddressValidator</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isValidInet4Address</span><span class="token punctuation">(</span>ip<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">InetAddressValidator</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isValidInet6Address</span><span class="token punctuation">(</span>ip<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,5),c=[e];function o(l,i){return n(),s("div",null,c)}const k=a(p,[["render",o],["__file","ip-regex.html.vue"]]),r=JSON.parse('{"path":"/note/work/ip-regex.html","title":"IP校验","lang":"zh-CN","frontmatter":{"isOriginal":true,"category":"工作","tag":"记录"},"headers":[{"level":2,"title":"1. POM依赖","slug":"_1-pom依赖","link":"#_1-pom依赖","children":[]},{"level":2,"title":"2. 示例","slug":"_2-示例","link":"#_2-示例","children":[]}],"git":{"createdTime":1710603610000,"updatedTime":1710603610000,"contributors":[{"name":"Forrest","email":"workmail20201112@gmail.com","commits":1}]},"readingTime":{"minutes":0.13,"words":39},"filePathRelative":"note/work/ip-regex.md","localizedDate":"2024年3月16日","excerpt":"\\n<h2>1. POM依赖</h2>\\n<div class=\\"language-xml\\" data-ext=\\"xml\\" data-title=\\"xml\\"><pre class=\\"language-xml\\"><code><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>dependency</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>groupId</span><span class=\\"token punctuation\\">&gt;</span></span>commons-validator<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>groupId</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>artifactId</span><span class=\\"token punctuation\\">&gt;</span></span>commons-validator<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>artifactId</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>version</span><span class=\\"token punctuation\\">&gt;</span></span>1.7<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>version</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>dependency</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre></div>"}');export{k as comp,r as data};