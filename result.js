

const students = [
    
    [ 01 ,  'Rupa roy' , 76 , 80 , 68 , 71 , 69, 88 ] ,
    [ 02 ,  'Repa roy' , 75 , 60 , 98 , 61 , 89, 87 ] ,
    [ 03 ,  'Runa roy' , 76 , 86 , 68 , 76 , 69, 88 ] ,
    [ 04 ,  'Rup roy' , 56 , 80 , 69 , 71 , 89, 78 ] ,
    [ 05 ,  'Lupa roy' , 75 , 32 , 68 , 61 , 69, 87 ] ,
    [ 06 ,  'Rmpa roy' , 76 , 80 , 98 , 76 , 68, 88 ] ,
    [ 07 ,  'Limpa roy' , 56 , 86 , 69 , 61 , 69, 78 ] ,
    [ 08 ,  'Rupaly roy' , 76 , 80 , 68 , 71 , 89, 88 ] ,
    [ 09 ,  'Rina roy' , 75 , 60 , 98 , 61 , 68, 87 ] ,
    [ 10 ,  'Rinku roy' , 56 , 86 , 30 , 76 , 89, 78 ] ,
] ;


for (let i = 0; i < students.length; i++) {
    let bn = students[i][2] 
    let en = students[i][3] 
    let math = students[i][4] 
    let s = students[i][5] 
    let ss = students[i][6] 
    let rel = students[i][7] 
    let totel = bn + en + math + s + ss + rel  ;

    




// Result calculation 

function Result() {

    this.gpa = function (markes) {

        let gpa;

        if (markes >= 0 && markes <= 32) {
            gpa = 0;
        } else if (markes >= 33 && markes <= 39) {
            gpa = 1;
        } else if (markes >= 40 && markes <= 49) {
            gpa = 2;
        } else if (markes >= 50 && markes <= 59) {
            gpa = 3;
        } else if (markes >= 60 && markes <= 69) {
            gpa = 3.5;
        } else if (markes >= 70 && markes <= 79) {
            gpa = 4;
        } else if (markes >= 80 && markes <= 100) {
            gpa = 5;

        }

        return gpa;
    }


    

    this.grade = function (markes) {

        let grade;
    
        if (markes >= 0 && markes <= 32) {
                grade = "F";
        } else if (markes >= 33 && markes <= 39) {
                grade = "D";
        } else if (markes >= 40 && markes <= 49) {
                grade = "C";
        } else if (markes >= 50 && markes <= 59) {
                grade = "B";
        } else if (markes >= 60 && markes <= 69) {
                grade = "A-";
        } else if (markes >= 70 && markes <= 79) {
                grade = "A";
        } else if (markes >= 80 && markes <= 100) {
                grade = "A+";
    
        }
    
            return grade;
    
    }


    this.cgpa = function (bn, en, math, s, ss, rel) {

        let totel_gpa = (bn + en + math + s + ss + rel);
        let cgpa = totel_gpa / 6;

        if (bn == 0 || en == 0 || math == 0 || s == 0 || ss == 0 || rel == 0) {
            return `You are faild . `
        } else {
            return ` ${cgpa.toFixed(2)}    Totel Grade  : ${ this.totel_grade(cgpa) }  `

        }




    }


    this.totel_grade = function (cgpa) {
        

        if (cgpa >= 0 && cgpa < 1) {
            return cgpa = "F"
        } else if (cgpa >= 1 && cgpa < 2) {
            return cgpa = "D"
        } else if (cgpa >= 2 && cgpa < 3) {
            return cgpa = "c"
        } else if (cgpa >= 3 && cgpa < 3.5) {
            return cgpa = "B"
        } else if (cgpa >= 3.5 && cgpa < 4) {
            return cgpa = "A-"
        } else if (cgpa >= 4 && cgpa < 5) {
            return cgpa = "A"
        } else if (cgpa == 5) {
            return cgpa = "A+"
        }
            
        



        




    }




    
}


let re = new Result() ;






console.log(`

Roll          : ${students[i][0]}

Student Name  :  ${students[i][1]}

Subject           Markes          GPA                  GRADe   

Bangla           ${bn}            ${re.gpa(bn)}                     ${re.grade(bn)}

English          ${en}            ${re.gpa(en)}                     ${re.grade(en)}

Math             ${math}          ${re.gpa(math)}                  ${re.grade(math)}

Science          ${s}             ${re.gpa(s)}                      ${re.grade(s)}

S Science        ${ss}            ${re.gpa(ss)}                     ${re.grade(ss)}

Religion         ${rel}           ${re.gpa(rel)}                    ${re.grade(rel)}


Totel Markes  : ${totel}          CGPA  :  ${re.cgpa(re.gpa(bn),re.gpa(en),re.gpa(math),re.gpa(s),re.gpa(ss),re.gpa(rel))}  

`);





}


