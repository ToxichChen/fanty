@extends('admin.layouts.app')
@section('content')
    <h1>Группы фантов: </h1>
    <div style="width: 1200px; border: 1px solid;">
        <div style="margin: 10px">
        <table id="table_id" class="display">
            <thead>
            <tr>
                <th>ID</th>
                <th>Название</th>
                <th>Создано в</th>
                <th>Изменено в</th>
            </tr>
            </thead>
            <tbody>
            @foreach ($fantGroups as $fantGroup)
                <tr>
                    <td>{{ $fantGroup->id }}</td>
                    <td>{{ $fantGroup->title }}</td>
                    <td>{{ $fantGroup->created_at }}</td>
                    <td>{{ $fantGroup->updated_at }}</td>
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
