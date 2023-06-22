import { fetchAll, fetchOne } from "../utils/pg.js";

const getAllStudentQuery = `SELECT 
                              * 
                            FROM 
                              students
                            `;

const getAllStudent = async () => {
    const student = await fetchAll(getAllStudentQuery);
    return student;
};

const createStudentQuery = `INSERT INTO 
                              students(student_full_name, student_age, student_phone, group_id, student_role) 
                            VALUES 
                              ($1, $2, $3 $4, $5)
                            `;

const createStudent = async (
    student_full_name,
    student_age,
    student_phone,
    group_id,
    student_role
) => {
    const student = await fetchOne(createStudentQuery, [
        student_full_name,
        student_age,
        student_phone,
        group_id,
        student_role,
    ]);
    return student;
};

const updateStudentQuery = `
UPDATE 
  students
SET  


`;

export { getAllStudent, createStudent };
