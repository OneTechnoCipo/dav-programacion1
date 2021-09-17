/* nos conectamos con la base de datos firestores */
const db= firebase.firestore()
const guardarCliente = async()=>{ 

    const nombre = document.getElementById("inp_nombre").value
    const apellido = document.getElementById("inp_apellido").value
    const dni = document.getElementById("inp_dni").value


    const unCliente ={
        nombre:nombre,
        apellido:apellido,
        dni:dni
        
    }
    /* se insertan los datos */
    await db.collection("clientes").doc().set(unCliente)

    document.getElementById("inp_nombre").values='';
    document.getElementById("inp_apellido").values='';
    document.getElementById("inp_dni").values='';


}



const boton=document.getElementById("btn-obtener");
boton.addEventListener("click",guardarCliente);/* click al dar un click izquierdo del mouse, dbclick doble click izquierdo */



