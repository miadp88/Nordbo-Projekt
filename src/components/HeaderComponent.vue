


<template>
<div>

  <div class="navWrapper">
  <div class="navheader">
    <p class="text-white TopContainer">join us for an exciting webinar as we launsh our latest innvation - Mimic Sander</p> 
    <button type="button" class="headerbtn">see more</button>
  </div>
    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container">
            <a class="navbar-brand" href="#" >
                <img src="../assets/image/NordboRoboticLogo.png" class="image-responsive">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul class="navbar-nav ms-auto"> 
                  <li class="nav-item">
                        <a class="nav-link" href="">Home&#160;&#160;<font-awesome-icon :icon="['fas', 'angle-down']" /></a>
                    </li>

                    
                    <li class="nav-item">
                        <a class="nav-link" href="">Solutions&#160;&#160;<font-awesome-icon :icon="['fas', 'angle-down']" />&#9662</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="">Partners&#160;&#160;<font-awesome-icon :icon="['fas', 'angle-down']" />&#9662</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="">Resources&#160;&#160;<font-awesome-icon :icon="['fas', 'angle-down']" />&#9662</a>
                    </li>
                  
                    <li class="nav-item">
                        <router-link to="/partner" class="btn btn-primary btnfirst">Partner Portal</router-link>
                      </li>  

                      <li class="nav-item">
                        <router-link to="/about" class="btn btn-primary btnsecond">Get in Touch</router-link>  
                      </li>
                      
                      <li class="nav-item">
                        <router-link to="/products" class="btn btn-primary btnthree ">Find product</router-link>
                      </li>
                    
                     
                    <div>
                        
                      

                      
  
</div>
                    
                   
                </ul>
                
            </div>
            
        </div>
    </nav>
  </div>
</div>
</template>

