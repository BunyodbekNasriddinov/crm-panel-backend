-- add branch
INSERT INTO branch(branch_name, branch_phone, branch_address) VALUES ('Chilonzor', '998901234567', 'Chilanzar st.')
-- add admin
INSERT INTO admins(admin_name, branch_id, admin_role, admin_password) VALUES ('bunyodbek', 1, 'admin', 'admin')
-- super admin add
INSERT INTO superadmin(username, password) VALUES ('superadmin', 'superadmin')
-- add a course by admin
INSERT INTO courses(course_name, course_price, branch_id) VALUES ('React Js', 1000000, 1);
-- select course from courses
SELECT * FROM courses AS c INNER JOIN branch AS b ON c.branch_id = b.branch_id;