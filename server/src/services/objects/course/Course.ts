import { Student, Teacher } from "../user/User";

class Course {
    owners: Teacher[]
    students: Student[]

    constructor(
        owners: Teacher[],
        students: Student[]
    ) {
        this.owners = owners
        this.students = students
    }

    addSection(
        name: string
    ) { }

    

}