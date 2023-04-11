<template>
    <div>
        <button id="button" @click="leiaMais">{{ textoBotao }} {{ seta }}</button> <br>
        <span v-show="aparecer">{{ texto }}</span>
    </div>
</template>

<script>
    export default {
        name: 'MostrarMais',
        props: {
            textoBotao: String,
            texto: String
        },
        data() {
            return {
                aparecer: false,
                seta: 'v'
            }
        },
        methods: {
            leiaMais() {
                this.aparecer = !this.aparecer;
                if(!this.aparecer) {
                    this.seta = 'v';

                }
                else {
                    this.seta = '^';
                }
            }
        }
    }
</script>

<style>
#button {
    font-family: "fontelogo", sans-serif;
    color: #08474E;
    padding: 3px;
    margin: 3px;
}
</style>