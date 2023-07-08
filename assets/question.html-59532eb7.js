import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as n,b as a}from"./app-c9aee7b0.js";const i={},l=a(`<h1 id="问题记录" tabindex="-1"><a class="header-anchor" href="#问题记录" aria-hidden="true">#</a> 问题记录</h1><h2 id="一、区分pojo、dto、vo、bo、po" tabindex="-1"><a class="header-anchor" href="#一、区分pojo、dto、vo、bo、po" aria-hidden="true">#</a> 一、区分POJO、DTO、VO、BO、PO</h2><blockquote><p>POJO（Plain Ordinary Java Object）简单的Java对象。POJO会被分为DTO、VO、BO、PO。</p><p>DTO（Data Transfer Object）数据传输对象。服务调用时，传输的数据对象。</p><p>VO（View Object）视图对象。前端的展示数据。</p><p>BO（Business Object）业务对象</p><p>PO（Persistent Object）持久对象</p></blockquote><h2 id="二、centos配置ssh密钥登录" tabindex="-1"><a class="header-anchor" href="#二、centos配置ssh密钥登录" aria-hidden="true">#</a> 二、CentOS配置SSH密钥登录</h2><ol><li>客户端创建SSH密钥</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-C</span> <span class="token string">&quot;xxx@xxx.xxx&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>在服务器中导入公钥</li></ol><blockquote><p>将公钥信息复制到服务器（/root/.ssh/authorized_keys）中，注：多个公钥用换行分割。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /root/.ssh/authorized_keys
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>修改服务器的SSH配置</li></ol><blockquote><p>服务器的SSH配置文件位于/etc/ssh/sshd_config</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>RSAAuthentication yes # 开启RSA认证
PubkeyAuthentication yes # 开启公钥认证
AuthorizedKeysFile .ssh/authorized_keys # 公钥所在文件路径
PasswordAuthentication no # 密码认证
Port 22 # 登录端口
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>重启SSH服务</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl restart sshd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="三、mysql字符串拼接" tabindex="-1"><a class="header-anchor" href="#三、mysql字符串拼接" aria-hidden="true">#</a> 三、MySQL字符串拼接</h2><ol><li>CONCAT(string1,string2,…)</li></ol><blockquote><p>无缝拼接，如果有一个值为NULL，则返回NULL</p></blockquote><ol start="2"><li>CONCAT_WS(separator,string1,string2,…)</li></ol><blockquote><p>使用指定的分隔符拼接，如果分隔符为NULL，则返回NULL</p></blockquote><ol start="3"><li>GROUP_CONCAT([DISTINCT] 要拼接的字段 [Order BY ASC/DESC 排序字段] [Separator &#39;分隔符&#39;]）</li></ol><blockquote><p>分隔符默认为英文逗号</p></blockquote><h2 id="四、新版mysql安装教程-纯净版zip" tabindex="-1"><a class="header-anchor" href="#四、新版mysql安装教程-纯净版zip" aria-hidden="true">#</a> 四、新版MySQL安装教程（纯净版zip）</h2><ol><li>准备工作</li></ol><blockquote><p>配环境变量并在解压后的同级目录新建数据目录(data)与配置文件(my.ini)</p></blockquote><p>配置文件my.ini内容如下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[mysqld]
# 端口
port=3306

# 安装目录
basedir=E:\\application\\MySQL\\mysql-8.0.31-winx64

# 数据存放目录
datadir=E:\\application\\MySQL\\data

# 允许最大连接数
max_connections=200

# 允许连接失败的次数
max_connect_errors=10

# 服务端使用的字符集
character-set-server=utf8mb4

# 创建新表时将使用的默认存储引擎
default-storage-engine=INNODB

# 默认使用 “mysql_native_password” 插件认证
default_authentication_plugin=mysql_native_password

[mysql]
# 设置mysql客户端默认字符集
default-character-set=utf8mb4

[client]
# 设置mysql客户端连接服务端时，默认使用的端口和默认字符集
port=3306
default-character-set=utf8mb4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>命令</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 执行初始化命令，并保存初始密码</span>
mysqld <span class="token parameter variable">--initialize</span> <span class="token parameter variable">--console</span>
<span class="token comment"># 安装MySQL服务</span>
mysqld <span class="token parameter variable">--install</span>
<span class="token comment"># 启动MySQL</span>
net start mysql
<span class="token comment"># 登录MySQL</span>
mysql <span class="token parameter variable">-u</span> root <span class="token parameter variable">-p</span> <span class="token comment"># 输入初始化时保存的密码</span>
<span class="token comment"># 设置新密码</span>
ALTER <span class="token environment constant">USER</span> <span class="token string">&#39;root&#39;</span>@<span class="token string">&#39;localhost&#39;</span> IDENTIFIED WITH mysql_native_password BY <span class="token string">&#39;新密码&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,28),d=[l];function t(r,c){return s(),n("div",null,d)}const u=e(i,[["render",t],["__file","question.html.vue"]]);export{u as default};
