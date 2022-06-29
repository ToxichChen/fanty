<!doctype html>
<html lang="en">

<head>
    <title>Title</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Josefin+Sans:300, 400,700|Inconsolata:400,700" rel="stylesheet">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <!-- local  -->
    <link rel="stylesheet" href="/css/admin.css">
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.11.3/css/jquery.dataTables.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.11.3/js/jquery.dataTables.js"></script>
</head>

<body>


<!-- navbar -->
<nav class="navbar navbar-expand-md  navbar-light">
    <button class="navbar-toggler ml-auto mb-2 bg-light" type="button" data-toggle="collapse" data-target="#myNavbar">
        <span class="navbar-toggler-icon"></span>
    </button>


    <div class="collapse navbar-collapse " id="myNavbar">
        <div class="container-fluid">
            <div class="row">
                <!-- sidebar navbar -->
                <div class="col-lg-3 col-xl-2 col-md-4 sidebar fixed-top">
                    <a href="/admin/" class="navbar-brand text-white d-block mx-auto text-center mb-4 bottom-border pb-2">
                        CodeAdmin
                    </a>
                    <a href="#" class="text-white ">{{$_SESSION['admin_user']['username']}} </a>
                    <div class="border-bottom pb-3"></div>
                    <ul class="navbar-nav flex-column mt-4">
                        <li class="nav-item">
                            <a href="/admin/" class="nav-link text-light p-3 mb-2 current"> <i
                                    class="fa fa-home text-light fa-lg mr-3" aria-hidden="true"></i> Dashboard
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="/admin/user" class="nav-link text-light p-3 mb-2 sidebar-link"> <i
                                    class="fa fa-user text-light fa-lg mr-3" aria-hidden="true"></i> Пользователи
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="/admin/fant" class="nav-link text-light p-3 mb-2 sidebar-link"> <i
                                    class="fa fa-envelope text-light fa-lg mr-3" aria-hidden="true"></i> Список фантов
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="/admin/fantGroup" class="nav-link text-light p-3 mb-2 sidebar-link"> <i
                                    class="fa fa-shopping-cart text-light fa-lg mr-3" aria-hidden="true"></i> Группы фантов
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="/admin/subsetting" class="nav-link text-light p-3 mb-2 sidebar-link"> <i
                                    class="fa fa-table text-light fa-lg mr-3" aria-hidden="true"></i> Поднастройки
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="/admin/gameSettings" class="nav-link text-light p-3 mb-2 sidebar-link"> <i
                                    class="fa fa-wrench text-light fa-lg mr-3" aria-hidden="true"></i> Настройки игры
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="/admin/music" class="nav-link text-light p-3 mb-2 sidebar-link"> <i
                                    class="fa fa-table text-light fa-lg mr-3" aria-hidden="true"></i> Музыка
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="/admin/post" class="nav-link text-light p-3 mb-2 sidebar-link"> <i
                                    class="fa fa-wrench text-light fa-lg mr-3" aria-hidden="true"></i> Посты для блога
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link text-light p-3 mb-2 sidebar-link"> <i
                                    class="fa fa-file text-light fa-lg mr-3" aria-hidden="true"></i> Documentation
                            </a>
                        </li>
                    </ul>
                </div>
                <!-- end sidebar -->

                <!--  top nav-->
                <div class="col-lg-9 col-xl-10 col-md-8 ml-auto bg-dark fixed-top py-2 top-navbar">
                    <div class="row align-items-center">
                        <div class="col-md-4">
                            <h4 class="text-light text-uppercase mb-0">Dashboard</h4>
                        </div>
                        <div class="col-md-5">

                        </div>
                        <div class="col-md-3">
                            <ul class="navbar-nav">
                                <li class="nav-item ml-md-auto ">
                                    <a href="/admin/logout/" class="nav-link "><i
                                            class="fa fa-sign-out text-danger fa-lg"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- end nav -->
            </div>
        </div>
    </div>

</nav>
<div style="margin-left: 17%; margin-top: 100px;">
    @yield('content')
</div>
<!-- local -->
<!-- Optional JavaScript -->
<!-- jQuery first, then Popper.js, then Bootstrap JS -->
</body>
</html>
