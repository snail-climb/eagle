import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as a,d as e}from"./app-MrYqimkW.js";const t={},p=e(`<h1 id="hive" tabindex="-1"><a class="header-anchor" href="#hive"><span>Hive</span></a></h1><h2 id="_1-stage层建表" tabindex="-1"><a class="header-anchor" href="#_1-stage层建表"><span>1. Stage层建表</span></a></h2><p>在建表语句末尾添加以下内容：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>PARTITIONED <span class="token keyword">BY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">\`</span>pt_platform<span class="token punctuation">\`</span></span> string<span class="token punctuation">)</span>
<span class="token keyword">ROW</span> FORMAT SERDE <span class="token string">&#39;org.apache.hadoop.hive.serde2.lazy.LazySimpleSerDe&#39;</span>
<span class="token keyword">WITH</span> SERDEPROPERTIES <span class="token punctuation">(</span>
    <span class="token string">&#39;field.delim&#39;</span> <span class="token operator">=</span> <span class="token string">&#39;\\t&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;line.delim&#39;</span> <span class="token operator">=</span> <span class="token string">&#39;\\n&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;serialization.format&#39;</span> <span class="token operator">=</span> <span class="token string">&#39;\\t&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;serialization.null.format&#39;</span> <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
<span class="token punctuation">)</span>
STORED <span class="token keyword">AS</span> TEXTFILE<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-其它分层建表" tabindex="-1"><a class="header-anchor" href="#_2-其它分层建表"><span>2. 其它分层建表</span></a></h2><p>在建表语句末尾添加以下内容：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>PARTITIONED <span class="token keyword">BY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">\`</span>pt_platform<span class="token punctuation">\`</span></span> string<span class="token punctuation">)</span>
<span class="token keyword">ROW</span> FORMAT SERDE <span class="token string">&#39;org.apache.hadoop.hive.ql.io.orc.OrcSerde&#39;</span>
<span class="token keyword">WITH</span> SERDEPROPERTIES <span class="token punctuation">(</span>
    <span class="token string">&#39;field.delim&#39;</span> <span class="token operator">=</span> <span class="token string">&#39;\\t&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;line.delim&#39;</span> <span class="token operator">=</span> <span class="token string">&#39;\\n&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;serialization.format&#39;</span> <span class="token operator">=</span> <span class="token string">&#39;\\t&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;serialization.null.format&#39;</span> <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
<span class="token punctuation">)</span>
STORED <span class="token keyword">AS</span> ORC tblproperties <span class="token punctuation">(</span><span class="token string">&quot;orc.compress&quot;</span> <span class="token operator">=</span> <span class="token string">&quot;zlib&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-load语法" tabindex="-1"><a class="header-anchor" href="#_3-load语法"><span>3. LOAD语法</span></a></h2><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">LOAD</span> <span class="token keyword">DATA</span> <span class="token keyword">LOCAL</span> INPATH <span class="token string">&#39;/path/filename.csv&#39;</span> OVERWRITE <span class="token keyword">INTO</span> <span class="token keyword">TABLE</span> db<span class="token punctuation">.</span><span class="token keyword">table</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,9),l=[p];function o(i,c){return n(),a("div",null,l)}const k=s(t,[["render",o],["__file","hive.html.vue"]]),u=JSON.parse(`{"path":"/note/work/hive.html","title":"Hive","lang":"zh-CN","frontmatter":{"isOriginal":true,"category":"工作","tag":"总结"},"headers":[{"level":2,"title":"1. Stage层建表","slug":"_1-stage层建表","link":"#_1-stage层建表","children":[]},{"level":2,"title":"2. 其它分层建表","slug":"_2-其它分层建表","link":"#_2-其它分层建表","children":[]},{"level":2,"title":"3. LOAD语法","slug":"_3-load语法","link":"#_3-load语法","children":[]}],"git":{"createdTime":1710603610000,"updatedTime":1710603610000,"contributors":[{"name":"Forrest","email":"workmail20201112@gmail.com","commits":1}]},"readingTime":{"minutes":0.35,"words":106},"filePathRelative":"note/work/hive.md","localizedDate":"2024年3月16日","excerpt":"\\n<h2>1. Stage层建表</h2>\\n<p>在建表语句末尾添加以下内容：</p>\\n<div class=\\"language-sql\\" data-ext=\\"sql\\" data-title=\\"sql\\"><pre class=\\"language-sql\\"><code>PARTITIONED <span class=\\"token keyword\\">BY</span> <span class=\\"token punctuation\\">(</span><span class=\\"token identifier\\"><span class=\\"token punctuation\\">\`</span>pt_platform<span class=\\"token punctuation\\">\`</span></span> string<span class=\\"token punctuation\\">)</span>\\n<span class=\\"token keyword\\">ROW</span> FORMAT SERDE <span class=\\"token string\\">'org.apache.hadoop.hive.serde2.lazy.LazySimpleSerDe'</span>\\n<span class=\\"token keyword\\">WITH</span> SERDEPROPERTIES <span class=\\"token punctuation\\">(</span>\\n    <span class=\\"token string\\">'field.delim'</span> <span class=\\"token operator\\">=</span> <span class=\\"token string\\">'\\\\t'</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token string\\">'line.delim'</span> <span class=\\"token operator\\">=</span> <span class=\\"token string\\">'\\\\n'</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token string\\">'serialization.format'</span> <span class=\\"token operator\\">=</span> <span class=\\"token string\\">'\\\\t'</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token string\\">'serialization.null.format'</span> <span class=\\"token operator\\">=</span> <span class=\\"token string\\">''</span>\\n<span class=\\"token punctuation\\">)</span>\\nSTORED <span class=\\"token keyword\\">AS</span> TEXTFILE<span class=\\"token punctuation\\">;</span>\\n</code></pre></div>"}`);export{k as comp,u as data};