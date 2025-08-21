const employee={
    emp_name:"abz",
    emp_age:"234",
     planguage:[
       {
       lang1:"c",
       lang2:"c++",
      lang3:"JAVA",

     },
    {
    database1:"oracle",
        database2:"mongoDB",
 },
     {
        Framework1:"hibernate",
         Framework2:"spring",


     }]}
    employee.company="ABC Pvt Ltd";
     console.log(employee);
    employee.planguage[1].database1="mangoDB";
     console.log(employee);
delete employee.emp_name;
console.log(employee);