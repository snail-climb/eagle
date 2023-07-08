import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as e,b as a}from"./app-c9aee7b0.js";const i={},l=a(`<h1 id="基本的dos命令" tabindex="-1"><a class="header-anchor" href="#基本的dos命令" aria-hidden="true">#</a> 基本的DOS命令</h1><blockquote><p><em><strong>DOS（磁盘操作系统 Disk Operating System）</strong></em></p></blockquote><h2 id="一、开启dos控制台的几种方式" tabindex="-1"><a class="header-anchor" href="#一、开启dos控制台的几种方式" aria-hidden="true">#</a> 一、开启DOS控制台的几种方式</h2><blockquote><ol><li>通过Windows开始菜单里的Windows系统文件夹下的命令提示符文件打开</li><li>通过快捷键<strong>Windows+R</strong>打开运行窗口，输入cmd，回车</li><li>在任意的文件夹下，按住Shift键+鼠标右键，点击在此处打开Powershell窗口</li><li>单击资源管理器的地址栏，输入cmd，回车</li></ol></blockquote><p><strong>以管理员方式运行</strong>：右键命令提示符文件选择以管理员身份运行</p><h2 id="二、常用的dos命令" tabindex="-1"><a class="header-anchor" href="#二、常用的dos命令" aria-hidden="true">#</a> 二、常用的DOS命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 盘符切换</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、cmd界面复制粘贴" tabindex="-1"><a class="header-anchor" href="#三、cmd界面复制粘贴" aria-hidden="true">#</a> 三、cmd界面复制粘贴</h2><blockquote><ol><li>在cmd界面单击鼠标右键即可粘贴</li><li><strong>复制</strong>：使用快捷键<strong>Ctrl+C</strong>或<strong>Ctrl+Insert</strong></li><li><strong>粘贴</strong>：使用快捷键<strong>Ctrl+V</strong>或<strong>Shift+Insert</strong></li></ol></blockquote>`,9),t=[l];function c(o,d){return s(),e("div",null,t)}const p=n(i,[["render",c],["__file","dos-command.html.vue"]]);export{p as default};
