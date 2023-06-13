$(document).keypress(function(event){
    
        start_the_game(0,1);

        
})

function start_the_game(nj,dj){
    var result_array=[]
    var answer_array = []
    var nivel = nj
    var dificultad = dj
    $('h1').html(`NIVEL : ${nivel}`)
    const colores = ["uno","dos","tres","cuatro"]
    for (let index = 0; index < dificultad; index++) {
        var sel_alzar = Math.floor(Math.random()*4)
        $(`#${colores[sel_alzar]}`).animate({ opacity: 0.1 }, 1000);

        $(`#${colores[sel_alzar]}`).animate({ opacity: 1 }, 1000);
        result_array.push(colores[sel_alzar])
    }
    console.log(result_array)
    $(".btn").click(function(){
        const ans = $(this).attr("id")
        $(this).animate({ opacity: 0.1 }, 200);
        $(this).animate({ opacity: 1 }, 200);
        console.log(ans)
        answer_array.push(ans)
        
        if(answer_array[answer_array.length-1] != result_array[answer_array.length-1] ){
            $('h1').html("perdiste")
        }
        else if (answer_array.length === result_array.length){
            $('h1').animate({ fontfamily:"Siguiente nivel" }, 1000);
            setTimeout(start_the_game(nj+1,1+(Math.floor(nj/2))),8000)
            
        }
    })
}