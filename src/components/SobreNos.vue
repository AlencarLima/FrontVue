<template>
    <div id="ChatbotNumbers">
        <h1>SOBRE NÓS</h1>
        <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, enim. Ipsum enim ducimus, asperiores minus mollitia optio. Molestiae, consectetur eaque. Culpa aspernatur quos, saepe quod ipsam omnis blanditiis laudantium dicta!</P>
        <table id="nos">
            <tr>
                <td>Carlos</td>
                <td><img id="members" src="img/picture_carlos.png"></td>
                <td><img id="members" src="img\picture_rafaela.png"></td>
                <td>Rafaela</td>
                
            </tr>
            <tr>
                <td>Dennis</td>
                <td><img id="members" src="img/picture_dennis.png"></td>
                <td><img id="members" src="img/picture_jose.png"></td>
                <td>José</td>
                
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'SobreNos'
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
div#ChatbotNumbers table {
    width: 100%;
}
#members {
    width: 30%;
}
</style>