(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/zufangzhangdan/add-or-update"],{"092a":function(e,n,r){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=t(r("a34a"));function t(e){return e&&e.__esModule?e:{default:e}}function u(e,n,r,a,t,u,i){try{var o=e[u](i),f=o.value}catch(c){return void r(c)}o.done?n(f):Promise.resolve(f).then(a,t)}function i(e){return function(){var n=this,r=arguments;return new Promise((function(a,t){var i=e.apply(n,r);function o(e){u(i,a,t,o,f,"next",e)}function f(e){u(i,a,t,o,f,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([r.e("common/vendor"),r.e("components/w-picker/w-picker")]).then(function(){return resolve(r("b764"))}.bind(null,r)).catch(r.oe)},f={data:function(){return{ruleForm:{fangwuhao:"",fangwumingcheng:"",fangwuleixing:"",tupian:"",zhanghao:"",xingming:"",shuidianfei:"",wuyefei:"",fangzufei:"",zhangdanxiangqing:"",ispay:"",userid:""},user:{},ro:{fangwuhao:!1,fangwumingcheng:!1,fangwuleixing:!1,tupian:!1,zhanghao:!1,xingming:!1,shuidianfei:!1,wuyefei:!1,fangzufei:!1,zhangdanxiangqing:!1,ispay:!1,userid:!1}}},components:{wPicker:o},computed:{},onLoad:function(n){var r=this;return i(a.default.mark((function t(){var u,i,o,f;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return u=e.getStorageSync("nowTable"),t.next=3,r.$api.session(u);case 3:if(i=t.sent,r.user=i.data,r.ruleForm.zhanghao=r.user.zhanghao,r.ruleForm.xingming=r.user.xingming,r.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(r.ruleForm.refid=n.refid,r.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){t.next=15;break}return r.ruleForm.id=n.id,t.next=13,r.$api.info("zufangzhangdan",r.ruleForm.id);case 13:i=t.sent,r.ruleForm=i.data;case 15:if(!n.cross){t.next=66;break}o=e.getStorageSync("crossObj"),t.t0=a.default.keys(o);case 18:if((t.t1=t.t0()).done){t.next=66;break}if(f=t.t1.value,"fangwuhao"!=f){t.next=24;break}return r.ruleForm.fangwuhao=o[f],r.ro.fangwuhao=!0,t.abrupt("continue",18);case 24:if("fangwumingcheng"!=f){t.next=28;break}return r.ruleForm.fangwumingcheng=o[f],r.ro.fangwumingcheng=!0,t.abrupt("continue",18);case 28:if("fangwuleixing"!=f){t.next=32;break}return r.ruleForm.fangwuleixing=o[f],r.ro.fangwuleixing=!0,t.abrupt("continue",18);case 32:if("tupian"!=f){t.next=36;break}return r.ruleForm.tupian=o[f],r.ro.tupian=!0,t.abrupt("continue",18);case 36:if("zhanghao"!=f){t.next=40;break}return r.ruleForm.zhanghao=o[f],r.ro.zhanghao=!0,t.abrupt("continue",18);case 40:if("xingming"!=f){t.next=44;break}return r.ruleForm.xingming=o[f],r.ro.xingming=!0,t.abrupt("continue",18);case 44:if("shuidianfei"!=f){t.next=48;break}return r.ruleForm.shuidianfei=o[f],r.ro.shuidianfei=!0,t.abrupt("continue",18);case 48:if("wuyefei"!=f){t.next=52;break}return r.ruleForm.wuyefei=o[f],r.ro.wuyefei=!0,t.abrupt("continue",18);case 52:if("fangzufei"!=f){t.next=56;break}return r.ruleForm.fangzufei=o[f],r.ro.fangzufei=!0,t.abrupt("continue",18);case 56:if("zhangdanxiangqing"!=f){t.next=60;break}return r.ruleForm.zhangdanxiangqing=o[f],r.ro.zhangdanxiangqing=!0,t.abrupt("continue",18);case 60:if("userid"!=f){t.next=64;break}return r.ruleForm.userid=o[f],r.ro.userid=!0,t.abrupt("continue",18);case 64:t.next=18;break;case 66:r.styleChange();case 67:case"end":return t.stop()}}),t)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},tupianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.tupian=e.$base.url+"upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=this;return i(a.default.mark((function n(){return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.ruleForm.fangwuhao){n.next=3;break}return e.$utils.msg("房屋号不能为空"),n.abrupt("return");case 3:if(e.ruleForm.fangwumingcheng){n.next=6;break}return e.$utils.msg("房屋名称不能为空"),n.abrupt("return");case 6:if(e.ruleForm.fangwuleixing){n.next=9;break}return e.$utils.msg("房屋类型不能为空"),n.abrupt("return");case 9:if(!e.ruleForm.shuidianfei||e.$validate.isIntNumer(e.ruleForm.shuidianfei)){n.next=12;break}return e.$utils.msg("水电费应输入整数"),n.abrupt("return");case 12:if(!e.ruleForm.wuyefei||e.$validate.isIntNumer(e.ruleForm.wuyefei)){n.next=15;break}return e.$utils.msg("物业费应输入整数"),n.abrupt("return");case 15:if(!e.ruleForm.fangzufei||e.$validate.isIntNumer(e.ruleForm.fangzufei)){n.next=18;break}return e.$utils.msg("房租费应输入整数"),n.abrupt("return");case 18:if(!e.ruleForm.id){n.next=23;break}return n.next=21,e.$api.update("zufangzhangdan",e.ruleForm);case 21:n.next=25;break;case 23:return n.next=25,e.$api.add("zufangzhangdan",e.ruleForm);case 25:e.$utils.msgBack("提交成功");case 26:case"end":return n.stop()}}),n)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,r=n.getFullYear(),a=n.getMonth()+1,t=n.getDate();return"start"===e?r-=60:"end"===e&&(r+=2),a=a>9?a:"0"+a,t=t>9?t:"0"+t,"".concat(r,"-").concat(a,"-").concat(t)},toggleTab:function(e){this.$refs[e].show()}}};n.default=f}).call(this,r("543d")["default"])},"4dea":function(e,n,r){"use strict";r.r(n);var a=r("5f67"),t=r("a9d7");for(var u in t)"default"!==u&&function(e){r.d(n,e,(function(){return t[e]}))}(u);r("620f");var i,o=r("f0c5"),f=Object(o["a"])(t["default"],a["b"],a["c"],!1,null,"e1d87f1a",null,!1,a["a"],i);n["default"]=f.exports},"5f67":function(e,n,r){"use strict";var a;r.d(n,"b",(function(){return t})),r.d(n,"c",(function(){return u})),r.d(n,"a",(function(){return a}));var t=function(){var e=this,n=e.$createElement;e._self._c},u=[]},"605a":function(e,n,r){"use strict";(function(e){r("ff36");a(r("66fd"));var n=a(r("4dea"));function a(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,r("543d")["createPage"])},"620f":function(e,n,r){"use strict";var a=r("c819"),t=r.n(a);t.a},a9d7:function(e,n,r){"use strict";r.r(n);var a=r("092a"),t=r.n(a);for(var u in a)"default"!==u&&function(e){r.d(n,e,(function(){return a[e]}))}(u);n["default"]=t.a},c819:function(e,n,r){}},[["605a","common/runtime","common/vendor"]]]);