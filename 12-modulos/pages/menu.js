!function menu(){
    //Event Delegacion
    //https://dmitripavlutin.com/javascript-event-delegation/
    //capture->x,y->interseccion rect
    //target->el elemento cuyo rectangulo hace interseccion con el punto(x,y)
    //bubble->capture
    document.addEventListener('click', async (ev)=>{
        
        ev.preventDefault() //elimino la navegacion al servidor
        ev.stopPropagation() //quito la propagacion del evento
        console.log(ev.target)
        //https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes
        const node = ev.composedPath().find(n=>n.dataset && 'page' in n.dataset)
        if(node){
            const {page} = node.dataset
            const url= `./${page}.js`
            const module = await import(url)
            module.default()
        }
    })
}()