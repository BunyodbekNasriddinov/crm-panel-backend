ALTER TABLE admins 
ALTER COLUMN admin_role TYPE VARCHAR(15)

-- super admin table
CREATE TABLE superadmin(
  id SERIAL NOT NULL,
  username VARCHAR(32) NOT NULL, 
  password VARCHAR(60) NOT NULL
)
-- courses
ALTER TABLE admins 
ALTER COLUNM admin_role TYPE VARCHAR(15)
-- course image
ALTER TABLE courses 
ADD COLUMN course_image VARCHAR(64)


-- edit table techers
ALTER TABLE 
  teachers
ADD COLUMN teacher_password VARCHAR(100) NOT NULL; 

ALTER TABLE 
  teachers
ADD COLUMN first_name VARCHAR(50) NOT NULL;

ALTER TABLE 
  teachers
ADD COLUMN last_name VARCHAR(50) NOT NULL;

ALTER TABLE table_name
DROP COLUMN column_name;

ALTER TABLE 
  groups
ADD COLUMN group_end_date DATE NOT NULL;

ALTER TABLE 
  groups
ADD COLUMN group_weaks VARCHAR(80) NOT NULL;

-- superadmin role column add
ALTER TABLE superadmin
ADD COLUMN role VARCHAR(16)

