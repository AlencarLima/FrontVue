<template>
    <nav id="menu">
        <ul>
            <li><router-link to="/chatbot">Chatbot</router-link></li>
            <li><router-link to="/ChatbotNumbers">Interações Medicamentosas</router-link></li>
            <li><router-link to="/">Sobre</router-link></li>
            <li><router-link to="/">Contato</router-link></li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: "Navbar"
    }
</script>

<style scoped>
nav#menu ul{
    padding-top: 3px;
    top: -20px;
    left: 650px;
    position: absolute; 

}
nav#menu li{
    font-family: "fontelogo", sans-serif;
    display: inline-block;
    padding: 30px;
}
</style>