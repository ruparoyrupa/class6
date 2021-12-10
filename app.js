

const food = [ "alo" , "patol" , "lao" , "jhinga" , "komra" , "kacha kala" , "ladis finger" , "chilly pepar" , "bringel" ,"lal shak" , "palong shak"]


console.log(food);

console.log(food.length);

console.log(food[5]);


console.log( food[4] +  '  ' + food[7]);


for ( let i = 0; i < food.length; i++ ) {
    console.log(food[i]); 
    
}



food.forEach ( function (data) {
    console.log(data);
})

food.forEach ( data =>{
    console.log(data);
})


food.forEach ( data => console.log(data)) ;

food.map ( data => console.log(data)) 



for ( let i = 0; i < food.length; i++ ) {
    
    console.log( (i+1) + " " +  food[i]);

}



const name = [

    [  "alo" , "patol" , "lao" , "jhinga" , "komra" ] ,

    [ "golap" , "bali" , "tagor" , "hasnahana" , "dalia" ] ,

    [ "puti" , "riu" , "katol" , "boaal" , "taki" ] ,

    [ "mango" , "banana" , "jackfruit" , "bari" , "grape" ] ,


] ;


console.log(name[0]);

name[0].map(data => console.log(data))










