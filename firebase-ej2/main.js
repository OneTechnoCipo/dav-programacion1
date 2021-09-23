/* nos conectamos con la base de datos firestores */
const db= firebase.firestore()
const guardarCliente = async()=>{ 

    const nombre = document.getElementById("inp_nombre").value
    const apellido = document.getElementById("inp_apellido").value
    const dni = document.getElementById("inp_dni").value
    listar_clientes()

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

/* eliminar un cliente  */
function eliminar(id) {
    db.collection("clientes").doc(id).delete()
    listar_clientes();
}

const listar_clientes=async()=>{
    const clientes = await db.collection("clientes").get();

    let lista_clientes= [ ]
/* ordenamiento de los datos */
    const lista = clientes.docs.map(doc =>{
        lista_clientes=doc.data()
        lista_clientes.id = doc.id;
        return lista_clientes;
    });
    let total_filas= []
    lista.forEach(element => {
        let fila=`
        <tr class="table-dark">
            <td>${element.nombre}</td>
            <td>${element.apellido}</td>
            <td>${element.dni}</td>
            <td>
                <button onclick="eliminar('${element.id}')" class="btn btn-danger"><i class="fa fa-trash-o"></i></button>
                </td>
        </tr>
        
        `
        total_filas.push(fila)
    });
    document.getElementById("tabla-tdbody").innerHTML=total_filas.join(``)
}

/* ejecutamos la funcion */
listar_clientes()