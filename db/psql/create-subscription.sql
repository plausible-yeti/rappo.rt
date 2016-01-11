-- create subscription if it doesn't exist
-- connect subscription to client in join table

INSERT INTO subscriptions (subscription_type, subscription_name)
VALUES ($1, $2);



-- COLUMNS
-- // subscription_type
-- // subscription_name