import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as e,d as a}from"./app-MrYqimkW.js";const i={},c=a(`<h1 id="dos基础命令" tabindex="-1"><a class="header-anchor" href="#dos基础命令"><span>DOS基础命令</span></a></h1><p><em><strong>DOS（磁盘操作系统 Disk Operating System）</strong></em></p><h2 id="一、开启dos控制台的几种方式" tabindex="-1"><a class="header-anchor" href="#一、开启dos控制台的几种方式"><span>一、开启DOS控制台的几种方式</span></a></h2><blockquote><ol><li>通过Windows开始菜单里的Windows系统文件夹下的命令提示符文件打开</li><li>通过快捷键<code>Windows+R</code>打开运行窗口，输入<code>cmd</code>，<code>回车</code></li><li>在任意的文件夹下，按住<code>Shift键+鼠标右键</code>，点击在此处打开Powershell窗口</li><li>单击资源管理器的地址栏，输入<code>cmd</code>，<code>回车</code></li></ol></blockquote><p><strong>以管理员方式运行</strong>：右键命令提示符文件选择以管理员身份运行</p><h2 id="二、常用的dos命令" tabindex="-1"><a class="header-anchor" href="#二、常用的dos命令"><span>二、常用的DOS命令</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 盘符切换</span>
d: 或 D:
<span class="token comment"># 查看当前目录下的所有文件</span>
<span class="token function">dir</span>
<span class="token comment"># 切换目录cd（change directory）</span>
<span class="token builtin class-name">cd</span> /d e:	<span class="token comment"># 从其他盘进入e盘</span>
<span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>	<span class="token comment"># 返回上一级目录</span>
<span class="token builtin class-name">cd</span> tmp	<span class="token comment"># 进入tmp目录</span>
<span class="token comment"># 清理屏幕cls（clear screen）</span>
cls
<span class="token comment"># 退出终端</span>
<span class="token builtin class-name">exit</span>
<span class="token comment"># 查看IP配置信息，本地网卡的MAC地址</span>
ipconfig
<span class="token comment"># 测试网络是否正常，ping命令</span>
<span class="token function">ping</span> www.baidu.com
<span class="token comment"># 创建文件夹md</span>
md <span class="token builtin class-name">test</span>
<span class="token comment"># 创建文件</span>
cd<span class="token operator">&gt;</span>a.txt
<span class="token comment"># 删除文件</span>
del a.txt
<span class="token comment"># 删除目录</span>
rd <span class="token builtin class-name">test</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、cmd界面复制粘贴" tabindex="-1"><a class="header-anchor" href="#三、cmd界面复制粘贴"><span>三、cmd界面复制粘贴</span></a></h2><blockquote><ol><li>在cmd界面单击鼠标右键即可粘贴</li><li><strong>复制</strong>：使用快捷键<code>Ctrl+C</code>或<code>Ctrl+Insert</code></li><li><strong>粘贴</strong>：使用快捷键<code>Ctrl+V</code>或<code>Shift+Insert</code></li></ol></blockquote>`,9),l=[c];function d(o,t){return s(),e("div",null,l)}const p=n(i,[["render",d],["__file","dos-command.html.vue"]]),v=JSON.parse('{"path":"/note/basic/dos-command.html","title":"DOS基础命令","lang":"zh-CN","frontmatter":{"isOriginal":true,"category":"基础","tag":"命令"},"headers":[{"level":2,"title":"一、开启DOS控制台的几种方式","slug":"一、开启dos控制台的几种方式","link":"#一、开启dos控制台的几种方式","children":[]},{"level":2,"title":"二、常用的DOS命令","slug":"二、常用的dos命令","link":"#二、常用的dos命令","children":[]},{"level":2,"title":"三、cmd界面复制粘贴","slug":"三、cmd界面复制粘贴","link":"#三、cmd界面复制粘贴","children":[]}],"git":{"createdTime":1710603610000,"updatedTime":1710603610000,"contributors":[{"name":"Forrest","email":"workmail20201112@gmail.com","commits":1}]},"readingTime":{"minutes":1.1,"words":331},"filePathRelative":"note/basic/dos-command.md","localizedDate":"2024年3月16日","excerpt":"\\n<p><em><strong>DOS（磁盘操作系统 Disk Operating System）</strong></em></p>\\n<h2>一、开启DOS控制台的几种方式</h2>\\n<blockquote>\\n<ol>\\n<li>通过Windows开始菜单里的Windows系统文件夹下的命令提示符文件打开</li>\\n<li>通过快捷键<code>Windows+R</code>打开运行窗口，输入<code>cmd</code>，<code>回车</code></li>\\n<li>在任意的文件夹下，按住<code>Shift键+鼠标右键</code>，点击在此处打开Powershell窗口</li>\\n<li>单击资源管理器的地址栏，输入<code>cmd</code>，<code>回车</code></li>\\n</ol>\\n</blockquote>"}');export{p as comp,v as data};
