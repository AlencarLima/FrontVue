<template>
<div id="plus">
        <h1>INTERAÇÕES MEDICAMENTOSAS</h1>
        <MostrarMais textoBotao="O que são interações medicamentosas?" texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex debitis culpa consequatur libero. Tempora cumque illo, accusamus corporis dolorem, magni aut placeat asperiores laudantium sint consequuntur numquam, alias neque architecto."/>
        <MostrarMais textoBotao="Quais sãos os riscos das interações medicamentosas?" texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex debitis culpa consequatur libero. Tempora cumque illo, accusamus corporis dolorem, magni aut placeat asperiores laudantium sint consequuntur numquam, alias neque architecto."/>
        
    </div>
</template>

<script>
    import MostrarMais from './MostrarMais.vue'
    export default {
        name: "InteracoesMedicamentosas",
        components: {
            MostrarMais
        }
    }
</script>

<style scoped>
span#text{
    font-family: "fontelogo", sans-serif;
    color: #08474E;
}
span#text_riscos{
    font-family: "fontelogo", sans-serif;
    color: #08474E;
}
</style>