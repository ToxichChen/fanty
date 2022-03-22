@extends('admin.layouts.app')
@section('content')
    <h1>Создать новый трек: </h1>

    @if ($errors->any())
        <div class="alert alert-danger">
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif
    <form action="/admin/music/createNew" enctype="multipart/form-data" method="post">
        @csrf
        <div class="form-group col-lg-10">
            <label for="title">Название трека</label>
            <input type="text" class="form-control" name="title" id="title"
                   placeholder="Название">
            <small id="emailHelp" class="form-text text-muted">Впишите задание трека.</small>
            <label for="exampleFormControlFile1">Файл трека</label>
            <input type="file" name="media" class="form-control-file" id="exampleFormControlFile1">
        </div>

        <button type="submit" class="btn btn-primary">Создать</button>
    </form>

@endsection
