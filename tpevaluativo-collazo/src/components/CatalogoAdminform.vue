<template>

<h3>Administrador</h3>
    <div class="row">
                <a ><img src="https://www.12minutos.com/thumb/4/d/2/6/d262c037763dab05ffd477adf70a2a5f.jpg" alt="Admin" width="160" height="160" >   </a>

        <div class="col-3">
            <div class="mb-3">
                <label class='form-label'>Descripcion</label>
                <input v-model="descripcion" class="form-control" placeholder="Ingrese descripcion" type="text">
            </div>
            <div class="mb-3">
                <label class='form-label'>Precio</label>
                <input v-model="precio" class="form-control" placeholder="Ingrese Precio" type="number">
            </div>

            <div class="mb-3">
                <label class='form-label'>% de descuento</label>
                <input v-model="descuento" class="form-control" placeholder="Ingrese %" type="number">
            </div>
            <div class="mb-3">
                <label class='form-label'>Categoria</label>
                <input v-model="categoria" class="form-control" placeholder="Ingrese categoria" type="text">
            </div>
            <div class="mb-3">
                <label class='form-label'>Stock</label>
                <input v-model="stock" class="form-control" placeholder="Ingrese cantidad de stock" type="number">
            </div>
            <div class="mb-3">
                <label class='form-label'>Estado</label>
                <select v-model="estado_producto"  class="form-select" id="inputGroupSelect02">
    <option selected>Seleccione...</option>
    <option value="Disponible">Activo</option>
    <option value="No Disponible">Inactivo</option>
    </select>
            </div>


            <div class="mt-3"></div>
                        <div class="mb-3">
                <input type="file" class="form-control" name="" id="inp_file" >
            </div>


            <button v-if="estado==0" @click="mostrar()" class="btn btn-success">Enviar</button>
            <button v-if="estado==1" @click="actualizar_producto()" class="btn btn-info btn sm">refrescar</button>

        </div>
        <div class="col-9">
            <table class="table table-sm table-success table-striped"> 
            <thead class="table-dark">
                <tr>
                    <th>imagen</th>
                    <th>descripcion <img src="https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/55/Enchanted_Book.gif"  width="30" height="30" alt=""></th>
                    <th>Precio<img src="http://pa1.narvii.com/6350/e1d4815841f476785cb99e6a02c6415681582a95_00.gif"  width="30" height="30" alt=""></th>
                    <th>% descuento<img src="http://pa1.narvii.com/6182/1a02daa13b09ab1875035053728cac21deed909f_00.gif"  width="30" height="30" alt=""></th>
                    <th>Categoria<img src="https://static.wikia.nocookie.net/minecraft_gamepedia/images/f/fd/Enchanted_Iron_Pickaxe.gif"  width="30" height="30" alt=""></th>                    
                    <th>Stock<img src="https://www.gifsanimados.org/data/media/712/numero-imagen-animada-0195.gif"  width="30" height="30" alt=""> </th>
                    <th>Estado<img src="https://c.tenor.com/dAUri9d0nUsAAAAj/minecraft-minecraft-totem.gif"  width="30" height="30" alt=""> </th>
                    <th>Acciones<img src="https://static.wikia.nocookie.net/minecraft_es_gamepedia/images/a/a4/Espada_de_diamante_encantada.gif"  width="30" height="30" alt=""> </th>
                </tr>
            </thead>
            <tbody>
                <tr class="table-active"  v-for="producto of lista_productos" v-bind:key="producto.id">
                    <td>
                        <img style="width:5rem" :src="producto.url" alt="">
                    </td>
                    <td>{{producto.descripcion}}</td>
                    <td>{{producto.precio}}</td>
                    <td>{{producto.descuento}}</td>
                    <td>{{producto.categoria}}</td>
                    <td>{{producto.stock}}</td>
                    <td>{{producto.estado_producto}}</td>
                    <td>
                        <button @click="eliminar_producto(producto.id)" class="btn btn-danger btn-sm"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg></button>
                        <button @click="editar_producto(producto)" class="btn btn-primary btn-sm"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wrench" viewBox="0 0 16 16">
    <path d="M.102 2.223A3.004 3.004 0 0 0 3.78 5.897l6.341 6.252A3.003 3.003 0 0 0 13 16a3 3 0 1 0-.851-5.878L5.897 3.781A3.004 3.004 0 0 0 2.223.1l2.141 2.142L4 4l-1.757.364L.102 2.223zm13.37 9.019.528.026.287.445.445.287.026.529L15 13l-.242.471-.026.529-.445.287-.287.445-.529.026L13 15l-.471-.242-.529-.026-.287-.445-.445-.287-.026-.529L11 13l.242-.471.026-.529.445-.287.287-.445.529-.026L13 11l.471.242z"/>
</svg></button>
                    </td>
                </tr>
            </tbody>
            </table>

        </div>
    </div>
</template>

<script>
import { addDoc, collection, onSnapshot, deleteDoc, doc, updateDoc } from '@firebase/firestore'
import { uploadBytes, ref, getDownloadURL} from '@firebase/storage'
import{db, storage} from '../utils/firebase.js'

export default {
    name: 'ProductoForm',
    data(){
        return{
            stock:null,
            lista_productos:[],
            id:null,
            url:null,
            estado:0,
            descripcion:'',
            precio:null,
            descuento:null,
            categoria:null,
            estado_producto:null,
/*             preciodescontado:null, */
        }   
    },
    methods:{
/*         descontar_precio() {

            preciodescontado=this.precio(((this.precio+this.descuento)/100)/100);
        }, */

        async subir_imagen()
        {
            
            const file = document.getElementById("inp_file").files[0]
            /* vamos a indicar en que lugar vamos a guardar la imagen */
            const config = ref (storage,'producto_imagenes/'+file.name)

            await uploadBytes (config, file).then( ()=>{
                alert("operacion exitosa :D")
                document.getElementById("inp_file").value = ''
                })
                this.url = await getDownloadURL(config)
        },
        vaciar(){
                this.descripcion="";
                this.precio="";
                this.descuento="";
                this.categoria="";
                this.stock="";
                this.estado="";
                this.estado_producto="";
            
        },
        async mostrar(){
            await this.subir_imagen()
            
            const objetoProducto = {
                
                descripcion: this.descripcion,
                precio: this.precio,
                descuento: this.descuento,
                categoria: this.categoria,
                stock: this.stock,
                estado: this.estado,
                url: this.url,
                estado_producto:this.estado_producto
            }
            const coleccion = collection(db,'producto')
            addDoc(coleccion,objetoProducto)
        
                this.vaciar()
        },
        obtener_productos()
        {
    /* se hace una captura de collecction */
            onSnapshot( collection(db,'producto'),(snapshot)=>{
                this.lista_productos=[]
                snapshot.docs.map((doc)=>{
                    this.lista_productos.push({...doc.data(),id:doc.id})
                })
            })
        },
        eliminar_producto(id){
            /* para aliminar, necesito acceso a la base (db) y esècificar la colleccion y el ID */
            deleteDoc(doc(db,'producto',id))
        
    },
    editar_producto(producto)
    {

        /* id no utiliza el V-model */
        this.id= producto.id;

        this.descripcion=producto.descripcion;
        this.precio=producto.precio;
        this.descuento=producto.descuento;
        this.categoria=producto.categoria;
        this.stock=producto.stock;
        this.estado=1;
        this.url=producto.url;

    },
    actualizar_producto(){
        const productoModificado ={
            descripcion: this.descripcion,
            precio: this.precio,
            descuento: this.descuento,
            categoria: this.categoria,
            stock: this.stock,
            estado: this.estado,
            estado_producto:this.estado_producto
            
        }
        updateDoc( doc(db,'producto', this.id), productoModificado)
            this.estado=0;
            this.vaciar()
    }
},
mounted(){
    this.obtener_productos()
}
}

</script>