<template>
  <div class="box-questions">
    <router-link to="/"><img src="/img/casa.png" id="logo"></router-link>
    <div class="box"></div>
    <div class="footer">
      <input type="text" id="message-input" placeholder="Pergunte aqui...">
      <button class="btn-submit" id="btn-submit" onclick="sendMessage()">Enviar</button>
    </div>
    
    <table id="contato">
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
    <div id="history">
      <!-- Aqui vai o chat gerado conforme as respostas -->
    </div>

  </div>
</template>

<script>

</script>
<style scoped>
.box-questions {
  height: 100vh;
  padding: 0;
  background-color:#08474E;
}
p {
  color: white
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
table#contato {
  text-align: center;
  margin: 35px auto 70px auto;
  width: 63%;
}
</style>
