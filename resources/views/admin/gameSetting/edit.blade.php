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

        <button type="submit" class="btn btn-primary">Изменить</button>
    </form>

@endsection
