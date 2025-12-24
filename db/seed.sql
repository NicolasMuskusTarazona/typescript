USE Colegio;

INSERT INTO students (name,lastname, age, active) VALUES
('Nicolas', 'Muskus' , 20, TRUE),
('Danilo', 'Muskus', 22, TRUE),
('Danna',  'Arias', 19, TRUE);

INSERT INTO teachers (name,lastname, subject) VALUES
('Ana'  ,   'Torres'  , 'Matematicas'),
('Luis' ,   'Ramirez' , 'Fisica'),
('Carla',   'Suarez'  , 'Quimica');


INSERT INTO student_teacher (student_id, teacher_id) VALUES
(1, 1),
(1, 2);

INSERT INTO student_teacher (student_id, teacher_id) VALUES
(2, 2),
(2, 3);

INSERT INTO student_teacher (student_id, teacher_id) VALUES
(3, 1),
(3, 3);
