@extends('admin.layouts.app')
@section('content')
    <h1>Настройки игры: </h1>
    <div style="width: 1200px; border: 1px solid;">
        <div style="margin: 10px">
        <table id="table_id" class="display">
            <thead>
            <tr>
                <th>ID</th>
                <th>Название</th>
                <th>Разница пола</th>
                <th>Премиум</th>
                <th>Окончание</th>
                <th>Создано в</th>
                <th>Изменено в</th>
                <th>&nbsp</th>
            </tr>
            </thead>
            <tbody>
            @foreach ($gameSettings as $gameSetting)
                <tr>
                    <td>{{ $gameSetting->id }}</td>
                    <td>{{ $gameSetting->title }}</td>
                    <td>{{ $gameSetting->has_sex_difference === 1 ? 'да' : 'нет' }}</td>
                    <td>{{ $gameSetting->is_premium  ? 'да' : 'нет'  }}</td>
                    <td>{{ $gameSetting->is_radio  ? 'да' : 'нет' }}</td>
                    <td>{{ $gameSetting->created_at }}</td>
                    <td>{{ $gameSetting->updated_at }}</td>
                    <td><a role="button" href="/admin/gameSettings/edit/{{$gameSetting->id}}" class="btn btn-primary">Изменить</a>
{{--                        <a role="button" href="/admin/gameSettings/delete/{{$gameSetting->id}}" class="btn btn-danger">Удалить</a>--}}
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
