<template>

    <h1 class="fs-1 mt-5">Publico</h1 >

    <div class="row">
        
        <template v-for="producto of lista_productos" v-bind:key="producto.id" >
            <div v-if="producto.estado_producto == 'Disponible' " class="col-3"><!-- col-lg-3 col-md-3 col-sm-3 col-12 me-1 mb-3 -->
                <div class="card" >
                    <img :src="producto.url" class="card-img-top" style="height:15rem"  alt="">
                    <div class="card-body" >
                        <h5 class="card-title">Producto</h5>
                        <p class="card-descripcion">{{producto.descripcion}}.</p>
                        <p class="card-estado">{{producto.estado_producto}}.</p>
                        <p class="card-precio/descuento" v-if="producto.descuento > 0">${{(producto.precio-(producto.descuento*producto.precio)/100)}}<del class="descuento">(${{producto.precio}}</del>)</p>
                        <p class="card precio y solo precio" v-else>${{producto.precio}}</p>
                        <a href="#" class="btn btn-primary">Comprar</a>
                    </div>
                </div>
            </div>
        </template>
    </div>

</template>

<script>
import { addDoc, collection, onSnapshot, deleteDoc, doc, updateDoc } from '@firebase/firestore'
import { uploadBytes, ref, getDownloadURL} from '@firebase/storage'
import{db, storage} from '../utils/firebase.js'
export default {
    name: 'CatalogoPublicform',
    data(){
        return{
            p_venta:null,
            p_compra:null,
            stock:null,
            lista_productos:[],
            id:null,
            estado:0,
            descripcion:'',
            precio:null,
            descuento:null,
            categoria:null,
        }   
    },
    methods:{
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
            
        },
        async mostrar(){
            await this.subir_imagen()
            
            const objetoProducto = {
                
                descripcion: this.descripcion,
                precio: this.precio,
                descuento: this.descuento,
                categoria: this.categoria,
                stock: this.stock,
                estado: this.estado

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
            estado: this.estado
            
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