(this["webpackJsonptypography-editor"]=this["webpackJsonptypography-editor"]||[]).push([[0],{142:function(t,e,a){t.exports=a(509)},146:function(t,e,a){},169:function(t,e){},187:function(t,e){},188:function(t,e){},189:function(t,e){},204:function(t,e){},507:function(t,e,a){},508:function(t,e,a){},509:function(t,e,a){"use strict";a.r(e);var n,s=a(0),r=a.n(s),i=a(19),o=a.n(i),c=(a(146),a(2)),l=a(4),p=a(5),m=a(7),h=a(6),u=a(9),d=a(8),b=a(135),f=a.n(b),j=(a(17),a(48)),v=a(77),O=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(m.a)(this,Object(h.a)(e).call(this,t))).clickEvent=t.clickEvent,a}return Object(d.a)(e,t),Object(p.a)(e,[{key:"render",value:function(){return r.a.createElement("button",{onClick:this.clickEvent,className:this.props.classes,name:this.props.name,title:this.props.text},this.props.icon?r.a.createElement("span",{className:"sprite "+this.props.icon}):r.a.createElement("span",null,this.props.text||"Button"))}}]),e}(r.a.Component),y=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(m.a)(this,Object(h.a)(e).call(this,t))).clickEvent=t.clickEvent,a}return Object(d.a)(e,t),Object(p.a)(e,[{key:"render",value:function(){return r.a.createElement("button",{onClick:this.clickEvent,className:"button-pallet",name:this.props.name,title:this.props.text},r.a.createElement("span",{className:"sprite "+this.props.icon}),r.a.createElement("span",{className:"button-pallet__color",style:{backgroundColor:this.props.style}}))}}]),e}(r.a.Component),k=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(m.a)(this,Object(h.a)(e).call(this,t))).state=t.param,a.setTag=a.setTag.bind(Object(u.a)(a)),a.clearFormat=a.clearFormat.bind(Object(u.a)(a)),a}return Object(d.a)(e,t),Object(p.a)(e,[{key:"setTag",value:function(t){t.preventDefault();var e=t.target.name,a=this.state.tagParameters[e].command;if(a){for(var n=0;n<a.length;n++)if("link"===e){var s=prompt("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0443\u0442\u044c \u0434\u043b\u044f \u0441\u0441\u044b\u043b\u043a\u0438:");s||(s=a[n][2].toUpperCase()),document.execCommand(a[n][0],a[n][1],s)}else"bgcolor"===e?document.execCommand(a[n][0],a[n][1],this.props.param.styles.bgcolor):1===n&&"color"===e?document.execCommand(a[n][0],a[n][1],this.props.param.styles.color):document.execCommand(a[n][0],a[n][1],a[n][2].toUpperCase());"clearFormat"===e&&this.clearFormat()}else console.log("\u041f\u0440\u0430\u0432\u0438\u043b\u0430 \u0444\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0434\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u0442\u0435\u0433\u0430 \u043d\u0435 \u043f\u0440\u043e\u043f\u0438\u0441\u0430\u043d\u044b.\n\u0421\u0434\u0435\u043b\u0430\u0439\u0442\u0435 \u044d\u0442\u043e \u0432 \u0444\u0430\u0439\u043b\u0435 startingValue.js")}},{key:"clearFormat",value:function(){var t=null;if(document.selection)t=document.selection.createRange().parentElement();else{var e=window.getSelection();e.rangeCount>0&&(t=e.getRangeAt(0).startContainer.parentNode)}"DIV"!==t.nodeName&&"LI"!==t.nodeName&&(t.outerHTML=t.innerHTML)}},{key:"render",value:function(){var t=this,e=Object.keys(this.state.tagParameters).map((function(e,a){return r.a.createElement(O,{key:a,param:t.state,clickEvent:t.setTag,text:e,name:e,icon:t.state.tagParameters[e].display[0]})}));return r.a.createElement("div",{className:this.props.classes},e)}}]),e}(r.a.Component),E=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(m.a)(this,Object(h.a)(e).call(this,t))).state=t.param,a.setGlobalParam=t.setGlobalParam,a.reset=t.reset,a.download=a.download.bind(Object(u.a)(a)),a.undo=a.undo.bind(Object(u.a)(a)),a.redo=a.redo.bind(Object(u.a)(a)),a}return Object(d.a)(e,t),Object(p.a)(e,[{key:"download",value:function(){if(this.props.param.states.editText)alert("\u041f\u0435\u0440\u0435\u0434 \u0441\u043a\u0430\u0447\u0438\u0432\u0430\u043d\u0438\u0435\u043c \u043d\u0443\u0436\u043d\u043e \u0432\u044b\u0439\u0442\u0438 \u0438\u0437 \u0440\u0435\u0436\u0438\u043c\u0430 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f.\n\u0418\u043d\u0430\u0447\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043d\u0435 \u0431\u0443\u0434\u0443\u0442 \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u044b \u043a \u0442\u0435\u043a\u0441\u0442\u0443");else{var t=document.querySelector(".content").outerHTML,e=document.createElement("a"),a=new Blob([t],{type:"txt"});e.href=URL.createObjectURL(a),e.download="text.txt",e.click()}}},{key:"undo",value:function(){document.execCommand("undo")}},{key:"redo",value:function(){document.execCommand("redo")}},{key:"render",value:function(){return r.a.createElement("div",{className:this.props.classes},r.a.createElement(O,{param:this.props.param,clickEvent:this.undo,text:this.props.param.buttons.undo,icon:"icon-undo"}),r.a.createElement(O,{param:this.props.param,clickEvent:this.redo,text:this.props.param.buttons.redo,icon:"icon-redo"}),r.a.createElement(O,{param:this.props.param,clickEvent:this.download,text:this.props.param.buttons.download,icon:"icon-save"}))}}]),e}(r.a.Component),g=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(m.a)(this,Object(h.a)(e).call(this,t))).state={value:t.param},a.eventHandler=t.eventHandler,a}return Object(d.a)(e,t),Object(p.a)(e,[{key:"render",value:function(){return r.a.createElement("label",{title:this.props.text||"Input"},r.a.createElement("span",{className:this.props.icon}),r.a.createElement("input",{type:this.props.type||"text",name:this.props.name||"input",value:this.props.param,step:this.props.step||"",onChange:this.eventHandler}))}}]),e}(r.a.Component),_=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(m.a)(this,Object(h.a)(e).call(this,t))).clickEvent=t.clickEvent,a}return Object(d.a)(e,t),Object(p.a)(e,[{key:"render",value:function(){return r.a.createElement("button",{className:this.props.on_off_status?"on":"off",onClick:this.clickEvent,name:this.props.name,title:this.props.text},r.a.createElement("b",{className:"uppercase"},this.props.on_off_status?"on":"off"),this.props.icon?r.a.createElement("span",{className:"sprite "+this.props.icon}):r.a.createElement("span",null,this.props.text))}}]),e}(r.a.Component),w=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(m.a)(this,Object(h.a)(e).call(this,t))).state=t.param,a.eventHandler=t.eventHandler,a.reset=t.reset,a.switchEditText=t.switchEditText,a}return Object(d.a)(e,t),Object(p.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:this.props.classes},r.a.createElement(_,{param:this.props.param,on_off_status:this.props.param.states.editText,clickEvent:this.switchEditText,text:this.props.param.buttons.edit,icon:"icon-edit"}),r.a.createElement(g,{param:this.props.param.styles.fontSize,eventHandler:this.eventHandler,type:"number",name:"fontSize",text:"\u0428\u0440\u0438\u0444\u0442",icon:"sprite icon-format_size_white"}),r.a.createElement(g,{param:this.props.param.styles.lineHeight,eventHandler:this.eventHandler,type:"number",name:"lineHeight",step:"0.1",text:"\u0412\u044b\u0441\u043e\u0442\u0430 \u0441\u0442\u0440\u043e\u043a\u0438",icon:"sprite icon-line_height_white"}))}}]),e}(r.a.Component),x=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(m.a)(this,Object(h.a)(e).call(this,t))).state=t.param,a.setGlobalParam=t.setGlobalParam,a.reset=t.reset,a.switchEditText=t.switchEditText,a.handleChange=a.handleChange.bind(Object(u.a)(a)),a.switchShowColorPiper=a.switchShowColorPiper.bind(Object(u.a)(a)),a.changeColor=a.changeColor.bind(Object(u.a)(a)),a}return Object(d.a)(e,t),Object(p.a)(e,[{key:"handleChange",value:function(t){this.setState((function(e){return{styles:Object(j.a)({},e.styles,Object(c.a)({},e.states.paletteEdit,t.hex))}}))}},{key:"switchShowColorPiper",value:function(){this.setState((function(t){return{states:Object(j.a)({},t.states,{colorPicker:!t.states.colorPicker})}}))}},{key:"changeColor",value:function(t){var e=t.target.getAttribute("name");this.setState((function(t){return{states:Object(j.a)({},t.states,{paletteEdit:e})}})),this.switchShowColorPiper()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"editor-panel"},r.a.createElement("h3",{className:"editor-panel__title"},"\u041f\u0430\u043d\u0435\u043b\u044c \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f"),r.a.createElement("div",{className:"editor-panel__inner"},r.a.createElement(w,{param:this.props.param,classes:"editor-panel__inner",eventHandler:this.setGlobalParam,reset:this.reset,switchEditText:this.switchEditText}),r.a.createElement(E,{param:this.props.param,classes:"editor-panel__inner"}),r.a.createElement("div",{className:"editor-panel__inner"},r.a.createElement(y,{text:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0446\u0432\u0435\u0442 \u0444\u043e\u043d\u0430",icon:"icon-format_paint_white",name:"bgcolor",clickEvent:this.changeColor,style:this.state.styles.bgcolor}),r.a.createElement(y,{text:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0446\u0432\u0435\u0442 \u0442\u0435\u043a\u0441\u0442\u0430",icon:"icon-color_lens_white",name:"color",clickEvent:this.changeColor,style:this.state.styles.color}))),r.a.createElement(k,{param:this.state,classes:"editor-panel__inner",switchShowColorPiper:this.switchShowColorPiper})),r.a.createElement("div",{className:this.state.states.colorPicker?"color-picker-wp open":"color-picker-wp"},r.a.createElement(O,{param:this.state,clickEvent:this.switchShowColorPiper,text:"X \u0417\u0430\u043a\u0440\u044b\u0442\u044c",classes:"color-picker__close"}),r.a.createElement(v.SwatchesPicker,{onChange:this.handleChange,color:this.state.styles.bgcolor})))}}]),e}(r.a.Component),C=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(m.a)(this,Object(h.a)(e).call(this,t))).state=t.param,a.onBlur=a.props.onBlur,a}return Object(d.a)(e,t),Object(p.a)(e,[{key:"render",value:function(){var t=this;return r.a.createElement("div",{tabIndex:"0",contentEditable:this.props.param.states.editText?"true":"false",suppressContentEditableWarning:!0,className:this.props.param.states.editText?"content edit":"content",onBlur:this.onBlur,dangerouslySetInnerHTML:{__html:t.props.param.html},style:{fontSize:"".concat(this.props.param.styles.fontSize,"px"),lineHeight:"".concat(this.props.param.styles.lineHeight,"em")}})}}]),e}(r.a.Component),T=(a(507),a(508),function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(m.a)(this,Object(h.a)(e).call(this,t))).state=t.data,console.log("*** \u041d\u0430\u0447\u0430\u043b\u044c\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 ***\n",a.state),a.setGlobalParam=a.setGlobalParam.bind(Object(u.a)(a)),a.switchEditText=a.switchEditText.bind(Object(u.a)(a)),a.reset=a.reset.bind(Object(u.a)(a)),a.sanitize=a.sanitize.bind(Object(u.a)(a)),a}return Object(d.a)(e,t),Object(p.a)(e,[{key:"setGlobalParam",value:function(t){var e=t.target.name,a=t.target.value;this.setState({styles:Object(c.a)({},e,[a])})}},{key:"reset",value:function(){this.setState({styles:{fontSize:this.props.data.styles.fontSize,lineHeight:this.props.data.styles.lineHeight}})}},{key:"switchEditText",value:function(){this.setState({states:{editText:!this.state.states.editText}}),this.state.states.editText&&this.sanitize()}},{key:"sanitize",value:function(){var t=document.querySelector(".content").innerHTML;t!==this.state.html&&this.setState({html:f()(t,this.state.sanitizeParam)})}},{key:"render",value:function(){return r.a.createElement("main",{className:"App"},r.a.createElement(x,{param:this.state,setGlobalParam:this.setGlobalParam,switchEditText:this.switchEditText,reset:this.reset}),r.a.createElement(C,{param:this.state}))}}]),e}(r.a.Component)),S={styles:{fontSize:16,lineHeight:2.2,bgcolor:"#ffeb3b",color:"#f44336"},states:{editText:!0,colorPicker:!1,paletteEdit:"bgcolor"},sanitizeParam:{allowedTags:!1,allowedAttributes:{a:["href","name","target"],"*":["style","color","bgcolor","background-color"]},parser:{lowerCaseTags:!0},transformTags:{div:"p",br:"",string:"b",em:"i",strike:"s"},exclusiveFilter:function(t){return!t.text.trim()}},tagParameters:(n={},Object(c.a)(n,"clearFormat",{command:[["removeFormat",!1,""],["unlink",!1,""]],display:["icon-format_clear"]}),Object(c.a)(n,"h1",{command:[["formatBlock",!1,"h1"]],display:["icon-title_1"]}),Object(c.a)(n,"h2",{command:[["formatBlock",!1,"h2"]],display:["icon-title_2"]}),Object(c.a)(n,"h3",{command:[["formatBlock",!1,"h3"]],display:["icon-title_3"]}),Object(c.a)(n,"p",{command:[["formatBlock",!1,"p"]],display:["icon-text"]}),Object(c.a)(n,"link",{command:[["createLink",!1,"#"]],display:["icon-insert_link"]}),Object(c.a)(n,"ul",{command:[["insertUnorderedList",!1,""]],display:["icon-format_list_bulleted"]}),Object(c.a)(n,"ol",{command:[["insertOrderedList",!1,""]],display:["icon-format_list_numbered"]}),Object(c.a)(n,"b",{command:[["bold",!1,""]],display:["icon-format_bold"]}),Object(c.a)(n,"i",{command:[["italic",!1,""]],display:["icon-format"]}),Object(c.a)(n,"strike",{command:[["strikeThrough",!1,""]],display:["icon-strikethrough"]}),Object(c.a)(n,"bgcolor",{command:[["hiliteColor",!1,"#ffeb3b"]],display:["icon-format_paint"]}),Object(c.a)(n,"color",{command:[["styleWithCSS",!1,"true"],["foreColor",!1,"#ff0000"],["styleWithCSS",!1,"false"]],display:["icon-color_lens"]}),Object(c.a)(n,"sup",{command:[["superscript",!1,""]],display:["icon-superscript"]}),Object(c.a)(n,"sub",{command:[["subscript",!1,""]],display:["icon-subscript"]}),Object(c.a)(n,"underline",{command:[["underline",!1,""]],display:["icon-format_underlined"]}),Object(c.a)(n,"blockquote",{command:[["formatBlock",!1,"blockquote"]],display:["icon-format_quote"]}),Object(c.a)(n,"hr",{command:[["insertHorizontalRule",!1,""]],display:["icon-line_horizontal"]}),Object(c.a)(n,"left",{command:[["justifyLeft",!1,""]],display:["icon-format_align_left"]}),Object(c.a)(n,"center",{command:[["justifyCenter",!1,""]],display:["icon-format_align_center"]}),Object(c.a)(n,"right",{command:[["justifyRight",!1,""]],display:["icon-format_align_right"]}),Object(c.a)(n,"full",{command:[["justifyFull",!1,""]],display:["icon-format_align_justify"]}),n),buttons:{edit:"\u0420\u0435\u0436\u0438\u043c \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0442\u0435\u043a\u0441\u0442\u0430",reset:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438",undo:"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c",redo:"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c",download:"\u0421\u043a\u0430\u0447\u0430\u0442\u044c \u0442\u0435\u043a\u0441\u0442 \u0441 \u0442\u0435\u0433\u0430\u043c\u0438"},html:'\n  <p>v3</p>\n  <p><b>\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u0443\u0435\u043c\u044b\u0439 \u0442\u0435\u043a\u0441\u0442</b></p>\n  <p>\u0422\u0435\u043a\u0441\u0442 \u0438 \u0435\u0433\u043e \u0441\u0442\u0438\u043b\u0438 \u043c\u043e\u0436\u043d\u043e \u0438\u0437\u043c\u0435\u043d\u044f\u0442\u044c, \u043d\u0430\u0436\u0430\u0432 \u043d\u0430 \u043a\u043d\u043e\u043f\u043a\u0443 <b>\u0420\u0435\u0436\u0438\u043c \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0442\u0435\u043a\u0441\u0442\u0430</b>.</p>\n  <p>\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u0444\u043e\u0440\u043c\u0430\u0442 \u0442\u0435\u043a\u0441\u0442\u0430 \u043c\u043e\u0436\u043d\u043e, \u043d\u0430\u0436\u0430\u0432 \u043d\u0430 <b>clearFormat</b>.</p>\n  <p>\u0410\u043a\u0441\u0438\u043e\u043c\u0430 <strike>\u0441\u0438\u043b\u043b\u043e\u0433\u0438\u0437\u043c\u0430</strike>, \u043f\u043e \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044e, \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0441\u043e\u0431\u043e\u0439 \u043d\u0435\u043e\u0434\u043d\u043e\u0437\u043d\u0430\u0447\u043d\u044b\u0439 \u043f\u0440\u0435\u0434\u043c\u0435\u0442 \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438. \n  \u041d\u0430\u0440\u044f\u0434\u0443 \u0441 \u044d\u0442\u0438\u043c \u043e\u0449\u0443\u0449\u0435\u043d\u0438\u0435 \u043c\u0438\u0440\u0430 \u0440\u0435\u0448\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u0443\u0435\u0442 \u043d\u0435\u043f\u0440\u0435\u0434\u0432\u0438\u0434\u0435\u043d\u043d\u044b\u0439 \u0433\u0440\u0430\u0432\u0438\u0442\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u043f\u0430\u0440\u0430\u0434\u043e\u043a\u0441. \n  \u0421\u043e\u0437\u0435\u0440\u0446\u0430\u043d\u0438\u0435 <i>\u043d\u0435\u043f\u0440\u0435\u0434\u0441\u043a\u0430\u0437\u0443\u0435\u043c\u043e</i>. \u0421\u043c\u044b\u0441\u043b \u0436\u0438\u0437\u043d\u0438, \u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e, \u0442\u0432\u043e\u0440\u0438\u0442 \u0434\u0430\u043d\u043d\u044b\u0439 \u0437\u0430\u043a\u043e\u043d \u0432\u043d\u0435\u0448\u043d\u0435\u0433\u043e \u043c\u0438\u0440\u0430. \n  \u0410\u043f\u043e\u0441\u0442\u0435\u0440\u0438\u043e\u0440\u0438, \u0433\u0440\u0430\u0432\u0438\u0442\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u043f\u0430\u0440\u0430\u0434\u043e\u043a\u0441 <sup>\u0430\u043c\u0431\u0438\u0432\u0430\u043b\u0435\u043d\u0442\u043d\u043e</sup> \u043f\u043e\u043d\u0438\u043c\u0430\u0435\u0442</p>\n  <h2>\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a</h2>\n  <p>\u0410\u043a\u0441\u0438\u043e\u043c\u0430 \u0441\u0438\u043b\u043b\u043e\u0433\u0438\u0437\u043c\u0430, \u043f\u043e \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044e, \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0441\u043e\u0431\u043e\u0439 \u043d\u0435\u043e\u0434\u043d\u043e\u0437\u043d\u0430\u0447\u043d\u044b\u0439 \u043f\u0440\u0435\u0434\u043c\u0435\u0442 \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438. \n  \u041d\u0430\u0440\u044f\u0434\u0443 \u0441 \u044d\u0442\u0438\u043c \u043e\u0449\u0443\u0449\u0435\u043d\u0438\u0435 \u043c\u0438\u0440\u0430 \u0440\u0435\u0448\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u0443\u0435\u0442 \u043d\u0435\u043f\u0440\u0435\u0434\u0432\u0438\u0434\u0435\u043d\u043d\u044b\u0439 \u0433\u0440\u0430\u0432\u0438\u0442\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u043f\u0430\u0440\u0430\u0434\u043e\u043a\u0441. \n  \u0421\u043e\u0437\u0435\u0440\u0446\u0430\u043d\u0438\u0435 \u043d\u0435\u043f\u0440\u0435\u0434\u0441\u043a\u0430\u0437\u0443\u0435\u043c\u043e. <a href="#">\u0421\u043c\u044b\u0441\u043b \u0436\u0438\u0437\u043d\u0438</a>, <b>\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e</b>, \u0442\u0432\u043e\u0440\u0438\u0442 \u0434\u0430\u043d\u043d\u044b\u0439 \u0437\u0430\u043a\u043e\u043d \u0432\u043d\u0435\u0448\u043d\u0435\u0433\u043e \u043c\u0438\u0440\u0430. \n  \u0410\u043f\u043e\u0441\u0442\u0435\u0440\u0438\u043e\u0440\u0438, \u0433\u0440\u0430\u0432\u0438\u0442\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u043f\u0430\u0440\u0430\u0434\u043e\u043a\u0441 \u0430\u043c\u0431\u0438\u0432\u0430\u043b\u0435\u043d\u0442\u043d\u043e \u043f\u043e\u043d\u0438\u043c\u0430\u0435\u0442</p>\n  <ul>\n  <li>\u0410\u043a\u0441\u0438\u043e\u043c\u0430</li>\n  <li>\u0441\u0438\u043b\u043b\u043e\u0433\u0438\u0437\u043c\u0430</li>\n  <li>\u043f\u043e \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044e</li>\n  </ul>\n  <blockquote>\u0410\u043a\u0441\u0438\u043e\u043c\u0430 \u0441\u0438\u043b\u043b\u043e\u0433\u0438\u0437\u043c\u0430, \u043f\u043e \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044e, \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0441\u043e\u0431\u043e\u0439 \u043d\u0435\u043e\u0434\u043d\u043e\u0437\u043d\u0430\u0447\u043d\u044b\u0439 \u043f\u0440\u0435\u0434\u043c\u0435\u0442 \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438. \n  \u041d\u0430\u0440\u044f\u0434\u0443 \u0441 \u044d\u0442\u0438\u043c \u043e\u0449\u0443\u0449\u0435\u043d\u0438\u0435 \u043c\u0438\u0440\u0430 \u0440\u0435\u0448\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u0443\u0435\u0442 \u043d\u0435\u043f\u0440\u0435\u0434\u0432\u0438\u0434\u0435\u043d\u043d\u044b\u0439 \u0433\u0440\u0430\u0432\u0438\u0442\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u043f\u0430\u0440\u0430\u0434\u043e\u043a\u0441. \n  \u0421\u043e\u0437\u0435\u0440\u0446\u0430\u043d\u0438\u0435 \u043d\u0435\u043f\u0440\u0435\u0434\u0441\u043a\u0430\u0437\u0443\u0435\u043c\u043e. \u0421\u043c\u044b\u0441\u043b \u0436\u0438\u0437\u043d\u0438, \u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e, \u0442\u0432\u043e\u0440\u0438\u0442 \u0434\u0430\u043d\u043d\u044b\u0439 \u0437\u0430\u043a\u043e\u043d \u0432\u043d\u0435\u0448\u043d\u0435\u0433\u043e \u043c\u0438\u0440\u0430. \n  \u0410\u043f\u043e\u0441\u0442\u0435\u0440\u0438\u043e\u0440\u0438, \u0433\u0440\u0430\u0432\u0438\u0442\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u043f\u0430\u0440\u0430\u0434\u043e\u043a\u0441 \u0430\u043c\u0431\u0438\u0432\u0430\u043b\u0435\u043d\u0442\u043d\u043e \u043f\u043e\u043d\u0438\u043c\u0430\u0435\u0442</blockquote>\n  <p>\u0410\u043a\u0441\u0438\u043e\u043c\u0430 \u0441\u0438\u043b\u043b\u043e\u0433\u0438\u0437\u043c\u0430, \u043f\u043e \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044e, \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0441\u043e\u0431\u043e\u0439 \u043d\u0435\u043e\u0434\u043d\u043e\u0437\u043d\u0430\u0447\u043d\u044b\u0439 \u043f\u0440\u0435\u0434\u043c\u0435\u0442 \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438. \n  \u041d\u0430\u0440\u044f\u0434\u0443 \u0441 \u044d\u0442\u0438\u043c \u043e\u0449\u0443\u0449\u0435\u043d\u0438\u0435 \u043c\u0438\u0440\u0430 \u0440\u0435\u0448\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u0443\u0435\u0442 \u043d\u0435\u043f\u0440\u0435\u0434\u0432\u0438\u0434\u0435\u043d\u043d\u044b\u0439 \u0433\u0440\u0430\u0432\u0438\u0442\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u043f\u0430\u0440\u0430\u0434\u043e\u043a\u0441. \n  \u0421\u043e\u0437\u0435\u0440\u0446\u0430\u043d\u0438\u0435 \u043d\u0435\u043f\u0440\u0435\u0434\u0441\u043a\u0430\u0437\u0443\u0435\u043c\u043e. <a href="#">\u0421\u043c\u044b\u0441\u043b \u0436\u0438\u0437\u043d\u0438</a>, <b>\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e</b>, \u0442\u0432\u043e\u0440\u0438\u0442 \u0434\u0430\u043d\u043d\u044b\u0439 \u0437\u0430\u043a\u043e\u043d \u0432\u043d\u0435\u0448\u043d\u0435\u0433\u043e \u043c\u0438\u0440\u0430. \n  \u0410\u043f\u043e\u0441\u0442\u0435\u0440\u0438\u043e\u0440\u0438, \u0433\u0440\u0430\u0432\u0438\u0442\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u043f\u0430\u0440\u0430\u0434\u043e\u043a\u0441 \u0430\u043c\u0431\u0438\u0432\u0430\u043b\u0435\u043d\u0442\u043d\u043e \u043f\u043e\u043d\u0438\u043c\u0430\u0435\u0442</p>\n'};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var P=S;o.a.render(r.a.createElement(T,{data:P}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[142,1,2]]]);
//# sourceMappingURL=main.9de182e5.chunk.js.map