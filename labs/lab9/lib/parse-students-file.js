const studentsFileUrl = "students.json";
const studentList = document.getElementById("student-list");

async function loadStudents() {
    try {
        const response = await fetch(studentsFileUrl);
        if (!response.ok) {
            throw new Error(`Cannot read ${studentsFileUrl} (status ${response.status})`);
        }
        const studentsData = await response.json();

        for (const entry of studentsData.wclass) {
            const student = entry.student;
            const listItem = document.createElement("li");

            const studentName = document.createElement("strong");
            studentName.textContent = student.name;

            const studentSkill = document.createElement("em");
            studentSkill.textContent = student.skill;

            listItem.append(
                `${student["@attributes"].id} `,
                studentName,
                " has skills ",
                studentSkill
            );
            studentList.appendChild(listItem);
        }
    } catch (error) {
        alert(`Error: ${error.message}`);
    }
}

loadStudents();
