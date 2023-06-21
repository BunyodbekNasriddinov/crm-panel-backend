-- add branch
INSERT INTO branch(branch_name, branch_phone, branch_address) VALUES ('Chilonzor', '998901234567', 'Chilanzar st.')
-- add admin
INSERT INTO admins(admin_name, branch_id, admin_role, admin_password) VALUES ('bunyodbek', 1, 'admin', 'admin')
-- super admin add
INSERT INTO superadmin(username, password) VALUES ('superadmin', 'superadmin')