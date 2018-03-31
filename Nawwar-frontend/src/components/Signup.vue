<template>
<div>
<div class="container" id="signup">
<div class="row">
<!-- class="col-xs-12 col-sm-12 col-md-4 well well-sm" -->
    <div class="well well-sm">
        <legend><a href="http://www.jquery2dotnet.com"><i class="glyphicon glyphicon-globe"></i></a> Sign up!</legend>
        <form action="#" method="post" class="form" role="form">
        <div class="row">
            <div class="col-xs-6 col-md-6">
                <input class="form-control" name="firstname" placeholder="First Name" type="text"
                    required autofocus />
            </div>
            <div class="col-xs-6 col-md-6">
                <input class="form-control" name="lastname" placeholder="Last Name" type="text" required />
            </div>
        </div>
        <input class="form-control" name="youremail" placeholder="Your Email" type="email" />
        <input class="form-control" name="reenteremail" placeholder="Re-enter Email" type="email" />
        <input class="form-control" name="password" placeholder="New Password" type="password" />
        <label for="">
            Birth Date</label>
        <div class="row">
            <div class="col-xs-4 col-md-4">
                <select class="form-control">
                    <option value="Month">Month</option>
                </select>
            </div>
            <div class="col-xs-4 col-md-4">
                <select class="form-control">
                    <option value="Day">Day</option>
                </select>
            </div>
            <div class="col-xs-4 col-md-4">
                <select class="form-control">
                    <option value="Year">Year</option>
                </select>
            </div>
        </div>
        <label class="radio-inline">
            <input type="radio" name="sex" id="inlineCheckbox1" value="male" />
            Male
        </label>
        <label class="radio-inline">
            <input type="radio" name="sex" id="inlineCheckbox2" value="female" />
            Female
        </label>
        <br />
        <br />
        <button class="btn btn-lg btn-primary btn-block" type="submit">
            Sign up</button>
        </form>
    </div>
</div>
</div>
<div>
<img src="../assets/background.jpg" id="background" />
<img src="../assets/Logo.png" id="logo" />
<img src="../assets/welcome.png" id="welcome" />
</div>
<div class="form-group">
    <div class="col-md-12 control">
        <div style="border-top: 3px solid#888; padding-top:0px; font-size:100%; width:1330px" id="line" >

        <a href="/#/About">
            About
        </a>
        <a href="/#/Contactus">
            Contact Us
        </a>
        </div>
    </div>
</div>
</div>
</template>

<style>

#background{
  width:1348px;
  length:500;
  position:absolute;
  z-index: 1;
}
#signup{
  max-height: 100%;
  width: 400px;
  margin-left: 500px;
  margin-top:350px;
  position: absolute;
  z-index: 2;
  body { padding-top:30px; };
  .form-control { margin-bottom: 10px; };
}
#logo {
  margin-top:120px;
  length:700px;
  width:400px;
  position: absolute;
  z-index: 2;
}
#line {
  margin-top:750px;
    position: absolute;
    z-index: 3;
  }
#welcome{
  width: 750px;
  height: 400px;
  position: absolute;
  margin-left: 350px;
  margin-top: -75px;
  z-index: 4;
}
</style>
