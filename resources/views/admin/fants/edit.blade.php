@extends('admin.layouts.app')
@section('content')
    <h1>Изменить Фант: </h1>

    @if ($errors->any())
        <div class="alert alert-danger">
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif
    <form action="/admin/fant/update/{{$fant->id}}" enctype="multipart/form-data" method="post">
        @csrf
        <div class="form-group col-lg-10">
            <label for="title">Задание</label>
            <div class="form-floating">
                <textarea class="form-control" name="content" placeholder="Задание фанта" id="floatingTextarea2" style="height: 100px">{{$fant->content}} </textarea>
                <small id="emailHelp" class="form-text text-muted">Впишите задание фанта.</small>
            </div>
            <label for="exampleFormControlSelect1">Настройка</label>
            <select class="form-control" id="exampleFormControlSelect1" name="setting">
                @foreach ($settings as $setting)
                    @if ($setting->id === $fant->game_setting_id)
                        <option value="{{$setting->id}}" selected>{{$setting->title}}</option>
                    @else
                        <option value="{{$setting->id}}" >{{$setting->title}}</option>
                    @endif
                @endforeach
            </select>
            <small id="emailHelp" class="form-text text-muted">Выберите из списка подходящую настройку.</small>
            <label for="exampleFormControlSelect1">Поднастройка</label>
            <select class="form-control" id="exampleFormControlSelect1" name="subsetting">
                @if ($fant->subsetting_id === 0)
                    <option value="0" selected> Общее</option>
                @else
                    <option value="0"> Общее</option>
                @endif
            @foreach ($subsettings as $subsetting)
                        @if ($subsetting->id === $fant->subsetting_id)
                            <option value="{{$subsetting->id}}" selected >{{$subsetting->title}}</option>
                        @else
                            <option value="{{$subsetting->id}}" >{{$subsetting->title}}</option>
                        @endif
                @endforeach
            </select>
            <small id="emailHelp" class="form-text text-muted">Выберите из списка подходящую поднастройку.</small>
            <label for="exampleFormControlSelect1">Группа фантов</label>
            <select class="form-control" id="exampleFormControlSelect1" name="fantGroup">
                @foreach ($fantGroups as $fantGroup)
                    @if ($fantGroup->id === $fant->fant_group_id)
                        <option value="{{$fantGroup->id}}" selected>{{$fantGroup->title}}</option>
                    @else
                        <option value="{{$fantGroup->id}}" >{{$fantGroup->title}}</option>
                    @endif
                @endforeach
            </select>
            <small id="emailHelp" class="form-text text-muted">Выберите из списка подходящую группу фантов.</small>
            <label for="sex">Пол:</label>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="sex" value="0" id="sex0" {{ ($fant->sex == "0")? "checked" : "" }}>
                <label class="form-check-label" for="flexRadioDefault1">
                    Не зависит от пола
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="sex" value="1" id="sex1" {{ ($fant->sex == "1")? "checked" : "" }} >
                <label class="form-check-label" for="flexRadioDefault2">
                    Мужчине
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="sex" value="2" id="sex2" {{ ($fant->sex == "2")? "checked" : "" }} >
                <label class="form-check-label" for="flexRadioDefault2">
                    Женщине
                </label>
            </div>
            <label for="sex_type">Тип секса:</label>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="sex_type" value="0" id="sex_type0" {{ ($fant->sex_type == "0")? "checked" : "" }}>
                <label class="form-check-label" for="flexRadioDefault1">
                    Не зависит
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="sex_type" value="1" id="sex_type1" {{ ($fant->sex_type == "1")? "checked" : "" }} >
                <label class="form-check-label" for="flexRadioDefault2">
                    Нежный секс
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="sex_type" value="2" id="sex_type2" {{ ($fant->sex_type == "2")? "checked" : "" }} >
                <label class="form-check-label" for="flexRadioDefault2">
                    Жесткий секс
                </label>
            </div>
            <label for="exampleFormControlSelect1">Активировать таймер: </label>
            <input type="checkbox"
                   @if ($fant->is_timer_active === 1) checked @endif
                   onchange="document.getElementById('timer').disabled = !this.checked;" name='is_timer_active'
                   id='is_timer_active'/>
            <input type="number" class="form-control" @if ($fant->is_timer_active === 0) disabled @endif name="timer" id="timer" placeholder="Длительность таймера" @if ($fant->is_timer_active === 1) value="{{$fant->timer}}" @endif>
            <br/>
            <label for="exampleFormControlFile1">Файл для фанта</label>
            <input type="file" name="media" class="form-control-file" id="exampleFormControlFile1">
        </div>

        <button type="submit" class="btn btn-primary">Изменить</button>
    </form>

@endsection
