<template>
    <div id="cont">
        <div id="leftside">
            <h1>ENTRE EM CONTATO</h1>
            <p id="text_contato">Tem alguma dúvida ou sugestão? Nos envie uma mensagem ou visite nossa sede.Estamos prontos para falar com você.</p>
            <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h3>
        </div>
        
        <table id="contato">
            <tr>
                <td class="td_camp"><label for="name">Nome</label></td>
                <td><label for="last_name">Sobrenome</label></td>
            </tr>
            <tr id="caralho">
                <td class="td_camp"><input class="camp" type="text" name="Nome" size="38" placeholder="Ex: Rafaela"/></td>
                <td class="camp"><input class="camp" type="text" name="Sobrenome" size="38" placeholder="Ex: Trindade"/></td>
            </tr>
            <tr>
                <td class="td_camp"><label for="email">Email</label></td>
            </tr>
            <tr>
                <td colspan="2"><input class="camp_email" type="text" name="Email" size="83.4" placeholder="Ex: rafa@gmail.com"/></td>
            </tr>
            <tr>
                <td><label for="city">Mensagem</label></td>
            </tr>
            <tr>
                <td colspan="2"><textarea cols="73" rows="5"></textarea></td>
            </tr>
            <tr>
                <td id="limpar"><div class="button">LIMPAR</div></td>
                <td><div class="button">ENVIAR</div></td>
            </tr>
        </table>
        
        
    </div>
</template>

<script>
    export default {
        name: 'Contato'
    }
</script>

<style scoped>
table#contato {
    align-self: right;
}
#text_contato {
    width: 500px;
}
#leftside{
    display: block;
    float: left;
    padding: 10px;
}
#cont table{
    display: block;
    float: right;
    width: auto;


}
.button{
    font-size: 1.4rem;
    padding: 1.2vh 2vw;
    width: 160px;
    color: #fff;
    background: #08474E;
    border: 1px solid #555;
    text-align: center;
    font-family: "fontelogo", sans-serif;
    font-weight: bold;
}
#text_contato {
    width: 45vw;
}
h3 {
    width: 45vw;
}
@media screen and (max-width: 500px){
#leftside {
    text-align: center;
}
#limpar {
    display: none;
}
.camp {
    width: 45vw;
    margin: 0;
}

.camp_email {
    width: 90vw;

}
#text_contato {
    width: 95vw;
}
h3 {
    width: 95vw;
}
table#contato {
    width: 98vw;

}
#contato > tbody {
    width: 99vw;
}
tr#caralho {
    width: 95vw;
}
input {
    width: 10px;
}
textarea {
    padding: 0;
    margin: 0;
    width: 90vw;
}
}
</style>