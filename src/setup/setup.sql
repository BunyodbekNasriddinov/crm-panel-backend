CREATE TABLE "groups"(
    "group_id" SERIAL NOT NULL,
    "group_name" VARCHAR(12) NOT NULL,
    "group_date" VARCHAR(64) NOT NULL,
    "group_time" VARCHAR(5) NOT NULL,
    "teacher_id" INTEGER NOT NULL,
    "room_id" INTEGER NOT NULL,
    "course_id" INTEGER NOT NULL
);
ALTER TABLE
    "groups" ADD PRIMARY KEY("group_id");
CREATE TABLE "rooms"(
    "room_id" SERIAL NOT NULL,
    "room_name" VARCHAR(16) NOT NULL,
    "branch_id" INTEGER NOT NULL
);
ALTER TABLE
    "rooms" ADD PRIMARY KEY("room_id");
CREATE TABLE "attendances"(
    "attendance_id" SERIAL NOT NULL,
    "attendance_date" DATE NOT NULL,
    "student_id" INTEGER NOT NULL,
    "attendance_status" VARCHAR(12) NOT NULL,
    "group_id" INTEGER NOT NULL,
    "attendace_body" VARCHAR(255) NULL
);
ALTER TABLE
    "attendances" ADD PRIMARY KEY("attendance_id");
CREATE TABLE "teachers"(
    "teacher_id" SERIAL NOT NULL,
    "teacher_full_name" VARCHAR(24) NOT NULL,
    "teacher_level" VARCHAR(24) NOT NULL,
    "teacher_avatar" VARCHAR(64) NOT NULL,
    "teacher_full_info" VARCHAR(128) NOT NULL,
    "teacher_created_at" DATE NOT NULL DEFAULT CURRENT_DATE,
    "teacher_role" VARCHAR(32) NOT NULL
);
ALTER TABLE
    "teachers" ADD PRIMARY KEY("teacher_id");
CREATE TABLE "courses"(
    "course_id" SERIAL NOT NULL,
    "course_name" VARCHAR(64) NOT NULL,
    "course_price" DECIMAL(8, 2) NOT NULL,
    "branch_id" INTEGER NOT NULL
);
ALTER TABLE
    "courses" ADD PRIMARY KEY("course_id");
CREATE TABLE "branch"(
    "branch_id" SERIAL NOT NULL,
    "branch_name" VARCHAR(24) NOT NULL,
    "branch_phone" VARCHAR(15) NOT NULL,
    "branch_address" VARCHAR(64) NOT NULL,
    "branch_created_at" DATE NOT NULL DEFAULT CURRENT_DATE
);
ALTER TABLE
    "branch" ADD PRIMARY KEY("branch_id");
ALTER TABLE
    "branch" ADD CONSTRAINT "branch_branch_phone_unique" UNIQUE("branch_phone");
CREATE TABLE "students"(
    "student_id" SERIAL NOT NULL,
    "student_full_name" VARCHAR(24) NOT NULL,
    "student_age" SMALLINT NOT NULL,
    "student_phone" VARCHAR(15) NOT NULL,
    "group_id" INTEGER NOT NULL,
    "student_role" VARCHAR(32) NOT NULL
);
ALTER TABLE
    "students" ADD PRIMARY KEY("student_id");
CREATE TABLE "payments"(
    "pay_id" INTEGER NOT NULL,
    "pay_status" BOOLEAN NOT NULL,
    "pay_date" DATE NOT NULL,
    "pay_price" DECIMAL(10, 2) NOT NULL,
    "pay_desc" VARCHAR(64) NOT NULL,
    "student_id" BIGINT NOT NULL
);
ALTER TABLE
    "payments" ADD PRIMARY KEY("pay_id");
CREATE TABLE "admins"(
    "admin_id" SERIAL NOT NULL,
    "admin_name" VARCHAR(32) NOT NULL,
    "branch_id" INTEGER NOT NULL,
    "admin_role" INTEGER NOT NULL,
    "admin_password" VARCHAR(60) NOT NULL
);
ALTER TABLE
    "admins" ADD PRIMARY KEY("admin_id");
CREATE TABLE "invoice"(
    "in_id" SERIAL NOT NULL,
    "pay_id" INTEGER NOT NULL
);
ALTER TABLE
    "invoice" ADD PRIMARY KEY("in_id");
ALTER TABLE
    "courses" ADD CONSTRAINT "courses_branch_id_foreign" FOREIGN KEY("branch_id") REFERENCES "branch"("branch_id");
ALTER TABLE
    "groups" ADD CONSTRAINT "groups_teacher_id_foreign" FOREIGN KEY("teacher_id") REFERENCES "teachers"("teacher_id");
ALTER TABLE
    "groups" ADD CONSTRAINT "groups_room_id_foreign" FOREIGN KEY("room_id") REFERENCES "rooms"("room_id");
ALTER TABLE
    "payments" ADD CONSTRAINT "payments_student_id_foreign" FOREIGN KEY("student_id") REFERENCES "students"("student_id");
ALTER TABLE
    "students" ADD CONSTRAINT "students_group_id_foreign" FOREIGN KEY("group_id") REFERENCES "groups"("group_id");
ALTER TABLE
    "admins" ADD CONSTRAINT "admins_branch_id_foreign" FOREIGN KEY("branch_id") REFERENCES "branch"("branch_id");
ALTER TABLE
    "invoice" ADD CONSTRAINT "invoice_pay_id_foreign" FOREIGN KEY("pay_id") REFERENCES "payments"("pay_id");
ALTER TABLE
    "attendances" ADD CONSTRAINT "attendances_group_id_foreign" FOREIGN KEY("group_id") REFERENCES "groups"("group_id");
ALTER TABLE
    "groups" ADD CONSTRAINT "groups_course_id_foreign" FOREIGN KEY("course_id") REFERENCES "courses"("course_id");
ALTER TABLE
    "attendances" ADD CONSTRAINT "attendances_student_id_foreign" FOREIGN KEY("student_id") REFERENCES "students"("student_id");
ALTER TABLE
    "rooms" ADD CONSTRAINT "rooms_branch_id_foreign" FOREIGN KEY("branch_id") REFERENCES "branch"("branch_id");