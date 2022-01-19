@extends('admin.layouts.app')
@section('content')
    <h1>Создать новую настройку игры: </h1>

    @if ($errors->any())
        <div class="alert alert-danger">
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif
    <form action="/admin/gameSettings/createNew" method="post">
        @csrf
        <div class="form-group">
            <label for="title">Название</label>
            <input type="text" class="form-control" name="title" id="title" placeholder="Название">
            <small id="emailHelp" class="form-text text-muted">Придумайте название для настройки</small>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="0" name="premium" id="premium">
            <label class="form-check-label" for="premium">
                Премиум
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="0" name="finish" id="finish">
            <label class="form-check-label" for="finish">
                Окончание
            </label>
        </div>
        <button type="submit" class="btn btn-primary">Создать</button>
    </form>

@endsection
