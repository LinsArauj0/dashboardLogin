<template>
    <nav class="menu-vertical ">
      <ul class="menu">
        <li><router-link to="#"><img src="../../icons/dashboard.png"/></router-link></li>
        <li><router-link to="#"><img src="../../icons/Group6.png"/></router-link></li>
        <li><router-link to="#"><img src="../../icons/Group.png"/></router-link></li>      
        <li><router-link to="#"><img src="../../icons/customer-service.png"/></router-link></li>      
        <li><router-link to="#"><img src="../../icons/lipboard-notes.png"/></router-link></li>      
        <li><router-link to="#"><img src="../../icons/outline-settings.png"/></router-link></li>                     
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'SideBar',
  }
  </script>
  
  <style scoped>
  @import './sidebar.css';
  </style>