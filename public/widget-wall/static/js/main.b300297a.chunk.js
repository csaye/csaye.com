(this["webpackJsonpwidget-wall"]=this["webpackJsonpwidget-wall"]||[]).push([[0],Array(21).concat([function(e,t,n){},,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),i=n(15),a=n.n(i),s=(n(21),n(6)),o=(n(55),n(23),n(56),n(16)),u=n(3),j=(n(25),n(0));var l=function(){var e=Object(c.useState)(new Date),t=Object(u.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){var e=new Date,t=setInterval((function(){var t=new Date;t.getSeconds()!==e.getSeconds()&&(e=t,r(t))}),100);return function(){return clearInterval(t)}}),[]),Object(j.jsxs)("div",{className:"Time widget",children:[Object(j.jsx)("h1",{children:"Time and Date"}),Object(j.jsx)("p",{children:n.toDateString()}),Object(j.jsx)("p",{children:n.toLocaleTimeString()})]})};n(27);var b=function(){var e=Object(c.useState)(void 0),t=Object(u.a)(e,2),n=t[0],r=t[1];return Object(j.jsxs)("div",{className:"CoinFlip widget",children:[Object(j.jsx)("h1",{children:"Coin Flip"}),Object(j.jsx)("button",{onClick:function(){r("..."),setTimeout((function(){var e=Math.random()>.5;r(e?"Heads":"Tails")}),150)},children:"Flip Coin"}),n&&Object(j.jsx)("p",{children:n})]})};n(28);var d=function(){var e=Object(c.useState)(void 0),t=Object(u.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)("1"),a=Object(u.a)(i,2),s=a[0],o=a[1],l=Object(c.useState)("6"),b=Object(u.a)(l,2),d=b[0],h=b[1],O=Object(c.useState)(1),f=Object(u.a)(O,2),p=f[0],m=f[1],x=Object(c.useState)(6),v=Object(u.a)(x,2),g=v[0],S=v[1];return Object(j.jsxs)("div",{className:"DiceRoll widget",children:[Object(j.jsx)("h1",{children:"Dice Roll"}),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r("..."),setTimeout((function(){var e=Math.floor(Math.random()*(g+1-p))+p;r(e)}),150)},children:[Object(j.jsx)("label",{htmlFor:"diceroll-min",children:"Min (inclusive)"}),Object(j.jsx)("input",{id:"diceroll-min",value:s,max:g,type:"number",onChange:function(e){return function(e){var t=parseInt(e);isNaN(t)||m(t),o(e)}(e.target.value)},required:!0}),Object(j.jsx)("label",{htmlFor:"diceroll-max",children:"Max (inclusive)"}),Object(j.jsx)("input",{id:"diceroll-max",value:d,min:p,type:"number",onChange:function(e){return function(e){var t=parseInt(e);isNaN(t)||S(t),h(e)}(e.target.value)},required:!0}),Object(j.jsx)("button",{type:"submit",children:"Roll Dice"})]}),void 0!==n&&Object(j.jsx)("p",{children:n})]})};n(29);var h=function(e){var t=e.src;return Object(j.jsx)("img",{className:"BackgroundImage",src:t,alt:""})},O=n.p+"static/media/default.c3c401a3.jpg";n(30);var f=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"SignIn widget",children:[Object(j.jsx)("h1",{children:"Widget Wall"}),Object(j.jsx)("button",{onClick:function(){var e=new s.a.auth.GoogleAuthProvider;s.a.auth().signInWithPopup(e)},children:"Sign in with Google"})]}),Object(j.jsx)(h,{src:O})]})};n(31);var p=function(){return Object(j.jsxs)("div",{className:"SignOut widget",children:[Object(j.jsx)("h1",{children:"Widget Wall"}),Object(j.jsxs)("p",{children:["Signed in as ",s.a.auth().currentUser.displayName]}),Object(j.jsx)("img",{src:s.a.auth().currentUser.photoURL,alt:""}),Object(j.jsx)("button",{onClick:function(){return s.a.auth().signOut()},children:"Sign Out"})]})};n(32);var m=function(){var e=Object(c.useState)(void 0),t=Object(u.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)(!1),a=Object(u.a)(i,2),s=a[0],o=a[1];return Object(j.jsxs)("div",{className:"Color widget",children:[Object(j.jsx)("h1",{children:"Random Color"}),Object(j.jsx)("button",{onClick:function(){for(var e="#",t=0;t<6;t++){e+="0123456789ABCDEF"[Math.floor(16*Math.random())]}r(e)},children:"Generate Color"}),n&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{onClick:function(){navigator.clipboard.writeText(n),o(!0),setTimeout((function(){o(!1)}),2e3)},className:"color-box",style:{background:n}}),s&&Object(j.jsx)("p",{className:"success",children:"Color copied"}),Object(j.jsx)("p",{children:Object(j.jsx)("u",{children:n})}),Object(j.jsxs)("p",{children:["R: ",parseInt(n.substring(1,3),16)]}),Object(j.jsxs)("p",{children:["G: ",parseInt(n.substring(3,5),16)]}),Object(j.jsxs)("p",{children:["B: ",parseInt(n.substring(5,7),16)]})]})]})},x=n(5),v=n.n(x),g=n(8);n(34);var S=function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)(!1),a=Object(u.a)(i,2),o=a[0],l=a[1],b=s.a.auth().currentUser.uid,d=s.a.firestore().collection("notepad").doc(b);function h(){return(h=Object(g.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:d.get().then((function(e){if(e.exists){var t=e.data();r(t.note)}}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)((function(){!function(){h.apply(this,arguments)}()}),[]),Object(j.jsxs)("div",{className:"Notepad widget",children:[Object(j.jsx)("h1",{children:"Notepad"}),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),d.set({note:n}),l(!0),setTimeout((function(){l(!1)}),2e3)},children:[Object(j.jsx)("textarea",{rows:"6",value:n,onChange:function(e){return r(e.target.value)}}),Object(j.jsx)("button",{type:"submit",children:"Save Note"})]}),o&&Object(j.jsx)("p",{className:"success",children:"Note saved"})]})};n(35);var w=function(){var e=Object(c.useState)("0"),t=Object(u.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)(void 0),a=Object(u.a)(i,2),s=a[0],o=a[1],l=Object(c.useState)("10"),b=Object(u.a)(l,2),d=b[0],h=b[1],O=Object(c.useState)("10"),f=Object(u.a)(O,2),p=f[0],m=f[1];return Object(j.jsxs)("div",{className:"BaseConvert widget",children:[Object(j.jsx)("h1",{children:"Base Convert"}),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=parseInt(n,d).toString(p).toUpperCase();o(t)},children:[Object(j.jsx)("label",{htmlFor:"baseconvert-innum",children:"Number"}),Object(j.jsx)("input",{id:"baseconvert-innum",value:n,pattern:"[A-Za-z0-9]+",onChange:function(e){return r(e.target.value)},required:!0}),Object(j.jsx)("label",{htmlFor:"baseconvert-inbase",children:"In Base"}),Object(j.jsx)("input",{id:"baseconvert-inbase",value:d,min:"2",max:"36",type:"number",onChange:function(e){return h(e.target.value)},required:!0}),Object(j.jsx)("label",{htmlFor:"baseconvert-outbase",children:"Out Base"}),Object(j.jsx)("input",{id:"baseconvert-outbase",value:p,min:"2",max:"36",type:"number",onChange:function(e){return m(e.target.value)},required:!0}),Object(j.jsx)("button",{type:"submit",children:"Convert"})]}),s&&Object(j.jsx)("p",{children:s})]})};n(36);var C=function(){var e=Object(c.useState)("0"),t=Object(u.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)(void 0),a=Object(u.a)(i,2),s=a[0],o=a[1],l=Object(c.useState)("C"),b=Object(u.a)(l,2),d=b[0],h=b[1],O=Object(c.useState)("F"),f=Object(u.a)(O,2),p=f[0],m=f[1];return Object(j.jsxs)("div",{className:"TempConvert widget",children:[Object(j.jsx)("h1",{children:"Temp Convert"}),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=parseFloat(n);if(d===p)o(t+p);else if("F"===p){var c=9*t/5+32,r=Math.round(100*c)/100;o(r+p)}else{var i=5*(t-32)/9,a=Math.round(100*i)/100;o(a+p)}},children:[Object(j.jsx)("label",{htmlFor:"tempconvert-intemp",children:"Temperature"}),Object(j.jsx)("input",{id:"baseconvert-intemp",value:n,type:"number",step:"any",onChange:function(e){return r(e.target.value)},required:!0}),Object(j.jsx)("label",{htmlFor:"tempconvert-inunit",children:"In Unit"}),Object(j.jsxs)("select",{id:"tempconvert-inunit",value:d,onChange:function(e){return h(e.target.value)},children:[Object(j.jsx)("option",{value:"C",children:"Celsius"}),Object(j.jsx)("option",{value:"F",children:"Fahrenheit"})]}),Object(j.jsx)("label",{htmlFor:"tempconvert-outunit",children:"Out Unit"}),Object(j.jsxs)("select",{id:"tempconvert-outunit",value:p,onChange:function(e){return m(e.target.value)},children:[Object(j.jsx)("option",{value:"C",children:"Celsius"}),Object(j.jsx)("option",{value:"F",children:"Fahrenheit"})]}),Object(j.jsx)("button",{type:"submit",children:"Convert"})]}),s&&Object(j.jsx)("p",{children:s})]})},y=(n(37),1609.34),k=.9144,D=.3048,N=.0254;var F=function(){var e=Object(c.useState)("0"),t=Object(u.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)(void 0),a=Object(u.a)(i,2),s=a[0],o=a[1],l=Object(c.useState)("m"),b=Object(u.a)(l,2),d=b[0],h=b[1],O=Object(c.useState)("f"),f=Object(u.a)(O,2),p=f[0],m=f[1];return Object(j.jsxs)("div",{className:"DistConvert widget",children:[Object(j.jsx)("h1",{children:"Dist Convert"}),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=parseFloat(n),c=1;switch(d){case"km":c*=1e3;break;case"cm":c*=.01;break;case"mm":c*=.001;break;case"mi":c*=y;break;case"yd":c*=k;break;case"f":c*=D;break;case"in":c*=N}switch(p){case"km":c*=.001;break;case"cm":c*=100;break;case"mm":c*=1e3;break;case"mi":c*=1/y;break;case"yd":c*=1/k;break;case"f":c*=1/D;break;case"in":c*=1/N}var r=t*c;0===r?o("0"+p):(r=Math.round(1e3*r)/1e3,o(0===r?"<0.001"+p:r+p))},children:[Object(j.jsx)("label",{htmlFor:"distconvert-indist",children:"Distance"}),Object(j.jsx)("input",{id:"baseconvert-indist",value:n,type:"number",step:"any",onChange:function(e){return r(e.target.value)},required:!0}),Object(j.jsx)("label",{htmlFor:"distconvert-inunit",children:"In Unit"}),Object(j.jsxs)("select",{id:"distconvert-inunit",value:d,onChange:function(e){return h(e.target.value)},children:[Object(j.jsx)("option",{value:"km",children:"Kilometers"}),Object(j.jsx)("option",{value:"m",children:"Meters"}),Object(j.jsx)("option",{value:"cm",children:"Centimeters"}),Object(j.jsx)("option",{value:"mm",children:"Millimeters"}),Object(j.jsx)("option",{value:"mi",children:"Miles"}),Object(j.jsx)("option",{value:"yd",children:"Yards"}),Object(j.jsx)("option",{value:"f",children:"Feet"}),Object(j.jsx)("option",{value:"in",children:"Inches"})]}),Object(j.jsx)("label",{htmlFor:"distconvert-outunit",children:"Out Unit"}),Object(j.jsxs)("select",{id:"distconvert-outunit",value:p,onChange:function(e){return m(e.target.value)},children:[Object(j.jsx)("option",{value:"km",children:"Kilometers"}),Object(j.jsx)("option",{value:"m",children:"Meters"}),Object(j.jsx)("option",{value:"cm",children:"Centimeters"}),Object(j.jsx)("option",{value:"mm",children:"Millimeters"}),Object(j.jsx)("option",{value:"mi",children:"Miles"}),Object(j.jsx)("option",{value:"yd",children:"Yards"}),Object(j.jsx)("option",{value:"f",children:"Feet"}),Object(j.jsx)("option",{value:"in",children:"Inches"})]}),Object(j.jsx)("button",{type:"submit",children:"Convert"})]}),s&&Object(j.jsx)("p",{children:s})]})};n(38);var T=function(){var e=Object(c.useState)(!1),t=Object(u.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)(new Date),a=Object(u.a)(i,2),o=a[0],l=a[1],b=Object(c.useState)(0),d=Object(u.a)(b,2),h=d[0],O=d[1],f=Object(c.useState)("00:00:00.000"),p=Object(u.a)(f,2),m=p[0],x=p[1],v=s.a.auth().currentUser.uid,g=s.a.firestore().collection("stopwatch").doc(v);function S(e){var t=0,n=0,c=0,r=e;r>999&&(c=Math.floor(r/1e3),r%=1e3),c>59&&(n=Math.floor(c/60),c%=60),n>59&&(t=Math.floor(n/60),n%=60);var i=t.toString(),a=n.toString(),s=c.toString(),o=r.toString();for(i.length<2&&(i="0"+i),a.length<2&&(a="0"+a),s.length<2&&(s="0"+s);o.length<3;)o="0"+o;return[i,a,s].join(":")+"."+o}return Object(c.useEffect)((function(){var e=setInterval((function(){if(n){var e=new Date-o;O(e);var t=S(e);x(t)}}),50);return function(){return clearInterval(e)}}),[n,o]),Object(c.useEffect)((function(){g.get().then((function(e){if(e.exists){var t=e.data(),c=t.deltaMs,i=t.startTime,a=S(n?new Date-i:c);l(i),r(t.running),O(c),x(a)}}))}),[]),Object(j.jsxs)("div",{className:"Stopwatch widget",children:[Object(j.jsx)("h1",{children:"Stopwatch"}),Object(j.jsx)("p",{children:m}),n?Object(j.jsx)("button",{onClick:function(){r(!1),g.set({running:!1,startTime:o,deltaMs:h})},children:"Stop Stopwatch"}):Object(j.jsx)("button",{onClick:function(){var e=new Date-h;l(e),r(!0),g.set({running:!0,startTime:e,deltaMs:h})},children:"Start Stopwatch"}),Object(j.jsx)("button",{onClick:function(){var e=(new Date).getTime();O(0),l(e),x("00:00:00.000"),g.set({running:n,startTime:e,deltaMs:0})},children:"Reset Stopwatch"})]})},q=(n(39),0),M=0,I=0;var W=function(){var e=Object(c.useState)(!1),t=Object(u.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)("0"),a=Object(u.a)(i,2),o=a[0],l=a[1],b=Object(c.useState)("0"),d=Object(u.a)(b,2),h=d[0],O=d[1],f=Object(c.useState)("0"),p=Object(u.a)(f,2),m=p[0],x=p[1],v=Object(c.useState)("00:00:00"),g=Object(u.a)(v,2),S=g[0],w=g[1],C=s.a.auth().currentUser.uid,y=s.a.firestore().collection("timer").doc(C);function k(){var e=q.toString(),t=M.toString(),n=I.toString();e.length<2&&(e="0"+e),t.length<2&&(t="0"+t),n.length<2&&(n="0"+n);var c=[e,t,n].join(":");w(c)}return Object(c.useEffect)((function(){var e=new Date,t=setInterval((function(){if(n){var t=new Date;t.getSeconds()!==e.getSeconds()&&(e=t,I>0?I-=1:M>0?(M-=1,I=59):q>0&&(q-=1,M=59,I=59),k())}}),100);return function(){return clearInterval(t)}}),[n]),Object(c.useEffect)((function(){y.get().then((function(e){if(e.exists){var t=e.data();if(q=t.hours,M=t.minutes,I=t.seconds,t.running){var n=Math.floor((new Date-t.startTime)/1e3),c=3600*q+60*M+I;(c-=n)<0?(q=0,M=0,I=0):(q=Math.floor(c/3600),M=Math.floor(c%3600/60),I=Math.floor(c%60)),r(!0)}k()}}))}),[]),Object(j.jsxs)("div",{className:"Timer widget",children:[Object(j.jsx)("h1",{children:"Timer"}),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),q=parseInt(o),M=parseInt(h),I=parseInt(m),k();var t=(new Date).getTime();y.set({startTime:t,running:n,hours:q,minutes:M,seconds:I})},children:[Object(j.jsx)("input",{value:o,type:"number",min:"0",onChange:function(e){return l(e.target.value)},required:!0}),":",Object(j.jsx)("input",{value:h,type:"number",min:"0",max:"59",onChange:function(e){return O(e.target.value)},required:!0}),":",Object(j.jsx)("input",{value:m,type:"number",min:"0",max:"59",onChange:function(e){return x(e.target.value)},required:!0}),Object(j.jsx)("br",{}),Object(j.jsx)("button",{type:"submit",children:"Set Timer"})]}),Object(j.jsx)("p",{children:S}),n?Object(j.jsx)("button",{onClick:function(){r(!1);var e=(new Date).getTime();y.set({startTime:e,running:!1,hours:q,minutes:M,seconds:I})},children:"Stop Timer"}):Object(j.jsx)("button",{onClick:function(){r(!0);var e=(new Date).getTime();y.set({startTime:e,running:!0,hours:q,minutes:M,seconds:I})},children:"Start Timer"})]})};n(40);var R=function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)(void 0),a=Object(u.a)(i,2),s=a[0],o=a[1],l=Object(c.useState)(0),b=Object(u.a)(l,2),d=b[0],h=b[1];return Object(j.jsxs)("div",{className:"CaesarShift widget",children:[Object(j.jsx)("h1",{children:"Caesar Shift"}),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=parseInt(d);t%=26;for(var c="",r=0;r<n.length;r++){var i=n.charCodeAt(r);i>96&&i<=122?(i+=t)>122?i-=26:i<=96&&(i+=26):i>64&&i<=90&&((i+=t)>90?i-=26:i<=64&&(i+=26)),c+=String.fromCharCode(i)}o(c)},children:[Object(j.jsx)("label",{htmlFor:"caesarshift-intext",children:"In Text"}),Object(j.jsx)("input",{id:"caesarshift-intext",value:n,onChange:function(e){return r(e.target.value)},required:!0}),Object(j.jsx)("label",{htmlFor:"baseconvert-shift",children:"Shift"}),Object(j.jsx)("input",{id:"baseconvert-shift",type:"number",min:"-26",max:"26",value:d,onChange:function(e){return h(e.target.value)},required:!0}),Object(j.jsx)("button",{type:"submit",children:"Shift Text"})]}),s&&Object(j.jsx)("p",{children:s})]})},E=[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--..","-----",".----","..---","...--","....-",".....","-....","--...","---..","----."];n(41);var U=function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)(void 0),a=Object(u.a)(i,2),s=a[0],o=a[1],l=Object(c.useState)("encrypt"),b=Object(u.a)(l,2),d=b[0],h=b[1];return Object(j.jsxs)("div",{className:"MorseCode widget",children:[Object(j.jsx)("h1",{children:"Morse Code"}),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t="";if("encrypt"===d)for(var c=0;c<n.length;c++){var r=n.charCodeAt(c);if(r>96&&r<=122)t+=E[r-97];else if(r>64&&r<=90){t+=E[r-65]}else if(r>47&&r<=57){t+=E[r-22]}else" "===n[c]?t+=" /":t+=n[c];c!==n.length-1&&(t+=" ")}else for(var i=n.split(" / "),a=0;a<i.length;a++){for(var s=i[a].split(" "),u=0;u<s.length;u++){var j=s[u],l=E.indexOf(j);-1===l?t+=j:(l+=l>25?22:65,t+=String.fromCharCode(l))}a!==i.length-1&&(t+=" ")}o(t)},children:[Object(j.jsx)("label",{htmlFor:"morsecode-intext",children:"Text"}),Object(j.jsx)("input",{id:"morsecode-intext",value:n,onChange:function(e){return r(e.target.value)},required:!0}),Object(j.jsx)("label",{htmlFor:"morsecode-action",children:"Action"}),Object(j.jsxs)("select",{id:"morsecode-action",value:d,onChange:function(e){return h(e.target.value)},children:[Object(j.jsx)("option",{value:"encrypt",children:"Encrypt"}),Object(j.jsx)("option",{value:"decrypt",children:"Decrypt"})]}),Object(j.jsx)("button",{type:"submit",children:"Convert"})]}),s&&Object(j.jsx)("p",{children:s})]})},B=(n(42),["0","1","2","3","4","5","6","7","8","9"]),L=["+","-","*","/"];var P=function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)(""),a=Object(u.a)(i,2),s=a[0],o=a[1],l=Object(c.useState)(""),b=Object(u.a)(l,2),d=b[0],h=b[1],O=Object(c.useState)(""),f=Object(u.a)(O,2),p=f[0],m=f[1];return Object(j.jsxs)("div",{className:"Calculator widget",children:[Object(j.jsx)("h1",{children:"Calculator"}),Object(j.jsxs)("div",{className:"button-list",children:[B.map((function(e,t){return Object(j.jsx)("button",{onClick:function(){return t=e,void(s?h(d+t):r(n+t));var t},children:e},"calculator-operandbutton".concat(t))})),L.map((function(e,t){return Object(j.jsx)("button",{onClick:function(){return function(e){n&&o(e)}(e)},children:e},"calculator-operatorbutton".concat(t))})),Object(j.jsx)("button",{onClick:function(){if(n&&d&&s){var e,t=parseInt(n),c=parseInt(d);"+"===s?e=t+c:"-"===s?e=t-c:"*"===s?e=t*c:"/"===s&&(e=t/c),m(e)}},children:"="}),Object(j.jsx)("button",{onClick:function(){r(""),o(""),h(""),m("")},children:"Clear"})]}),Object(j.jsxs)("p",{children:[n&&Object(j.jsx)(j.Fragment,{children:n}),s&&Object(j.jsx)(j.Fragment,{children:s}),d&&Object(j.jsx)(j.Fragment,{children:d})]}),p&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("p",{className:"equal-sign",children:"="}),Object(j.jsx)("p",{children:p})]})]})};n(43);var A=function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)(void 0),a=Object(u.a)(i,2),s=a[0],o=a[1];return Object(j.jsxs)("div",{className:"PrimeCheck widget",children:[Object(j.jsx)("h1",{children:"Prime Check"}),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=parseInt(n);if(!isNaN(t)){for(var c=Math.floor(Math.sqrt(t)),r=!0,i=2;i<c+1;i++)if(t%i===0){r=!1;break}o(t+(r?" is prime":" is not prime"))}},children:[Object(j.jsx)("label",{htmlFor:"primecheck-number",children:"Number"}),Object(j.jsx)("input",{id:"primecheck-number",value:n,type:"number",min:"2",onChange:function(e){return r(e.target.value)},required:!0}),Object(j.jsx)("button",{type:"submit",children:"Check"})]}),s&&Object(j.jsx)("p",{children:s})]})};n(44);var z=function(){var e=Object(c.useState)("Rock"),t=Object(u.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)(void 0),a=Object(u.a)(i,2),s=a[0],o=a[1],l=Object(c.useState)(void 0),b=Object(u.a)(l,2),d=b[0],h=b[1],O=Object(c.useState)(void 0),f=Object(u.a)(O,2),p=f[0],m=f[1];return Object(j.jsxs)("div",{className:"RockPaperScissors widget",children:[Object(j.jsxs)("h1",{children:["Rock Paper",Object(j.jsx)("br",{}),"Scissors"]}),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t,c,r,i=Math.floor(3*Math.random());r="Draw"===(c=n===(t=0===i?"Rock":1===i?"Paper":"Scissors")?"Draw":"Rock"===n?"Scissors"===t?"Win":"Lose":"Paper"===n?"Rock"===t?"Win":"Lose":"Paper"===t?"Win":"Lose")?"#555":"Win"===c?"green":"red",o(t),m(r),h(c)},children:[Object(j.jsxs)("select",{value:n,onChange:function(e){return r(e.target.value)},required:!0,children:[Object(j.jsx)("option",{value:"Rock",children:"Rock"}),Object(j.jsx)("option",{value:"Paper",children:"Paper"}),Object(j.jsx)("option",{value:"Scissors",children:"Scissors"})]}),Object(j.jsx)("button",{type:"submit",children:"Play"})]}),s&&Object(j.jsx)("p",{children:s}),d&&Object(j.jsx)("p",{style:{color:p},children:d})]})},G="5c06147f1857bbed6973f096fece2f66c52fd096";var H=function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)(""),a=Object(u.a)(i,2),s=a[0],o=a[1];function l(){return(l=Object(g.a)(v.a.mark((function e(t){var c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),"https://api-ssl.bitly.com/v4/shorten",c={method:"POST",headers:{Authorization:"Bearer "+G,"Content-Type":"application/json"},body:JSON.stringify({long_url:n,domain:"bit.ly"})},e.next=5,fetch("https://api-ssl.bitly.com/v4/shorten",c).then((function(e){if(e.ok)return e.json();throw new Error("Search request failed!")}),(function(e){return console.log(e.message)})).then((function(e){o(e.link)}));case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(j.jsxs)("div",{className:"LinkShorten widget",children:[Object(j.jsx)("h1",{children:"Link Shorten"}),Object(j.jsxs)("form",{onSubmit:function(e){return l.apply(this,arguments)},children:[Object(j.jsx)("label",{htmlFor:"linkshorten-longurl",children:"Long URL"}),Object(j.jsx)("input",{id:"linkshorten-longurl",placeholder:"https://example.com",type:"url",value:n,onChange:function(e){return r(e.target.value)},required:!0}),Object(j.jsx)("button",{type:"submit",children:"Shorten Link"})]}),s&&Object(j.jsx)("a",{href:s,target:"_blank",rel:"noreferrer",children:Object(j.jsx)("p",{children:s})})]})};n(45);var J=function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],r=t[1];return Object(j.jsxs)("div",{className:"TextCount widget",children:[Object(j.jsx)("h1",{children:"Text Count"}),Object(j.jsx)("textarea",{rows:"4",value:n,onChange:function(e){return r(e.target.value)}}),Object(j.jsxs)("p",{children:["Word count: ",n?n.trim().split(" ").length:0]}),Object(j.jsxs)("p",{children:["Character count: ",n.length]})]})},K=(n(46),0),_=0,Y=0;var Z=function(){var e=Object(c.useState)(0),t=Object(u.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)(0),a=Object(u.a)(i,2),o=a[0],l=a[1],b=Object(c.useState)(0),d=Object(u.a)(b,2),h=d[0],O=d[1],f=s.a.auth().currentUser.uid,p=s.a.firestore().collection("clicks").doc(f);function m(){r(K),l(Y),O(_)}function x(){return(x=Object(g.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return K+=1,Y+=1,m(),e.next=5,p.set({totalClicks:K,bestCps:_});case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)((function(){p.get().then((function(e){if(e.exists){var t=e.data();K=t.totalClicks,_=t.bestCps,m()}}))}),[]),Object(c.useEffect)((function(){var e=setInterval((function(){Y>0&&(Y>_&&(_=Y),Y=0,m())}),1e3);return function(){return clearInterval(e)}}),[]),Object(j.jsxs)("div",{className:"ClickCount widget",children:[Object(j.jsx)("h1",{children:"Click Count"}),Object(j.jsx)("button",{onClick:function(){return x.apply(this,arguments)},children:"Click"}),Object(j.jsx)("p",{children:o}),Object(j.jsxs)("p",{children:["Total clicks: ",n]}),Object(j.jsxs)("p",{children:["Best clicks per second: ",h]})]})};n(47);var Q=function(){var e=Object(c.useState)(void 0),t=Object(u.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)(void 0),a=Object(u.a)(i,2),o=a[0],l=a[1],b=Object(c.useState)(!1),d=Object(u.a)(b,2),f=d[0],p=d[1],m=Object(c.useState)(""),x=Object(u.a)(m,2),S=x[0],w=x[1],C=Object(c.useState)(""),y=Object(u.a)(C,2),k=y[0],D=y[1],N=s.a.auth().currentUser.uid,F=s.a.storage().ref("backgrounds/"+N+"/background");function T(){return(T=Object(g.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),w(""),D(""),e.next=5,F.put(n).then((function(){w("Background successfully updated."),setTimeout((function(){w("")}),3e3),q()})).catch((function(e){D("Please upload an image with a file size under 5MB."),setTimeout((function(){D("")}),3e3)}));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function q(){return M.apply(this,arguments)}function M(){return(M=Object(g.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.getDownloadURL().then((function(e){l(e),p(!0)})).catch((function(e){console.log(e),p(!0)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(){return(I=Object(g.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.storage().ref("backgrounds/"+N).listAll();case 2:e.sent.items.length>0?q():p(!0);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)((function(){!function(){I.apply(this,arguments)}()}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"Background widget",children:[Object(j.jsx)("h1",{children:"Background"}),Object(j.jsxs)("form",{onSubmit:function(e){return T.apply(this,arguments)},children:[Object(j.jsx)("input",{type:"file",accept:"image/*",onChange:function(e){return r(e.target.files[0])},required:!0}),Object(j.jsx)("button",{type:"submit",children:"Update Background"})]}),S&&Object(j.jsx)("p",{className:"success",children:S}),k&&Object(j.jsx)("p",{className:"error",children:k})]}),f&&Object(j.jsx)(h,{src:o||O})]})},V="bdd8e099cacde42f7948b5354fca9624";n(48);var X=function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)(void 0),a=Object(u.a)(i,2),s=a[0],o=a[1];function l(){return(l=Object(g.a)(v.a.mark((function e(t){var c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),c="https://api.openweathermap.org/data/2.5/weather?q=".concat(n,"&appid=").concat(V,"&units=metric"),e.next=4,fetch(c).then((function(e){if(e.ok)return e.json();throw new Error("Search request failed!")}),(function(e){return console.log(e.message)})).then((function(e){o(e)}));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(j.jsxs)("div",{className:"Weather widget",children:[Object(j.jsx)("h1",{children:"Weather"}),Object(j.jsxs)("form",{onSubmit:function(e){return l.apply(this,arguments)},children:[Object(j.jsx)("label",{htmlFor:"weather-city",children:"City"}),Object(j.jsx)("input",{id:"weather-city",value:n,onChange:function(e){return r(e.target.value)},required:!0}),Object(j.jsx)("button",{type:"submit",children:"Get Weather"})]}),s&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("p",{children:[Object(j.jsx)("u",{children:"Weather"}),Object(j.jsx)("br",{}),s.weather[0].main,Object(j.jsx)("br",{}),s.main.temp,"\xb0C, ",function(e){var t=1.8*e+32;return Math.round(100*t)/100}(s.main.temp),"\xb0F"]}),Object(j.jsx)("img",{src:"http://openweathermap.org/img/w/".concat(s.weather[0].icon,".png"),alt:""}),Object(j.jsxs)("p",{children:[Object(j.jsx)("u",{children:"Data"}),Object(j.jsx)("br",{}),"Cloud cover: ",s.clouds.all,"%",Object(j.jsx)("br",{}),"Humidity: ",s.main.humidity,"%",Object(j.jsx)("br",{}),"Wind: ",s.wind.speed,"m/s, ",function(e){var t=2.237*e;return Math.round(100*t)/100}(s.wind.speed),"mi/hr, ",s.wind.deg,"\xb0"]})]})]})};n(49);var $=function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)(void 0),a=Object(u.a)(i,2),s=a[0],o=a[1];function l(){return(l=Object(g.a)(v.a.mark((function e(t){var c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),c="https://api.openweathermap.org/data/2.5/weather?q=".concat(n,"&appid=").concat(V,"&units=metric"),e.next=4,fetch(c).then((function(e){if(e.ok)return e.json();throw new Error("Search request failed!")}),(function(e){return console.log(e.message)})).then((function(e){o(e)}));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e,t){var n=e.getTime()+6e4*e.getTimezoneOffset();return new Date(n+1e3*t)}return Object(j.jsxs)("div",{className:"SunriseSunset widget",children:[Object(j.jsx)("h1",{children:"Sunrise/Sunset"}),Object(j.jsxs)("form",{onSubmit:function(e){return l.apply(this,arguments)},children:[Object(j.jsx)("label",{htmlFor:"sunrisesunset-city",children:"City"}),Object(j.jsx)("input",{id:"sunrisesunset-city",value:n,onChange:function(e){return r(e.target.value)},required:!0}),Object(j.jsx)("button",{type:"submit",children:"Get Sunrise/Sunset"})]}),s&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("p",{children:[Object(j.jsx)("u",{children:"Local Time"}),Object(j.jsx)("br",{}),b(new Date,s.timezone).toDateString(),Object(j.jsx)("br",{}),b(new Date,s.timezone).toLocaleTimeString()]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("u",{children:"Sunrise/Sunset"}),Object(j.jsx)("br",{}),b(new Date(1e3*s.sys.sunrise),s.timezone).toLocaleTimeString(),"/",b(new Date(1e3*s.sys.sunset),s.timezone).toLocaleTimeString()]}),Object(j.jsx)("img",{src:"http://openweathermap.org/img/w/01d.png",alt:""}),Object(j.jsx)("img",{src:"http://openweathermap.org/img/w/01n.png",alt:""})]})]})};n(50);var ee=function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)("rhy"),a=Object(u.a)(i,2),s=a[0],o=a[1],l=Object(c.useState)(void 0),b=Object(u.a)(l,2),d=b[0],h=b[1];function O(){return(O=Object(g.a)(v.a.mark((function e(t){var c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),c="https://api.datamuse.com/words?rel_".concat(s,"=").concat(n,"&max=10"),e.next=4,fetch(c).then((function(e){if(e.ok)return e.json();throw new Error("Search request failed!")}),(function(e){return console.log(e.message)})).then((function(e){h(e)}));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(j.jsxs)("div",{className:"Words widget",children:[Object(j.jsx)("h1",{children:"Words"}),Object(j.jsxs)("form",{onSubmit:function(e){return O.apply(this,arguments)},children:[Object(j.jsx)("label",{htmlFor:"words-word",children:"Word"}),Object(j.jsx)("input",{id:"words-word",value:n,onChange:function(e){return r(e.target.value)},required:!0}),Object(j.jsx)("label",{htmlFor:"words-request",children:"Request"}),Object(j.jsxs)("select",{id:"words-request",value:s,onChange:function(e){return o(e.target.value)},required:!0,children:[Object(j.jsx)("option",{value:"rhy",children:"Rhymes"}),Object(j.jsx)("option",{value:"trg",children:"Triggers"}),Object(j.jsx)("option",{value:"syn",children:"Synonyms"}),Object(j.jsx)("option",{value:"ant",children:"Antonyms"}),Object(j.jsx)("option",{value:"hom",children:"Homophones"}),Object(j.jsx)("option",{value:"cns",children:"Similar Consonants"})]}),Object(j.jsx)("button",{type:"submit",children:"Get Words"})]}),d&&Object(j.jsx)("p",{children:d.map((function(e){return e.word})).join(", ")})]})};n(51);var te=function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)(void 0),a=Object(u.a)(i,2),s=a[0],o=a[1];function l(){return(l=Object(g.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://random-word-api.herokuapp.com/word",r("..."),o(["..."]),e.next=5,fetch("https://random-word-api.herokuapp.com/word").then((function(e){if(e.ok)return e.json();throw new Error("Search request failed!")}),(function(e){return console.log(e.message)})).then((function(e){r(e);var t="https://api.datamuse.com/words?sp=".concat(e,"&md=d&max=1");fetch(t).then((function(e){if(e.ok)return e.json();throw new Error("Search request failed!")}),(function(e){return console.log(e.message)})).then((function(e){var t,n=null===(t=e[0])||void 0===t?void 0:t.defs;n?(n.length>3&&(n=n.slice(0,3)),n=n.map((function(e){var t=e.split("\t");return"(".concat(t[0],") ").concat(t.slice(1).join(" "))})),o(n)):o(["No definitions found."])}))}));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(j.jsxs)("div",{className:"RandomWord widget",children:[Object(j.jsx)("h1",{children:"Random Word"}),Object(j.jsx)("button",{onClick:function(){return l.apply(this,arguments)},children:"Get Random Word"}),n&&Object(j.jsx)("p",{className:"word-text",children:n}),s&&s.map((function(e,t){return Object(j.jsx)("p",{children:Object(j.jsx)("i",{children:e})},"randomword-def".concat(t))}))]})};n(52);var ne=function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)(""),a=Object(u.a)(i,2),s=a[0],o=a[1],l=Object(c.useState)(void 0),b=Object(u.a)(l,2),d=b[0],h=b[1];function O(){return(O=Object(g.a)(v.a.mark((function e(t){var c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),o(n),h(["..."]),c="https://api.datamuse.com/words?sp=".concat(n,"&md=d&max=1"),fetch(c).then((function(e){if(e.ok)return e.json();throw new Error("Search request failed!")}),(function(e){return console.log(e.message)})).then((function(e){var t,n=null===(t=e[0])||void 0===t?void 0:t.defs;n?(n.length>3&&(n=n.slice(0,3)),n=n.map((function(e){var t=e.split("\t");return"(".concat(t[0],") ").concat(t.slice(1).join(" "))})),h(n)):h(["No definitions found."])}));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(j.jsxs)("div",{className:"Dictionary widget",children:[Object(j.jsx)("h1",{children:"Dictionary"}),Object(j.jsxs)("form",{onSubmit:function(e){return O.apply(this,arguments)},children:[Object(j.jsx)("label",{htmlFor:"dictionary-word",children:"Word"}),Object(j.jsx)("input",{id:"dictionary-word",value:n,onChange:function(e){return r(e.target.value)},required:!0}),Object(j.jsx)("button",{type:"submit",children:"Search"})]}),s&&Object(j.jsx)("p",{className:"word-text",children:s}),d&&d.map((function(e,t){return Object(j.jsx)("p",{children:Object(j.jsx)("i",{children:e})},"dictionary-def".concat(t))}))]})};n(53);s.a.initializeApp({apiKey:"AIzaSyA62JULBKqky5ypeIrH_disHMP1xUqnPo8",authDomain:"widget-wall.firebaseapp.com",projectId:"widget-wall",storageBucket:"widget-wall.appspot.com",messagingSenderId:"650683733024",appId:"1:650683733024:web:74236de5a5a1ba73e19845"});var ce=function(){return Object(o.a)(s.a.auth()),Object(j.jsx)("div",{className:"App",children:Object(j.jsx)("div",{className:"widgets",children:s.a.auth().currentUser?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(p,{}),Object(j.jsx)(l,{}),Object(j.jsx)(b,{}),Object(j.jsx)(d,{}),Object(j.jsx)(m,{}),Object(j.jsx)(S,{}),Object(j.jsx)(w,{}),Object(j.jsx)(C,{}),Object(j.jsx)(F,{}),Object(j.jsx)(T,{}),Object(j.jsx)(W,{}),Object(j.jsx)(R,{}),Object(j.jsx)(U,{}),Object(j.jsx)(P,{}),Object(j.jsx)(A,{}),Object(j.jsx)(z,{}),Object(j.jsx)(H,{}),Object(j.jsx)(J,{}),Object(j.jsx)(Z,{}),Object(j.jsx)(Q,{}),Object(j.jsx)(X,{}),Object(j.jsx)($,{}),Object(j.jsx)(ee,{}),Object(j.jsx)(te,{}),Object(j.jsx)(ne,{})]}):Object(j.jsx)(f,{})})})},re=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,57)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),i(e),a(e)}))};a.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(ce,{})}),document.getElementById("root")),re()}]),[[54,1,2]]]);
//# sourceMappingURL=main.b300297a.chunk.js.map