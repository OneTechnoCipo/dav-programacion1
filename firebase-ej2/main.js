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

    vaciar()        


}



const boton=document.getElementById("btn-obtener");
boton.addEventListener("click",guardarCliente);/* click al dar un click izquierdo del mouse, dbclick doble click izquierdo */

/* eliminar un cliente  */
function eliminar() 
{
    const id= document.getElementById("inp_id").value
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
                <button onclick="editar_cliente('${element.nombre}','${element.apellido}',${element.dni},'${element.id}')" class="btn btn-info"><i class="fa fa-gift"></i></button>
                <button onclick="llenar_input_oculto ('${element.id}')" class="btn btn-danger" data-bs-toggle="modal"data-bs-dismiss="modal" data-bs-target="#exampleModal"><i class="fa fa-trash-o"></i></button>
                </td>
        </tr>
        
        `
        total_filas.push(fila)
    });
    document.getElementById("tabla-tdbody").innerHTML=total_filas.join(``)
}

/* ejecutamos la funcion */
listar_clientes()
function llenar_input_oculto(id){

}

function editar_cliente(nombre, apellido, dni,id) 
{
    document.getElementById("inp_nombre").value= nombre;
    document.getElementById("inp_apellido").value= apellido;
    document.getElementById("inp_dni").value= dni;
    document.getElementById("inp_id").value= id;
}

function actualizar_cliente() 
{
    const nombre = document.getElementById("inp_nombre").value;
    const apellido= document.getElementById("inp_apellido").value;
    const dni =document.getElementById("inp_dni").value;
    const id = document.getElementById("inp_id").value;

    const clienteActualizado ={
        apellido: apellido,
        dni:dni,
        nombre:nombre
    }
    db.collection ("clientes").doc(id).update(clienteActualizado)
    /* refrescar la tabla */
    listar_clientes()
    /* vaciar formulario */
    vaciar()
}
/* vaciar */
function vaciar(){
    document.getElementById("inp_nombre").value=``;
    document.getElementById("inp_apellido").value=``;
    document.getElementById("inp_dni").value=``;
    document.getElementById("inp_id").value=``;


}

function saludo(){
alert("HOLA UWU");
}