var items = prompt('masukkan nama makanan : \n (cth: nasi, daging)');

switch (items){
    case 'nasi':
    case 'sayur':
        alert('makanan sehat');
        break;
    case 'daging':
    case 'ikan':
        alert('makanan sehat1');
        break;
    default:
        alert('makanan tidak sehat');
        break;
}