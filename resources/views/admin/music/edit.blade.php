@extends('admin.layouts.app')
@section('content')
    <h1>Изменить трек: </h1>

    @if ($errors->any())
        <div class="alert alert-danger">
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif
    <form action="/admin/music/update/{{$music->id}}" enctype="multipart/form-data" method="post">
        @csrf
        <div class="form-group col-lg-10">
            <label for="title">Название трека</label>
            <input type="text" class="form-control" name="title" id="title" value="{{$music->title}}"
                   placeholder="Название">
            <small id="emailHelp" class="form-text text-muted">Впишите название трека.</small>
        </div>

        <button type="submit" class="btn btn-primary">Создать</button>
    </form>

@endsection
