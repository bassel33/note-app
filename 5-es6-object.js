

const name = 'andrew'
 const age = 15

 const user = {

    name ,
    age

 }
 console.log(user)

 //object destructuring

 const product={

    lable:'red notebook',
    price:150,
    stock: 200,
    salesPrice: undefined
 }

 const transaction = (type , {lable='aa' , stock=0} = {} )=>{
    console.log(type , lable , stock)
 }

 transaction('order')
// const { lable:productName , price , stock} = product

// console.log(productName)