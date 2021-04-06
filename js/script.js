//Main function
function clicked() {
    //Variable declaration
    let i, id, type, level, component;
    
    //Prefix separation to get level and component
    let prefix = (document.getElementsByClassName('module_info value')[0].textContent).split("/");
    level = prefix[1];
    component = prefix[0];

    //Separates and defines the document type (REQ and ICD)
    if ((document.getElementsByClassName('module_info title')[0].textContent).split(" -", 1) == "REQ") {
        doc = "REQ";
    } else {
        doc = "ICD";
    }
    //Runs each line of the table and inject the gmt id into the right column
    for (i = 0; i < 10; i++) {
        //Excludes the information type from getting the gmt id
        type = document.getElementsByClassName('module body type')[i].textContent;
        if (type == "Information") {
            stop;
        } else {

            id = document.getElementsByClassName('module body id')[i].textContent;
            
            document.getElementsByClassName('module body gmtid')[i].innerHTML = doc + "-" + level + "-" + component + "-" + id; //Concatenates the gmt id
        }
    }
}
//Set click event
document.getElementById("run").addEventListener("click", clicked);
