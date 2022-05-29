//01
const avgDolphins= (96+108+89)/3
const avgKoalas= (88+91+110)/3
console.log(avgDolphins,avgKoalas)


if(avgDolphins> avgKoalas){
    console.log("winner is Dolphins")
}else{
    console.log("Winner is Koalas")
}

//02 

const avgDolphins2= (97+112+101)/3
const avgKoalas2= (109+95+123)/3
console.log(avgDolphins2,avgKoalas2)


if(avgDolphins2> avgKoalas2 && avgDolphins2>= 100){
    console.log("winner is Dolphins")
}else if(avgKoalas2> avgDolphins2 && avgKoalas2 >=100){
    console.log("Winner is Koalas")
}

//03

const avgDolphins3= (97+112+101)/3
const avgKoalas3= (109+95+106)/3
console.log(avgDolphins3,avgKoalas3)


if(avgDolphins3> avgKoalas3&& avgDolphins3>=100){
    console.log("Winner is Dolphins")
}else if(avgKoalas3> avgDolphins3 && avgKoalas3>=100){

  console.log("Winner is Koalas")

  
}else if(avgKoalas3==avgDolphins3&&avgKoalas3>=100&&avgDolphins3>=100){
    console.log("This is draw")
}else {
    console.log("There is no winner")
}



const day= prompt("Enter the day: ") //bilgi girisi bunlarla yapildi. alttskiler örnek cözümlemeler.
const time= prompt("Enter the time: ")

if (day !="Monday" && day !="Tuesday" && day !="Wednesday" && day !="Thursday" && day !="Friday" && day !="Saturday" && day !="Sunday" ){
alert("Please enter valid day")
}

//Hocanin yaptigi yöntem ayni soru icin;

if (day !="Saturday" && day != "Sunday" && (time>=10 && time <21)){
    console.log("Open!")
}else{
    console.log("Close!")
}

//Sonuc  Sunday 10 CLOSED! Monday  saat 16 Open!__________________

/*
//diger yazma yöntemi
if (hour <= 21 && hour >= 10) {
    switch (day){
        case ("monday"):
            console.log("OPEN!")
            break
    
        case ("Tuesday"):
            console.log("OPEN!")
            break
   
        case ("Wednesday"):
            console.log("OPEN!")
            break
    
        case ("Thursday"):
            console.log("OPEN!")
            break
    
        case ("Friday"):
            console.log("OPEN!")
            break
        case ("Default"):
            console.log("CLOSED!")
            break
} 
}
else{

        console.log("CLOSED!")
}

//Bir baska sekilde yazacak olursak;

if(gun=="Monday"&& time<=21) {console.log("open")}
else if (gun=="Tuesday" && time >=10 && time<=21) {console.log("open")}
else if (gun=="Wednesday" && time >=10 && time<=21) {console.log("open")}
else if (gun=="Thursday" && time >=10 && time<=21) {console.log("open")}
else if (gun=="Friday" && time >=10 && time<=21) {console.log("open")}
else                                              {console.log("close")}
*/

// yukaridaki proje ile hangi gün ne yapilabilecegi ve duruma göre ifli yapi ile kodlamanin nasil yapildigi izah edildi.