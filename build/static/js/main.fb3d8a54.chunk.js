(this["webpackJsonptypography-editor"]=this["webpackJsonptypography-editor"]||[]).push([[0],{106:function(t,e){},107:function(t,e){},108:function(t,e){},123:function(t,e){},262:function(t,e,a){},263:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),s=a(7),o=a.n(s),i=(a(65),a(53)),l=a(1),c=a(2),p=a(4),u=a(3),h=a(10),m=a(5),d=a(54),b=a.n(d),f=(a(8),function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(p.a)(this,Object(u.a)(e).call(this,t))).eventHandler=t.eventHandler,a}return Object(m.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return r.a.createElement("button",{onClick:this.eventHandler,className:this.props.classes,name:this.props.text},this.props.text||"Tag")}}]),e}(r.a.Component)),v=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(p.a)(this,Object(u.a)(e).call(this,t))).state=t.param,a.eventHandler=t.eventHandler,a}return Object(m.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this,e=Object.keys(this.state.format\u0421ommand).map((function(e,a){return r.a.createElement(f,{key:a,param:t.state,eventHandler:t.eventHandler,text:e,classes:"tag"})}));return r.a.createElement("div",{className:this.props.classes},e)}}]),e}(r.a.Component),j=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(p.a)(this,Object(u.a)(e).call(this,t))).clickEvent=t.clickEvent,a}return Object(m.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return this.props.on_off?r.a.createElement("button",{className:this.props.on_off_status?"on":"off",onClick:this.clickEvent},r.a.createElement("b",{className:"uppercase"},this.props.on_off_status?"on":"off"),this.props.text||"Button"):r.a.createElement("button",{onClick:this.clickEvent},this.props.text||"Button")}}]),e}(r.a.Component),E=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(p.a)(this,Object(u.a)(e).call(this,t))).state=t.param,a.setGlobalParam=t.setGlobalParam,a.reset=t.reset,a.switchEditText=t.switchEditText,a.redo=t.redo,a.undo=t.undo,a.download=t.download,a}return Object(m.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:this.props.classes},r.a.createElement(j,{param:this.props.param,clickEvent:this.undo,text:this.props.param.buttons.undo}),r.a.createElement(j,{param:this.props.param,clickEvent:this.redo,text:this.props.param.buttons.redo}),r.a.createElement(j,{param:this.props.param,on_off:"true",on_off_status:this.props.param.states.editText,clickEvent:this.switchEditText,text:this.props.param.buttons.edit}),r.a.createElement(j,{param:this.props.param,clickEvent:this.download,text:this.props.param.buttons.download}))}}]),e}(r.a.Component),O=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(p.a)(this,Object(u.a)(e).call(this,t))).state={value:t.param},a.eventHandler=t.eventHandler,a}return Object(m.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this;return r.a.createElement("label",null,this.props.text||"Input",r.a.createElement("input",{type:this.props.type||"text",name:this.props.name||"btn",value:this.props.param,step:this.props.step||"",onChange:function(e){return t.eventHandler(e.target.value,e.target.name)}}))}}]),e}(r.a.Component),k=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(p.a)(this,Object(u.a)(e).call(this,t))).state=t.param,a.eventHandler=t.eventHandler,a.reset=t.reset,a}return Object(m.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:this.props.classes},r.a.createElement(j,{param:this.props.param,clickEvent:this.reset,text:this.props.param.buttons.reset}),r.a.createElement(O,{param:this.props.param.styles.fontSize,eventHandler:this.eventHandler,type:"number",name:"fontSize",text:"\u0420\u0430\u0437\u043c\u0435\u0440 \u0448\u0440\u0438\u0444\u0442\u0430"}),r.a.createElement(O,{param:this.props.param.styles.lineHeight,eventHandler:this.eventHandler,type:"number",name:"lineHeight",step:"0.1",text:"\u0412\u044b\u0441\u043e\u0442\u0430 \u0441\u0442\u0440\u043e\u043a\u0438"}))}}]),e}(r.a.Component),g=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(p.a)(this,Object(u.a)(e).call(this,t))).setGlobalParam=t.setGlobalParam,a.reset=t.reset,a.switchEditText=t.switchEditText,a.setTag=t.setTag,a.undo=t.undo,a.redo=t.redo,a.download=t.download,a}return Object(m.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"editor-panel"},r.a.createElement("h3",{className:"editor-panel__title"},"\u041f\u0430\u043d\u0435\u043b\u044c \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f"),r.a.createElement(k,{param:this.props.param,classes:"editor-panel__inner",eventHandler:this.setGlobalParam,reset:this.reset}),r.a.createElement(v,{param:this.props.param,classes:"editor-panel__inner",eventHandler:this.setTag}),r.a.createElement(E,{param:this.props.param,classes:"editor-panel__inner editor-panel__buttons",redo:this.redo,undo:this.undo,download:this.download,switchEditText:this.switchEditText}))}}]),e}(r.a.Component),y=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(p.a)(this,Object(u.a)(e).call(this,t))).state=t.param,a.onBlur=a.props.onBlur,a}return Object(m.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this;return r.a.createElement("div",{tabIndex:"0",contentEditable:this.props.param.states.editText?"true":"false",suppressContentEditableWarning:!0,className:this.props.param.states.editText?"content edit":"content",onBlur:this.onBlur,dangerouslySetInnerHTML:{__html:t.props.param.html},style:{fontSize:"".concat(this.props.param.styles.fontSize,"px"),lineHeight:"".concat(this.props.param.styles.lineHeight,"em")}})}}]),e}(r.a.Component),x=(a(262),function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(p.a)(this,Object(u.a)(e).call(this,t))).clearFormat=function(){var t=null;if(document.selection)t=document.selection.createRange().parentElement();else{var e=window.getSelection();e.rangeCount>0&&(t=e.getRangeAt(0).startContainer.parentNode)}"DIV"!==t.nodeName&&"LI"!==t.nodeName&&(t.outerHTML=t.innerHTML)},a.undo=function(){document.execCommand("undo",!1,null)},a.redo=function(){document.execCommand("redo",!1,null)},a.download=function(){if(a.state.states.editText)alert("\u041f\u0435\u0440\u0435\u0434 \u0441\u043a\u0430\u0447\u0438\u0432\u0430\u043d\u0438\u0435\u043c \u043d\u0443\u0436\u043d\u043e \u0432\u044b\u0439\u0442\u0438 \u0438\u0437 \u0440\u0435\u0436\u0438\u043c\u0430 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f.\n\u0418\u043d\u0430\u0447\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043d\u0435 \u0431\u0443\u0434\u0443\u0442 \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u044b \u043a \u0442\u0435\u043a\u0441\u0442\u0443");else{var t=document.querySelector(".content").outerHTML,e=document.createElement("a"),n=new Blob([t],{type:"txt"});e.href=URL.createObjectURL(n),e.download="text.txt",e.click()}},a.sanitize=function(){var t=document.querySelector(".content");t.innerHTML!==a.state.html&&a.setState({html:b()(t.innerHTML,a.state.sanitizeParam)})},a.state=t.data,console.log("*** \u041d\u0430\u0447\u0430\u043b\u044c\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 ***\n",a.state),a.setGlobalParam=a.setGlobalParam.bind(Object(h.a)(a)),a.reset=a.reset.bind(Object(h.a)(a)),a.switchEditText=a.switchEditText.bind(Object(h.a)(a)),a.setTag=a.setTag.bind(Object(h.a)(a)),a}return Object(m.a)(e,t),Object(c.a)(e,[{key:"setGlobalParam",value:function(t,e){this.setState({styles:Object(i.a)({},e,[t])})}},{key:"setTag",value:function(t){t.preventDefault();var e=t.target.name,a=this.state.format\u0421ommand[e];if(a){for(var n=0;n<a.length;n++)document.execCommand(a[n][0],a[n][1],a[n][2].toUpperCase());"clearFormat"===e&&this.clearFormat()}else console.log("\u041f\u0440\u0430\u0432\u0438\u043b\u0430 \u0444\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0434\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u0442\u0435\u0433\u0430 \u043d\u0435 \u043f\u0440\u043e\u043f\u0438\u0441\u0430\u043d\u044b.\n\u0421\u0434\u0435\u043b\u0430\u0439\u0442\u0435 \u044d\u0442\u043e \u0432 \u0444\u0430\u0439\u043b\u0435 startingValue.js")}},{key:"reset",value:function(){this.setState({styles:{fontSize:this.props.data.styles.fontSize,lineHeight:this.props.data.styles.lineHeight}})}},{key:"switchEditText",value:function(){this.setState({states:{editText:!this.state.states.editText}}),this.state.states.editText&&this.sanitize()}},{key:"render",value:function(){return r.a.createElement("main",{className:"App"},r.a.createElement(g,{param:this.state,setGlobalParam:this.setGlobalParam,reset:this.reset,switchEditText:this.switchEditText,setTag:this.setTag,undo:this.undo,redo:this.redo,download:this.download}),r.a.createElement(y,{param:this.state}))}}]),e}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var w={styles:{fontSize:16,lineHeight:2.2},states:{editText:!0},sanitizeParam:{allowedTags:!1,allowedAttributes:{a:["href","name","target"],"*":["style","color","bgcolor","background-color"]},parser:{lowerCaseTags:!0},transformTags:{div:"p",br:"",string:"b",em:"i",strike:"s"},exclusiveFilter:function(t){return!t.text.trim()}},"format\u0421ommand":{clearFormat:[["removeFormat",!1,""],["unlink",!1,""]],h1:[["formatBlock",!1,"h1"]],h2:[["formatBlock",!1,"h2"]],h3:[["formatBlock",!1,"h3"]],h4:[["formatBlock",!1,"h4"]],h5:[["formatBlock",!1,"h5"]],h6:[["formatBlock",!1,"h6"]],p:[["formatBlock",!1,"p"]],a:[["createLink",!1,"#"]],ul:[["insertUnorderedList",!1,""]],ol:[["insertOrderedList",!1,""]],b:[["bold",!1,""]],i:[["italic",!1,""]],strike:[["strikeThrough",!1,""]],bgcolor:[["styleWithCSS",!1,"true"],["hiliteColor",!1,"ffff00"],["styleWithCSS",!1,"false"]],color:[["styleWithCSS",!1,"true"],["foreColor",!1,"#ff0000"],["styleWithCSS",!1,"false"]],sup:[["superscript",!1,""]],sub:[["subscript",!1,""]],underline:[["underline",!1,""]],blockquote:[["formatBlock",!1,"blockquote"]],hr:[["insertHorizontalRule",!1,""]],left:[["justifyLeft",!1,""]],center:[["justifyCenter",!1,""]],right:[["justifyRight",!1,""]],full:[["justifyFull",!1,""]]},buttons:{edit:"\u0420\u0435\u0436\u0438\u043c \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0442\u0435\u043a\u0441\u0442\u0430",reset:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438",undo:"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c",redo:"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c",download:"\u0421\u043a\u0430\u0447\u0430\u0442\u044c \u0442\u0435\u043a\u0441\u0442 \u0441 \u0442\u0435\u0433\u0430\u043c\u0438"},html:'\n  <p>v3</p>\n  <p><b>\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u0443\u0435\u043c\u044b\u0439 \u0442\u0435\u043a\u0441\u0442</b></p>\n  <p>\u0422\u0435\u043a\u0441\u0442 \u0438 \u0435\u0433\u043e \u0441\u0442\u0438\u043b\u0438 \u043c\u043e\u0436\u043d\u043e \u0438\u0437\u043c\u0435\u043d\u044f\u0442\u044c, \u043d\u0430\u0436\u0430\u0432 \u043d\u0430 \u043a\u043d\u043e\u043f\u043a\u0443 <b>\u0420\u0435\u0436\u0438\u043c \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0442\u0435\u043a\u0441\u0442\u0430</b>.</p>\n  <p>\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u0444\u043e\u0440\u043c\u0430\u0442 \u0442\u0435\u043a\u0441\u0442\u0430 \u043c\u043e\u0436\u043d\u043e, \u043d\u0430\u0436\u0430\u0432 \u043d\u0430 <b>clearFormat</b>.</p>\n  <p>\u0410\u043a\u0441\u0438\u043e\u043c\u0430 <strike>\u0441\u0438\u043b\u043b\u043e\u0433\u0438\u0437\u043c\u0430</strike>, \u043f\u043e \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044e, \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0441\u043e\u0431\u043e\u0439 \u043d\u0435\u043e\u0434\u043d\u043e\u0437\u043d\u0430\u0447\u043d\u044b\u0439 \u043f\u0440\u0435\u0434\u043c\u0435\u0442 \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438. \n  \u041d\u0430\u0440\u044f\u0434\u0443 \u0441 \u044d\u0442\u0438\u043c \u043e\u0449\u0443\u0449\u0435\u043d\u0438\u0435 \u043c\u0438\u0440\u0430 \u0440\u0435\u0448\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u0443\u0435\u0442 \u043d\u0435\u043f\u0440\u0435\u0434\u0432\u0438\u0434\u0435\u043d\u043d\u044b\u0439 \u0433\u0440\u0430\u0432\u0438\u0442\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u043f\u0430\u0440\u0430\u0434\u043e\u043a\u0441. \n  \u0421\u043e\u0437\u0435\u0440\u0446\u0430\u043d\u0438\u0435 <i>\u043d\u0435\u043f\u0440\u0435\u0434\u0441\u043a\u0430\u0437\u0443\u0435\u043c\u043e</i>. \u0421\u043c\u044b\u0441\u043b \u0436\u0438\u0437\u043d\u0438, \u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e, \u0442\u0432\u043e\u0440\u0438\u0442 \u0434\u0430\u043d\u043d\u044b\u0439 \u0437\u0430\u043a\u043e\u043d \u0432\u043d\u0435\u0448\u043d\u0435\u0433\u043e \u043c\u0438\u0440\u0430. \n  \u0410\u043f\u043e\u0441\u0442\u0435\u0440\u0438\u043e\u0440\u0438, \u0433\u0440\u0430\u0432\u0438\u0442\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u043f\u0430\u0440\u0430\u0434\u043e\u043a\u0441 <sup>\u0430\u043c\u0431\u0438\u0432\u0430\u043b\u0435\u043d\u0442\u043d\u043e</sup> \u043f\u043e\u043d\u0438\u043c\u0430\u0435\u0442</p>\n  <h2>\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a</h2>\n  <p>\u0410\u043a\u0441\u0438\u043e\u043c\u0430 \u0441\u0438\u043b\u043b\u043e\u0433\u0438\u0437\u043c\u0430, \u043f\u043e \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044e, \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0441\u043e\u0431\u043e\u0439 \u043d\u0435\u043e\u0434\u043d\u043e\u0437\u043d\u0430\u0447\u043d\u044b\u0439 \u043f\u0440\u0435\u0434\u043c\u0435\u0442 \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438. \n  \u041d\u0430\u0440\u044f\u0434\u0443 \u0441 \u044d\u0442\u0438\u043c \u043e\u0449\u0443\u0449\u0435\u043d\u0438\u0435 \u043c\u0438\u0440\u0430 \u0440\u0435\u0448\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u0443\u0435\u0442 \u043d\u0435\u043f\u0440\u0435\u0434\u0432\u0438\u0434\u0435\u043d\u043d\u044b\u0439 \u0433\u0440\u0430\u0432\u0438\u0442\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u043f\u0430\u0440\u0430\u0434\u043e\u043a\u0441. \n  \u0421\u043e\u0437\u0435\u0440\u0446\u0430\u043d\u0438\u0435 \u043d\u0435\u043f\u0440\u0435\u0434\u0441\u043a\u0430\u0437\u0443\u0435\u043c\u043e. <a href="#">\u0421\u043c\u044b\u0441\u043b \u0436\u0438\u0437\u043d\u0438</a>, <b>\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e</b>, \u0442\u0432\u043e\u0440\u0438\u0442 \u0434\u0430\u043d\u043d\u044b\u0439 \u0437\u0430\u043a\u043e\u043d \u0432\u043d\u0435\u0448\u043d\u0435\u0433\u043e \u043c\u0438\u0440\u0430. \n  \u0410\u043f\u043e\u0441\u0442\u0435\u0440\u0438\u043e\u0440\u0438, \u0433\u0440\u0430\u0432\u0438\u0442\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u043f\u0430\u0440\u0430\u0434\u043e\u043a\u0441 \u0430\u043c\u0431\u0438\u0432\u0430\u043b\u0435\u043d\u0442\u043d\u043e \u043f\u043e\u043d\u0438\u043c\u0430\u0435\u0442</p>\n  <ul>\n  <li>\u0410\u043a\u0441\u0438\u043e\u043c\u0430</li>\n  <li>\u0441\u0438\u043b\u043b\u043e\u0433\u0438\u0437\u043c\u0430</li>\n  <li>\u043f\u043e \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044e</li>\n  </ul>\n  <blockquote>\u0410\u043a\u0441\u0438\u043e\u043c\u0430 \u0441\u0438\u043b\u043b\u043e\u0433\u0438\u0437\u043c\u0430, \u043f\u043e \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044e, \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0441\u043e\u0431\u043e\u0439 \u043d\u0435\u043e\u0434\u043d\u043e\u0437\u043d\u0430\u0447\u043d\u044b\u0439 \u043f\u0440\u0435\u0434\u043c\u0435\u0442 \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438. \n  \u041d\u0430\u0440\u044f\u0434\u0443 \u0441 \u044d\u0442\u0438\u043c \u043e\u0449\u0443\u0449\u0435\u043d\u0438\u0435 \u043c\u0438\u0440\u0430 \u0440\u0435\u0448\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u0443\u0435\u0442 \u043d\u0435\u043f\u0440\u0435\u0434\u0432\u0438\u0434\u0435\u043d\u043d\u044b\u0439 \u0433\u0440\u0430\u0432\u0438\u0442\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u043f\u0430\u0440\u0430\u0434\u043e\u043a\u0441. \n  \u0421\u043e\u0437\u0435\u0440\u0446\u0430\u043d\u0438\u0435 \u043d\u0435\u043f\u0440\u0435\u0434\u0441\u043a\u0430\u0437\u0443\u0435\u043c\u043e. \u0421\u043c\u044b\u0441\u043b \u0436\u0438\u0437\u043d\u0438, \u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e, \u0442\u0432\u043e\u0440\u0438\u0442 \u0434\u0430\u043d\u043d\u044b\u0439 \u0437\u0430\u043a\u043e\u043d \u0432\u043d\u0435\u0448\u043d\u0435\u0433\u043e \u043c\u0438\u0440\u0430. \n  \u0410\u043f\u043e\u0441\u0442\u0435\u0440\u0438\u043e\u0440\u0438, \u0433\u0440\u0430\u0432\u0438\u0442\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u043f\u0430\u0440\u0430\u0434\u043e\u043a\u0441 \u0430\u043c\u0431\u0438\u0432\u0430\u043b\u0435\u043d\u0442\u043d\u043e \u043f\u043e\u043d\u0438\u043c\u0430\u0435\u0442</blockquote>\n  <p>\u0410\u043a\u0441\u0438\u043e\u043c\u0430 \u0441\u0438\u043b\u043b\u043e\u0433\u0438\u0437\u043c\u0430, \u043f\u043e \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044e, \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0441\u043e\u0431\u043e\u0439 \u043d\u0435\u043e\u0434\u043d\u043e\u0437\u043d\u0430\u0447\u043d\u044b\u0439 \u043f\u0440\u0435\u0434\u043c\u0435\u0442 \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438. \n  \u041d\u0430\u0440\u044f\u0434\u0443 \u0441 \u044d\u0442\u0438\u043c \u043e\u0449\u0443\u0449\u0435\u043d\u0438\u0435 \u043c\u0438\u0440\u0430 \u0440\u0435\u0448\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u0443\u0435\u0442 \u043d\u0435\u043f\u0440\u0435\u0434\u0432\u0438\u0434\u0435\u043d\u043d\u044b\u0439 \u0433\u0440\u0430\u0432\u0438\u0442\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u043f\u0430\u0440\u0430\u0434\u043e\u043a\u0441. \n  \u0421\u043e\u0437\u0435\u0440\u0446\u0430\u043d\u0438\u0435 \u043d\u0435\u043f\u0440\u0435\u0434\u0441\u043a\u0430\u0437\u0443\u0435\u043c\u043e. <a href="#">\u0421\u043c\u044b\u0441\u043b \u0436\u0438\u0437\u043d\u0438</a>, <b>\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e</b>, \u0442\u0432\u043e\u0440\u0438\u0442 \u0434\u0430\u043d\u043d\u044b\u0439 \u0437\u0430\u043a\u043e\u043d \u0432\u043d\u0435\u0448\u043d\u0435\u0433\u043e \u043c\u0438\u0440\u0430. \n  \u0410\u043f\u043e\u0441\u0442\u0435\u0440\u0438\u043e\u0440\u0438, \u0433\u0440\u0430\u0432\u0438\u0442\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u043f\u0430\u0440\u0430\u0434\u043e\u043a\u0441 \u0430\u043c\u0431\u0438\u0432\u0430\u043b\u0435\u043d\u0442\u043d\u043e \u043f\u043e\u043d\u0438\u043c\u0430\u0435\u0442</p>\n'};o.a.render(r.a.createElement(x,{data:w}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))},61:function(t,e,a){t.exports=a(263)},65:function(t,e,a){},88:function(t,e){}},[[61,1,2]]]);
//# sourceMappingURL=main.fb3d8a54.chunk.js.map