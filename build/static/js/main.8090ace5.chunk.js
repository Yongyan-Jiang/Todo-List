(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a(24)},,,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(8),l=a.n(i),o=(a(16),a(1)),r=a(2),c=a(4),u=a(3),h=a(5),m=(a(17),a(18),a(19),a(20),function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("input",{type:"text",value:this.props.content,className:"TodoInput",onChange:this.changeTitle.bind(this),onKeyPress:this.submit.bind(this)})}},{key:"submit",value:function(e){"Enter"===e.key&&this.props.onSubmit(e)}},{key:"changeTitle",value:function(e){this.props.onChange(e)}}]),t}(n.Component)),d=(a(21),function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"TodoItem"},s.a.createElement("input",{type:"checkbox",checked:"completed"===this.props.todo.status,onChange:this.toggle.bind(this)}),s.a.createElement("span",{className:"title"},this.props.todo.title),s.a.createElement("button",{onClick:this.delete.bind(this)},"\u5220\u9664"))}},{key:"toggle",value:function(e){this.props.onToggle(e,this.props.todo)}},{key:"delete",value:function(e){this.props.onDelete(e,this.props.todo)}}]),t}(n.Component)),p=(a(22),a(9)),g=a(6),f=a.n(g);f.a.init({appId:"z5kYOKNdDW7zKVc8N92lfOw7-gzGzoHsz",appKey:"r5P1kesCadRcUsjGBOXL8pXe"});f.a;function b(){var e=f.a.User.current();return e?v(e):null}function v(e){return Object(p.a)({id:e.id},e.attributes)}var E=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={selected:"signUp",selectedTab:"signInOrSignUp",formData:{email:"",username:"",password:""}},a}return Object(h.a)(t,e),Object(r.a)(t,[{key:"switch",value:function(e){this.setState({selected:e.target.value})}},{key:"signUp",value:function(e){var t=this;e.preventDefault();var a=this.state.formData;!function(e,t,a,n,s){var i=new f.a.User;i.setUsername(t),i.setPassword(a),i.setEmail(e),i.signUp().then(function(e){var t=v(e);n.call(null,t)},function(e){s.call(null,e)})}(a.email,a.username,a.password,function(e){t.props.onSignUp.call(null,e)},function(e){switch(e.code){case 202:alert("\u7528\u6237\u540d\u5df2\u88ab\u5360\u7528");break;default:alert(e)}})}},{key:"signIn",value:function(e){var t=this;e.preventDefault();var a=this.state.formData;!function(e,t,a,n){f.a.User.logIn(e,t).then(function(e){var t=v(e);a.call(null,t)},function(e){n.call(null,e)})}(a.username,a.password,function(e){t.props.onSignIn.call(null,e)},function(e){switch(e.code){case 210:alert("\u7528\u6237\u540d\u4e0e\u5bc6\u7801\u4e0d\u5339\u914d");break;default:alert(e)}})}},{key:"changeFormData",value:function(e,t){var a=JSON.parse(JSON.stringify(this.state));a.formData[e]=t.target.value,this.setState(a)}},{key:"render",value:function(){var e=s.a.createElement("form",{className:"signUp",onSubmit:this.signUp.bind(this)}," ",s.a.createElement("div",{className:"row"},s.a.createElement("label",null,"\u90ae\u7bb1"),s.a.createElement("input",{type:"text",value:this.state.formData.email,onChange:this.changeFormData.bind(this,"email")})),s.a.createElement("div",{className:"row"},s.a.createElement("label",null,"\u7528\u6237\u540d"),s.a.createElement("input",{type:"text",value:this.state.formData.username,onChange:this.changeFormData.bind(this,"username")})),s.a.createElement("div",{className:"row"},s.a.createElement("label",null,"\u5bc6\u7801"),s.a.createElement("input",{type:"password",value:this.state.formData.password,onChange:this.changeFormData.bind(this,"password")})),s.a.createElement("div",{className:"row actions"},s.a.createElement("button",{type:"submit"},"\u6ce8\u518c"))),t=s.a.createElement("form",{className:"signIn",onSubmit:this.signIn.bind(this)}," ",s.a.createElement("div",{className:"row"},s.a.createElement("label",null,"\u7528\u6237\u540d"),s.a.createElement("input",{type:"text",value:this.state.formData.username,onChange:this.changeFormData.bind(this,"username")})),s.a.createElement("div",{className:"row"},s.a.createElement("label",null,"\u5bc6\u7801"),s.a.createElement("input",{type:"password",value:this.state.formData.password,onChange:this.changeFormData.bind(this,"password")})),s.a.createElement("div",{className:"row actions"},s.a.createElement("button",{type:"submit"},"\u767b\u5f55"),s.a.createElement("a",{href:"#",onClick:this.showForgotPassword.bind(this)},"\u5fd8\u8bb0\u5bc6\u7801\u4e86\uff1f"))),a=s.a.createElement("div",{className:"signInOrSignUp"},s.a.createElement("nav",null,s.a.createElement("label",null,s.a.createElement("input",{type:"radio",value:"signUp",checked:"signUp"===this.state.selected,onChange:this.switch.bind(this)})," \u6ce8\u518c"),s.a.createElement("label",null,s.a.createElement("input",{type:"radio",value:"signIn",checked:"signIn"===this.state.selected,onChange:this.switch.bind(this)})," \u767b\u5f55")),s.a.createElement("div",{className:"panes"},"signUp"===this.state.selected?e:null,"signIn"===this.state.selected?t:null)),n=s.a.createElement("div",{className:"forgotPassword"},s.a.createElement("h3",null,"\u91cd\u7f6e\u5bc6\u7801"),s.a.createElement("form",{className:"forgotPassword",onSubmit:this.resetPassword.bind(this)}," ",s.a.createElement("div",{className:"row"},s.a.createElement("label",null,"\u90ae\u7bb1"),s.a.createElement("input",{type:"text",value:this.state.formData.email,onChange:this.changeFormData.bind(this,"email")})),s.a.createElement("div",{className:"row actions"},s.a.createElement("button",{type:"submit"},"\u53d1\u9001\u91cd\u7f6e\u90ae\u4ef6"),s.a.createElement("a",{href:"#",onClick:this.returnToSignIn.bind(this)},"\u8fd4\u56de\u767b\u5f55"))));return s.a.createElement("div",{className:"UserDialog-Wrapper"},s.a.createElement("div",{className:"UserDialog"},"signInOrSignUp"===this.state.selectedTab?a:n))}},{key:"showForgotPassword",value:function(){var e=JSON.parse(JSON.stringify(this.state));e.selectedTab="forgotPassword",this.setState(e)}},{key:"returnToSignIn",value:function(){var e=JSON.parse(JSON.stringify(this.state));e.selectedTab="signInOrSignUp",this.setState(e)}},{key:"resetPassword",value:function(e){var t,a,n;e.preventDefault(),t=this.state.formData.email,f.a.User.requestPasswordReset(t).then(function(e){a.call()},function(e){n.call(null,e)})}}]),t}(n.Component),w=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={user:b()||{},newTodo:"test",todoList:[]},a}return Object(h.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.state.todoList.filter(function(e){return!e.deleted}).map(function(t,a){return s.a.createElement("li",{key:"index"},s.a.createElement(d,{todo:t,onToggle:e.toggle.bind(e),onDelete:e.delete.bind(e)}))});return s.a.createElement("div",{className:"App"},s.a.createElement("h1",null,this.state.user.username||"\u6211","\u7684\u5f85\u529e",this.state.user.id?s.a.createElement("button",{onClick:this.signOut.bind(this)},"\u767b\u51fa"):null),s.a.createElement("div",{className:"inputWrapper"},s.a.createElement(m,{content:this.state.newTodo,onChange:this.changeTitle.bind(this),onSubmit:this.addTodo.bind(this)})),s.a.createElement("ol",{className:"todoList"},t),this.state.user.id?null:s.a.createElement(E,{onSignUp:this.onSignUpOrSignIn.bind(this),onSignIn:this.onSignUpOrSignIn.bind(this)}))}},{key:"signOut",value:function(){f.a.User.logOut();var e=JSON.parse(JSON.stringify(this.state));e.user={},this.setState(e)}},{key:"onSignUpOrSignIn",value:function(e){var t=JSON.parse(JSON.stringify(this.state));t.user=e,this.setState(t)}},{key:"componentDidUpdate",value:function(){}},{key:"toggle",value:function(e,t){t.status="completed"===t.status?"":"completed",this.setState(this.state)}},{key:"changeTitle",value:function(e){this.setState({newTodo:e.target.value,todoList:this.state.todoList})}},{key:"addTodo",value:function(e){this.state.todoList.push({id:O(),title:e.target.value,status:null,deleted:!1}),this.setState({newTodo:"",todoList:this.state.todoList})}},{key:"delete",value:function(e,t){t.deleted=!0,this.setState(this.state)}}]),t}(n.Component),y=0;function O(){return y+=1}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(w,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.8090ace5.chunk.js.map