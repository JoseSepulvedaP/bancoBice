// Parámetros de busqueda permitidos
const keys = ['cobre', 'dolar', 'euro', 'ipc', 'ivp', 'oro', 'plata', 'uf', 'utm', 'yen'];

/** 
 * Valida key ingresada 
*/
const validateKey = (req, res, next) => {
    const { key } = req.params;
    if (keys.indexOf(key) === -1) {
        return res.status(400).json({
            ok: false,
            err: {
                message: `Parámetro ${key} enviado no es válido`
            }
        });
    }
    next();
};

module.exports = {
    validateKey
}