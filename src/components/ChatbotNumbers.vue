<template>
    <div id="ChatbotNumbers">
        <h1>CHATBOT</h1>
        <p>Um chatbot é uma tecnologia que simula uma conversa humana com começo, meio e fim, podendo envolver Inteligência Artificial (IA) e Machine Learning e com a tecnologia NLP permite uma comunicação mais humanizada assim parecendo que está conversando com uma pessoa de verdade. Os chatbots são capazes de entender as perguntas do cliente e dar a resposta necessária de forma automática e rápida, além disso, os chatbots também possibilitam um atendimento de 24 horas por dia.
        </p>
        <hr>
            <table id="chat_table">
                <tr>
                    <td><img class="img" src="img/qa.png"></td>
                    <td><img class="img" src="img/web_chat.png"></td>
                    <td><img class="img" src="img/moedas.png"></td>
                </tr>
                <tr>
                    <td class="numbers">+8000</td>
                    <td class="numbers">10ms</td>
                    <td class="numbers">+37000</td>
                </tr>
                <tr>
                    <td>Lorem ipsum dolor sit amet.</td>
                    <td>Lorem ipsum dolor sit amet.</td>
                    <td>Lorem ipsum dolor sit amet.</td>
                </tr>
            </table>
    </div>
</template>

<script>
    export default {
        name: "ChatbotNumbers"
    }
</script>

<style>
div#ChatbotNumbers{
    padding-top: 2%;
    padding-bottom: 9%;
    width: 100%;
    background-color: #08474E;
    text-align: center;
    color: white;
}
div#ChatbotNumbers h1{
    font-size: 34px;
}
div#ChatbotNumbers p{
    width: 50%;
    margin : 30px auto 30px auto;
}
hr {
    margin: 35px auto 70px auto;
    background-color: white;
    border-style: none;
    border-top-style: dotted;
    border-color: #E2DCC8;
    height: 1px;
    width: 10%;
}
#chat_table{
    margin: 35px auto 70px auto;
    width: 100%;
}
.img {
    width: 13vw;
}
.numbers{
    font-size: 2rem;
    font-family: "fontelogo", sans-serif;
    font-weight: bold;
}
@media screen and (max-width: 500px){
table#chat_table{
    display: none;
}
hr {
    display: none;
}
}
</style>