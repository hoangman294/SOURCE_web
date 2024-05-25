
var courseAPI = '';

function start() {
    getCourses(renderCourses);
    handleCreateForm();
}

start();

//Functions
function getCourses(callback) {
    fetch(courseAPI)
        .then(function(respone) {
            return respone.json();
        })
        .then(callback);
}

function renderCourses() {
    var listCoursesBlock = document.querySelector('#list-courses');
    var htmls = courses.map(function(course){
        return `
            <li>
                <h4> ${course.name}</h4>
                <p> ${course.description}</p>
            </li>
        `;
    });
    listCoursesBlock.innerHTML = htmls.join('');
}

function handleCreateForm() {
    var createBtn = document.querySelector('#create');
    createBtn.onclick = function() {
        // Xử lý sự kiện click ở đây
        alert('Button clicked!');
    };
}