const add = Base=>class extends Base{
    add(){}
}
const update = Base=>class extends Base{
    update(){}
}
const remove = Base=>class extends Base{
    remove(){}
}
const get = Base=>class extends Base{
    get(){}
}

class Mixin{
    constructor(Base){
        this.Base =Base;
    }
    withMixins(...mixins){
        //TODO
       return mixins.reduceRight((p,m)=>m(p),this.Base)

       //Base+add                           0+1=1
       //Base+add+update                    1+2=3
       //Base+add+update+remove             3+3=6
       //Base+add+update+remove+get
    }
}
function inherit(Base){    
    return new Mixin(Base || class{})    
}

class Customer extends inherit().withMixins(add,update,remove,get){

}
class User extends inherit().withMixins(get){

}

/*class Customer extends add(update(remove(get(class {})))){

}

class User extends get(class{}){

}*/

/*
 class Vehiculo:
    pass
 class Coche(Vehiculo):
    pass
*/