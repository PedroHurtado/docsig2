class Customer{
    static get(id,cb){
        if(id===1){
            cb(null,{id})
        }
        else{
            cb("El cliente no existe", null)
        }
    }
}

class Invoices{
    static get(customerId,cb){
        if(customerId===1){
            cb(null,{customerId, invoices:[]})
        }
        else{
            cb("el cliente no tiene facturas", null)
        }
    }
}

function main(id){
    Customer.get(1, (error,data)=>{
        if(data){
            Invoices.get(data.id, (error,data)=>{
                if(data){
                    console.log(data)
                }
                else{
                    console.log(error)
                }
            })
        }
        else{
            console.log(error)
        }
    })
}
main(1)