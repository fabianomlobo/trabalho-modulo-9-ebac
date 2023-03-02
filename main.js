$(document).ready(function(){
    $('form').submit(function(e){
        e.preventDefault()
        const tarefa = $('#tarefa-nome').val()
        const inserirItem = $(`<li>${tarefa}</li>`).appendTo('ul')
        $('li').click(function(){
        $('li').css('text-decoration', 'line-through')
        $('li').css( 'color', 'green')
        })
    })    
})