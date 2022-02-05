const geocode = (address , callback) => {

  
    const data = 
    {
        latitude: 0,
        longitude:0
    }

callback(data)

  
}

const data = geocode('egypt',(data)=>
{
    console.log(data.latitude + ' the '+ data.longitude)
})

const add = (num1,num2, callback)=>{
    {
        setTimeout(()=>{

            const sum = num1+num2
                callback(sum)

        },2000)
    }

}

add(1,4,(sum)=>{
    console.log(sum)
})