function logger() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
      const oldFuntion = descriptor.value   //perdida de ambito
      descriptor.value = function(...args:[]){
        console.log("Before")
        const result = oldFuntion.apply(this,args) //se estable ambito
        console.log("After")
        return result; //retorno el valor devuelto por tu metodo
      }
    };
  }
  
  class Foo{
    @logger()
    writer(){
      console.log("Writer Foo")
    }
  }
  
  const foo = new Foo()
  foo.writer();