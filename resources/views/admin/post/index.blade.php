@extends('admin.layouts.app')
@section('content')
    <h1>Список Постов: </h1>
    <a role="button" href="/admin/post/create" class="btn btn-success m-4">Создать новый</a>
    <div style="width: 1200px; border: 1px solid;">
        <div style="margin: 10px">
            <table id="table_id" class="display">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Название</th>
                    <th>Текст</th>
                    <th>Создано в</th>
                    <th>Изменено в</th>
                    <th>&nbsp</th>
                </tr>
                </thead>
                <tbody>
                @foreach ($posts as $post)
                    <tr>
                        <td>{{ $post->id }}</td>
                        <td>{{ $post->title }}</td>
                        <td>{{ $post->text }}</td>
                        <td>{{ $post->created_at }}</td>
                        <td>{{ $post->updated_at }}</td>
                        <td>
                            <a role="button" href="/admin/post/edit/{{$post->id}}" class="btn btn-primary">Изменить</a>
                            <a role="button" href="/admin/post/delete/{{$post->id}}" class="btn btn-danger">Удалить</a>
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
