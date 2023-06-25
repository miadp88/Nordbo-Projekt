
<template>
    <div class="sidebar " role="cdb-sidebar">
      <h6>Find out which product that fits your needs</h6>
    <div class="sidebar-container">
      <div class="sidebar-nav">
        <div v-for="(step, index) in steps" :key="index" :class="GetMenuClass(index)">
          <a class="sidebar-item">
            <div class="sidebar-item-content">
              <i class="fa fa-sticky-note sidebar-icon"></i>
              <span class="spanOne">{{index+1}}. {{step.name}}</span>
            </div>
          </a>
        </div>
    </div>
    </div>
  </div>
  </template>
  
  <script>
  import { mapState, mapGetters, mapActions } from 'vuex';
  export default {
        name: 'question-menu',
          
        computed: {
            
          ...mapGetters({  steps:"getSteps", currentStepIndex:"getCurrentStepIndex"}),

        },
  
        methods:{
          GetMenuClass(MenuIndex)
            {
                return MenuIndex == this.currentStepIndex ? "sidenav menu-item-active" : "sidenav menu-item";
            },
        }
      }
  </script>  

<style scoped>
.menu-item{
    opacity: 0.5 !important;
}

.menu-item-active{
    color: 1.0 !important;
}
</style>