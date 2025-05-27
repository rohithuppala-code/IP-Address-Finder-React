-- sQL queries for Pizza Runner case study

-- Delivered pizzas
SELECT co.order_id, cn.name AS customer, pn.pizza_name, ro.delivery_time 
FROM customer_orders co
JOIN customers cn ON co.customer_id = cn.customer_id
JOIN pizza_names pn ON co.pizza_id = pn.pizza_id
JOIN runner_orders ro ON co.order_id = ro.order_id
WHERE ro.delivery_time IS NOT NULL;

-- Toppings used in each pizza
SELECT co.order_id, pt.topping name
FROM order_details od
JOIN pizza_toppings pt ON od.topping_id = pt.topping_id
JOIN customer_orders co ON co.order_id = od.order_id;