<template>
    <div id="header-corpo">
        <h1 id="sec_title">CHATBOT IMBOT</h1>
     <p id="chatbot_resume">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto dolore quis asperiores molestiae repudiandae! Laudantium ex, et odit ducimus neque deserunt sed culpa eligendi asperiores sit incidunt impedit similique nisi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima cumque minus quam sit ut temporibus quos cum hic cupiditate? Dolor, dicta molestiae rem at nemo aspernatur aperiam tenetur consequatur quis!</p>
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
    font-size: 35px;
}
p#chatbot_resume{
    margin-bottom: 25px;
    width: 400px;
}
.button{
    margin-top: 10px;
    font-size: 22px;
    padding: 10px 32px;
    width: 1px;
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