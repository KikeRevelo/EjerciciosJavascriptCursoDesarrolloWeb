const metodoPago='bitcoin';
switch(metodoPago){
    case 'tarjeta':
        console.log('Pagaste con Tarjeta');
        break;
        case 'efectivo':
            console.log('Pagaste con efectivo')
    break;
    case 'bitcoin':
        console.log('Pagaste con Bitcoin');
        break;
    case 'cheque':
        console.log('Pagaste con cheque')
          default:
    console.log('No has pagado')
    break;

}