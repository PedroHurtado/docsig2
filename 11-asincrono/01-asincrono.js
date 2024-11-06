function main(){
    debugger
    console.log("start")                        //sincrono
    setTimeout(()=>console.log("timeout"),0)    //sincrona->callback->task
    Promise.resolve()
        .then(()=>console.log("promise1"))      //sincrona->callback->microtask
        .then(()=>console.log("promise2"))      //sincrona->callback->microtask

    console.log("end")                          //sincrono
}
main()


/*
    start           stack       0
    end             stack       0
    promise1        microtask   1 
    promise2        microtask   1
    timeout         task        2

    https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/
    https://www.youtube.com/watch?v=8aGhZQkoFbQ
*/