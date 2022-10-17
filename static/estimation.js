let v1;
let v2;
let tot_data=document.getElementById("tot_exi");
let v3;
window.addEventListener('load',()=>{
    v1=Number(window.sessionStorage.getItem('additionaldatasize'));
    v2=Number(window.sessionStorage.getItem('existingdatasize'));
    v3=Number(window.sessionStorage.getItem('dataaverageestimated'));
    console.log(v1);
    console.log(v2);
    console.log(v3);
    tot_data=document.getElementById("tot_exi");
    tot_data.value=Math.round(((v2+v1)/1024));
})


let repfac=document.getElementById("rep_fac");
let intdata=document.getElementById("int_data");
let av_disk=document.getElementById("av_disk");

let totalstorage=document.getElementById("tot_stor_req");
let totalnumberstoredata=document.getElementById("totalnumber");
let existingdatasize=v2;
let existingdatasizeper=v1;
let diskspaceutil=document.getElementById("disk_space_util");
let Compressionratio=document.getElementById("Compression_ratio");
let TotalStoragerequirement=document.getElementById("Total_Storage_requirement");
let Availabledisksizeforstorage=document.getElementById("Available_disk_size_for_storage");
let Total_numberofrequireddatanodes=document.getElementById("Total_number_of_required_data_nodes");
let Actualusableclustersize=document.getElementById("Actual_usable_cluster_size");

let valteds;
function calexistingdatasize(){
    valteds=((v2+v1)/1024);   
    return valteds;
}
let val1=valteds;
function calculatetotalstorager(val1){
let rval=Number(repfac.value);
let intdataval=Number(intdata.value);
  valtotalstoragere=(rval+intdataval)*val1;
  return valtotalstoragere;
}
function totreqdatanodes(val2){
    let avdisk=Number(av_disk.value);
    valtotalnumberstoredata=val2/avdisk;
    return valtotalnumberstoredata;
}
function caltotalstoragereq(val2){
    let Compressionrat=parseFloat(Compressionratio.value)
    val4=parseFloat(val2/Compressionrat);
    return val4;
}
function calavadisksizestor(val4){
    let diskspace=Number(diskspaceutil.value);
    diskspace=diskspace/100;
    let avdisk=Number(av_disk.value);
    val5=avdisk*diskspace;
    return val5;
}
function calavailabledisksizeforstorage(val4,val5){
    val6=val4/val5;
    return val6;
}
function calactualusableclustersize(val6){
    let rval=Number(repfac.value);
    let intdataval=Number(intdata.value);
    let avdisk=Number(av_disk.value);
    let Compressionrat=parseFloat(Compressionratio.value);
    val7=(avdisk*Compressionrat*val6)/(intdataval +rval);
    return rval;
}
function caladitionaldata(a,b){
    val=a/b;
    return val;
}
function caladitionaldata1(val4){
     val8=v3*val4;
     return val8;
}

function caladitionaldata2(val4,val8){
    val10=(val4+val8)*v3;
    return val10;
}
function caladitionaldata3(val4,val8,val10){
    val12=(val4+val8+val10)*v3;
    return val12;
}
function caladitionaldata4(val4,val8,val10,val12){
    val14=(val4+val8+val10+val12)*v3;
    return val14;
}
 function cacoverall(a){
    return v3;
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

let OverallAverageEstimated=document.getElementById("Overall_Average_Estimated");

let fQuarter1=document.getElementById("1st_Quarter_1");
let fQuarter2=document.getElementById("1st_Quarter_2");
let sQuarter1=document.getElementById("2nd_Quarter_1");
let sQuarter2=document.getElementById("2nd_Quarter_2");
let tQuarter1=document.getElementById("3rd_Quarter_1");
let tQuarter2=document.getElementById("3rd_Quarter_2");
let foQuarter1=document.getElementById("4th_Quarter_1");
let foQuarter2=document.getElementById("4th_Quarter_2");
//coming from sheet1

let inputarray=document.querySelectorAll(".inputclass");
console.log(inputarray);
for(let i=0;i<inputarray.length;i++){
    inputarray[i].addEventListener("keydown",function(e){
        if(e.key="Enter" && repfac.value && intdata.value && av_disk.value){
           
            val1=calexistingdatasize();

            val2=calculatetotalstorager(val1);
            totalstorage.value=Math.round(val2);

            val3=totreqdatanodes(val2);
            totalnumberstoredata.value=Math.round(val3);
            

            val4=caltotalstoragereq(val2);
            v4=roundfunc(val4);
            TotalStoragerequirement.value=v4;
            
            val5=calavadisksizestor(val4);
            v5=roundfunc(val5);
            Availabledisksizeforstorage.value=v5;
             
            val6=calavailabledisksizeforstorage(val4,val5);
            v6=Math.floor(val6);
            Total_numberofrequireddatanodes.value=v6;

            val7=calactualusableclustersize(val6);
            v7=Math.floor(val7)
            Actualusableclustersize.value=v7;
            
            val100=cacoverall(val6);
            OverallAverageEstimated.value=val100;



            val8=caladitionaldata1(val4);
            v8=roundfunc(val8);
            fQuarter1.value=v8;

            val9=caladitionaldata(val8,val5);
            
            fQuarter2.value=Math.round(val9);

            val10=caladitionaldata2(val4,val8);
            v10=roundfunc(val10);
            sQuarter1.value=v10;


           

            val11=caladitionaldata(val10,val5);
            
            sQuarter2.value=Math.round(val11);

            val12=caladitionaldata3(val4,val8,val10);
            v12=roundfunc(val12);
            tQuarter1.value=v12;

            val13=caladitionaldata(val12,val5);
            tQuarter2.value=Math.round(val13);

            val14=caladitionaldata4(val4,val8,val10,val12);
            v14=roundfunc(val14);
            foQuarter1.value=v14;

            val15=caladitionaldata(val14,val5);
            foQuarter2.value=Math.round(val15);

        }
    })
}

