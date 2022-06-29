@extends('admin.layouts.app')
@section('content')
    <h1>Изменить пользователя: </h1>

    @if ($errors->any())
        <div class="alert alert-danger">
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif
    <div style="width:1200px">
        <form action="/admin/user/update/{{$user->id}}" method="post">
            @csrf
            <div class="form-group">
                <label for="name">Имя</label>
                <input type="text" class="form-control" name="name" id="name" value="{{$user->name}}" placeholder="Имя">
            </div>

            <div class="form-group">
                <label for="email">Почта</label>
                <input type="text" class="form-control" name="email" id="email" value="{{$user->email}}" disabled
                       placeholder="Почта">
            </div>

            <div class="form-check">
                <input class="form-check-input" type="checkbox"
                       {{$user->is_premium === 0 ? '' : 'checked'}}
                       onchange="document.getElementById('date').disabled = !this.checked;"
                       name="premium" id="premium">
                <label class="form-check-label" for="premium">
                    Премиум
                </label>
            </div>
            <div class="form-group">
                <label class="form-check-label" for="date"> Премиум до </label>
                <input type="date" id="date" name="date" placeholder="dd-mm-yyyy"
                       class="form-control" style="width: 200px"
                       @if($user->is_premium === 0) disabled @endif
                       value="{{date('Y-m-d', strtotime($user->premium_expires_at))}}">
            </div>

            <div class="form-check">
                <input class="form-check-input" type="checkbox" {{$user->is_admin === 0 ? '' : 'checked'}} name="admin"
                       id="admin">
                <label class="form-check-label" for="admin">
                    Админ
                </label>
            </div>

            <br/>

            <button type="submit" class="btn btn-primary">Изменить</button>
        </form>
    </div>

@endsection
