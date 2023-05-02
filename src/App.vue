<template>
  <router-view/>
  <Footer/>
</template>

<script>
  import Footer from './components/Footer.vue';
  export default {
    components: {
      Footer
    }
  }
</script>

<style>
@charset "UTF-8";
body {
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    margin-bottom: 0px;
    padding: 0;
}
h1 {
    font-family: "fontelogo", sans-serif;
    font-size: 24px;
}
a{
    text-decoration: none;
    color: #08474E;
    font-weight: bold;
}
</style>
