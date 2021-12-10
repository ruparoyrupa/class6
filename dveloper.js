

const deves =[

    [ 'Rupa roy' , 32 , 'java' , 'dhaka' , 1000 ] ,
    
    [ 'Salam shak' , 38 , 'php' , 'khulna' , 400] ,

    [ 'Rana khan' , 30 , 'python' , 'dhaka' , 300 ] ,

    [ 'Redoy bisws' , 35 , 'java' , 'khulna' , 500 ] ,

    [ 'Shrayan biswas' , 25 , 'php' , 'jessore' , 800 ] ,

    [ 'Deloar jahan' , 22 , 'java' , 'dhaka' , 200] ,

    [ 'Kamal uddin' , 18 , 'python' , 'dhaka' , 380 ] ,

    [ 'Rokia katun' , 40 , 'php' , 'dhaka' , 670 ] ,

    [ 'Lutfur rahaman' , 32 , 'java' , 'jessore' , 750 ] ,

    [ 'Eite bagum' , 45 , 'php' , 'dhaka' , 540  ] ,

    [ 'Protish biswas' , 29 , 'python' , 'jessore' , 900 ] ,

    [ 'Anirban mandul' , 21 , 'java' , 'dhaka' , 490 ] ,

    [ 'Somenath roy' , 31 , 'java' , 'dhaka' ,370 ] ,

    [ 'Uzzal khan' , 37 , 'python' , 'jessore' , 780 ] ,

    [ 'Palash biswas' , 42 , 'php' , 'dhaka' , 990 ] ,

    [ 'Prottasha biswas' , 24 , 'python' , 'jessore' , 850 ] ,


] ;


for ( let i = 0; i < deves.length; i++ ) {
    console.log(deves[i]);
    
}




for (let i = 0; i < deves.length; i++ ) {

    console.log(`============================================`);
 
      deves[i].forEach( data => console.log(data))


      console.log(`=============================================`);
    
}







for ( let i = 0; i < deves.length; i++ ) {
   
    deves[1].map( data => console.log(data))





    

console.log(deves[0]);





for ( let i = 0; i < deves.length; i++ ) {
   
    if ( deves[i][2] == "php" ) {
        
        
       console.log(`============================================`);
 
       deves[i].forEach( data => console.log(data)) ;


      console.log(`=============================================`);


}

    }
    







    
for ( let i = 0; i < deves.length; i++ ) {
   
    if ( deves[i][2] == "php" && deves[i][1] >= 20 && deves[i][3] == "jessore") {
        
        
       console.log(`============================================`);
 
       deves[i].forEach( data => console.log(data)) ;


      console.log(`=============================================`);


}

    }
    




    
for ( let i = 0; i < deves.length; i++ ) {
   
    if ( deves[i][2] == "php" ||  deves[i][2] == "python"  ) {
        
        
       console.log(`============================================`);
 
       deves[i].forEach( data => console.log(data)) ;


      console.log(`=============================================`);


}

    }
    




for (let i = 0; i < deves.length; i++) {
   
    if (deves[i][4] >= "400") {
       
        console.log(`=================================`);


        deves[i].forEach( data => console.log(data))
        
        console.log(`========================================`);

}
}





for ( let i = 0; i < deves.length; i++ ) {
   
   console.log(deves[i][4]);
    
}






console.log(deves[0][4]);


// total income of  developer

let totel = 0 ;

for (let i = 0; i < deves.length; i++ ) {
     
   totel= totel + deves[i][4]


   
};

//   console.log( `Manthly totel earn =` + ' '  + totel + ' ' + `dollar`); 


console.log(`Monthly totel earn =  ${totel} doller`);

} ;