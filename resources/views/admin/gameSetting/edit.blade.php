@extends('admin.layouts.app')
@section('content')
    <h1>Изменить настройку игры: </h1>

    @if ($errors->any())
        <div class="alert alert-danger">
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif
    <form action="/admin/gameSettings/update/{{$gameSetting->id}}" method="post">
        @csrf
        <div class="form-group">
            <label for="title">Название</label>
            <input type="text" class="form-control" name="title" id="title" value="{{$gameSetting->title}}" placeholder="Название">
        </div>

        <div class="form-check">
            <input class="form-check-input" type="checkbox" {{$gameSetting->is_premium === 0 ? '' : 'checked'}} name="premium" id="premium">
            <label class="form-check-label" for="premium">
                Премиум
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="checkbox" {{$gameSetting->is_radio === 0 ? '' : 'checked'}} name="finish" id="finish">
            <label class="form-check-label" for="finish">
                Радио кнопка
            </label>
        </div>

        <button type="submit" class="btn btn-primary">Изменить</button>
    </form>

@endsection
