const sqlite3 = require('sqlite3').verbose();

// Create a new database file (if it doesn't exist)
const db = new sqlite3.Database('./mydatabase.db', (err) => {
    if (err) {
        console.error('Error opening database', err.message);
    } else {
        console.log('Database created successfully.');

        // Create a table
        db.run(`CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL UNIQUE
        )`, (err) => {
            if (err) {
                console.error('Error creating table', err.message);
            } else {
                console.log('Table created successfully.');

                // Insert sample data
                db.run(`INSERT INTO users (name, email) VALUES ('Luqman', 'luqman@example.com')`);
                console.log('Sample data inserted.');
            }
        });

        // Close the database connection
        db.close((err) => {
            if (err) {
                console.error('Error closing database', err.message);
            } else {
                console.log('Database closed.');
            }
        });
    }
});
