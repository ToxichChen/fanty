@extends('admin.layouts.app')
@section('content')
    <h1>Изменить Пост: </h1>

    @if ($errors->any())
        <div class="alert alert-danger">
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif
    <form action="/admin/subscription/update/{{$subscription->id}}" enctype="multipart/form-data" method="post">
        @csrf
        <div class="form-group col-lg-10">
            <label for="title">Название подписки</label>
            <input type="text" class="form-control" name="title" id="title"
                   placeholder="Название подписки" value="{{$subscription->title}}">

            <label for="description">Описание подписки</label>
            <input type="text" class="form-control" name="description" id="description"
                   placeholder="Описание подписки" value="{{$subscription->description}}">

            <label for="price">Цена</label>
            <input type="number" class="form-control" style="width: 200px;" min="0" name="price" id="price"
                   placeholder="Цена" value="{{$subscription->price}}">

            <label for="duration">Длительность в днях</label>
            <input type="number" class="form-control" style="width: 200px;" min="0" name="duration" id="duration"
                   placeholder="Длительность" value="{{$subscription->duration}}">
        </div>

        <button type="submit" class="btn btn-primary">Создать</button>
    </form>

@endsection
