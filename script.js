function error(){
    alert("Archivo no Disponible!");
}

function link(tipo_enlace){
    alert("Enlazando a: " + tipo_enlace);
}

function scanner_datos(){
    let name = document.getElementById("name").value;
    let apll = document.getElementById("apellido").value;
    let edad = parseInt(document.getElementById("edad").value);

    let curso = document.getElementById("curso").value;
    let telefono = document.getElementById("celular").value;

    alert("REGISTRO EXITOSO!");
    alert("\t.:DATOS DEL ALUMNO REGISTRADO:.\n Nombre del Alumno: " + name + "\nApellidos del Alumno: "
    + apll + "\nEdad del Alumno: " + edad + "\nCurso de Registro: " + curso + "\nTelefono: " + telefono);
}