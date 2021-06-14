

async function getContent(){
    try {
        const response = await fetch('http://localhost:3333/notes') 
        const data = await response.json()

        show(data)
    
    } catch (error) {
       console.error(error) 
    }
}
getContent()


function show(tarefas){

    for(let tarefa of tarefas){
        let div = $('<div></div>').addClass('oloco');
        let div1 = $(`<div>${tarefa.titulo}</div>`).addClass('titleList');
        let div2 = $(`<div>${tarefa.descricao}</div>`).addClass('noteList').on('click' , () =>{
            $('.title2').append(tarefa.titulo)
            $('.story2').append(tarefa.descricao);
            document.querySelector('.bg-modal2').style.display = 'flex'
            $('.cancel').click(() => {
                $('.title2').empty();
                $('.story2').empty();
                document.querySelector('.bg-modal2').style.display = 'none'
            })

            $('.save2').on('click' , () => {
                update(tarefa.id)
            })

            $('.trash').on('click' , () => {
                deleta(tarefa.id)
            })

        })
        div.append(div1);
        div.append(div2);
        //div.append(div2);
        $(div).appendTo('div.lista');
    }


}



function update(id) {
    let ti = $('.title2').val();
    let desc = $('.story2').val();

    $('.title2').on('input' , () => {
        ti = $('.title2').val()
    })

    $('.story2').on('input' , () => {
        desc = $('.story2').val()
    })

    const notas = {
        titulo: ti,
        descricao: desc
    }

    $.ajax({
        type: "PUT",
        url: `http://localhost:3333/update/${id}`,
        data: notas,
        success: function( data )
        {
            alert( "Sucesso" );
            window.location.href = "";
        }
    });
    return false;

}


function deleta(id) {
    $.ajax({
        type: "DELETE",
        url: `http://localhost:3333/delete/${id}`,
        success: function()
        {
            alert( "Sucesso" );
            window.location.href = "";
        }
    });
    return false;

}



