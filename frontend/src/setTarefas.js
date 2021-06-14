
$(document).ready(function(){
    $('.save').click(function(){
        let ti = $('.title').val()
        let des = $('.story').val()

        if(ti === "" || des === ""){
            alert("erro")
        }else{
            const notas = {
                titulo: ti,
                descricao: des
            }
        
            $.ajax({
                type: "POST",
                url: "http://localhost:3333/create",
                data: notas,
                success: function( data )
                {
                    alert( "Sucesso" );
                    document.querySelector('.title').value = ""
                    window.location.href = "";
                }
            });
            return false;
        }

    
    })
})
