CREATE TABLE public.employee (
  id INT PRIMARY KEY,
  surname VARCHAR(50) NOT NULL,
  name VARCHAR(50) NOT NULL,
  date_of_birth DATE,
  job_title VARCHAR(100),
  department VARCHAR(100),
  date_of_employment DATE,
  salary DECIMAL(10,2),
  fhone VARCHAR(20),
  email VARCHAR(100)
);
