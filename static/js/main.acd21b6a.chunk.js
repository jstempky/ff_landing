(window.webpackJsonpff_landing=window.webpackJsonpff_landing||[]).push([[0],{14:function(e,t,n){e.exports=n.p+"static/media/logo.812ff160.png"},18:function(e,t,n){e.exports=n(44)},23:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),i=n(10),l=n.n(i),s=(n(23),n(11)),r=n(12),c=n(16),u=n(13),h=n(2),m=n(17),p=n(14),d=n.n(p),g=n(15),f=n.n(g),b=(n(43),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={email:""},n.handleChange=n.handleChange.bind(Object(h.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(h.a)(n)),n}return Object(m.a)(t,e),Object(r.a)(t,[{key:"handleChange",value:function(e){this.setState({email:e.target.value}),console.log(this.state)}},{key:"handleSubmit",value:function(e){f.a.post("fitfort.herokuapp.com/emailsignup",{email:this.state.email,headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json"}}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{src:d.a,className:"App-logo",alt:"logo"}),o.a.createElement("h3",null,"FitFort helps Fitness Professionals/Personal Trainers sustain longer client relationships by making it easier to build personalized fitness plans and helping clients see their progress."),o.a.createElement("form",{className:"container-style"},o.a.createElement("input",{className:"input-style",placeholder:"enter your email here!",value:this.state.value,onChange:this.handleChange,type:"text",name:"email"}),o.a.createElement("input",{className:"button-style",type:"submit",value:"Sign up to be a pilot user!"}))))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[18,1,2]]]);
//# sourceMappingURL=main.acd21b6a.chunk.js.map