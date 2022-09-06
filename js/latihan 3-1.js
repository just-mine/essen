var jmlhangkot = 10;
var angkotberoperasi = 6;
var noangkot = 1;

while(noangkot <= angkotberoperasi) {
    console.log('angkot no ' +noangkot+ ' beroperasi');
    noangkot++;
}

for(noangkot = angkotberoperasi + 1; noangkot <= jmlhangkot; noangkot++ ){
    console.log('angkot no ' + noangkot + ' tidak baik.');
}