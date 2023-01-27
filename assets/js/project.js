/*--------------------------------------------------------------
# Add Project Form
--------------------------------------------------------------*/


//global array to store data
let project = []
let title = ""
let startDate = ""
let endDate = ""
let description = ""
let icon1 = ""
let icon2 = ""
let icon3 = ""
let icon4 = ""
let image = ""

//to get data
function addProject () {

    //to store data in variable
    let title = document.getElementById("pName").value
    let startDate = document.getElementById("sDate").value
    let endDate = document.getElementById("eDate").value
    let description = document.getElementById("description").value
    let icon1 = document.getElementById("c1").checked
    let icon2 = document.getElementById("c2").checked
    let icon3 = document.getElementById("c3").checked
    let icon4 = document.getElementById("c4").checked
    let image = document.getElementById('file').files
    // console.log(image)

    //to animate alert
    const elem = document.getElementById("alert");   
    let pos = 20;
    let id = setInterval(frame, 5);
    function frame() {
        if (pos == 53) {
        clearInterval(id);
        elem.style.opacity = 1;
        } else {
        pos++; 
        elem.style.opacity = 0.3;
        elem.style.top = pos + "px";  
        }
    }

    //to initialize alert color
    document.getElementById("alert").style.backgroundColor = "rgb(252, 179, 179)";
    document.getElementById("alert").style.color = "#965656";

    //to validate data
    if( title == ""){
        //to call alert
        document.getElementById("alert").innerHTML = "Project Name cannot be empty";
    }

    else if (startDate == ""){
        //to call alert
        document.getElementById("alert").innerHTML = "Start Date cannot be empty";
    }

    else if (endDate == ""){
        //to call alert
        document.getElementById("alert").innerHTML = "End Date cannot be empty";
    }

    else if (description == ""){
        //to call alert
        document.getElementById("alert").innerHTML = "Description cannot be empty";
    }

    else if (icon1 == false && icon2 == false && icon3 == false && icon4 == false ){
        //to call alert
        document.getElementById("alert").innerHTML = "Technology cannot be empty";
    }

    else if (image.length == 0){
        //to call alert
        document.getElementById("alert").innerHTML = "Image cannot be empty";
    }

    else {
        // Convert spesific image to blob object
        image = URL.createObjectURL(image[0])
        

        // to store object
        let dataBlog = {
            image,
            title,
            description,
            icon1,
            icon2,
            icon3,
            icon4
        }
    
        // to add object to the global array
        project.push(dataBlog)
        // console.table(project)
        //to call function
        showProject()

    }
}

//to add project
function showProject () {   

    document.getElementById("project-section").innerHTML = ""
    for(let i=0; i<= project.length; i++) {
        // console.table(project)
        console.log(project[i].title)
        document.getElementById("project-section").innerHTML += `
        <div class="card-project">
        <!-- Project Image -->
        <img class="image" id="image" src="assets/img/photo.jpg" alt="Project Image" style="width:90%;">
        <!-- End Project Image -->

        <!-- Project Content -->
        <div class="card-project-content">

            <!-- Project Title -->
            <div class="p-title" id="title">
                <a href="project-blog.html">CRUD PROJECT</a>
            </div>
            <!-- Project Title -->

            <!-- Project Period -->
            <div class="p-detail" id="period">
                Duration: 3 Months
            </div>
            <!-- End Project Period -->

            <!-- Project Description -->
            <div class="p-desc" id="description">
                ashasjf hsafkasf safifsf dsdffsdafasf sfasf  assad asdds asdas asdas sadas                              
            </div>
            <!-- Project Description -->

            <!-- Project Icon -->
            <span class="p-icon">
                <div class="c1" id="c1">
                    <i class="fab fa-php"></i>
                </div>
                <div class="c2" id="c2">
                    <i class="fab fa-js-square"></i>
                </div>
                <div class="c3" id="c3">
                    <i class="fab fa-python"></i>
                </div>
                <div class="c4" id="c4">
                    <i class="fab fa-html5"></i>
                </div>
            </span>
            <!-- End Project Icon  -->

            <!-- Project Button -->
            <div class="p-button">
                <button type="button" name="edit" id="edit" class="btn-project">Edit</button>
                <button type="button" name="delete" id="delete" class="btn-project">Delete</button>
            </div>
            <!-- End Project Button -->

        </div>
        <!-- End Project Content -->
        
    </div>
        `
    }

    //to change alert color
    document.getElementById("alert").style.backgroundColor = "rgb(185, 245, 170)";
    document.getElementById("alert").style.color = "rgb(75, 110, 66)";

    //to all alert
    document.getElementById("alert").innerHTML = "Project has been added"

    //to reset form only without the whole page
    let form = document.getElementById("form");
    form.reset();

}