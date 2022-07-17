
function formattedData(date) {
 // return date.toLocaleDateString('pt-BR', {
  //  year: 'numeric',
 //   month: 'long',
  //  day: 'numeric',
  //});
  //return date.toLocaleDateString('pt-BR', {
   // year: 'numeric',
   // month: 'numeric',
   // day: 'numeric',
 // })

 /*return date.toLocaleDateString('pt-BR', {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric', 
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
 }) */
 //return date.toLocaleDateString('pt-BR', {date:'dd/MM/yyyy as HH:mm:ss'});

 const ano = date.getFullYear();
 const mes = date.getMonth() + 1;
 const dia = date.getDate();
 const hora = date.getHours();
 const minuto = date.getMinutes();  
 const segundo = date.getSeconds();

  return `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`;
}
const data = new Date();
const dateFormatted = formattedData(data);
console.log(dateFormatted);
// const dateFormatted = `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;