function switchPage(pageId) {
    document.querySelectorAll('.page-section').forEach(page => {
        page.classList.add('hidden');
    });
    document.getElementById(pageId).classList.remove('hidden');
}

function switchAuth(authId) {
    document.getElementById('auth-login').classList.add('hidden');
    document.getElementById('auth-signup').classList.add('hidden');
    document.getElementById(authId).classList.remove('hidden');
}

const departmentsData = {
    "ict": ["Computer Science", "Library & Information Science", "Mass Communication"],
    "science": ["Microbiology", "Physics", "Biochemistry"],
    "arts": ["English Language", "History", "Performing Arts"]
};

function updateDepartments() {
    const facultySelect = document.getElementById('faculty-select');
    const deptSelect = document.getElementById('dept-select');
    const selectedFaculty = facultySelect.value;
    
    deptSelect.innerHTML = '<option value="">Select Department</option>';
    
    if (selectedFaculty && departmentsData[selectedFaculty]) {
        departmentsData[selectedFaculty].forEach(dept => {
            const option = document.createElement('option');
            option.value = dept.toLowerCase().replace(/ /g, '-');
            option.textContent = dept;
            deptSelect.appendChild(option);
        });
    }
}

function handleLogin() {
    // Simulate login for frontend demo
    switchPage('page-student');
}
