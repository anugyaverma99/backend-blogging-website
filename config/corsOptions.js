// config/corsOptions.js

const allowedOrigins = [
    'http://localhost:3000', // Frontend URL
    'http://localhost:3001', // Another allowed origin
    'http://example.com'     // Another allowed origin (adjust as needed)
];

const corsOptions = {
    origin: (origin, callback) => {
        // If origin is not present (for non-browser requests) or is in the allowed list
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
};

module.exports = corsOptions;
