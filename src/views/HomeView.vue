<template>
  <router-link to="/chatbot"><img src="/img/logo.png" id="logo"></router-link>
  <div class="box"></div>
  <h1 id="title">IMBOT</h1>
  <Navbar/>
  <ChatbotImbot/>
  <ChatbotNumbers/>
  <InteracoesMedicamentosas/>
  <SobreNos/>
  <Contato/>
</template>

<script>
  import Navbar from '../components/Navbar.vue'
  import ChatbotImbot from '@/components/ChatbotImbot.vue';
  import ChatbotNumbers from '@/components/ChatbotNumbers.vue';
  import InteracoesMedicamentosas from '@/components/InteracoesMedicamentosas.vue';
  import SobreNos from '@/components/SobreNos.vue'
  import Contato from '@/components/Contato.vue'

  export default {
    name: 'Home',
    components: {
      Navbar,
      ChatbotImbot,
      ChatbotNumbers,
      InteracoesMedicamentosas,
      SobreNos,
      Contato
    }
  }
</script>

<style scoped>
h1#title {
    margin-top: 20px;
    margin-left: 65px;
}
img#logo {
    position: fixed;
    z-index: 2;
    left: -1px;
    top: 8px;
    width: 30px;
    background-color: #08474E;
    padding: 7px;
    margin: 3px;
    border-radius: 5px;
    list-style-type: none;
}
.box {
    position: fixed;
    float: block;
    z-index: 1;

    top: 9px;
    width: 25px;
    height: 25px;
    padding: 11px;
    background: white;
    border-radius: 5px;
}
</style>
