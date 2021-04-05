function clicked() {
    let i, id, type, level, component;

    let prefix = (document.getElementsByClassName('module_info value')[0].textContent).split("/");
    level = prefix[1];
    component = prefix[0];

    if ((document.getElementsByClassName('module_info title')[0].textContent).split(" -", 1) == "REQ") {
        doc = "REQ";
    } else {
        doc = "ICD";
    }

    for (i = 0; i < 10; i++) {
        type = document.getElementsByClassName('module body type')[i].textContent;
        if (type == "Information") {
            stop;
        } else {

            id = document.getElementsByClassName('module body id')[i].textContent;

            document.getElementsByClassName('module body gmtid')[i].innerHTML = doc + "-" + level + "-" + component + "-" + id;
        }
    }
}

document.getElementById("run").addEventListener("click", clicked);
