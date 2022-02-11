@extends('admin.layouts.app')
@section('content')
    <h1>Поднастройки игры: </h1>
    <a role="button" href="/admin/subsetting/create" class="btn btn-success m-4">Создать новую</a>
    <div style="width: 1200px; border: 1px solid;">
        <div style="margin: 10px">
        <table id="table_id" class="display">
            <thead>
            <tr>
                <th>ID</th>
                <th>Название</th>
                <th>Настройка</th>
                <th>Пол</th>
                <th>Создано в</th>
                <th>Изменено в</th>
                <th>&nbsp</th>
            </tr>
            </thead>
            <tbody>
            @foreach ($subsettings as $subsetting)
                <tr>
                    <td>{{ $subsetting->id }}</td>
                    <td>{{ $subsetting->title }}</td>
                    <td>{{ $subsetting->setting_name }}</td>
                    <td>{{ ($subsetting->sex === 1 ? 'М' : ($subsetting->sex === 2 ? 'Ж' : '')) }}</td>
                    <td>{{ $subsetting->created_at }}</td>
                    <td>{{ $subsetting->updated_at }}</td>
                    <td>
                        <a role="button" href="/admin/subsetting/edit/{{$subsetting->id}}" class="btn btn-primary">Изменить</a>
{{--                        <a role="button" href="/admin/subsetting/delete/{{$subsetting->id}}" class="btn btn-danger">Удалить</a>--}}
                    </td>
                </tr>
            @endforeach
            </tbody>
        </table>
    </div>

    <script>
        $(document).ready(function () {
            $('#table_id').DataTable();
        });
    </script>


@endsection
