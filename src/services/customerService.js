export default class CustomerService {

    listCustomers() {
    const data =  fetch('http://localhost:8080/users?id=1')
 .then(response => response.json())
 .catch(error => console.error('Error:', error))
 .then(response => console.log('Success:', JSON.stringify(response)));

    }

    getCustomerById(id) {
        return this.customers.find(u=>u.id ===id)
    }

    getCustomersSorted(){
        return this.customers.sort((customer1,customer2)=>{
            if(customer1.firstName>customer2.firstName){
                return 1;
            }else if(customer1.firstName===customer2.firstName){
                return 0;
            }else{
                return -1
            }
        })
    }

}