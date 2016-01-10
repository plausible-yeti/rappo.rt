-- $1 is the client_id
-- $2 are the columns that need to be updated, can be array or single value
-- $3 ar the values corresponding the colums, must be same length as $2
UPDATE client
  SET ($2^) = ($3)
  WHERE client_id = $1
  RETURNING *;
