export default (DISHES, menuData, cartItem, totalBuyed) => {
    DISHES.get('/', (req, res) => {
        res.json(menuData);
    });

    DISHES.get('/buyed', (req, res) => {
        cartItem.push(menuData.find(dis => dis.itemId === Number(req.query.itemId)));
        console.log(cartItem)
        res.json(cartItem);
    });

    DISHES.delete('/buyed', (req, res) => {
        cartItem.splice(dis => dis.itemId === Number(req.query.itemId), 1);
        console.log(cartItem);
        res.json(cartItem);
    });

    DISHES.get('/finalCart', (req, res) => {
        let x = cartItem.map(total => total.price);
        let reducer = (itemSum, currentValue) => itemSum + currentValue;
        totalBuyed = x.reduce(reducer)
        console.log(x.reduce(reducer));
        res.json(totalBuyed)
    });

}