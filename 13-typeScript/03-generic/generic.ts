class Service<T>{
    add(entity:T){
 
    }
 }
 
 interface Foo{
    name:string
 }
 interface Bar{
    id:number
 }
 
 const serviceFoo = new Service<Foo>()
 serviceFoo.add({name:''})
 //serviceFoo.add({id:10})
 
 const serviceBar = new Service<Bar>()
 serviceBar.add({id:1})