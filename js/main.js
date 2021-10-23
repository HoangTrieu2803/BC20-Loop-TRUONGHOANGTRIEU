/**
 * Bai1
 */

function timChanLe(){
    var n =100;
    var soChan = "";
    var soLe = "";
    for(var i = 0 ; i<n;i++){
        if(i % 2 == 0){
            soChan = soChan+ " " + i;
        }else if(i % 2 != 0){
            soLe = soLe+ " " +i;
        }
    }
    document.getElementById("txtChanLe").innerHTML ="so chan: " +soChan +"<br>" + "so le: " + soLe ;
}
document.getElementById("btnChanLe").onclick = timChanLe;
/**
 * Bai 2
 */

function soChiaHetCho3(){
    var n=1000;
    var count = 0;
    for (var i = 0; i<n;i++){
        if(i % 3 ==0){
            count++;
        }
    }
    document.getElementById("txtChiaHetCho3").innerHTML = "So chia het cho 3 nho hon 1000: " + count;
}
document.getElementById("btnChiaHetCho3").onclick = soChiaHetCho3;
/**
 * Bai 3
 */
function timSoNguyen(){
    var sum=0;
    var pos =0;
    for(var i =1 ; sum <10000 ; i++){
        sum += i;
        pos =i;
    }
    document.getElementById("txtTimSoNguyen").innerHTML = "So nguyen duong nho nhat: "+pos;
}
document.getElementById("btnTimSoNguyen").onclick = timSoNguyen;
/**
 * Bai 4
 */

function sumN(){
    var sum = 0;
    var x = document.getElementById("inputX").value;
    var n = document.getElementById("inputN").value;
    for(var i =1 ; i <= n ; i++){
        sum += Math.pow(x,i); 
    }
    document.getElementById("txtSum").innerHTML = "Tong: " + sum;
}
document.getElementById("btnSum").onclick = sumN;
/**
 * Bai 5
 */
function tinhGiaiThua(){
    var sum= 1;
    var n = document.getElementById("inputSoN").value;
    for(var i = 1; i <= n ; i++){
        sum *= i;
    }
    document.getElementById("txtSumN").innerHTML = "Giai thua: "+sum;
}
document.getElementById("btnSumN").onclick = tinhGiaiThua;
/**
 * Bai 7
 */
function timSNT(){
    var soNT = "";
    var count =0;
    var n = document.getElementById("inputTimSNT").value;
    for(var i=2 ; i<=n ; i++){
        for(var j=1 ; j<=n ; j++){
            if( i % j == 0){
                count++;
                }
            }
        if(count==2){
            soNT = soNT + " " + i;
            count =0;
        }else{
            count =0;
        }
    }
  document.getElementById("txtTimSNT").innerHTML ="Cac so nguyen to: "+ soNT;
}
document.getElementById("btnTimSNT").onclick = timSNT;