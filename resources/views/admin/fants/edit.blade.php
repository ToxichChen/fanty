@extends('admin.layouts.app')
@section('content')
    <h1>Изменить поднастройку: </h1>

    @if ($errors->any())
        <div class="alert alert-danger">
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif
    <form action="/admin/subsetting/update/{{$subsetting->id}}" method="post">
        @csrf
        <div class="form-group">
            <label for="title">Название</label>
            <input type="text" class="form-control" name="title" id="title" value="{{$subsetting->title}}"
                   placeholder="Название">
            <small id="emailHelp" class="form-text text-muted">Впишите название поднастройки.</small>
            <label for="exampleFormControlSelect1">Настройка</label>
            <select class="form-control" id="exampleFormControlSelect1" name="setting">
                @foreach ($settings as $setting)
                    @if ($setting->id === $subsetting->setting_id)
                        <option selected value="{{$setting->id}}">{{$setting->title}}</option>
                    @else
                        <option value="{{$setting->id}}">{{$setting->title}}</option>
                    @endif
                @endforeach
            </select>
            <small id="emailHelp" class="form-text text-muted">Выберите из списка подходящую настройку.</small>
        </div>

        <button type="submit" class="btn btn-primary">Изменить</button>
    </form>

@endsection
