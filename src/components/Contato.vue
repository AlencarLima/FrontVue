<template>
    <div id="cont">
        <div id="leftside">
            <h1>ENTRE EM CONTATO</h1>
            <p id="text_contato">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet necessitatibus, unde rem aliquam amet atque culpa et corporis sit. Expedita totam beatae distinctio? Cum, maiores voluptatum! Est voluptatum expedita dolorum!</p>
            <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h3>
        </div>
        
        <table id="contato">
            <tr>
                <td><label for="name">Nome</label></td>
                <td><label for="last_name">Sobrenome</label></td>
            </tr>
            <tr>
                <td><input type="text" name="Nome" size="40" placeholder="Ex: Rafaela"/></td>
                <td><input type="text" name="Sobrenome" size="40" placeholder="Ex: Trindade"/></td>
            </tr>
            <tr>
                <td><label for="email">Email</label></td>
            </tr>
            <tr>
                <td colspan="2"><input type="text" name="Email" size="86" placeholder="Ex: rafa@gmail.com"/></td>
            </tr>
            <tr>
                <td><label for="city">Mensagem</label></td>
            </tr>
            <tr>
                <td colspan="2"><textarea cols="84" rows="5"></textarea></td>
            </tr>
            <tr>
                <td><div class="button">LIMPAR</div></td>
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
    padding: 5px;
    margin-right: 10px;
    margin-top: 50px;
}
.button{
    font-size: 22px;
    padding: 10px 9px;
    width: 160px;
    color: #fff;
    background: #08474E;
    border: 1px solid #555;
    text-align: center;
    font-family: "fontelogo", sans-serif;
    font-weight: bold;
}
</style>