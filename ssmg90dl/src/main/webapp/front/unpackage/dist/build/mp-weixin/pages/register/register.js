(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/register/register"],{"2b9a":function(e,n,t){"use strict";t.r(n);var r=t("9fdf"),i=t("ae5b");for(var a in i)"default"!==a&&function(e){t.d(n,e,(function(){return i[e]}))}(a);t("ef87");var u,o=t("f0c5"),l=Object(o["a"])(i["default"],r["b"],r["c"],!1,null,"c27d5118",null,!1,r["a"],u);n["default"]=l.exports},"9fdf":function(e,n,t){"use strict";var r;t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return r}));var i=function(){var e=this,n=e.$createElement;e._self._c},a=[]},ae5b:function(e,n,t){"use strict";t.r(n);var r=t("f03c"),i=t.n(r);for(var a in r)"default"!==a&&function(e){t.d(n,e,(function(){return r[e]}))}(a);n["default"]=i.a},e4de:function(e,n,t){},e560:function(e,n,t){"use strict";(function(e){t("ff36");r(t("66fd"));var n=r(t("2b9a"));function r(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},ef87:function(e,n,t){"use strict";var r=t("e4de"),i=t.n(r);i.a},f03c:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=i(t("a34a"));function i(e){return e&&e.__esModule?e:{default:e}}function a(e,n,t,r,i,a,u){try{var o=e[a](u),l=o.value}catch(s){return void t(s)}o.done?n(l):Promise.resolve(l).then(r,i)}function u(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var u=e.apply(n,t);function o(e){a(u,r,i,o,l,"next",e)}function l(e){a(u,r,i,o,l,"throw",e)}o(void 0)}))}}var o={data:function(){return{yonghuxingbieOptions:[],yonghuxingbieIndex:0,zhongjiexingbieOptions:[],zhongjiexingbieIndex:0,ruleForm:{},tableName:""}},onLoad:function(){var n=this;return u(r.default.mark((function t(){var i;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:[],i=e.getStorageSync("loginTable"),n.tableName=i,"yonghu"==n.tableName&&(n.yonghuxingbieOptions="男,女".split(","),n.ruleForm.xingbie=n.yonghuxingbieOptions[0]),"zhongjie"==n.tableName&&(n.zhongjiexingbieOptions="男,女".split(","),n.ruleForm.xingbie=n.zhongjiexingbieOptions[0]),n.styleChange();case 6:case"end":return t.stop()}}),t)})))()},methods:{yonghuxingbieChange:function(e){this.yonghuxingbieIndex=e.target.value,this.ruleForm.xingbie=this.yonghuxingbieOptions[this.yonghuxingbieIndex]},zhongjiexingbieChange:function(e){this.zhongjiexingbieIndex=e.target.value,this.ruleForm.xingbie=this.zhongjiexingbieOptions[this.zhongjiexingbieIndex]},styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},register:function(){var e=this;return u(r.default.mark((function n(){return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.ruleForm.zhanghao||"yonghu"!=e.tableName){n.next=3;break}return e.$utils.msg("账号不能为空"),n.abrupt("return");case 3:if(e.ruleForm.mima||"yonghu"!=e.tableName){n.next=6;break}return e.$utils.msg("密码不能为空"),n.abrupt("return");case 6:if(e.ruleForm.xingming||"yonghu"!=e.tableName){n.next=9;break}return e.$utils.msg("姓名不能为空"),n.abrupt("return");case 9:if("yonghu"!=e.tableName||!e.ruleForm.nianling||e.$validate.isIntNumer(e.ruleForm.nianling)){n.next=12;break}return e.$utils.msg("年龄应输入整数"),n.abrupt("return");case 12:if("yonghu"!=e.tableName||!e.ruleForm.shouji||e.$validate.isMobile(e.ruleForm.shouji)){n.next=15;break}return e.$utils.msg("手机应输入手机格式"),n.abrupt("return");case 15:if("yonghu"!=e.tableName||!e.ruleForm.shenfenzheng||e.$validate.checkIdCard(e.ruleForm.shenfenzheng)){n.next=18;break}return e.$utils.msg("身份证应输入身份证格式"),n.abrupt("return");case 18:if("yonghu"!=e.tableName||!e.ruleForm.youxiang||e.$validate.isEmail(e.ruleForm.youxiang)){n.next=21;break}return e.$utils.msg("邮箱应输入邮件格式"),n.abrupt("return");case 21:if(e.ruleForm.zhongjiezhanghao||"zhongjie"!=e.tableName){n.next=24;break}return e.$utils.msg("中介账号不能为空"),n.abrupt("return");case 24:if(e.ruleForm.mima||"zhongjie"!=e.tableName){n.next=27;break}return e.$utils.msg("密码不能为空"),n.abrupt("return");case 27:if(e.ruleForm.zhongjiexingming||"zhongjie"!=e.tableName){n.next=30;break}return e.$utils.msg("中介姓名不能为空"),n.abrupt("return");case 30:if("zhongjie"!=e.tableName||!e.ruleForm.shenfenzheng||e.$validate.checkIdCard(e.ruleForm.shenfenzheng)){n.next=33;break}return e.$utils.msg("身份证应输入身份证格式"),n.abrupt("return");case 33:if("zhongjie"!=e.tableName||!e.ruleForm.lianxidianhua||e.$validate.isMobile(e.ruleForm.lianxidianhua)){n.next=36;break}return e.$utils.msg("联系电话应输入手机格式"),n.abrupt("return");case 36:if("zhongjie"!=e.tableName||!e.ruleForm.nianling||e.$validate.isIntNumer(e.ruleForm.nianling)){n.next=39;break}return e.$utils.msg("年龄应输入整数"),n.abrupt("return");case 39:return n.next=41,e.$api.register("".concat(e.tableName),e.ruleForm);case 41:e.$utils.msgBack("注册成功");case 43:case"end":return n.stop()}}),n)})))()}}};n.default=o}).call(this,t("543d")["default"])}},[["e560","common/runtime","common/vendor"]]]);