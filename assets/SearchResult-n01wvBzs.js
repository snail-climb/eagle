import{u as U,f as Z,g as ee,h as M,i as te,j as ae,t as se,k as le,l as L,m as S,n as re,p as Y,q as a,s as oe,R as O,v as ue,x as ie,y as ne,z as _,A as I,B as ce,C as ve,D as he,E as pe,O as de,F as ye,G as me,P as ge,H as fe,I as Ee,J as R}from"./app-MrYqimkW.js";const ke=["/","/note/","/note/basic/classpath-resource.html","/note/basic/dos-command.html","/note/basic/kafka-command.html","/note/basic/markdown.html","/note/basic/maven-scope.html","/note/basic/python.html","/note/basic/web-code-standard.html","/note/basic/win11-right-click.html","/note/basic/windows-key.html","/note/deploy/hadoop-core.html","/note/deploy/hadoop-hdfs.html","/note/deploy/hadoop-mapred.html","/note/deploy/hadoop-yarn.html","/note/deploy/hadoop.html","/note/deploy/mysql.html","/note/template/mybatis-xml.html","/note/template/mysql-ini.html","/note/template/rbac-sql.html","/note/work/hive.html","/note/work/ip-regex.html","/note/work/question.html","/note/work/study-lines.html","/404.html","/note/basic/","/note/deploy/","/note/template/","/note/work/","/category/","/category/%E5%9F%BA%E7%A1%80/","/category/%E9%83%A8%E7%BD%B2/","/category/%E6%A8%A1%E6%9D%BF/","/category/%E5%B7%A5%E4%BD%9C/","/tag/","/tag/%E8%AF%AD%E6%B3%95/","/tag/%E5%91%BD%E4%BB%A4/","/tag/%E6%A6%82%E5%BF%B5/","/tag/hadoop/","/tag/mysql/","/tag/%E6%95%B0%E6%8D%AE%E5%BA%93/","/tag/%E6%80%BB%E7%BB%93/","/tag/%E8%AE%B0%E5%BD%95/","/article/","/star/","/timeline/"],we="SEARCH_PRO_QUERY_HISTORY",d=U(we,[]),He=()=>{const{queryHistoryCount:s}=R,l=s>0;return{enabled:l,queryHistory:d,addQueryHistory:r=>{l&&(d.value.length<s?d.value=Array.from(new Set([r,...d.value])):d.value=Array.from(new Set([r,...d.value.slice(0,s-1)])))},removeQueryHistory:r=>{d.value=[...d.value.slice(0,r),...d.value.slice(r+1)]}}},P=s=>ke[s.id]+("anchor"in s?`#${s.anchor}`:""),Ae="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:F}=R,y=U(Ae,[]),Be=()=>{const s=F>0;return{enabled:s,resultHistory:y,addResultHistory:l=>{if(s){const r={link:P(l),display:l.display};"header"in l&&(r.header=l.header),y.value.length<F?y.value=[r,...y.value]:y.value=[r,...y.value.slice(0,F-1)]}},removeResultHistory:l=>{y.value=[...y.value.slice(0,l),...y.value.slice(l+1)]}}},Re=s=>{const l=ce(),r=M(),b=ve(),u=L(!1),f=he([]);return pe(()=>{const{search:w,terminate:m}=de(),H=()=>{f.value=[],u.value=!1},E=Ee(c=>{const k=c.join(" "),{searchFilter:q=p=>p,splitWord:Q,suggestionsFilter:T,...g}=l.value;u.value=!0,k?w(c.join(" "),r.value,g).then(p=>q(p,k,r.value,b.value)).then(p=>{f.value=p,u.value=!1}).catch(p=>{console.error(p),H()}):H()},R.searchDelay-R.suggestDelay);Y([s,r],([c])=>E(c),{immediate:!0}),ye(()=>{m()})}),{searching:u,results:f}};var qe=Z({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(s,{emit:l}){const r=ee(),b=M(),u=te(ae),{enabled:f,addQueryHistory:w,queryHistory:m,removeQueryHistory:H}=He(),{enabled:E,resultHistory:c,addResultHistory:k,removeResultHistory:q}=Be(),Q=f||E,T=se(s,"queries"),{results:g,searching:p}=Re(T),o=le({isQuery:!0,index:0}),v=L(0),h=L(0),$=S(()=>Q&&(m.value.length>0||c.value.length>0)),x=S(()=>g.value.length>0),D=S(()=>g.value[v.value]||null),z=()=>{const{isQuery:e,index:t}=o;t===0?(o.isQuery=!e,o.index=e?c.value.length-1:m.value.length-1):o.index=t-1},G=()=>{const{isQuery:e,index:t}=o;t===(e?m.value.length-1:c.value.length-1)?(o.isQuery=!e,o.index=0):o.index=t+1},J=()=>{v.value=v.value>0?v.value-1:g.value.length-1,h.value=D.value.contents.length-1},V=()=>{v.value=v.value<g.value.length-1?v.value+1:0,h.value=0},K=()=>{h.value<D.value.contents.length-1?h.value+=1:V()},N=()=>{h.value>0?h.value-=1:J()},C=e=>e.map(t=>me(t)?t:a(t[0],t[1])),W=e=>{if(e.type==="customField"){const t=ge[e.index]||"$content",[i,B=""]=fe(t)?t[b.value].split("$content"):t.split("$content");return e.display.map(n=>a("div",C([i,...n,B])))}return e.display.map(t=>a("div",C(t)))},A=()=>{v.value=0,h.value=0,l("updateQuery",""),l("close")};return re("keydown",e=>{if(s.isFocusing){if(x.value){if(e.key==="ArrowUp")N();else if(e.key==="ArrowDown")K();else if(e.key==="Enter"){const t=D.value.contents[h.value];w(s.queries.join(" ")),k(t),r.push(P(t)),A()}}else if(E){if(e.key==="ArrowUp")z();else if(e.key==="ArrowDown")G();else if(e.key==="Enter"){const{index:t}=o;o.isQuery?(l("updateQuery",m.value[t]),e.preventDefault()):(r.push(c.value[t].link),A())}}}}),Y([v,h],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>a("div",{class:["search-pro-result-wrapper",{empty:s.queries.length?!x.value:!$.value}],id:"search-pro-results"},s.queries.length?p.value?a(oe,{hint:u.value.searching}):x.value?a("ul",{class:"search-pro-result-list"},g.value.map(({title:e,contents:t},i)=>{const B=v.value===i;return a("li",{class:["search-pro-result-list-item",{active:B}]},[a("div",{class:"search-pro-result-title"},e||u.value.defaultTitle),t.map((n,X)=>{const j=B&&h.value===X;return a(O,{to:P(n),class:["search-pro-result-item",{active:j,"aria-selected":j}],onClick:()=>{w(s.queries.join(" ")),k(n),A()}},()=>[n.type==="text"?null:a(n.type==="title"?ue:n.type==="heading"?ie:ne,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},[n.type==="text"&&n.header?a("div",{class:"content-header"},n.header):null,a("div",W(n))])])})])})):u.value.emptyResult:Q?$.value?[f?a("ul",{class:"search-pro-result-list"},a("li",{class:"search-pro-result-list-item"},[a("div",{class:"search-pro-result-title"},u.value.queryHistory),m.value.map((e,t)=>a("div",{class:["search-pro-result-item",{active:o.isQuery&&o.index===t}],onClick:()=>{l("updateQuery",e)}},[a(_,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},e),a("button",{class:"search-pro-remove-icon",innerHTML:I,onClick:i=>{i.preventDefault(),i.stopPropagation(),H(t)}})]))])):null,E?a("ul",{class:"search-pro-result-list"},a("li",{class:"search-pro-result-list-item"},[a("div",{class:"search-pro-result-title"},u.value.resultHistory),c.value.map((e,t)=>a(O,{to:e.link,class:["search-pro-result-item",{active:!o.isQuery&&o.index===t}],onClick:()=>{A()}},()=>[a(_,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},[e.header?a("div",{class:"content-header"},e.header):null,a("div",e.display.map(i=>C(i)).flat())]),a("button",{class:"search-pro-remove-icon",innerHTML:I,onClick:i=>{i.preventDefault(),i.stopPropagation(),q(t)}})]))])):null]:u.value.emptyHistory:u.value.emptyResult)}});export{qe as default};