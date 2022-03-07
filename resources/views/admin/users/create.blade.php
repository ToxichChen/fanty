@extends('admin.layouts.app')
@section('content')
    <h1>Создать новый фант: </h1>

    @if ($errors->any())
        <div class="alert alert-danger">
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif
    <form action="/admin/user/createNew" enctype="multipart/form-data" method="post">
        @csrf
        <div class="form-group col-lg-10">
            <label for="title">Название</label>
            <input type="text" class="form-control" name="title" id="title" placeholder="Название">
            <small id="emailHelp" class="form-text text-muted">Впишите название поднастройки.</small>

            <small id="emailHelp" class="form-text text-muted">Выберите из списка подходящую настройку.</small>
            <label for="sex">Сделать админом:</label>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="is_admin" value="0" id="is_admin1" checked>
                <label class="form-check-label" for="flexRadioDefault2">
                    Нет
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="is_admin" value="1" id="is_admin2" >
                <label class="form-check-label" for="flexRadioDefault2">
                    Да
                </label>
            </div>
        </div>

        <button type="submit" class="btn btn-primary">Создать</button>
    </form>

@endsection
