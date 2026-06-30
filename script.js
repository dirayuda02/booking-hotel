function bookHotel(){

let inDate=
document.getElementById(
"checkin"
).value;

let outDate=
document.getElementById(
"checkout"
).value;

if(
!inDate ||
!outDate
){
alert(
"Pilih tanggal terlebih dahulu"
);
return;
}

alert(
"Hotel tersedia!\n\nCheck In: "
+
inDate
+
"\nCheck Out: "
+
outDate
);

}
