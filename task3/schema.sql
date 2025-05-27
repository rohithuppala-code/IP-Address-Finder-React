-- SQL schema for Pizza Runner project


CREATE TABLE runners (
    runner_id INT PRIMARY KEY,
    name VARCHAR(100),
    status ENUM('active', 'inactive')
);

CREATE TABLE customers (
    customer_id INT PRIMARY KEY,
    name VARCHAR(100),
    address TEXT
);

CREATE TABLE pizza_names (
    pizza_id INT PRIMARY KEY,
    pizza_name VARCHAR(100)
);

CREATE TABLE pizza_recipes (
    recipe_id INT PRIMARY KEY,
    pizza_id INT,
    topping_ids VARCHAR(255),
    FOREIGN KEY (pizza_id) REFERENCES pizza_names(pizza_id)
);

CREATE TABLE pizza_toppings (
    topping_id INT PRIMARY KEY,
    topping_name VARCHAR(100)
);

CREATE TABLE customer_orders (
    order_id INT PRIMARY KEY,
    customer_id INT,
    pizza_id INT,
    order_time DATETIME,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id),
    FOREIGN KEY (pizza_id) REFERENCES pizza_names(pizza_id)
);

CREATE TABLE runner_orders (
    order_id INT,
    runner_id INT,
    pickup_time DATETIME,
    delivery_time DATETIME,
    cancellation_reason TEXT,
    PRIMARY KEY (order_id, runner_id),
    FOREIGN KEY (order_id) REFERENCES customer_orders(order_id),
    FOREIGN KEY (runner_id) REFERENCES runners(runner_id)
);

CREATE TABLE order_details (
    detail_id INT PRIMARY KEY AUTO_INCREMENT,
    order_id INT,
    topping_id INT,
    FOREIGN KEY (order_id) REFERENCES customer_orders(order_id),
    FOREIGN KEY (topping_id) REFERENCES pizza_toppings(topping_id)
);
