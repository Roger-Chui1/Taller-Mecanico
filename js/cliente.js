class DatosCliente {
  constructor(nombre, direccion, telefono) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.telefono = telefono;
  }
  setNombre(nom) {
    this.nombre = nom;
  }
  setDireccion(dir) {
    this.direccion = dir;
  }
  setTelefono(tel) {
    this.telefono = tel;
  }
  getNombre() {
    return this.nombre;
  }
  getDireccion() {
    return this.direccion;
  }
  getTelefono() {
    return this.telefono;
  }
}
class DatosVehiculo {
  constructor(marca, modelo, color, placa) {
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.placa = placa;
  }
  setMarca(mar) {
    this.marca = mar;
  }
  setModelo(mod) {
    this.modelo = mod;
  }
  setColor(col) {
    this.color = col;
  }
  setPlaca(pla) {
    this.placa = pla;
  }
  getMarca() {
    return this.marca;
  }
  getModelo() {
    return this.modelo;
  }
  getColor() {
    return this.color;
  }
  getPlaca() {
    return this.placa;
  }
}
/*let fun = () => {
  let d1 = document.getElementById("d1").value;
  let d2 = document.getElementById("d2").value;
  let d3 = document.getElementById("d3").value;
  let d4 = document.getElementById("d4").value;
  let d5 = document.getElementById("d5").value;
  let d6 = document.getElementById("d6").value;
  let d7 = document.getElementById("d7").value;
  let res = new OrdenDeTrabajo(d1, d2, d3, d4, d5, d6, d7);
  let datos = [res];
  let dat = datos.length - 1;
  let texto = ` <tr>
                <td>${dat + 1}</td>
                <td>${datos[dat].getNombre()}</td>
                <td>${datos[dat].getDireccion()}</td>
                <td>${datos[dat].getTelefono()}</td>
                <td>${datos[dat].getMarca()}</td>
                <td>${datos[dat].getModelo()}</td>
                <td>${datos[dat].getColor()}</td>
                <td>${datos[dat].getPlaca()}</td>
            </tr>`;
  document.getElementById("mostrar").innerHTML = texto;
};*/
$(document).ready(function () {
  let res1;
  let res2;
  let datos1 = [];
  let datos2 = [];
  $("#reg").on("click", function () {
    let d1 = document.getElementById("d1").value;
    let d2 = document.getElementById("d2").value;
    let d3 = document.getElementById("d3").value;
    let d4 = document.getElementById("d4").value;
    let d5 = document.getElementById("d5").value;
    let d6 = document.getElementById("d6").value;
    let d7 = document.getElementById("d7").value;
    res1 = new DatosCliente(d1, d2, d3);
    res2 = new DatosVehiculo(d4, d5, d6, d7);
    datos1.push(res1);
    datos2.push(res2);
    let dat1 = datos1.length - 1;
    let dat2 = datos2.length - 1;
    let texto1 = `<tr>
                <td>${dat1 + 1}</td>
                <td>${datos1[dat1].getNombre()}</td>
                <td>${datos1[dat1].getDireccion()}</td>
                <td>${datos1[dat1].getTelefono()}</td>
            </tr>`;
    let texto2 = `<tr>
                <td>${dat2 + 1}</td>
                <td>${datos2[dat2].getMarca()}</td>
                <td>${datos2[dat2].getModelo()}</td>
                <td>${datos2[dat2].getColor()}</td>
                <td>${datos2[dat2].getPlaca()}</td>
            </tr>`;
    $("#mostrar1").append(texto1);
    $("#mostrar2").append(texto2);
    $("[type='text']").val("");
    $("[type='number']").val("");
  });
});
