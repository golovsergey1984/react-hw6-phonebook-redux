(this["webpackJsonpreact-hw5-phonebook-redux"]=this["webpackJsonpreact-hw5-phonebook-redux"]||[]).push([[0],{10:function(t,e,a){t.exports={"contactForm-box":"contactForm_contactForm-box__ZG6O9","contactForm-wrapper":"contactForm_contactForm-wrapper__2SRNB","contactForm-input":"contactForm_contactForm-input__1cWik","contactForm-input-title":"contactForm_contactForm-input-title__2zA03","contactForm-btn":"contactForm_contactForm-btn__28LLa",error:"contactForm_error__1ISdg"}},134:function(t,e,a){t.exports={"logo-txt":"logo_logo-txt__2EzUk"}},135:function(t,e,a){t.exports={wrapper:"main_wrapper__1egyE"}},138:function(t,e,a){t.exports={enter:"fade_enter__2I-f8",enterActive:"fade_enterActive__R8wOf",exit:"fade_exit__DGUkl",exitActive:"fade_exitActive__u5vNf"}},140:function(t,e,a){t.exports=a(396)},16:function(t,e,a){t.exports={"contactList-ul":"contactList_contactList-ul__zxJV2","contactList-item-box":"contactList_contactList-item-box__2TPPl","contactList-item-wrapper":"contactList_contactList-item-wrapper__25qsN","contactList-item-name":"contactList_contactList-item-name__3CGaO","contactList-item-number":"contactList_contactList-item-number__2qAVE","contactList-item-btn":"contactList_contactList-item-btn__UHTSC","contactList-btn-delete":"contactList_contactList-btn-delete__1aVQU"}},32:function(t,e,a){t.exports={"searchForm-box":"searchForm_searchForm-box__18-1w","searchForm-wrapper":"searchForm_searchForm-wrapper__36c_2","searchForm-input":"searchForm_searchForm-input__3qFTp","searchForm-input-title":"searchForm_searchForm-input-title__3R_vP"}},396:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),c=a(15),o=a.n(c),i=a(13),s=a(9),u="NAME_ADD",l="NUMBER_ADD",m="FORM_ADD",p="DELETE_CONTACT",b="FILTER_VALUE",d="NAME_CLEAR",f="NUMBER_CLEAR",_="FORM_LOCAL_ADD",h=Object(s.b)("FILTER_VALUE",(function(t){return{payload:t.target.value}})),E=Object(s.b)("NAME_ADD",(function(t){return{payload:t.target.value}})),v=Object(s.b)("NAME_CLEAR",(function(t){return{payload:""}})),F=Object(s.b)("NUMBER_ADD",(function(t){return{payload:t.target.value}})),L=Object(s.b)("NUMBER_CLEAR",(function(t){return{payload:""}})),O=Object(s.b)("FORM_ADD",(function(t,e,a){return{payload:{id:t,name:e,number:a}}})),N=Object(s.b)("FORM_LOCAL_ADD",(function(t){return{payload:t}})),y=Object(s.b)("DELETE_CONTACT",(function(t){return{payload:t}})),x=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0;switch(e.type){case u:case d:return e.payload;default:return t}},C=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0;switch(e.type){case l:case f:return e.payload;default:return t}},g=a(14),A={contacts:[],filter:""},j=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case _:return{contacts:e.payload};case m:return Object(g.a)(Object(g.a)({},t.contacts),{},{contacts:t.contacts.concat([{id:e.payload.id,name:e.payload.name,number:e.payload.number}])});case p:return Object(g.a)(Object(g.a)({},t.contacts),{},{contacts:t.contacts.filter((function(t){return t.id!==e.payload}))});case b:return Object(g.a)(Object(g.a)({},t),{},{filter:e.payload});default:return t}},w=Object(s.a)({reducer:{name:x,number:C,contacts:j,delete:j,filter:j,clear_input:x,localDbAdd:j}}),D=a(21),T=a(22),S=a(25),R=a(24),k=a(397),I=a(134),M=a.n(I),U=a(42),q=a.n(U),B=function(t){return r.a.createElement(k.a,{in:t.isLoad,timeout:1e3,classNames:q.a,unmountOnExit:!0},r.a.createElement("h1",{className:M.a["logo-txt"]},"Phonebook"))},J=a(135),P=a.n(J),V=a(136),z=a.n(V),G=a(10),H=a.n(G),K=a(137),Q={name:"required|alpha",number:"required|number"},W={alpha:"Name must contain letters only!!",number:"Phone must contain numeral only!!","name.required":"this field is required","number.required":"this field is required"},X=function(t){Object(S.a)(a,t);var e=Object(R.a)(a);function a(){var t;Object(D.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).resetError=function(){t.setState({errors:Object(g.a)(Object(g.a)({},t.state.errors),{},{name:null,number:null})})},t}return Object(T.a)(a,[{key:"onContactToAdd",value:function(t,e,a,n,r){var c=this;t.persist(),t.preventDefault(),r&&this.resetError();var o=function(t,e){return e.filter((function(e){return e.name.toLowerCase()===t.toLowerCase()}))}(e,n),i=function(t,e){return e.filter((function(e){return e.number.toLowerCase()===t.toLowerCase()}))}(a,n);0===o.length||0===i.length?Object(K.validateAll)({name:e,number:a},Q,W).then((function(n){c.props.onSubmitForm(t,z.a.generate(),e,a),c.props.nameToClear(),c.props.numberToClear()})).catch((function(t){var e={};t.forEach((function(t){e[t.field]=t.message})),c.setState({errors:e})})):this.props.changeStatus()}},{key:"render",value:function(){var t=this,e=this.props,a=e.name,n=e.number,c=e.onChangeInputName,o=e.onChangeInputNumber,i=this.state;return r.a.createElement("div",{className:H.a["contactForm-box"]},r.a.createElement("div",{className:H.a["contactForm-wrapper"]},r.a.createElement("form",{onSubmit:function(e){return t.onContactToAdd(e,t.props.name,t.props.number,t.props.contacts,i)}},r.a.createElement("label",null,r.a.createElement("p",{className:H.a["contactForm-input-title"]},"Name"),r.a.createElement("input",{type:"text",className:H.a["contactForm-input"],name:"name",value:a,autoComplete:"off",onChange:c,placeholder:"Type contact name..."}),i&&r.a.createElement("span",{className:H.a.error},this.state.errors.name)),r.a.createElement("label",null,r.a.createElement("p",{className:H.a["contactForm-input-title"]},"Number"),r.a.createElement("input",{type:"text",className:H.a["contactForm-input"],name:"number",value:n,autoComplete:"off",onChange:o,placeholder:"Type contact number..."}),i&&r.a.createElement("span",{className:H.a.error},this.state.errors.number)),r.a.createElement("div",{className:H.a["contactForm-btn-box"]},r.a.createElement("button",{type:"submit",className:H.a["contactForm-btn"]},"Add contact")))))}}]),a}(n.Component),Z=Object(i.b)((function(t){return{name:t.name,number:t.number,contacts:t.contacts.contacts}}),(function(t){return{onChangeInputName:function(e){return t(E(e))},onChangeInputNumber:function(e){return t(F(e))},nameToClear:function(){return t(v())},numberToClear:function(){return t(L())},onSubmitForm:function(e,a,n,r){e.preventDefault(),t(O(a,n,r))}}}))(X),Y=a(32),$=a.n(Y),tt=function(t){var e=t.filter,a=t.onChangeInputFilter;return r.a.createElement("div",{className:$.a["searchForm-box"]},r.a.createElement("div",{className:$.a["searchForm-wrapper"]},r.a.createElement("p",{className:$.a["searchForm-input-title"]},"Find contacts by name"),r.a.createElement("input",{type:"text",className:$.a["searchForm-input"],placeholder:"Type to filter names...",value:e,onChange:function(t){return a(t)}})))},et=Object(i.b)((function(t){return{filter:t.contacts.filter}}),(function(t){return{onChangeInputFilter:function(e){return t(h(e))}}}))(tt),at=a(398),nt=a(16),rt=a.n(nt),ct=function(t){Object(S.a)(a,t);var e=Object(R.a)(a);function a(){var t;Object(D.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).nameFilter=function(t,e){return void 0!==t?e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})):e},t}return Object(T.a)(a,[{key:"render",value:function(){var t=this,e=this.nameFilter(this.props.filter,this.props.contacts);return r.a.createElement("div",null,r.a.createElement(at.a,{component:"ul",className:rt.a["contactList-ul"]},e.map((function(e){return r.a.createElement(k.a,{key:e.id,timeout:1e3,classNames:q.a,unmountOnExit:!0},r.a.createElement("li",{className:rt.a["contactList-item-box"]},r.a.createElement("div",{className:rt.a["contactList-item-wrapper"]},r.a.createElement("div",{className:rt.a["contactList-item-name"]},e.name),r.a.createElement("div",{className:rt.a["contactList-item-number"]},e.number),r.a.createElement("div",{className:rt.a["contactList-item-btn"]},r.a.createElement("button",{type:"button",name:"delte",onClick:function(){return t.props.onDeleteContact(e.id)},className:rt.a["contactList-btn-delete"]},"X")))))}))))}}]),a}(n.Component),ot=Object(i.b)((function(t){return{contacts:t.contacts.contacts,filter:t.contacts.filter}}),(function(t){return{onDeleteContact:function(e,a){return t(y(e,a))}}}))(ct),it=a(138),st=a.n(it),ut=a(67),lt=a.n(ut),mt=function(t){return r.a.createElement(k.a,{in:t.status,timeout:1e3,classNames:st.a,unmountOnExit:!0},r.a.createElement("div",{className:lt.a["dublicate-box"]},r.a.createElement("p",{className:lt.a["dublicate-txt"]},"Contact already exist!")))},pt=function(t){Object(S.a)(a,t);var e=Object(R.a)(a);function a(){var t;Object(D.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={isLoad:!1,dublicate:!1},t.handleChangeStatus=function(){t.setState({dublicate:!0})},t}return Object(T.a)(a,[{key:"componentDidMount",value:function(){this.setState({isLoad:!0});var t=localStorage.getItem("contacts");t&&this.props.localStorageDbAdd(JSON.parse(t))}},{key:"componentDidUpdate",value:function(t,e){var a=this;e.dublicate!==this.state.dublicate&&setTimeout((function(){a.setState({dublicate:!1})}),3e3),t.contacts!==this.props.contacts&&localStorage.setItem("contacts",JSON.stringify(this.props.contacts))}},{key:"render",value:function(){var t=this.state,e=t.isLoad,a=t.dublicate;return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:P.a.wrapper},r.a.createElement(B,{isLoad:e}),r.a.createElement(Z,{changeStatus:this.handleChangeStatus}),this.props.contacts.length>1&&r.a.createElement(et,null),r.a.createElement(ot,null)),a&&r.a.createElement(mt,{status:a}))}}]),a}(n.Component),bt=Object(i.b)((function(t){return{contacts:t.contacts.contacts,filter:t.contacts.filter}}),(function(t){return{localStorageDbAdd:function(e){t(N(e))}}}))(pt);o.a.render(r.a.createElement(i.a,{store:w},r.a.createElement(bt,null)),document.getElementById("root"))},42:function(t,e,a){t.exports={enter:"slide_enter__TbiKr",enterActive:"slide_enterActive__18lRw",exit:"slide_exit__CIwpa",exitActive:"slide_exitActive__1okDB"}},67:function(t,e,a){t.exports={"dublicate-box":"dublicate_dublicate-box__3pu_i","dublicate-txt":"dublicate_dublicate-txt__3-O3z"}}},[[140,1,2]]]);
//# sourceMappingURL=main.68a68899.chunk.js.map