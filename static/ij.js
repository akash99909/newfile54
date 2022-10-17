
let n=document.getElementById("sumconatiner");
let a = document.getElementsByName("sen11[]");
let c12 = document.getElementsByName("sen12[]");
let allitems=document.querySelectorAll(".inputbox");

function def(){  
   
    let c=0;
    for(let i=0;i<a.length;i++){
        if(a[i].value=="" || c12[i].value==""){
            alert("Enter all the fields");
        }
        else{
            m1();
        }
    }
}
function m1(){
    var keys = Object.keys(a);    
    var len = keys.length;
    console.log(a)
    sum12=0;
    for(let i=0;i<len;i++){
       sum12=sum12+Number(document.getElementsByName("sen11[]")[i].value);  
    }
   console.log(sum12);    
   //let n=document.getElementById("sumconatiner");
   n.value=sum12;
   console.log(sum12); 

   let abc=document.getElementById("overall");

   b = document.getElementsByName("sen12[]");
    var keys = Object.keys(b);
   
    var len = keys.length;
    console.log(b)
   sum123=0; 
    for(let i=0;i<len;i++){
       sum123=sum123+Number(document.getElementsByName("sen12[]")[i].value);  
   }
   console.log(sum123); 
   sum123=sum123/len;   
  s9=roundfunc(sum123);
   abc.value=s9;
}      

let elem=document.querySelector(".hovertoclass");
elem.addEventListener("keydown",function(e){
    if(e.key="Enter" && elem.value){
        let sum12=document.getElementById("sumconatiner").value;
        sum12=Number(sum12);
//et sp=document.getElementById("storedper");
        let gp=document.getElementById("givenper").value;
        gp=Number(gp);
        let asp=((gp/100)*sum12);
        finalval=roundfunc(asp)
        sp.value=finalval;
    }
})
let sp=document.getElementById("storedper");
function myfunction(){

}
s = document.getElementsByClassName("newColumn");
function addRows() {
    let r;
    let text;
    r=prompt("how many rows:", );
    if(r==null || r==" "){
        text="User cxancelled the prompt";
    }
    else{
        text=r;
    }
    let flag=false;
    for(let i=0;i<text.length;i++){
        let b=text.charCodeAt(i);
        if(48<=b && b<=57){

        }  
        else{
            flag=true;
            break;
        }
    }
    if(flag==true){
        alert("PLEASE ENTER A VALID NUMBER:");
    }

    for (let i = 0 ; i < r; i++){
    obj = document.createElement("div");
    obj.innerHTML = '<input name="sen1[]" class="inputbox" required><input name = "sen2[]" class="inputbox" required><input name="sen3[]" class="inputbox" required><input name="sen4[]" class="inputbox" required><input name="sen5[]" class="inputbox" required><input name="sen6[]" class="inputbox" required><input name="sen7[]" class="inputbox" required><input name="sen8[]" class="inputbox" required><input name="sen9[]" class="inputbox" required><input name="sen10[]"class="inputbox" required><input name="sen11[]" class="inputbox" required><input name="sen12[]" class="inputbox" required>';
    s[0].appendChild(obj)}
}

function doff(){
    sessionStorage.setItem('dataaverageestimated',sum123);  
    sessionStorage.setItem("existingdatasize",sum12);
    sessionStorage.setItem("additionaldatasize",sp.value);
    
    return;
}

function roundfunc(n){
    if(n==0){
        return n;
    }
     let m=Math.floor(n*100);
     
     let q=m%10;
     let a=Math.floor(m/10);
     if(q<5){
        let ans=Number(a/10);
        return ans;
    }
     else{
        let a1=a+1;
        a1=Number(a1/10);
        return a1;
    }
}       