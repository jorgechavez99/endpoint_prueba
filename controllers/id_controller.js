

const getId = async (req, res) => {
  const { id, nombre } = req.body;
  try {
    const data = {
      id: id,
      nombre: nombre,
    };

    const datasn={};

    if (data == datasn) {
      return res.status(400).json({
        error: true,
        msg: ["faltan datos"],
      });
    }
    return res.status(200).json({
      error: false,
      data,
    });
  } catch (error) {
    return res.status(500).json({
      error: true,
      msg: ["comuniquese con el administrador"],
    });
  }
};

module.exports = {
  getId,
};
