import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as n,d as e}from"./app-MrYqimkW.js";const t={},p=e(`<h1 id="hadoop集群部署文档" tabindex="-1"><a class="header-anchor" href="#hadoop集群部署文档"><span>Hadoop集群部署文档</span></a></h1><p><strong>本次部署的环境及版本信息</strong></p><ol><li>CentOS 8 Stream 最小化安装</li><li>网络模式：NAT模式</li><li>IP地址：192.168.10.1</li><li>子网：192.168.10.0</li><li>子网掩码：255.255.255.0</li><li>网关：192.168.10.2</li><li>JDK版本：<strong>8u391</strong></li><li>Hadoop版本：<strong>3.3.6</strong></li></ol><h2 id="一、准备工作" tabindex="-1"><a class="header-anchor" href="#一、准备工作"><span>一、准备工作</span></a></h2><h3 id="_1-工具安装" tabindex="-1"><a class="header-anchor" href="#_1-工具安装"><span>1. 工具安装</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>dnf <span class="token function">install</span> <span class="token parameter variable">-y</span> lrzsz
dnf <span class="token function">install</span> <span class="token parameter variable">-y</span> <span class="token function">nc</span>
dnf <span class="token function">install</span> <span class="token parameter variable">-y</span> net-tools
dnf <span class="token function">install</span> <span class="token parameter variable">-y</span> <span class="token function">rsync</span>
dnf <span class="token function">install</span> <span class="token parameter variable">-y</span> <span class="token function">vim</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-环境配置" tabindex="-1"><a class="header-anchor" href="#_2-环境配置"><span>2. 环境配置</span></a></h3><h4 id="_2-1-修改网络配置" tabindex="-1"><a class="header-anchor" href="#_2-1-修改网络配置"><span>2.1 修改网络配置</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># vim /etc/sysconfig/network-scripts/ifcfg-ens160 </span>
<span class="token assign-left variable">TYPE</span><span class="token operator">=</span>Ethernet
<span class="token assign-left variable">PROXY_METHOD</span><span class="token operator">=</span>none
<span class="token assign-left variable">BROWSER_ONLY</span><span class="token operator">=</span>no
<span class="token assign-left variable">BOOTPROTO</span><span class="token operator">=</span>static
<span class="token assign-left variable">DEFROUTE</span><span class="token operator">=</span>yes
<span class="token assign-left variable">IPV4_FAILURE_FATAL</span><span class="token operator">=</span>no
<span class="token assign-left variable">IPV6INIT</span><span class="token operator">=</span>yes
<span class="token assign-left variable">IPV6_AUTOCONF</span><span class="token operator">=</span>yes
<span class="token assign-left variable">IPV6_DEFROUTE</span><span class="token operator">=</span>yes
<span class="token assign-left variable">IPV6_FAILURE_FATAL</span><span class="token operator">=</span>no
<span class="token assign-left variable">IPV6_ADDR_GEN_MODE</span><span class="token operator">=</span>eui64
<span class="token assign-left variable">NAME</span><span class="token operator">=</span>ens160
<span class="token assign-left variable">UUID</span><span class="token operator">=</span>ae16600c-0960-4141-adad-7825cca5cd0f
<span class="token assign-left variable">DEVICE</span><span class="token operator">=</span>ens160
<span class="token assign-left variable">ONBOOT</span><span class="token operator">=</span>yes

<span class="token assign-left variable">IPADDR</span><span class="token operator">=</span><span class="token number">192.168</span>.10.100
<span class="token assign-left variable">GATEWAY</span><span class="token operator">=</span><span class="token number">192.168</span>.10.2
<span class="token assign-left variable">DNS1</span><span class="token operator">=</span><span class="token number">192.168</span>.10.2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-2-修改主机名称" tabindex="-1"><a class="header-anchor" href="#_2-2-修改主机名称"><span>2.2 修改主机名称</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># vim /etc/hostname</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_2-3-添加映射关系" tabindex="-1"><a class="header-anchor" href="#_2-3-添加映射关系"><span>2.3 添加映射关系</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># vim /etc/hosts</span>
<span class="token number">192.168</span>.10.100 gemini
<span class="token number">192.168</span>.10.101 hadoop101
<span class="token number">192.168</span>.10.102 hadoop102
<span class="token number">192.168</span>.10.103 hadoop103
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-4-关闭防火墙" tabindex="-1"><a class="header-anchor" href="#_2-4-关闭防火墙"><span>2.4 关闭防火墙</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>systemctl stop firewalld
systemctl disable firewalld.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-5-配置非root用户" tabindex="-1"><a class="header-anchor" href="#_2-5-配置非root用户"><span>2.5 配置非root用户</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">useradd</span> hadoop
<span class="token function">passwd</span> hadoop

<span class="token comment"># vim /etc/sudoers</span>
root    <span class="token assign-left variable">ALL</span><span class="token operator">=</span><span class="token punctuation">(</span>ALL<span class="token punctuation">)</span>       ALL
%wheel  <span class="token assign-left variable">ALL</span><span class="token operator">=</span><span class="token punctuation">(</span>ALL<span class="token punctuation">)</span>       ALL
hadoop  <span class="token assign-left variable">ALL</span><span class="token operator">=</span><span class="token punctuation">(</span>ALL<span class="token punctuation">)</span>       NOPASSWD:ALL
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-软件安装-非root用户操作" tabindex="-1"><a class="header-anchor" href="#_3-软件安装-非root用户操作"><span>3. 软件安装(非root用户操作)</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">su</span> hadoop
<span class="token function">sudo</span> <span class="token function">mkdir</span> /opt/module /opt/software
<span class="token function">sudo</span> <span class="token function">chown</span> hadoop:hadoop /opt/module/ /opt/software/
<span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> /opt/software/jdk-8u391-linux-x64.tar.gz <span class="token parameter variable">-C</span> /opt/module/
<span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> /opt/software/hadoop-3.3.6.tar.gz <span class="token parameter variable">-C</span> /opt/module/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># vim /etc/profile.d/my_env.sh</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span>/opt/module/jdk1.8.0_391
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$JAVA_HOME</span>/bin

<span class="token builtin class-name">export</span> <span class="token assign-left variable">HADOOP_HOME</span><span class="token operator">=</span>/opt/module/hadoop-3.3.6
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$HADOOP_HOME</span>/bin
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$HADOOP_HOME</span>/sbin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">source</span> /etc/profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4-ssh免密登录" tabindex="-1"><a class="header-anchor" href="#_4-ssh免密登录"><span>4. ssh免密登录</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># root和非root用户各执行一遍</span>
ssh-keygen <span class="token parameter variable">-t</span> rsa
ssh-copy-id hadoop101
ssh-copy-id hadoop102
ssh-copy-id hadoop103
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-内容分发" tabindex="-1"><a class="header-anchor" href="#_5-内容分发"><span>5. 内容分发</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># Secure Copy(同步用scp -r; 修改用rsync -av)</span>
<span class="token comment"># 主动推</span>
<span class="token function">scp</span> <span class="token parameter variable">-r</span> jdk1.8.0_391/ hadoop@hadoop102:/opt/module
<span class="token comment"># 主动拉</span>
<span class="token function">scp</span> <span class="token parameter variable">-r</span> hadoop@hadoop101:/opt/module/hadoop-3.3.6 ./
<span class="token comment"># 指定发送和接收方</span>
<span class="token function">scp</span> <span class="token parameter variable">-r</span> hadoop@hadoop101:/opt/module/* hadoop@hadoop103:/opt/module/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 编写xsync(对rsync的封装)</span>
<span class="token builtin class-name">cd</span> /home/hadoop
<span class="token function">mkdir</span> bin
<span class="token builtin class-name">cd</span> bin
<span class="token function">vim</span> xsync
<span class="token function">chmod</span> <span class="token number">777</span> xsync
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$#</span> <span class="token parameter variable">-lt</span> <span class="token number">1</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> Not Enough Arguements<span class="token operator">!</span>
    <span class="token builtin class-name">exit</span><span class="token punctuation">;</span>
<span class="token keyword">fi</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">host</span> <span class="token keyword">in</span> hadoop101 hadoop102 hadoop103
<span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span>  <span class="token variable">$host</span>  <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span>
    <span class="token keyword">for</span> <span class="token for-or-select variable">file</span> <span class="token keyword">in</span> <span class="token variable">$@</span>
    <span class="token keyword">do</span>
        <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-e</span> <span class="token variable">$file</span> <span class="token punctuation">]</span>
        <span class="token keyword">then</span>
            <span class="token assign-left variable">pdir</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">cd</span> <span class="token parameter variable">-P</span> <span class="token punctuation">$(</span>dirname $file<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token builtin class-name">pwd</span><span class="token variable">)</span></span>
            <span class="token assign-left variable">fname</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">basename</span> $file<span class="token variable">)</span></span>
            <span class="token function">ssh</span> <span class="token variable">$host</span> <span class="token string">&quot;mkdir -p <span class="token variable">$pdir</span>&quot;</span>
            <span class="token function">rsync</span> <span class="token parameter variable">-av</span> <span class="token variable">$pdir</span>/<span class="token variable">$fname</span> <span class="token variable">$host</span><span class="token builtin class-name">:</span><span class="token variable">$pdir</span>
        <span class="token keyword">else</span>
            <span class="token builtin class-name">echo</span> <span class="token variable">$file</span> does not exist<span class="token operator">!</span>
        <span class="token keyword">fi</span>
    <span class="token keyword">done</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、核心配置" tabindex="-1"><a class="header-anchor" href="#二、核心配置"><span>二、核心配置</span></a></h2><h3 id="_1-集群规划" tabindex="-1"><a class="header-anchor" href="#_1-集群规划"><span>1. 集群规划</span></a></h3><table><thead><tr><th></th><th>hadoop101</th><th>hadoop102</th><th>hadoop103</th></tr></thead><tbody><tr><td>NameNode</td><td>√</td><td></td><td></td></tr><tr><td>SecondaryNameNode</td><td></td><td>√</td><td></td></tr><tr><td>DataNode</td><td>√</td><td>√</td><td>√</td></tr><tr><td>ResourceManager</td><td></td><td></td><td>√</td></tr><tr><td>NodeManager</td><td>√</td><td>√</td><td>√</td></tr></tbody></table><h3 id="_2-集群配置" tabindex="-1"><a class="header-anchor" href="#_2-集群配置"><span>2. 集群配置</span></a></h3><h4 id="_2-1-核心配置文件" tabindex="-1"><a class="header-anchor" href="#_2-1-核心配置文件"><span>2.1 核心配置文件</span></a></h4><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- core-site.xml --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>fs.defaultFS<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>value</span><span class="token punctuation">&gt;</span></span>hdfs://hadoop101:8020<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>value</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>hadoop.tmp.dir<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>value</span><span class="token punctuation">&gt;</span></span>/opt/module/hadoop-3.3.6/tmp<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>value</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>hadoop.http.staticuser.user<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>value</span><span class="token punctuation">&gt;</span></span>hadoop<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>value</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-2-hdfs配置文件" tabindex="-1"><a class="header-anchor" href="#_2-2-hdfs配置文件"><span>2.2 HDFS配置文件</span></a></h4><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- hdfs-site.xml --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>dfs.namenode.http-address<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>value</span><span class="token punctuation">&gt;</span></span>hadoop101:9870<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>value</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>dfs.namenode.secondary.http-address<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>value</span><span class="token punctuation">&gt;</span></span>hadoop102:9868<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>value</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-3-mapreduce配置文件" tabindex="-1"><a class="header-anchor" href="#_2-3-mapreduce配置文件"><span>2.3 MapReduce配置文件</span></a></h4><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- mapred-site.xml --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>mapreduce.framework.name<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>value</span><span class="token punctuation">&gt;</span></span>yarn<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>value</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-4-yarn配置文件" tabindex="-1"><a class="header-anchor" href="#_2-4-yarn配置文件"><span>2.4 YARN配置文件</span></a></h4><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- yarn-site.xml --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>yarn.resourcemanager.hostname<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>value</span><span class="token punctuation">&gt;</span></span>hadoop103<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>value</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>yarn.resourcemanager.webapp.address<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>value</span><span class="token punctuation">&gt;</span></span>\${yarn.resourcemanager.hostname}:8088<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>value</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>yarn.nodemanager.aux-services<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>value</span><span class="token punctuation">&gt;</span></span>mapreduce_shuffle<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>value</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-5-hadoop-env-sh" tabindex="-1"><a class="header-anchor" href="#_2-5-hadoop-env-sh"><span>2.5 hadoop-env.sh</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># hadoop-env.sh</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span>/opt/module/jdk1.8.0_391
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-6-workers" tabindex="-1"><a class="header-anchor" href="#_2-6-workers"><span>2.6 workers</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># vim workers</span>
hadoop101
hadoop102
hadoop103
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-集群启动" tabindex="-1"><a class="header-anchor" href="#_3-集群启动"><span>3. 集群启动</span></a></h3><h4 id="_3-1-集群初始化-首次启动" tabindex="-1"><a class="header-anchor" href="#_3-1-集群初始化-首次启动"><span>3.1 集群初始化(首次启动)</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>hdfs namenode <span class="token parameter variable">-format</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_3-2-集群启动" tabindex="-1"><a class="header-anchor" href="#_3-2-集群启动"><span>3.2 集群启动</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># hadoop101</span>
sbin/start-dfs.sh
<span class="token comment"># hadoop103</span>
sbin/start-yarn.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-3-web界面" tabindex="-1"><a class="header-anchor" href="#_3-3-web界面"><span>3.3 WEB界面</span></a></h4><blockquote><p>NameNode(HDFS)：http://hadoop101:9870</p><p>ResourceManager(YARN)：http://hadoop103:8088</p></blockquote><h2 id="三、默认配置" tabindex="-1"><a class="header-anchor" href="#三、默认配置"><span>三、默认配置</span></a></h2><blockquote><p>默认配置文件位于：<code>$HADOOP_HOME/share/hadoop</code></p><ol><li><code>common</code>路径下的<code>hadoop-common-x.x.x.jar</code></li><li><code>hdfs</code>路径下的<code>hadoop-hdfs-x.x.x.jar</code></li><li><code>mapreduce</code>路径下的<code>hadoop-mapreduce-client-core-x.x.x.jar</code></li><li><code>yarn</code>路径下的<code>hadoop-yarn-common-x.x.x.jar</code></li></ol></blockquote>`,52),l=[p];function o(i,c){return s(),n("div",null,l)}const u=a(t,[["render",o],["__file","hadoop.html.vue"]]),k=JSON.parse('{"path":"/note/deploy/hadoop.html","title":"Hadoop集群部署文档","lang":"zh-CN","frontmatter":{"isOriginal":true,"category":"部署","tag":"Hadoop","sticky":true},"headers":[{"level":2,"title":"一、准备工作","slug":"一、准备工作","link":"#一、准备工作","children":[{"level":3,"title":"1. 工具安装","slug":"_1-工具安装","link":"#_1-工具安装","children":[]},{"level":3,"title":"2. 环境配置","slug":"_2-环境配置","link":"#_2-环境配置","children":[]},{"level":3,"title":"3. 软件安装(非root用户操作)","slug":"_3-软件安装-非root用户操作","link":"#_3-软件安装-非root用户操作","children":[]},{"level":3,"title":"4. ssh免密登录","slug":"_4-ssh免密登录","link":"#_4-ssh免密登录","children":[]},{"level":3,"title":"5. 内容分发","slug":"_5-内容分发","link":"#_5-内容分发","children":[]}]},{"level":2,"title":"二、核心配置","slug":"二、核心配置","link":"#二、核心配置","children":[{"level":3,"title":"1. 集群规划","slug":"_1-集群规划","link":"#_1-集群规划","children":[]},{"level":3,"title":"2. 集群配置","slug":"_2-集群配置","link":"#_2-集群配置","children":[]},{"level":3,"title":"3. 集群启动","slug":"_3-集群启动","link":"#_3-集群启动","children":[]}]},{"level":2,"title":"三、默认配置","slug":"三、默认配置","link":"#三、默认配置","children":[]}],"git":{"createdTime":1710603610000,"updatedTime":1710603610000,"contributors":[{"name":"Forrest","email":"workmail20201112@gmail.com","commits":1}]},"readingTime":{"minutes":2.4,"words":720},"filePathRelative":"note/deploy/hadoop.md","localizedDate":"2024年3月16日","excerpt":"\\n<p><strong>本次部署的环境及版本信息</strong></p>\\n<ol>\\n<li>CentOS 8 Stream 最小化安装</li>\\n<li>网络模式：NAT模式</li>\\n<li>IP地址：192.168.10.1</li>\\n<li>子网：192.168.10.0</li>\\n<li>子网掩码：255.255.255.0</li>\\n<li>网关：192.168.10.2</li>\\n<li>JDK版本：<strong>8u391</strong></li>\\n<li>Hadoop版本：<strong>3.3.6</strong></li>\\n</ol>\\n<h2>一、准备工作</h2>\\n"}');export{u as comp,k as data};
