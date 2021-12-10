const members = [

    
    [ 'Rupa roy' , 32 ,  'dhaka'  ] ,
    
    [ 'Salam shak' , 38 ,  'khulna' ] ,

    [ 'Rana khan' , 16 ,  'dhaka'  ] ,

    [ 'Redoy bisws' , 35 ,  'khulna' ] ,

    [ 'Shrayan biswas' , 25 ,  'jessore'  ] ,

    [ 'Deloar jahan' , 42 ,  'dhaka' ] ,

    [ 'Kamal uddin' , 18 ,  'dhaka'  ] ,

    [ 'Rokia katun' , 40 ,  'dhaka'  ] ,

    [ 'Lutfur rahaman' , 32 ,  'jessore'  ] ,

    [ 'Eite bagum' , 45 ,  'dhaka'  ] ,

] ;


for ( let i = 0; i < members.length; i++ ) {
    
    let name = members[i][0]
    let age = members[i][1]
    let location = members[i][2]

    


    let member =  age  =>{
     
        if ( age >= 0 && age <= 17 ) {
            return ` You are not allowed in this club .`
        }else if ( age >= 18 && age <= 40 ){
            return ` Welcome to our club .`
        }else if ( age > 41 ) {
            return ` Age is over . You are not allowed in our club .`
        }
    }


    console.log(` Name : ${name}
    
    Location :${location}

     ${ member(age)}


    `);
      


}