(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{18:function(e,t,a){e.exports=a(47)},23:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),r=a(14),l=a.n(r),i=(a(23),a(24),a(17)),o=(a(25),a(1));var c=({error:e,onClose:t=(e=>e)})=>n.a.createElement("div",{className:"popup-alert",style:{display:e?"inline":"none",fontSize:"1rem"}},n.a.createElement("div",null,n.a.createElement(o.b,{style:{color:"red",fontSize:"x-large"}}),n.a.createElement("p",null,"Task was not entered in text field")),n.a.createElement("button",{className:"alert-btn",onClick:t},"OK"));var m=n.a.forwardRef(({alert:e,error:t,onChange:a=(e=>e),onSubmit:s=(e=>e)},r)=>n.a.createElement("div",{className:"list-form"},n.a.createElement("div",{className:"alert-message",style:{display:e?"inline":"none"}},n.a.createElement(o.b,null)," Enter a task"),n.a.createElement("form",{className:"add-form",onSubmit:s},n.a.createElement("input",{ref:r,type:"text",placeholder:"Add task",onChange:a,style:{display:t?"border: 1px solid red":"border: 1px solid slategray"}}),n.a.createElement("button",{className:"add",type:"submit"},n.a.createElement(o.e,null)))));var d=n.a.forwardRef(({alert:e,error:t,onChange:a=(e=>e),onClose:s=(e=>e),onSubmit:r=(e=>e),renderTasks:l=(e=>e)},i)=>n.a.createElement("div",{className:"List"},n.a.createElement("div",{className:"list-header"},"To Do List"),n.a.createElement(m,{ref:i,alert:e,error:t,onChange:a,onSubmit:r}),n.a.createElement("div",{className:"list-items"},l()),n.a.createElement(c,{error:t,onClose:s})));a(26);class h extends s.Component{constructor(...e){super(...e),this.state={editing:!1,checked:!1},this.toggleCheck=()=>{this.setState({checked:!this.state.checked})},this.edit=()=>{this.setState({editing:!0})},this.remove=()=>{this.props.onRemove(this.props.item)},this.save=e=>{e.preventDefault(),this.props.onChange(this._newText.value,this.props.item),this.setState({editing:!1})},this.cancel=e=>{e.preventDefault(),this.setState({editing:!1})},this.renderForm=()=>n.a.createElement("div",{id:this.props.item,className:"ListItem"},n.a.createElement("form",{className:"edit-form"},n.a.createElement("textarea",{ref:e=>this._newText=e,defaultValue:this.props.children}),n.a.createElement("span",null,n.a.createElement("button",{className:"save",onClick:this.save},n.a.createElement(o.g,null)),n.a.createElement("button",{className:"cancel",onClick:this.cancel},n.a.createElement(o.h,null))))),this.renderDisplay=()=>{let e;return e=this.state.checked?n.a.createElement(o.a,null):n.a.createElement(o.f,null),n.a.createElement("div",{id:this.props.item,className:"ListItem"},n.a.createElement("button",{className:"status status-btn",onClick:this.toggleCheck},e," ",n.a.createElement("span",{style:{textDecoration:this.state.checked?"line-through":"none"}},n.a.createElement("span",{className:"status-font"},this.props.children))),n.a.createElement("span",{className:"button-div"},n.a.createElement("button",{className:"edit",onClick:this.edit},n.a.createElement(o.d,null)),n.a.createElement("button",{className:"remove",onClick:this.remove},n.a.createElement(o.i,null))))}}render(){return this.state.editing?this.renderForm():this.renderDisplay()}}var p=h,u=a(15),E=a.n(u),v=a(16),k=a.n(v);class f extends s.Component{constructor(...e){super(...e),this.state={tasks:[],userInput:"",alert:!1,error:!1},this.handleUserInput=e=>{this.setState({alert:!1,userInput:e.target.value})},this.add=e=>{e.preventDefault(),this.state.userInput?(this.setState(e=>({tasks:[...e.tasks,{id:k.a.v4(),task:this.state.userInput}],userInput:"",alert:!1,error:!1})),this.inputEl.value=""):this.setState({alert:!0,error:!0})},this.update=(e,t)=>{this.setState(a=>({tasks:a.tasks.map(a=>a.id!==t?a:Object(i.a)({},a,{task:e}))}))},this.remove=e=>{this.setState(t=>({tasks:t.tasks.filter(t=>t.id!==e)}))},this.closeError=()=>{this.setState({error:!1})},this.renderTasks=()=>this.state.tasks.map(e=>n.a.createElement(p,{key:e.id,item:e.id,onChange:this.update,onRemove:this.remove},e.task))}componentDidMount(){E.a.get("https://jsonplaceholder.typicode.com/todos?_limit=5").then(e=>{let t=e.data.map(e=>({id:e.id,task:e.title}));this.setState({tasks:t})}).catch(e=>console.error(e))}render(){return n.a.createElement(d,{ref:e=>this.inputEl=e,alert:this.state.alert,error:this.state.error,onChange:this.handleUserInput,onSubmit:this.add,onClose:this.closeError,renderTasks:this.renderTasks})}}var N=f;a(46);const g=()=>n.a.createElement("div",{className:"passport"},n.a.createElement("div",{className:"passport-book"},n.a.createElement("div",null,"PASSPORT"),n.a.createElement("div",{className:"passport-globe"},n.a.createElement(o.c,null))),n.a.createElement("div",{className:"passport-ticket"},n.a.createElement("div",{className:"passport-stripe"}))),b=()=>n.a.createElement("div",{className:"phone"},n.a.createElement("div",{style:{width:"94%",display:"flex",justifyContent:"space-between"}},n.a.createElement("div",{className:"phone-camera1"}),n.a.createElement("div",{className:"phone-camera2"})),n.a.createElement("div",{className:"phone-screen"}));var C=()=>n.a.createElement("div",{className:"background-items"},n.a.createElement(b,null),n.a.createElement(g,null));var y=()=>n.a.createElement("div",{className:"Desktop"},n.a.createElement(N,null),n.a.createElement(C,null));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()})}},[[18,1,2]]]);
//# sourceMappingURL=main.fc8dc312.chunk.js.map