@extends('admin.layouts.app')
@section('content')
    <h1>Создать новую поднастройку: </h1>

    @if ($errors->any())
        <div class="alert alert-danger">
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif
    <form action="/admin/subsetting/createNew" method="post">
        @csrf
        <div class="form-group">
            <label for="title">Название</label>
            <input type="text" class="form-control" name="title" id="title" placeholder="Название">
            <small id="emailHelp" class="form-text text-muted">Впишите название поднастройки.</small>
            <label for="exampleFormControlSelect1">Настройка</label>
            <select class="form-control" id="exampleFormControlSelect1" name="setting">
                @foreach ($settings as $setting)
                    <option value="{{$setting->id}}" >{{$setting->title}}</option>
                @endforeach
            </select>
            <small id="emailHelp" class="form-text text-muted">Выберите из списка подходящую настройку.</small>
            <label for="sex">Пол:</label>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="sex" value="0" id="sex0" checked>
                <label class="form-check-label" for="flexRadioDefault1">
                    Не зависит от пола
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="sex" value="1" id="sex1" >
                <label class="form-check-label" for="flexRadioDefault2">
                    Мужчине
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="sex" value="2" id="sex2" >
                <label class="form-check-label" for="flexRadioDefault2">
                    Женщине
                </label>
            </div>
        </div>

        <button type="submit" class="btn btn-primary">Создать</button>
    </form>

@endsection
