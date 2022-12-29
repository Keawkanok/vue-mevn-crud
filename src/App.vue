<template>
  <div>
      <nav class="navbar navbar-expand-lg justify-content-between flex-nowrap flex-row">
          <div class="container">
              <router-link to="/" class="navbar-brand float-left">MEVN Strouteck CRUD</router-link>
              <ul class="nav navbar-nav flex-row float-right" >
                  <li class="nav-item ">  
                      <router-link to="/" class="nav-link pr-3">Crate Student</router-link>
                  </li>
                  <li class="nav-item">
                      <router-link to="/view" class="nav-link " >View Student</router-link>
                  </li>
                  <li class="nav-item">
                      <router-link to="/covid-19" class="nav-link " >Covid-19</router-link>
                  </li>

                  <li class="nav-item">
                      <router-link to="/graph" class="nav-link " >Graph</router-link>
                  </li>
              </ul>
          </div>
      </nav>
      
      <div class="container mt-5">
        <router-view></router-view>
      </div>
  </div>
</template>