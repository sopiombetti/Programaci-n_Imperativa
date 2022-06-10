// EJERCICIO (clase 8/6)

let arrayCuentas = [
    {
      nroCuenta: 5486273622,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 27771,
      titularCuenta: "Abigael Natte",
    },
    {
      nroCuenta: 1183971869,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 8675,
      titularCuenta: "Ramon Connell",
    },
    {
      nroCuenta: 9582019689,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 27363,
      titularCuenta: "Jarret Lafuente",
    },
    {
      nroCuenta: 1761924656,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 32415,
      titularCuenta: "Ansel Ardley",
    },
    {
      nroCuenta: 7401971607,
      tipoDeCuenta: "Cuenta Unica",
      saldoEnPesos: 18789,
      titularCuenta: "Jacki Shurmer",
    },
  ];

  let banco = {
      clientes : arrayCuentas,
      consultarCliente : function (titular) {
        // let clienteEncontrado = banco.consultarCliente('Ramon Connell');
        for (i = 0; i < arrayCuentas.length; i++){
            const clienteEncontrado = arrayCuentas[i];
            if (clienteEncontrado.titularCuenta == titular){
                return clienteEncontrado;
            }
        }

      },
      deposito : function (titular, cantDinero) {

      }
      
  }
  console.log(banco.consultarCliente('Ansel Ardle'));