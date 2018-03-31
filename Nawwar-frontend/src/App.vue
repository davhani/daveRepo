<template>
  <div>
  <nav class="navbar navbar-inverse navbar-fixed-top">
       <div class="container">
         <div class="navbar-header">
           <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
           <span class="sr-only">Toggle navigation</span>
           <span class="icon-bar"></span>
           <span class="icon-bar"></span>
           <span class="icon-bar"></span>
           </button>
           <a class="navbar-brand" href="#">Nawwar</a>
         </div>
         <div id="navbar" class="navbar-collapse collapse">
           <ul class="nav navbar-nav">
             <li class=""><a href="#">Home</a></li>
             <li class=""><a href="#">Tools</a></li>
             <li class=""><a href="#">About</a></li>
             <li class=""><a href="#"><input type="text" placeholder="Search.."></a></li>
           </ul>

           <ul class="nav navbar-nav navbar-right">
             <li><a href="#" data-toggle="modal" data-target='#modalRegister'>Sign out</a></li>
           </ul>

         </div><!--/.navbar-collapse -->
       </div>
     </nav>
  <router-view></router-view>
</div>
</template>
<script>
export default {}
</script>
