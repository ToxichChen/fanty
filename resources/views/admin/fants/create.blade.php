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
    <form action="/admin/fant/createNew" enctype="multipart/form-data" method="post">
        @csrf
        <div class="form-group col-lg-10">
            <label for="title">Задание</label>
            <div class="form-floating">
                <textarea class="form-control" name="content" placeholder="Задание фанта" id="floatingTextarea2"
                          style="height: 100px"></textarea>
                <small id="emailHelp" class="form-text text-muted">Впишите задание фанта.</small>
            </div>
            <label for="exampleFormControlSelect1">Настройка</label>
            <select class="form-control" id="exampleFormControlSelect1" name="setting">
                @foreach ($settings as $setting)
                    <option value="{{$setting->id}}">{{$setting->title}}</option>
                @endforeach
            </select>
            <small id="emailHelp" class="form-text text-muted">Выберите из списка подходящую настройку.</small>
            <label for="exampleFormControlSelect1">Поднастройка</label>
            <select class="form-control" id="exampleFormControlSelect1" name="subsetting">
                <option value="0"> Общее</option>
                @foreach ($subsettings as $subsetting)
                    <option value="{{$subsetting->id}}">{{$subsetting->title}}</option>
                @endforeach
            </select>
            <small id="emailHelp" class="form-text text-muted">Выберите из списка подходящую поднастройку.</small>
            <label for="exampleFormControlSelect1">Группа фантов</label>
            <select class="form-control" id="exampleFormControlSelect1" name="fantGroup">
                @foreach ($fantGroups as $fantGroup)
                    <option value="{{$fantGroup->id}}">{{$fantGroup->title}}</option>
                @endforeach
            </select>
            <small id="emailHelp" class="form-text text-muted">Выберите из списка подходящую группу фантов.</small>
            <label for="sex">Пол:</label>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="sex" value="0" id="sex0" checked>
                <label class="form-check-label" for="flexRadioDefault1">
                    Не зависит от пола
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="sex" value="1" id="sex1">
                <label class="form-check-label" for="flexRadioDefault2">
                    Мужчине
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="sex" value="2" id="sex2">
                <label class="form-check-label" for="flexRadioDefault2">
                    Женщине
                </label>
            </div>
            <label for="sex_type">Тип секса:</label>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="sex_type" value="0" id="sex_type0" checked>
                <label class="form-check-label" for="flexRadioDefault1">
                    Не зависит
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="sex_type" value="1" id="sex_type1">
                <label class="form-check-label" for="flexRadioDefault2">
                    Нежный секс
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="sex_type" value="2" id="sex_type2">
                <label class="form-check-label" for="flexRadioDefault2">
                    Жесткий секс
                </label>
            </div>
            <label for="exampleFormControlSelect1">Активировать таймер: </label>
            <input type="checkbox"
                   onchange="document.getElementById('timer').disabled = !this.checked;" name='is_timer_active'
                   id='is_timer_active'/>
            <input type="number" class="form-control" disabled name="timer" id="timer"
                   placeholder="Длительность таймера">
            <br/>
            <label for="exampleFormControlFile1">Файл для фанта</label>
            <input type="file" name="media" class="form-control-file" id="exampleFormControlFile1">
        </div>

        <button type="submit" class="btn btn-primary">Создать</button>
    </form>

@endsection
