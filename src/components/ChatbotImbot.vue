<template>
    <div id="header-corpo">
        <h1 id="sec_title">CHATBOT IMBOT</h1>
     <p id="chatbot_resume">Com Medruglt Chatbot você tem uma comunicação inteligente, automatizada, eficiente e que gera uma resposta rápida para qualquer interação medicamentosa que seus remédios possam ter.
</p>
    <a class="button" href="/chatbot">COMEÇAR</a>
    </div>
</template>

<script>
    export default {
        name: "ChatbotImbot"
    }
</script>

<style scoped>
#header-corpo{
    padding: 9%;
}
#sec_title{
    font-size: 2.3rem;
}
p#chatbot_resume{
    margin-bottom: 25px;
    width: 50vw;
}
.button{
    margin-top: 10vh;
    font-size: 1.4rem;
    padding: 1.2vh 2vw;
    color: #fff;
    background: #08474E;
    border: 1px solid #555;
    text-align: center;
    font-family: "fontelogo", sans-serif;
    font-weight: bold;
    border-radius: 15px;
    margin-bottom: 3px;
}
a:hover {
            background-color: #7ACEC4;
            color:#08474E;
            transition: all 0.2s ease-in;
        }
</style>