@extends('admin.layouts.app')
@section('content')
    <h1>Группы фантов: </h1>
    <a role="button" href="/admin/fantGroup/create" class="btn btn-success m-4">Создать новую</a>
    <div style="width: 1200px; border: 1px solid;">
        <div style="margin: 10px">
        <table id="table_id" class="display">
            <thead>
            <tr>
                <th>ID</th>
                <th>Название</th>
                <th>Создано в</th>
                <th>Изменено в</th>
                <th>&nbsp</th>
            </tr>
            </thead>
            <tbody>
            @foreach ($fantGroups as $fantGroup)
                <tr>
                    <td>{{ $fantGroup->id }}</td>
                    <td>{{ $fantGroup->title }}</td>
                    <td>{{ $fantGroup->created_at }}</td>
                    <td>{{ $fantGroup->updated_at }}</td>
                    <td>
                        <a role="button" href="/admin/fantGroup/edit/{{$fantGroup->id}}" class="btn btn-primary">Изменить</a>
                        <a role="button" href="/admin/fantGroup/delete/{{$fantGroup->id}}" class="btn btn-danger">Удалить</a>
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
