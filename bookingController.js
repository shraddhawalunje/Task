const Booking = require('../models/Booking');
const Movie = require('../models/Movie');

exports.bookTickets = async (req, res) => {
    const { user, movie, seats, totalPrice, showtime } = req.body;

    try {
        const newBooking = new Booking({
            user,
            movie,
            seats,
            totalPrice,
            showtime,
        });

        await newBooking.save();
        res.json(newBooking);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
