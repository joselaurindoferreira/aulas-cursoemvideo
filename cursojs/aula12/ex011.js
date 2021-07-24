var idade = 70

if(idade < 16){
  console.log('Não vota!')
}else if(idade < 18 || idade >= 70){//esse bloco ja inicia o if em vez de ter escrever outro if em baixo e posteriormente
  console.log('Voto opcionanl!')
}else{
  console.log('Voto obrigatório!')
}

