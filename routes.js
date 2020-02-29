module.exports = (APP, restaurantData, menuData, cartItem) => { //se pone dentro de un a función module.exports = () => {}
 
APP.get('/', (req, res) =>{
    // .filter crea un nuevo array con todos los elementos que cumplan la condición
    // .find devuelve el valor del primer elemento del array que cumple la función

    const result = restaurantData.find(area => area.id === Number(req.body.id));
    console.log(result)

    console.log(req.body.id);
    res.send(result);       
},

/*Create*/
APP.get('/menuItem', (req, res) => {
    cartItem.push(menuData[req.body.itemId].name);
    console.log(cartItem)
    res.json(cartItem)
})
    
)}