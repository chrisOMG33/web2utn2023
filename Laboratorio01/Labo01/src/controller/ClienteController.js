const clientes = [
    {
      cedula: '604710635',
      nombre: 'Christopher',
      apellido1: 'Carmona',
      apellido2: 'Eliznodo',
      fechaNacimiento: '2002-03-18',
      genero: 'M',
      estado: true
    },
    {
      cedula: '604500855',
      nombre: 'Jimena',
      apellido1: 'Rodriguez',
      apellido2: 'Elizondo',
      fechaNacimiento: '1999-01-16',
      genero: 'F',
      estado: false
    }
  ];
  
  module.exports = {
    obtenerTodos: (req, res) => {
      res.json(clientes);
    },
    obtenerPorCedula: (req, res) => {
      const { cedula } = req.params;
      const cliente = clientes.find((cliente) => cliente.cedula === cedula);
      if (cliente) {
        res.json(cliente);
      } else {
        res.status(404).json({ error: 'No se encontro el cliente' });
      }
    }
  };
  