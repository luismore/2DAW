let fechaHoy = new Date();
let fecha187 = new Date();
let fecha85 = new Date();
let fechaResto = new Date();

fechaHoy.setDate(fechaHoy.getDate() + 85);
fechaHoy.setDate(fechaHoy.getDate() - 187);

fecha85.setFullYear(fecha85.getFullYear() + 2);
fecha187.setHours(fecha187.getHours() - 24);
fechaResto.setDate(fecha85.getDate() - fecha187.getDate());

document.write(fechaResto);