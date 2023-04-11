<template>
  <div class="box-questions">
    <router-link to="/"><img src="/img/casa.png" id="logo"></router-link>
    <div class="box"></div>

    <div class="footer">
      <input type="text" id="input_mensagem" placeholder="Pergunte aqui...">
      <button class="btn-submit" id="btn-submit" @click="MostrarMensagem()">Enviar</button>
    </div>
    
    <table id="chat_exemplos" v-show="aparecer">
            <tr>
                <td colspan="2" id="exemplo_string"><h1>EXEMPLOS</h1></td>
            </tr>
            <tr>
                <td class="exemplo"><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p></td>
                <td class="exemplo"><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p></td>
            </tr>
            <tr>
                <td class="exemplo"><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p></td>
                <td class="exemplo"><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p></td>
            </tr>
            <tr>
                <td class="exemplo"><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p></td>
                <td class="exemplo"><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p></td>
            </tr>
        </table>
    <div id="historico" v-show="aparecer_historico">
      <!-- Aqui vai o chat gerado conforme as respostas -->
    </div>

  </div>
</template>

<script>
export default {
        name: 'MostrarMais',
        props: {

        },
        data() {
            return {
              aparecer: true,
              aparecer_historico: false,
            }
        },
        methods: {
            MostrarMensagem() {
              this.aparecer = false
              this.aparecer_historico = true
              var mensagem = document.getElementById('input_mensagem').value
              var historico_box = document.getElementById('historico')

              var box_mensagem_usuario = document.createElement('div')
              box_mensagem_usuario.className = 'box_mensagem'

              var mensagem_usuario = document.createElement('p')
              mensagem_usuario.className = 'mensage_usuario'
              mensagem_usuario.innerHTML = mensagem

              box_mensagem_usuario.appendChild(mensagem_usuario)
              historico_box.appendChild(box_mensagem_usuario)

              var box_resposta_ia = document.createElement('div')
              box_resposta_ia.className = 'box_mensagem_ia'

              var resposta_chat = document.createElement('p')
              resposta_chat.className = 'mensagem_resposta'
              // resposta_chat.innerHTML = resposta
              resposta_chat.innerHTML = 'Resposta do Chatbot'

              box_resposta_ia.appendChild(resposta_chat)
              historico_box.appendChild(box_resposta_ia)

              // Levar scroll para o final
              historico_box.scrollTop = historico_box.scrollHeight
            }
        }
    }
</script>
<style>
.box-questions {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color:#08474E;
}
td p {
  color: white;
}
h1 {
  color: #073036;
  font-size: 28px;
}
img#logo {
    position: fixed;
    z-index: 2;
    left: 1px;
    top: 8px;
    width: 33px;
    background-color: #08474E;
    padding: 5px;
    margin: 3px;
    border-radius: 5px;
    list-style-type: none;
}
.box {
    position: fixed;
    float: block;
    z-index: 1;
    left: 2px;
    top: 9px;
    width: 25px;
    height: 25px;
    padding: 11px;
    background: white;
    border-radius: 5px;
}
td.exemplo{
  background-color:#073036;
}
.footer {
  text-align: center;
  padding: 5%;
}
input {
  width: 75%;
  background-color: #073036;
  border-radius: 5px;
  padding: 5px;
}
.btn-submit {
  padding: 5px;
}
table#chat_exemplos {
  text-align: center;
  margin: 35px auto 70px auto;
  width: 63%;
  min-height: 56vh;
}
#historico{
  padding: 1rem;
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-height: 67vh;
}
.box_mensagem{
  display: flex;
  justify-content: flex-end;
  background-color: #073036;
  width: 40%;
  margin: 0 13% 0 auto;
  border-radius: 5px;
}
.box_mensagem_ia {
  display: flex;
  justify-content: flex-start;
  background-color: #073036;
  width: 40%;
  margin: 0 auto 0 13%;
  border-radius: 5px;
}
.mensage_usuario{
  text-align: right;
  color: white;
  padding: 5px;
}
.mensagem_resposta {
  text-align: left;
  color: white;
  padding: 5px;
}
</style>
