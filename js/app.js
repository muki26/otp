function resend(){
var num = Math.random();

var otp = num*1000000;

otp = otp | 0;


if(otp<100){
    otp = otp*10000;
}

else if(otp<1000){
    otp = otp*1000;
}

else if(otp<10000){
    otp = otp*100;
}

else if(otp<100000){
    otp = otp*10;
}
document.getElementById('otp').innerHTML = otp;


}

var resendButton = document.getElementById('button');
resendButton.addEventListener('click',resend);
resend();