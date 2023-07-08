import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as i,b as l}from"./app-c9aee7b0.js";const m={},a=l(`<h1 id="rbac库表设计" tabindex="-1"><a class="header-anchor" href="#rbac库表设计" aria-hidden="true">#</a> RBAC库表设计</h1><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>create table if not exists sys_user
(
    id          int auto_increment primary key comment &#39;主键&#39;,
    nickname    varchar(255)                         not null comment &#39;昵称&#39;,
    username    varchar(255)                         not null comment &#39;账号&#39;,
    password    varchar(255)                         not null comment &#39;密码&#39;,
    email       varchar(255)                         null comment &#39;邮箱&#39;,
    flag        tinyint(1) default 1                 null comment &#39;启用标识,0:禁用;1:启用&#39;,
    create_time datetime   default CURRENT_TIMESTAMP null comment &#39;创建时间&#39;,
    update_time datetime   default CURRENT_TIMESTAMP null on update CURRENT_TIMESTAMP comment &#39;修改时间&#39;,
    constraint nickname unique (nickname),
    constraint username unique (username)
) comment &#39;用户表&#39;;

create table if not exists sys_user_role
(
    id      int auto_increment primary key comment &#39;主键&#39;,
    user_id int not null comment &#39;用户ID&#39;,
    role_id int not null comment &#39;角色ID&#39;,
    unique (user_id, role_id)
) comment &#39;用户角色中间表&#39;;

create table if not exists sys_role
(
    id          int auto_increment primary key comment &#39;主键&#39;,
    role_name   varchar(255)                         not null comment &#39;角色名称&#39;,
    flag        tinyint(1) default 1                 null comment &#39;启用标识,0:禁用;1:启用&#39;,
    create_time datetime   default CURRENT_TIMESTAMP null comment &#39;创建时间&#39;,
    update_time datetime   default CURRENT_TIMESTAMP null on update CURRENT_TIMESTAMP comment &#39;修改时间&#39;
) comment &#39;角色表&#39;;

create table if not exists sys_role_menu
(
    id      int auto_increment primary key comment &#39;主键&#39;,
    role_id int not null comment &#39;角色ID&#39;,
    menu_id int not null comment &#39;菜单ID&#39;,
    unique (role_id, menu_id)
) comment &#39;角色菜单中间表&#39;;

create table if not exists sys_menu
(
    id          int auto_increment primary key comment &#39;主键&#39;,
    menu_name   varchar(255)                         not null comment &#39;菜单名称&#39;,
    menu_path   varchar(255)                         not null comment &#39;菜单路径&#39;,
    menu_rank   int        default 0                 not null comment &#39;菜单排序&#39;,
    flag        tinyint(1) default 1                 null comment &#39;启用标识,0:禁用;1:启用&#39;,
    create_time datetime   default CURRENT_TIMESTAMP null comment &#39;创建时间&#39;,
    update_time datetime   default CURRENT_TIMESTAMP null on update CURRENT_TIMESTAMP comment &#39;修改时间&#39;
) comment &#39;权限表&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),t=[a];function d(s,r){return e(),i("div",null,t)}const v=n(m,[["render",d],["__file","rbac-template.html.vue"]]);export{v as default};
