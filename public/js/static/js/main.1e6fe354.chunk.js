(this["webpackJsonpexample-widget"]=this["webpackJsonpexample-widget"]||[]).push([[0],{12:function(e,t,n){},20:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},21:function(e,t,n){"use strict";n.r(t);var s=n(0),o=n.n(s),a=n(3),r=n.n(a),c=(n(12),n(1)),i=n.n(c),u=n(4),l=n(2);n(19),n(20);var p=function(){return Object(s.useEffect)((function(){Object(l.addResponseMessage)("Namaste!!!"),function(){var e=Object(u.a)(i.a.mark((function e(){var t,n,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://localhost:3000/api/session",{method:"GET",headers:{"Content-Type":"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.next=9,n.result;case 9:s=e.sent,console.log(s.session_id),localStorage.setItem("session_id",s.session_id),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log({err:e.t0});case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}()()}),[]),o.a.createElement("div",{className:"App"},o.a.createElement(l.Widget,{handleNewUserMessage:function(e){console.log("New message incoming! ".concat(e)),function(){var t=Object(u.a)(i.a.mark((function t(){var n,s,o,a,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=localStorage.getItem("session_id"),t.next=4,fetch("http://localhost:3000/api/message",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({session_id:n,input:{message_type:"text",text:e}})});case 4:return s=t.sent,t.next=7,s.json();case 7:return o=t.sent,t.next=10,o.result;case 10:a=t.sent,r="",console.log(a),a.output.generic.forEach((function(e){"text"==e.response_type&&(r=r+" <br/>"+e.text,Object(l.addResponseMessage)(e.text)),"option"==e.response_type&&e.options.forEach((function(e){r=r+"<br/>"+e.value.input.text,Object(l.addResponseMessage)("Option:"+e.value.input.text)}))})),t.next=20;break;case 17:t.prev=17,t.t0=t.catch(0),console.log({err:t.t0});case 20:case"end":return t.stop()}}),t,null,[[0,17]])})));return function(){return t.apply(this,arguments)}}()()},title:"ThE NeW nOrMaL",subtitle:"Book your COVID-19 test here!!"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(p,null)),document.getElementById("chat_widget")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(21)}},[[7,1,2]]]);
//# sourceMappingURL=main.1e6fe354.chunk.js.map