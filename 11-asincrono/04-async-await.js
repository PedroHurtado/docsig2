class Customer{
    static async get(id){
        if(id===1){
            return  {id}
        }
        throw "El cliente no existe"
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

async function main(id){
    
    try{
        //spinner.on()
        const customer = await Customer.get(id)
        const invoices = await Invoices.get(customer.id)
        console.log(invoices)
    }
    catch(err){
        console.log(err)
    }
    finally{
        //spinner.off()
    }

}
main(1)