"use strict";(self["webpackChunkfront_vue"]=self["webpackChunkfront_vue"]||[]).push([[383],{3242:function(e,a,t){t.r(a),t.d(a,{default:function(){return M}});var n=t(3396),s=t(9242);const o={class:"box-questions"},r=(0,n._)("img",{src:"/img/casa.png",id:"logo"},null,-1),l=(0,n._)("div",{class:"box"},null,-1),i={class:"footer"},c=(0,n._)("input",{type:"text",id:"input_mensagem",placeholder:"Pergunte aqui..."},null,-1),m={id:"chat_exemplos"},p=(0,n._)("tr",null,[(0,n._)("td",{colspan:"2",id:"exemplo_string"},[(0,n._)("h1",null,"EXEMPLOS")])],-1),u=(0,n._)("tr",null,[(0,n._)("td",{class:"exemplo"},[(0,n._)("p",null,"Quais são as interações medicamentosas entre a varfarina e a aspirina?")]),(0,n._)("td",{class:"exemplo"},[(0,n._)("p",null,"Qual é a interação entre o álcool e os medicamentos para ansiedade?")])],-1),d=(0,n._)("tr",null,[(0,n._)("td",{class:"exemplo"},[(0,n._)("p",null,"Posso tomar paracetamol enquanto estou em tratamento com antibióticos?")]),(0,n._)("td",{class:"exemplo"},[(0,n._)("p",null,"Há alguma interação entre o ibuprofeno e a cafeína?")])],-1),_=(0,n._)("tr",null,[(0,n._)("td",{class:"exemplo"},[(0,n._)("p",null,"É seguro tomar medicamentos para diabetes com medicamentos para hipertensão arterial?")]),(0,n._)("td",{class:"exemplo"},[(0,n._)("p",null,"Qual é a interação entre a levodopa e os medicamentos para depressão?")])],-1),g=[p,u,d,_],h={id:"historico"};function v(e,a,t,p,u,d){const _=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",o,[(0,n.Wm)(_,{to:"/"},{default:(0,n.w5)((()=>[r])),_:1}),l,(0,n._)("div",i,[c,(0,n._)("img",{src:"/img/enviar.png",class:"btn-submit",id:"btn-submit",onClick:a[0]||(a[0]=e=>d.MostrarMensagem())})]),(0,n.wy)((0,n._)("table",m,g,512),[[s.F8,u.aparecer]]),(0,n.wy)((0,n._)("div",h,null,512),[[s.F8,u.aparecer_historico]])])}var b={name:"MostrarMais",props:{},data(){return{aparecer:!0,aparecer_historico:!1}},methods:{MostrarMensagem(){this.aparecer=!1,this.aparecer_historico=!0;var e=document.getElementById("input_mensagem").value,a=document.getElementById("historico"),t=document.createElement("div");t.className="box_mensagem";var n=document.createElement("p");n.className="mensage_usuario",n.innerHTML=e,t.appendChild(n),a.appendChild(t);var s=document.createElement("div");s.className="box_mensagem_ia";var o=document.createElement("p");o.className="mensagem_resposta",o.innerHTML="Resposta do Chatbot",s.appendChild(o),a.appendChild(s),a.scrollTop=a.scrollHeight}}},f=t(89);const x=(0,f.Z)(b,[["render",v]]);var M=x}}]);
//# sourceMappingURL=chatbot.0f619649.js.map