@extends('admin.layouts.app')
@section('content')
    <h1>Создать новый пост: </h1>

    @if ($errors->any())
        <div class="alert alert-danger">
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif
    <form action="/admin/post/createNew" enctype="multipart/form-data" method="post">
        @csrf
        <div class="form-group col-lg-10">
            <label for="title">Название поста</label>
            <input type="text" class="form-control" name="title" id="title"
                   placeholder="Название поста">
            <label for="title">Текст</label>
            <div class="form-floating">
                <textarea class="form-control" name="text" placeholder="Текст поста" id="floatingTextarea2" style="height: 100px"></textarea>
                <small id="emailHelp" class="form-text text-muted">Впишите текст поста.</small>
            </div>
            <br/>
            <label for="exampleFormControlFile1">Картинка для поста</label>
            <input type="file" name="media" class="form-control-file" id="exampleFormControlFile1">
        </div>

        <button type="submit" class="btn btn-primary">Создать</button>
    </form>

@endsection
