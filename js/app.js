/* DECT :: 2024 */
"use strict";const E="1.0.0",y="WatchFaceFrame",g=".",b="div",x="img",T="span",A="canvas",L="a",O="input",_="select",N="option",S="textarea",v="label",B="click",D="change",C="keyup",w="keydown",I="mousedown",k="mouseup",R="page",M="popup",F="file",G="show",U="show-in",P="show-out",H="small",q="toast",W="toast--action",z="toast-label",j="toast-label--secondary",Y="selected",J="input",Z="checkbox",K="placeholder",X="frame_container",V="frame_settings",Q="frame_frames",$="btns",ee="btns2",te="btns3",ae="btn",ne="btn--secondary",oe="icon",re="i-info",se="i-refresh",le="i-pippette",ce="select",ie="zoom",de="utils-center",ue="bottom_credits",me="scrollable",pe="close",he="closeable",fe="lang",Ee="progress",ye="BTN_DOWNLOAD",ge="BTN_SET",be="BTN_CANCEL",xe="NO_CUSTOMIZATION",Te="NONE",Ae="TRANSPARENT",Le="TOAST_INSTALL_PWA",Oe="BTN_ADD_SHORTCUT",_e="BTN_NO",Ne="ENABLED",Se="DISABLED",ve="WATCHFACE",Be="WATCHFACES",De="a",Ce="b",we="c",Ie="d",ke="e",Re="f",Me="g",Fe=0,Ge=1,Ue=2,Pe="MAIN",He="SELECT_FILES",qe="LOADING",We="ZOOM",ze="PICK_LANGUAGE",je="INFO",Ye="SETTINGS",Je=document.getElementById("BTN_APPLY"),Ze=document.getElementById("BTN_NEW"),Ke=document.getElementById(He),Xe=document.querySelector("#PROGRESS div"),Ve=document.getElementById("ASSETS"),Qe=document.getElementById("FRAMES_CONTAINER"),$e=document.getElementById("LANGUAGE_PICKER"),et=document.getElementById("LANGUAGE_ACTIVE"),tt=document.getElementById("INPUT"),at=document.getElementById("INPUT_FILE"),nt=document.getElementById("OUTPUT_CONTAINER"),ot=document.getElementById("SELECT_FILES_BTNS"),rt=document.getElementById("BTN_GENERATE"),st=document.getElementById("BTN_GENERATE_SETTINGS"),lt=document.getElementById("TOAST_CONTAINER"),ct=document.getElementById("BTN_DOWNLOAD_SELECTED"),it=document.getElementById("ZOOMED"),dt=document.getElementById("INFO_TEXT"),ut=document.getElementById("LABEL_GLOBAL"),mt=document.getElementById("TEXT_GLOBAL"),pt=document.getElementById("BADGE_GLOBAL"),ht=document.getElementById("BG_GLOBAL"),ft=document.getElementById("COLORPICKER"),Et=document.getElementById("RENDER_ONE_FRAME"),yt=document.getElementById("RENDER_WF_RESOLUTION"),gt=document.getElementById("CONTAINER_FRAMES_NUMBER"),bt=document.getElementById("TOP_BAR"),xt=document.getElementById(Pe),Tt="url(img/icon/language/",At=".png)",Lt="img/frame/",Ot="img/badge/",_t=Ot+"transp/",Nt="t_",St="png",vt="."+St,Bt=vt,Dt=".txt",Ct=".zip",wt="_",It="image/png",kt="PH_LABEL",Rt="PH_TEXT",Mt="PH_BACKGROUND",Ft="BTN_DOWNLOAD",Gt="PH_BADGE",Ut="BTN_DOWNLOAD_SELECTED",Pt="Lato",Ht=1500,qt=" :: ",Wt="none",zt="block",jt="k",Yt="a",Jt="b",Zt="c",Kt="d",Xt="e",Vt="f",Qt="g",$t="h",ea="i",ta="j",aa="l",na="m",oa="n",ra="o",sa="p",la="q",ca="r",ia="s",da="t",ua="val",ma="wfs";let pa,ha,fa,Ea,ya,ga=!1,ba=0,xa=0,Ta=0,Aa=null,La=!1,Oa=null,_a=[],Na=!1;function Sa(){document.getElementById("VERSION").innerHTML="v"+E,document.getElementById("APP_NAME").innerHTML=y,document.title=Da()}function va(){et.addEventListener(B,ka),at.addEventListener(D,Ja),rt.addEventListener(B,Va),st.addEventListener(B,$a),ct.addEventListener(B,$n),Ke.querySelector(g+ue).addEventListener(B,function(){const e=Ke.querySelector(g+me);e.scroll({behavior:"smooth",top:e.scrollHeight})}),it.addEventListener(B,qa),Je.addEventListener(B,dn),Ze.addEventListener(B,un),Et.addEventListener(D,function(){localStorage.setItem(Re,Et.checked),an()}),RENDER_WF_RESOLUTION.addEventListener(D,on),xt.addEventListener(B,function(e){if(Na)Na=!1;else if(no()){let t=e.target;for(;t.id!==ft.id;){if("html"===t.tagName.toLowerCase()){ao();break}t=t.parentElement}}}),ft.addEventListener(I,function(){io(!0)}),ft.addEventListener(k,function(){setTimeout(function(){io(!1)},50)}),document.querySelectorAll(g+M+" "+g+pe).forEach(function(e){e.addEventListener(B,qa)}),document.querySelectorAll(g+M+g+he).forEach(function(e){e.addEventListener(B,function(e){e.target.classList.contains(he)&&qa()})}),document.addEventListener("contextmenu",function(e){e.preventDefault()}),document.addEventListener(w,function(e){e.ctrlKey&&65===e.keyCode&&Ua()===Pe&&!e.target.classList.contains(J)&&e.target.tagName.toLowerCase()!==O&&e.preventDefault()}),document.addEventListener(C,function(e){if(Wa())27===e.keyCode&&Ya()&&qa();else if(Ua()===Pe&&!e.target.classList.contains(J)&&e.target.tagName.toLowerCase()!==O)if(e.ctrlKey)switch(e.keyCode){case 65:pn()}else switch(e.keyCode){case 27:document.querySelectorAll(g+Y).length>0?hn():no()&&ao();break;case 13:no()&&(so(),ao())}})}function Ba(){"serviceWorker"in navigator&&navigator.serviceWorker.register("sw.js")}function Da(){return y.replace(/[^A-Z]/g,"")}function Ca(){wa(localStorage.getItem(Ce)),Ia()}function wa(e){e=e||navigator.language,pa=null;for(let t=0;t<f.length;t++)if(f[t].LANGUAGE_CODE===e){pa=f[t];break}null===pa&&(pa=f[0]),et.style.backgroundImage=Tt+pa.LANGUAGE_CODE+At,localStorage.setItem(Ce,pa.LANGUAGE_CODE),document.querySelectorAll("[data-"+jt+"]").forEach(function(e){const t=pa[e.dataset[jt]];e.innerHTML="function"==typeof t?t():t}),document.documentElement.lang=e}function Ia(){$e.dataset[ia]||(f.forEach(function(e){const t=document.createElement(b);t.className=fe,t.addEventListener(B,function(){wa(e.LANGUAGE_CODE),qa()});const a=document.createElement(b);a.style.backgroundImage=Tt+e.LANGUAGE_CODE+At;const n=document.createElement(T);n.innerHTML=e.LANGUAGE_NAME,t.appendChild(a),t.appendChild(n),$e.appendChild(t)}),$e.dataset[ia]=!0)}function ka(){Ia(),Ha(ze)}function Ra(e,t,a){const n=document.createElement(b);n.className=q,n.addEventListener(B,function(){""===window.getSelection().toString()&&Ma(this)});const o=document.createElement(b);switch(e){case Fe:o.className="i-error";break;case Ge:o.className="i-success",setTimeout(function(){Ma(n)},6e3);break;case Ue:o.className="i-info",setTimeout(function(){Ma(n)},8e3)}const r=document.createElement(T);if(r.className=z,r.innerHTML=t,n.appendChild(o),n.appendChild(r),null!=a){const e=document.createElement(T);e.className=j,e.innerHTML=a,n.appendChild(e)}return lt.classList.add(G),lt.prepend(n),setTimeout(function(){n.classList.add(G)},30),n}function Ma(e){if(null!==e)try{e.remove()}catch(e){lt.innerHTML=""}0===document.querySelectorAll(g+q).length&&lt.classList.remove(G)}function Fa(e,t,a,n,o){const r=document.createElement(b);r.classList.add(q),r.classList.add(W);const s=document.createElement(b);switch(e){case Fe:s.className="i-error";break;case Ge:s.className="i-success";break;case Ue:s.className="i-info"}const l=document.createElement(T);l.className=z,l.innerHTML=pa[t],l.dataset[jt]=t;const c=document.createElement(b);c.className=$;const i=document.createElement(b);i.classList.add(ae),i.classList.add(ne),i.innerHTML=pa[n],i.dataset[jt]=n,i.addEventListener(B,function(){Ma(r)});const d=document.createElement(b);return d.className=ae,d.innerHTML=pa[a],d.dataset[jt]=a,d.addEventListener(B,function(){Ma(r),o()}),c.appendChild(i),c.appendChild(d),r.appendChild(s),r.appendChild(l),r.appendChild(c),lt.classList.add(G),lt.appendChild(r),setTimeout(function(){r.classList.add(G)},30),r}function Ga(e){const t=Pa();if(e!==t.id){const a=document.getElementById(e);a.classList.add(U),t.classList.add(P),setTimeout(function(){t.classList.remove(G),a.classList.add(G),a.classList.remove(U),t.classList.remove(P)},200)}Ma()}function Ua(){return Pa().id}function Pa(){return document.querySelector(g+R+g+G)}function Ha(e){qa(!0);const t=document.getElementById(e);t.classList.contains(he)?(t.classList.add(U),setTimeout(function(){t.classList.add(G),t.classList.remove(U)},20)):t.classList.add(G)}function qa(e){if(!ja())return;if(!0===e)return void ja().classList.remove(G);const t=ja();t.classList.add(P),setTimeout(function(){t.classList.remove(G),t.classList.remove(P)},250)}function Wa(){return document.querySelectorAll(g+M+g+G).length>0}function za(){return ja().id}function ja(){return document.querySelector(g+M+g+G)}function Ya(){return Wa()&&ja().classList.contains(he)}function Ja(e){[...e.target.files].forEach(function(e){if(!e.type.includes("image"))return void Ra(Fe,pa.TOAST_NOT_IMAGE,e.name);if(!e.type.includes(St))return void Ra(Fe,pa.TOAST_SUPPORTED_TYPES,e.name);const t=document.createElement(b);t.className=F,t.addEventListener(B,function(){this.remove(),Ka()});const a=document.createElement(x);a.dataset[Kt]=e.name,a.src=URL.createObjectURL(e),a.onload=function(){a.dataset[Jt]=a.naturalHeight,a.dataset[Zt]=a.naturalWidth,a.naturalWidth!=a.naturalHeight&&(Ra(Fe,pa.TOAST_WRONG_RATIO,a.dataset[Kt]),a.parentElement.remove(),Ka())},t.appendChild(a),nt.appendChild(t)}),at.value="",Ka()}function Za(){return document.querySelectorAll(g+F).length}function Ka(){Za()>0?(tt.classList.add(H),nt.classList.add(G),ot.classList.add(G)):(tt.classList.remove(H),nt.classList.remove(G),ot.classList.remove(G)),en()}function Xa(){nt.innerHTML="",Ka(),ha=[]}function Va(){if(null===tn())return void Ra(Fe,pa.TOAST_NO_FRAMES_SELECTED);ha=document.querySelectorAll(g+F+" "+x);let e=0;ha.forEach(function(t){t.dataset[Yt]=e++}),Tn(),Ga(Pe),e>1&&Ra(Ue,pa.TOAST_DELAY)}function Qa(){if(!(ke in localStorage)){const e=[];for(let t=0;t<i.length;t++)e.push(!0);localStorage.setItem(ke,JSON.stringify(e))}let e=JSON.parse(localStorage.getItem(ke));if(e.length<i.length){for(let t=0;t<i.length-e.length;t++)e.push(!0);localStorage.setItem(ke,JSON.stringify(e))}else e.length>i.length&&(e=e.slice(0,i.length-e.length),localStorage.setItem(ke,JSON.stringify(e)));for(let t=1;t<=i.length;t++){const a=document.createElement(b);a.classList.add(J),a.classList.add(Z),0===i[t-1].length&&(a.style.display=Wt);const n=document.createElement(O);n.type="checkbox",n.id=ma+t,n.checked=e[t-1],n.addEventListener(D,function(){const e=JSON.parse(localStorage.getItem(ke));e[this.id.replace(ma,"")-1]=this.checked,localStorage.setItem(ke,JSON.stringify(e))});const o=document.createElement(v);o.dataset[jt]=1===t?ve:Be,o.dataset[ua]=t,o.htmlFor=ma+t,o.innerHTML=1===t?pa.WATCHFACE:pa.WATCHFACES,a.appendChild(n),a.appendChild(o),gt.appendChild(a)}Re in localStorage||localStorage.setItem(Re,!0),Et.checked=Ao(Re),an(),Me in localStorage||localStorage.setItem(Me,1),yt.value=localStorage.getItem(Me),on()}function $a(){Ha(Ye)}function en(){const e=Za();for(let t=1;t<=i.length;t++){const a=e>=t&&0!==i[t-1].length;document.getElementById(ma+t).disabled=!a}}function tn(){const e=[];let t=!1;for(let a=1;a<=i.length;a++){const n=document.getElementById(ma+a);n.disabled||!n.checked?e.push(!1):(t=!0,e.push(!0))}return t?e:null}function an(){nn()?(Et.nextElementSibling.dataset[jt]=Ne,Et.nextElementSibling.innerHTML=pa.ENABLED):(Et.nextElementSibling.dataset[jt]=Se,Et.nextElementSibling.innerHTML=pa.DISABLED)}function nn(){return Et.checked}function on(){ya=Number(yt.value),localStorage.setItem(Me,ya)}function rn(){Hn(pt),pt.dataset[da]="",ht.dataset[da]="",ht.addEventListener(B,function(e){e.preventDefault(),to(e,ht)})}function sn(){mt.value="",ut.value="",pt.dataset[da]="",pt.value="",ht.dataset[da]="",ht.value="",ht.style=""}function ln(e,t,a,n){const o=e.value;document.querySelectorAll(g+V+" [data-"+jt+"='"+t+"']").forEach(function(e){(e=e.previousElementSibling).value=o,(e=e.parentElement.parentElement.nextSibling).dataset[a]=o,n.includes(e)||n.push(e)})}function cn(e,t,a,n){const o=e.value;document.querySelectorAll(g+V+" [data-"+jt+"='"+t+"']").forEach(function(e){(e=e.previousElementSibling).value=o,e.style.backgroundColor=o,e.style.color=po(),(e=e.parentElement.parentElement.nextSibling).dataset[a]=o,n.includes(e)||n.push(e)})}function dn(){const e=[];if(ga=!0,0!==ut.value.trim().length&&ln(ut,kt,na,e),0!==mt.value.trim().length&&ln(mt,Rt,oa,e),pt.value!==pt.dataset[da]&&(ln(pt,Gt,ra,e),pt.dataset[da]=pt.value),ht.value!==ht.dataset[da]&&(cn(ht,Mt,sa,e),ht.dataset[da]=ht.value),ga=!1,0===e.length)return;let t=0;e.forEach(function(e){t+=e.querySelectorAll(A).length}),Jn(t),Ha(qe);const a=Ra(Ue,pa.TOAST_WAIT,pa.TOAST_APPLYING);setTimeout(function(){e.forEach(function(e){_n(e.dataset[$t],void 0,e,e.parentElement,!1)}),setTimeout(function(){Ma(a),qa(),Ra(Ge,pa.TOAST_DONE)},300)},100)}function un(){Xa(),qn(),Pa().scroll({top:0}),Ga(He),setTimeout(function(){sn(),Qe.innerHTML="",fn()},250)}function mn(){this.parentElement.classList.toggle(Y),fn();const e=this.parentElement.parentElement,t=e.previousElementSibling.querySelector(g+ae+"[data-"+jt+"]");0===e.querySelectorAll(g+Y).length?(t.dataset[jt]=Ft,t.innerHTML=pa.BTN_DOWNLOAD):(t.dataset[jt]=Ut,t.innerHTML=pa.BTN_DOWNLOAD_SELECTED)}function pn(){document.querySelectorAll(g+Q+" > "+b).forEach(function(e){e.classList.add(Y)}),ct.style.display=zt,document.querySelectorAll(g+V+" [data-"+jt+'="'+ye+'"]').forEach(function(e){e.dataset[jt]=Ut,e.innerHTML=pa.BTN_DOWNLOAD_SELECTED})}function hn(){document.querySelectorAll(g+Y).forEach(function(e){e.classList.remove(Y)}),ct.style.display=Wt,document.querySelectorAll(g+V+" [data-"+jt+'="'+Ut+'"]').forEach(function(e){e.dataset[jt]=Ft,e.innerHTML=pa.BTN_DOWNLOAD})}function fn(){ct.style.display=0===document.querySelectorAll(g+Y).length?Wt:zt}function En(){Ve.dataset[la]||(a.forEach(function(e){const t=document.createElement(x);t.src=Ot+e+vt,t.dataset[aa]=e;const a=document.createElement(x);a.src=_t+e+vt,a.dataset[aa]=Nt+e,Ve.appendChild(t),Ve.appendChild(a)}),Ve.dataset[la]=!0)}function yn(){const e=tn();let t=!0;!Ve.dataset[ca+1]&&e[0]&&(t=!1,gn(n));for(let a=2;a<=i.length&&ha.length>=a;a++){const n=ca+a,o=a-1;!Ve.dataset[n]&&e[o]&&(t=!1,gn(i[o]),bn(i[o]),Ve.dataset[n]=!0)}!Ve.dataset[ca+1]&&e[0]&&(bn(n),Ve.dataset[ca+1]=!0),t&&An()}function gn(e){const t=[];e.forEach(function(e){e[1].forEach(function(e){0!==e&&(e<0?t.includes(e)||(t.push(e),ba++):ba++)})})}function bn(e){const t=[];e.forEach(function(e){e[1].forEach(function(a,n){const o=document.createElement(x);if(o.onload=xn,o.onerror=function(){Ra(Fe,pa.TOAST_ERROR_NOT_FOUND,e[0]+qt+o.src),_a.includes(e[0])||_a.push(e[0]),xn()},0!==a){if(a<0){if(t.includes(a))return;o.src=Lt+"c/"+-1*a+vt,o.dataset[Xt]=a,t.push(a)}else o.src=Lt+e[0]+"/"+a+vt,o.dataset[Xt]=e[0],o.dataset[Vt]=n;Ve.appendChild(o)}})})}function xn(){0==--ba&&An()}function Tn(){zn(),Ha(qe),setTimeout(function(){En(),yn()},35)}function An(){if(ga)return;Wa()||(zn(),Ha(qe));const e=tn();Qe.innerHTML="";const t=ha.length;let a=0;for(let o=1;o<=i.length&&t>=o;o++)e[o-1]&&(a+=1===o?n.length*t:i[o-1].length*xo(o,t));Jn(a);for(let a=1;a<=i.length&&t>=a;a++)e[a-1]&&Ln(a);qa()}function Ln(e){const t=e-1;for(let e=i[t].length-1;e>=0;e--){const a=i[t][e];if(_a.includes(a[0]))continue;const n=document.createElement(b);n.className=X,n.dataset[Xt]=a[0];const o=document.createElement(b);o.className=V;const r=document.createElement(b);if(r.className=Q,r.dataset[Qt]=e,r.dataset[$t]=t,null===a[4]){const e=document.createElement(T);e.dataset[jt]=xe,e.innerHTML=pa.NO_CUSTOMIZATION,o.appendChild(e)}else a[4].forEach(function(e,s){switch(e){case 0:{const e=Rn();e.appendChild(Mn(t,O,na,r)),e.appendChild(Fn(kt)),o.appendChild(e);break}case 1:{const e=Rn();e.appendChild(Mn(t,S,oa,r)),e.appendChild(Fn(Rt)),o.appendChild(e);break}case 2:{const e=Rn(),a=document.createElement(_);a.addEventListener(D,function(){r.dataset[ra]=a.value,In(t,r,n)}),Hn(a),e.appendChild(a),e.appendChild(Fn(Gt)),o.appendChild(e);break}case 3:{const e=Rn(),l=document.createElement(O);l.placeholder="",l.readOnly=!0,l.value=mo(a[5][s].b),l.style.backgroundColor=l.value,l.style.color=po(l.value),l.dataset.color="",l.addEventListener(B,function(e){e.preventDefault(),to(e,l)}),l.addEventListener(D,function(){r.dataset[sa]=l.value,In(t,r,n)}),e.appendChild(l),e.appendChild(Fn(Mt)),o.appendChild(e);break}}});const s=document.createElement(b);0===t?null===a[6]?s.className=$:(s.className=ee,s.appendChild(Gn(a[6]))):(null===a[6]?s.className=ee:(s.className=te,s.appendChild(Gn(a[6]))),s.appendChild(Un(t,r,n)));const l=document.createElement(b);l.className=ae,l.dataset[jt]=ye,l.innerHTML=pa.BTN_DOWNLOAD,l.addEventListener(B,Qn),s.appendChild(l),o.appendChild(s),n.appendChild(o),On(t,e,r,n)}}function On(e,t,a,n){setTimeout(function(){_n(e,t,a,n,!0)},0)}function _n(a,n,o,r,s){o.innerHTML="",n=n||o.dataset[Qt];const l=a+1,c=i[a][n],d=Ve.querySelector("img[data-"+Xt+'="'+c[0]+'"]')||Ve.querySelector("img[data-"+Xt+'="'+c[1][0]+'"]'),u=document.createElement(T);let m;if(u.innerHTML=d.naturalWidth+" x "+d.naturalHeight+qt+r.dataset[Xt],o.appendChild(u),o.dataset[ta]){m=[],JSON.parse(o.dataset[ta]).forEach(function(e){const t=[];e.forEach(function(e){for(let a=0;ha.length;a++)if(ha[a].dataset[Yt]===e){t.push(ha[a]);break}}),m.push(t)})}else{m=To(1===l?yo(ha):go(ha),l,bo(l,ha.length));const e=[];m.forEach(function(t){const a=[];t.forEach(function(e){a.push(e.dataset[Yt])}),e.push(a)}),o.dataset[ta]=JSON.stringify(e)}m.forEach(function(a){setTimeout(function(){const n=document.createElement(b),l=document.createElement(A);l.height=d.naturalHeight,l.width=d.naturalWidth;const i=l.getContext("2d");let u=0;if(null!==c[4]&&c[4].includes(3)){const e=o.dataset[sa]?o.dataset[sa]:mo(c[5][c[4].indexOf(3)].b);i.fillStyle=e,i.fillRect(0,0,l.width,l.height)}let m=-1;c[1].forEach(function(e){if(0===e){const e=a[++m];if(null!==c[3]&&c[3][m]){const t=c[3][m];"c"in t?vn(t,e,i):Sn(c,m,e,t,i)}else Nn(c,m,e,i)}else e<0?i.drawImage(Ve.querySelector("[data-"+Xt+'="'+e+'"]'),0,0):i.drawImage(Ve.querySelector("[data-"+Xt+'="'+c[0]+'"][data-'+Vt+'="'+u+'"]'),0,0);u++}),null!==c[4]&&c[4].forEach(function(a,n){const r=c[5][n];switch(a){case 0:o.dataset[na]&&(i.fillStyle=mo(r.c?r.c:e),i.font=(r.d?r.d:"")+" "+r.s+"px "+Pt,i.textAlign=r.a,i.textBaseline="middle","r"in r?(i.save(),i.translate(r.x,r.y),i.rotate(r.r*Math.PI/180),wn(i,!1,o.dataset[na],r,r.x,0),i.fillText(o.dataset[na],0,r.x),i.restore()):(wn(i,!1,o.dataset[na],r),i.fillText(o.dataset[na],r.x,r.y)));break;case 1:if(o.dataset[oa]){const e=o.dataset[oa].split("\n");i.fillStyle=mo(r.c?r.c:t),i.font=(r.d?r.d:"")+" "+r.s+"px "+Pt,i.textAlign=r.a,i.textBaseline="middle",wn(i,!0,o.dataset[oa],r);for(let t=0;t<e.length;t++)i.fillText(e[t],r.x,r.y+(r.s+5)*t)}break;case 2:if(o.dataset[ra]&&""!==o.dataset[ra]){const e=Ve.querySelector("[data-"+aa+'="'+o.dataset[ra]+'"]');r.r?Cn(r.x,r.y,e.naturalWidth*(r.h/e.naturalHeight),r.h,e,r.r,i,!0):i.drawImage(e,r.x,r.y,e.naturalWidth*(r.h/e.naturalHeight),r.h)}}}),n.appendChild(l);const p=document.createElement(b);p.classList.add(ce),p.classList.add(de),p.addEventListener(B,mn);const h=document.createElement(b);h.classList.add(ie),h.classList.add(de),h.addEventListener(B,()=>{Pn(l)}),n.appendChild(p),n.appendChild(h),o.appendChild(n),Zn(),s&&(r.appendChild(o),Qe.prepend(r))},0)})}function Nn(e,t,a,n){const o=e[2][t][0],r=e[2][t][1],s=e[2][t][2],l=e[2][t][3]||e[2][t][2];n.drawImage(a,o,r,s,l)}function Sn(e,t,a,n,o){if(!("c"in n)){if(o.save(),Bn(o,n),"r"in n)return Cn(e[2][t][0],e[2][t][1],e[2][t][2],e[2][t][3]||e[2][t][2],a,n.r,o,!1),void o.restore();Nn(e,t,a,o),o.restore()}}function vn(e,t,a){if(Object.keys(e).length>1){const n=document.createElement(A);return n.height=a.canvas.height,n.width=a.canvas.width,Dn(e,t,n.getContext("2d")),a.save(),Bn(a,e),a.drawImage(n,0,0),void a.restore()}Dn(e,t,a)}function Bn(e,t){"o"in t&&(e.globalAlpha=t.o),"bl"in t&&(e.globalCompositeOperation=t.bl);let a="";"b"in t&&(a="brightness("+t.b+")"),"ct"in t&&(a+=(0===a.length?"":" ")+"contrast("+t.ct+")"),"g"in t&&(a+=(0===a.length?"":" ")+"grayscale("+t.g+")"),"s"in t&&(a+=(0===a.length?"":" ")+"sepia("+t.s+")"),null!==a&&(e.filter=a)}function Dn(e,t,a){let n,o,r,s,l,c,i,d,u=e.c,m=t.dataset[Zt]-1,p=t.dataset[Jt]-1;for(let e=0;e<p;e+=ya)for(let h=0;h<m;h+=ya)l=ho(u[0],u[3],e/p),c=ho(u[1],u[2],e/p),i=ho(u[0],u[3],(e+ya)/p),d=ho(u[1],u[2],(e+ya)/p),n=ho(l,c,h/m),o=ho(l,c,(h+ya)/m),r=ho(i,d,(h+ya)/m),s=ho(i,d,h/m),a.drawImage(t,h,e,ya,ya,n.x,n.y,Math.ceil(Math.max(ya,Math.abs(o.x-n.x),Math.abs(s.x-r.x)))+1,Math.ceil(Math.max(ya,Math.abs(n.y-s.y),Math.abs(o.y-r.y)))+1)}function Cn(e,t,a,n,o,r,s,l){const c=e+a/2,i=t+n/2;l&&s.save(),s.translate(c,i);const d=r*Math.PI/180;s.rotate(d),s.translate(-c,-i),s.drawImage(o,e,t,a,n),l&&s.restore()}function wn(e,t,a,n,o,r){if(!("ds"in n))return;const s=n.ds;if(o=(o||n.x)+s.x,r=(r||n.y)+s.y,e.save(),e.fillStyle=mo(s.c||"00"),e.globalAlpha=s.o||.5,e.font=n.d+" "+n.s+"px "+Pt,e.textAlign=n.a,e.textBaseline="middle",e.filter="blur("+(s.b||0)+"px)",t){const t=a.split("\n");for(let a=0;a<t.length;a++)e.fillText(t[a],o,r+(n.s+5)*a)}else e.fillText(a,o,r);e.restore()}function In(e,t,a){Jn(t.querySelectorAll(A).length),Ha(qe);const n=Ra(Ue,pa.TOAST_WAIT,pa.TOAST_APPLYING);setTimeout(function(){_n(e,void 0,t,a,!1),Ma(n),setTimeout(function(){fn(),qa()},300)},100)}function kn(e,t,a){clearTimeout(fa),fa=setTimeout(function(){In(e,t,a)},Ht)}function Rn(){const e=document.createElement(b);return e.className=J,e}function Mn(e,t,a,n){const o=document.createElement(t);return o.placeholder="",o.addEventListener(C,function(){n.dataset[a]=o.value,kn(e,n,this.parentElement.parentElement.parentElement)}),o}function Fn(e){const t=document.createElement(T);return t.className=K,t.dataset[jt]=e,t.innerHTML=pa[e],t}function Gn(e){const t=document.createElement(b);return t.classList.add(ae),t.classList.add(oe),t.classList.add(re),t.dataset[ea]=JSON.stringify(e),t.addEventListener(B,Vn),t}function Un(e,t,a){const n=document.createElement(b);return n.classList.add(ae),n.classList.add(oe),n.classList.add(se),n.addEventListener(B,function(){delete t.dataset[ta],In(e,t,a)}),n}function Pn(e){it.src=e.toDataURL(It),Ha(We)}function Hn(e){const t=document.createElement(N);t.value="",t.innerHTML=pa.NONE,t.dataset[jt]=Te,e.appendChild(t),a.forEach(function(t){const a=document.createElement(N);a.value=t,a.innerHTML=t;const n=document.createElement(T);n.innerHTML=pa.TRANSPARENT,n.dataset[jt]=Ae;const o=document.createElement(N);o.value=Nt+t,o.innerHTML=t+qt,o.appendChild(n),e.appendChild(a),e.appendChild(o)})}function qn(){Yn(),zn(),jn(0)}function Wn(){document.getElementById(qe).classList.remove(Ee)}function zn(){document.getElementById(qe).classList.add(Ee)}function jn(e){Xe.style.width=e+"%"}function Yn(){xa=0,Ta=0}function Jn(e){qn(),xa=e}function Zn(){++Ta<=xa&&jn(100*Ta/xa)}function Kn(e,t){let a="<b>"+pa.ABOUT+"</b><br><br>";return e.forEach(function(e){if(!1===e.a)a+="- "+pa.ABOUT_MADE_BY_ME;else if(!0===e.a)a+="- "+pa.ABOUT_FONT.replace('"https://fonts.google.com/specimen/Lato"','<a href="https://fonts.google.com/specimen/Lato" target="_blank" rel="noopener noreferrer">https://fonts.google.com/specimen/Lato</a>');else{let t="- "+pa.ABOUT_INFO.replace(m,'"<b>'+e.a+'</b>"');t=t.replace(p,'<a href="'+e.l+'" target="_blank" rel="noopener noreferrer">'+e.l+"</a>").replace(h,uo(e.d)),e.m&&(t+=" <b>["+pa.ABOUT_MODIFIED+"]</b>"),a+=t}a+="<br><br>"}),void 0!==t&&""!==t&&(a+="- "+pa.ABOUT_GOOGLE),a}function Xn(e,t){let a=pa.ABOUT+"\n\n";return null!=e&&e.forEach(function(e){if(!1===e.a)a+="- "+pa.ABOUT_MADE_BY_ME;else if(!0===e.a)a+="- "+pa.ABOUT_FONT;else{let t="- "+pa.ABOUT_INFO.replace(m,'"'+e.a+'"').replace(p,'"'+e.l+'"').replace(h,uo(e.d));e.m&&(t+=" ["+pa.ABOUT_MODIFIED+"]"),a+=t}a+="\n\n"}),void 0!==t&&""!==t&&(a+="- "+pa.ABOUT_GOOGLE),a}function Vn(){dt.innerHTML=Kn(JSON.parse(this.dataset[ea]),this.parentElement.parentElement.nextSibling.dataset[ra]);const e=dt.querySelector("a");e.href=e.innerHTML,e.target="_blank",e.rel="noopener noreferrer",Ha(je)}async function Qn(e){Wn(),Ha(qe),setTimeout(async function(){const t=e.target.parentElement.parentElement.nextSibling.querySelectorAll(b+":has("+A+")"),a=e.target.parentElement.parentElement.parentElement.dataset[Xt],n=[];for(let e=0;e<t.length;e++)t[e].classList.contains(Y)&&n.push(t[e].querySelector(A).toDataURL(It).replace(/^data:image\/(png|jpg);base64,/,""));if(0===n.length)for(let e=0;e<t.length;e++)n.push(t[e].querySelector(A).toDataURL(It).replace(/^data:image\/(png|jpg);base64,/,""));const o=new JSZip;n.forEach(function(e,t){o.file(Da()+wt+a+wt+t+Bt,e,{base64:!0})});const r=e.target.parentElement.querySelector(g+re),s=e.target.parentElement.parentElement.nextSibling.dataset[ra];if(r){const e=JSON.parse(r.dataset[ea]);o.file(Da()+wt+a+wt+pa.ABOUT.toLowerCase()+Dt,Xn(e,s))}else s&&o.file(Da()+wt+a+wt+pa.ABOUT.toLowerCase()+Dt,Xn(null,s));const l=await o.generateAsync({type:"blob"}),c=Da()+wt+a+Ct,i=document.createElement(L);i.download=c,i.href=URL.createObjectURL(l),i.style.display=Wt,document.body.appendChild(i),i.click(),i.remove(),qa(),Ra(Ge,pa.TOAST_DONE,c)},200)}async function $n(){Wn(),Ha(qe),setTimeout(async function(){let e=[];document.querySelectorAll(g+Y).forEach(function(t){const a=t.parentElement;e.includes(a)||e.push(a)});let t=[];e.forEach(function(e){t.push(e.parentElement.dataset[Xt])});let a=[];e.forEach(function(e){let t=[],n=e.querySelectorAll(b);for(let e=0;e<n.length;e++)n[e].classList.contains(Y)&&t.push(n[e].querySelector(A).toDataURL(It).replace(/^data:image\/(png|jpg);base64,/,""));a.push(t)});const n=new JSZip,o=[];a.forEach(function(e,a){const r=n.folder(Da()+wt+t[a]);e.forEach(function(e,n){r.file(Da()+wt+t[a]+wt+n+Bt,e,{base64:!0})}),o.push(r)}),e.forEach(function(e,a){const n=e.previousElementSibling.querySelector(g+re),r=e.dataset[ra];if(n){const e=JSON.parse(n.dataset[ea]);o[a].file(Da()+wt+t[a]+wt+pa.ABOUT.toLowerCase()+Dt,Xn(e,r))}else r&&o[a].file(Da()+wt+t[a]+wt+pa.ABOUT.toLowerCase()+Dt,Xn(null,r))});const r=await n.generateAsync({type:"blob"}),s=Da()+Ct,l=document.createElement(L);l.download=s,l.href=URL.createObjectURL(r),l.style.display=Wt,document.body.appendChild(l),l.click(),l.remove(),qa(),Ra(Ge,pa.TOAST_DONE,s)},200)}function eo(){if(!ft.dataset[ia]){(Ea=AColorPicker.createPicker(ft,{showHSL:!0,showRGB:!0,showHEX:!0,showAlpha:!0,palette:oo(),paletteEditable:!0,useAlphaInPalette:!0,slBarSize:[300,150],hueBarSize:[218,11],alphaBarSize:[218,11]})).on("coloradd",function(e,t){const a=oo();a.includes(t)||(a.push(t),ro(a))}),Ea.on("colorremove",function(e,t){ro(oo().filter(function(e){return e!==t}))});const e=document.createElement(b);e.className=ae,e.innerHTML=pa.BTN_SET,e.dataset[jt]=ge,e.addEventListener(B,function(){so(),ao()});const t=document.createElement(b);t.classList.add(ae),t.classList.add(ne),t.innerHTML=pa.BTN_CANCEL,t.dataset[jt]=be,t.addEventListener(B,ao);const a=document.createElement(b);if(a.className="a-color-picker-row","EyeDropper"in window){const e=document.createElement(b);e.classList.add(ae),e.classList.add(oe),e.classList.add(le),e.addEventListener(B,co),a.appendChild(e)}a.appendChild(t),a.appendChild(e),ft.querySelector(b).appendChild(a),document.querySelector(".a-color-picker-clipbaord").addEventListener(B,function(){Ra(Ue,pa.TOAST_COPIED,lo())}),ft.dataset[ia]=!0}}function to(e,t){io(!0),Ea.color=t.value,Aa=t,ft.style.display=zt,ft.style.left=e.clientX+"px";const a=e.clientY+xt.scrollTop-bt.getBoundingClientRect().height;ft.clientHeight+e.clientY>window.innerHeight+bt.getBoundingClientRect().height?ft.style.top=a-ft.clientHeight+"px":ft.style.top=a+"px",ft.dataset[ia]||(ft.dataset[ia]=!0,Ra(Ue,pa.TOAST_REMOVE_COLOR))}function ao(e){null!==Aa&&(ft.style.display=Wt,e||(Aa=null,La=!1))}function no(){return ft.style.display===zt}function oo(){return Ie in localStorage?JSON.parse(localStorage.getItem(Ie)):(localStorage.setItem(Ie,JSON.stringify([])),[])}function ro(e){localStorage.setItem(Ie,JSON.stringify(e))}function so(e){const t=e||lo();Aa.value=t,Aa.style.backgroundColor=t,Aa.style.color=e?po(e):po(),Aa.dispatchEvent(new Event(D))}function lo(){return Ea.all.hexcss4.toUpperCase()}async function co(){ao(!0);const e=new EyeDropper;let t=await e.open();t&&so(t=t.sRGBHex.toUpperCase()+"FF")}function io(e){Na=e}function uo(e){return new Date(e).toLocaleDateString()}function mo(e){return"#"===e[0]?e.length<=7?e+"FF":e:"#"+e.repeat(3)+"FF"}function po(e){const t=e?AColorPicker.parseColor(mo(e),"rgb"):Ea.rgb;return.299*t[0]+.587*t[1]+.114*t[2]>186?"#030303":"#F3F3F3"}function ho(e,t,a){return{x:e.x+(t.x-e.x)*a,y:e.y+(t.y-e.y)*a}}function fo(){const e=navigator.userAgent||window.opera||navigator.vendor;return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4))?(localStorage.setItem(we,!0),!0):we in localStorage}function Eo(e){let t=e.length;for(;0!=t;){const a=Math.floor(Math.random()*t);t--,[e[t],e[a]]=[e[a],e[t]]}}function yo(e){return[...e]}function go(e){const t=yo(e);return Eo(t),t}function bo(e,t){if(e>1&&nn())return 1;switch(t=t||1,e){case 2:return 5;case 3:return 4;case 4:case 5:return 3;case 6:return 2;default:return t}}function xo(e,t){if(e>1&&nn())return 1;const a=bo(e);let n=0;for(;t>=e;){if(++n===a)return a;t-=e}return 0===n?1:n}function To(e,t,a){const n=[];for(;e.length&&n.length<a;){const a=e.splice(0,t);if(a.length<t)break;n.push(a)}return n}function Ao(e){return"true"===localStorage.getItem(e)}function Lo(e,t){e.strokeStyle="#09f",e.lineWidth=1.5,e.beginPath();for(let a=0;a<t.length;a++){const n=t[a];e[a?"lineTo":"moveTo"](n.x,n.y)}e.closePath(),e.stroke()}window.onload=function(){fo()&&Ga("MOBILE"),Sa(),Ba(),Ca(),eo(),va(),rn(),Qa()},window.onerror=function(e,t,a,n,o){Ra(Fe,pa.TOAST_ERROR,"["+a+":"+n+"] "+e)},window.onbeforeinstallprompt=function(e){if(!localStorage.getItem("a")){e.preventDefault(),Oa=e;const t=Fa(Ue,"TOAST_INSTALL_PWA","BTN_ADD_SHORTCUT","BTN_NO",function(){Oa?Oa.prompt():(Ma(t),Ra(Fe,pa.TOAST_ERROR))});localStorage.setItem("a",!0)}};