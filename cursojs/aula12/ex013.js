var agora = new Date();
var diaSem = agora.getDay();
/*
0 dom
1 seg
2 ter
3 qua
4 qui
5 sex
6 sab
*/
switch(diaSem){
  case 0:
    console.log('Hoje é Domingo.');
  break;
  case 1:
    console.log('Hoje é Segunda-feira.');
  break;
  case 2:
    console.log('Hoje é Terça.');
  break;
  case 3:
    console.log('Hoje é Quarta.');
  break;
  case 4:
    console.log('Hoje é Quinta.');
  break;
  case 5:
    console.log('Hoje é Sexta.');
  break;
  case 6:
    console.log('Hoje é Sábado.');
  break;
  default:
    console.log('Dia inválido!');
  break;
}
