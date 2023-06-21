ALTER TABLE admins 
ALTER COLUNM admin_role TYPE VARCHAR(15)

-- super admin table
CREATE TABLE superadmin(
  id SERIAL NOT NULL,
  username VARCHAR(32) NOT NULL, 
  password VARCHAR(60) NOT NULL
)
-- courses
ALTER TABLE admins 
ALTER COLUNM admin_role TYPE VARCHAR(15)