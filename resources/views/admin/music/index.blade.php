@extends('admin.layouts.app')
@section('content')
    <h1>Список Треков: </h1>
    <a role="button" href="/admin/music/create" class="btn btn-success m-4">Создать новый</a>
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
                @foreach ($music as $track)
                    <tr>
                        <td>{{ $track->id }}</td>
                        <td>{{ $track->title }}</td>
                        <td>{{ $track->created_at }}</td>
                        <td>{{ $track->updated_at }}</td>
                        <td>
                            <a role="button" href="/admin/music/edit/{{$track->id}}" class="btn btn-primary">Изменить</a>
                            <a role="button" href="/admin/music/delete/{{$track->id}}" class="btn btn-danger">Удалить</a>
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
