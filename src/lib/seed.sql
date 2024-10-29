CREATE TABLE People (
    id INT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    location VARCHAR(100),
    comments TEXT
);

INSERT INTO People (id, name, location, comments) VALUES
    (1, 'Alice Johnson', 'Leicester', 'wow amazing!.'),
    (2, 'Bob Smith', 'Los Angeles', 'cool.'),
    (3, 'Charlie Brown', 'London', 'awesome!.'),
    (4, 'Diana Prince', 'San Francisco', 'cool pics'),
    (5, 'Evan Williams', 'Birmingham', 'wow');
