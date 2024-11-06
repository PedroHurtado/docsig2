class Customer{
    static get(id){
        return new Promise((resolve,reject)=>{
            //resolve->ok
            //reject->error
            if(id===1){
                resolve({id})
            }
            else{
                reject("El cliente no existe")
            }
        })
    }
}

class Invoices{
    static get(customerId){
        return new Promise((resolve,reject)=>{
            if(customerId ===1){
                resolve({customerId,invoices:[]})
            }
            else{
                reject("El cliente no tiene facturas")
            }
        })
    }
}
//resolve (1:n) ->then
//reject ->1->catch
function main(id){
    
    Customer.get(id)
        .then(customer=>Invoices.get(customer.id))
        .then(invoices=>console.log(invoices))
        .catch(err=>console.log(err))
}
main(1)