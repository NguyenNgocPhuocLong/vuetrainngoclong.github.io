(function(e){function t(t){for(var i,l,o=t[0],s=t[1],u=t[2],f=0,p=[];f<o.length;f++)l=o[f],r[l]&&p.push(r[l][0]),r[l]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i]);c&&c(t);while(p.length)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],i=!0,o=1;o<n.length;o++){var s=n[o];0!==r[s]&&(i=!1)}i&&(a.splice(t--,1),e=l(l.s=n[0]))}return e}var i={},r={app:0},a=[];function l(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=i,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)l.d(n,i,function(t){return e[t]}.bind(null,i));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var c=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var i=n("64a9"),r=n.n(i);r.a},"12a2":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var i=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("nav",[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),n("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),n("router-view")],1)},a=[],l={name:"app",components:{}},o=l,s=(n("034f"),n("2877")),u=Object(s["a"])(o,r,a,!1,null,null,null),c=u.exports,f=n("7bb1"),p=n("8c4f"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"holder"},[n("form",{on:{submit:function(t){return t.preventDefault(),e.addSkill(t)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.skill,expression:"skill"},{name:"validate",rawName:"v-validate",value:"min:5",expression:"'min:5'"}],attrs:{type:"text",placeholder:"Enter a skill you have...",name:"skill"},domProps:{value:e.skill},on:{input:function(t){t.target.composing||(e.skill=t.target.value)}}}),n("transition",{attrs:{name:"alert-in","enter-active-class":"animated flipInX","leave-active-class":"animated flipOutX"}},[e.errors.has("skill")?n("p",{staticClass:"alert"},[e._v(e._s(e.errors.first("skill")))]):e._e()])],1),n("ul",[n("transition-group",{attrs:{name:"list","enter-active-class":"animated bounceInUp","leave-active-class":"animated bounceOutDown"}},e._l(e.skills,function(t){return n("li",{key:t.id},[e._v("\n          "+e._s(t.skill)+"\n          "),n("i",{staticClass:"fa fa-minus-circle float-right",on:{click:function(n){e.remove(t.id)}}})])}),0)],1),e.skills.length>=1?n("p",[e._v("You have more than one skill")]):n("p",[e._v("You have less than or equal to 1 skill")])])])},v=[],m=(n("20d6"),{name:"Skills",props:{},data:function(){return{skill:"",skills:[{id:0,skill:"Vue.js"},{id:1,skill:"Fontend Developer"}]}},methods:{changeName:function(){this.name="Long "},addSkill:function(){var e=this;this.$validator.validateAll().then(function(t){t&&(e.skills.push({id:e.skills.length+1,skill:e.skill}),e.skill="")})},remove:function(e){var t=this.skills.findIndex(function(t){return t.id===e});-1!=t&&this.skills.splice(t,1)}}}),h=m,b=(n("f0b1"),Object(s["a"])(h,d,v,!1,null,"77f61f58",null)),k=b.exports,_=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},g=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"about"},[n("h1",[e._v("This is an about page")]),n("p",[e._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali...")])])}],y={},w=y,O=Object(s["a"])(w,_,g,!1,null,"e3a7b272",null),x=O.exports;i["a"].use(p["a"]);var j=new p["a"]({routes:[{path:"/",name:"skills",component:k},{path:"/about",name:"about",component:x}]});i["a"].config.productionTip=!1,i["a"].use(f["a"]),new i["a"]({router:j,render:function(e){return e(c)}}).$mount("#app")},"64a9":function(e,t,n){},f0b1:function(e,t,n){"use strict";var i=n("12a2"),r=n.n(i);r.a}});
//# sourceMappingURL=app.b12c6db9.js.map