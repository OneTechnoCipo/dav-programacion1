<template>


  <nav class="navbar navbar-expand-lg navbar-light bg-success">
        <div class="container-fluid">
                      <a ><img src="https://scontent.faep9-2.fna.fbcdn.net/v/t1.6435-1/p200x200/111385670_105137907954156_1197422310586610856_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=7206a8&_nc_ohc=dSKMo5xChYMAX9NMNAm&_nc_ht=scontent.faep9-2.fna&oh=f70b3ba99e63df78266f7551edf0e67d&oe=61C53E62" alt="ICONO ONE TECHNO" width="90" height="90" class="rounded-circle">   
                      </a>
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
          <router-link class="nav-link" to="/CatalogoAdmin">CatalogoAdmin</router-link>
          <router-link class="nav-link" to="/CatalogoPublic">CatalogoPublic</router-link>
          <a ><img src="https://raw.githubusercontent.com/gist/T-Jedsada/dbee22959762fa6c0ccad8153830b51a/raw/8957088c2e31dba6d72ce86c615cb3c7bb7f0b0c/nyan-cat.gif" alt="Funny image" width="150" height="50" >   </a>


            </div>
  </nav>
  
  <div class="container">
    <router-view/>
  </div>

</template>
