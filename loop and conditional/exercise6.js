var students=[["ilaya",78],["selva",98],["ganesh",97],["dhivya",96]]
var avgmark=0
  for (var i=0; i<students.length; i++) {
  	   avgmark += students[i][1];
  	   var avg=(avgmark/students.length);
  }
  console.log(avg)
  if (avg < 60){
          console.log("Grade : F");      
          } 
        else if (avg < 70) {
                console.log("Grade : D"); 
                  } 
        else if (avg < 80) 
             {
                console.log("Grade : C"); 
        } else if (avg < 90) {
                console.log("Grade : B"); 
        } else if (avg < 100) {
                console.log("Grade : A"); 
}