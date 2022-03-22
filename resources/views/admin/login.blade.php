<link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<link rel="stylesheet" href="/css/admin.css">
<!------ Include the above in your HEAD tag ---------->

<div class="container login-container">
    @if ($errors->any())
        <div class="alert alert-danger">
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif
    <div class="row">
        <div class=" col-md-8 offset-md-2 login-form-2">
            <form method="POST" action="/admin/login">
                @csrf
                <h3>Admin Login Form</h3>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Your Email *" name="email" value=""/>
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" placeholder="Your Password *" name="password" value=""/>
                </div>
                <div class="form-group">
                    <button type="submit" class="btnSubmit" value="Login">Login</button>
                </div>
                <div class="form-group">
                    <a href="#" class="btnForgetPwd" value="Login">Forget Password?</a>
                </div>
            </form>
        </div>
    </div>
</div>
