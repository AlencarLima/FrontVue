<template>
    <div id="ChatbotNumbers">
        <h1>CHATBOT</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At quos voluptatem exercitationem harum sed rerum ut porro blanditiis, dignissimos inventore cum reprehenderit adipisci deserunt autem explicabo dolor molestias impedit. Deserunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis laudantium id doloribus odit quod vel aliquam eligendi suscipit, amet ratione magni officia aperiam necessitatibus sunt, explicabo consequuntur hic perspiciatis ad?</p>
        <hr>
            <table id="chat_table">
                <tr>
                    <td><img id="qa" src="img/qa.png"></td>
                    <td><img id="qa" src="img/web_chat.png"></td>
                    <td><img id="qa" src="img/moedas.png"></td>
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
.numbers{
    font-size: 70px;
    font-family: "fontelogo", sans-serif;
    font-weight: bold;
}
</style>