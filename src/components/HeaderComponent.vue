<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>


<template>
<div class="app">

  <div class="navWrapper">
  <div class="navheader">
    <p class="text-white">join us for an exciting webinar as we launsh our latest innvation - Mimic Sander</p> 
    <button type="button" class="headerbtn">see more</button>
  </div>
    <nav class="navbar navbar-expand-lg navbar-light ">
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
                        <a class="nav-link" href="">Solutions&#160;&#160;<font-awesome-icon :icon="['fas', 'angle-down']" /></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="">Partners&#160;&#160;<font-awesome-icon :icon="['fas', 'angle-down']" /></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="">Resources&#160;&#160;<font-awesome-icon :icon="['fas', 'angle-down']" /></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="">About Us&#160;&#160;<font-awesome-icon :icon="['fas', 'angle-down']" /></a>
                    </li>

                    <button 
                      class="btn btn-primary"  
                      data-bs-toggle="collapse">
                      Partner portal
                    </button>
                    <div class="collapse py-2" id="collapseTarget">
                      text
                    </div>

                    <button 
                      class="btn btn-primary btnsecond" 
                      data-bs-target="#collapseTarget" 
                      data-bs-toggle="collapse">
                      Get in touch
                    </button>
                    <div class="collapse py-2" id="collapseTarget">
                     text
                    </div>
                    
                    <button 
                      class="btn btn-primary btnthree" 
                      data-bs-target="#collapseTarget" 
                      data-bs-toggle="collapse">
                      Partner portal
                    </button>
                    <div class="collapse py-2" id="collapseTarget">
                      text
                    </div>

                    <div>

                      

                      
  
</div>
                    
                   
                </ul>
                
            </div>
            
        </div>
    </nav>
  </div>
</div>
</template>

