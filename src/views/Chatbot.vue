<template>
  <div class="box-questions">
    <router-link to="/"><img src="/img/casa.png" id="logo"></router-link>
    <div class="box"></div>

    <div class="footer">
      <input type="text" id="input_mensagem" placeholder="Pergunte aqui...">
      <img src="/img/enviar.png" class="btn-submit" id="btn-submit" @click="MostrarMensagem()">
    </div>
    
    <table id="chat_exemplos" v-show="aparecer">
            <tr>
                <td colspan="2" id="exemplo_string"><h1>EXEMPLOS</h1></td>
            </tr>
            <tr>
                <td class="exemplo"><p>Quais são as interações medicamentosas entre a varfarina e a aspirina?</p></td>
                <td class="exemplo"><p>Qual é a interação entre o álcool e os medicamentos para ansiedade?</p></td>
            </tr>
            <tr>
                <td class="exemplo"><p>Posso tomar paracetamol enquanto estou em tratamento com antibióticos?</p></td>
                <td class="exemplo"><p>Há alguma interação entre o ibuprofeno e a cafeína?</p></td>
            </tr>
            <tr>
                <td class="exemplo"><p>É seguro tomar medicamentos para diabetes com medicamentos para hipertensão arterial?</p></td>
                <td class="exemplo"><p>Qual é a interação entre a levodopa e os medicamentos para depressão?</p></td>
            </tr>
        </table>
    <div id="historico" v-show="aparecer_historico">
      <!-- Aqui vai o chat gerado conforme as respostas -->
    </div>

  </div>
</template>

<script>
import axios from "axios"
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
          async fetchRespostaDaAPI(mensagem) {
            try {
              // Realizar chamada de API GET usando axios
              const response = await axios.get('http://localhost:80/gpt/' + mensagem);
              // Retornar o valor da resposta
              return response.data.input_text;
            } catch (error) {
              // Tratar erros da API
              console.error(error);
              // Retornar uma mensagem de erro, ou um valor padrão, se necessário
              return 'Erro ao obter resposta da API';
            }
          },
          async MostrarMensagem() {
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
              
              this.fetchRespostaDaAPI(mensagem).then(resposta => {
                resposta_chat.innerHTML = resposta;
                box_resposta_ia.appendChild(resposta_chat);
                historico_box.appendChild(box_resposta_ia);

                // Levar scroll para o final
                historico_box.scrollTop = historico_box.scrollHeight;
              })

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
img#btn-submit {
  width: 20px;
  padding: 5px;
  position: relative;
  top: 10px;
  left: -30px;
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
  width: 40vw;
  padding: 1% 2%;
}
.footer {
  padding: 5%;
}
input {
  width: 80%;
  background-color: #073036;
  border-radius: 5px;
  padding: 5px;
}
table#chat_exemplos {
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  margin: 35px auto 70px auto;
  width: 63vw;
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
