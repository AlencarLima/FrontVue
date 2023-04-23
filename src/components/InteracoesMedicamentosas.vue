<template>
    <div id="plus">
        <h1>INTERAÇÕES MEDICAMENTOSAS</h1>
        <MostrarMais textoBotao="O que são interações medicamentosas?" texto="Segundo a Agência Nacional de Vigilância Sanitária (ANVISA), interações medicamentosas são modificações nos efeitos dos medicamentos quando combinados com outros fármacos, alimentos, bebidas ou condições de saúde do paciente, podendo gerar riscos à saúde."/>
        <MostrarMais textoBotao="Quais sãos os riscos das interações medicamentosas?" texto="Os riscos das interações medicamentosas incluem diminuição ou aumento da eficácia do terapêutico, efeitos colaterais graves e intoxicações podendo levar a danos irreversíveis ou até mesmo a morte. "/>
        <MostrarMais textoBotao="Quais as principais interações medicamentosas?" texto="Medicamentos que afetam a coagulação sanguínea e medicamentos anti-inflamatórios, implica no  aumento do risco de sangramento.
        medicamentos antiácidos e anti-inflamatórios, implica na diminuição da absorção do anti-inflamatório.
        A ingestão de leite e alimentos lácteos com tetraciclinas, um tipo de antibiótico, implica na diminuição da absorção reduzindo sua eficácia terapêutica.
        O consumo de bebidas alcoólicas com paracetamol, implica no aumento da toxicidade hepática do paracetamol, causando problemas no fígado."/>
        <MostrarMais textoBotao="Sabendo das interações medicamentosas posso me automedicar?" texto="Não, mesmo conhecendo as possíveis interações medicamentosas, não é recomendado se automedicar. O uso de medicamentos deve ser orientado por um profissional de saúde, que leva em consideração o histórico médico do paciente, possíveis reações adversas e interações medicamentosas. A automedicação pode ser perigosa e causar efeitos colaterais graves, além de agravar possíveis condições médicas."/>
        
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

h1 {
    font-size: 1.5rem;
}
#plus {
    padding: 30px;
    min-height: 200px;
}
span#text{
    font-family: "fontelogo", sans-serif;
    color: #08474E;
}
span#text_riscos{
    font-family: "fontelogo", sans-serif;
    color: #08474E;
}
</style>