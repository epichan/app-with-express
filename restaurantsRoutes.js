export default (RESTAURANTS, restaurantData) => {
    RESTAURANTS.get('/', (req, res) => {
        res.json(restaurantData);
    });

    RESTAURANTS.get('/:id', (req, res) => {
        const selectedRestaurant = restaurantData.find(restoran => restoran.id === Number(req.params.id));
        if (selectedRestaurant) {
            res.json(selectedRestaurant);
        } else {
            res.json({status: 'error', msg: 'Restaurant not found'})
        }
        
    });
}