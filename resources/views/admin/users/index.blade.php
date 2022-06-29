@extends('admin.layouts.app')
@section('content')
    <h1>Список Пользователей: </h1>
    <div style="width: 1200px; border: 1px solid;">
        <div style="margin: 10px">
            <table id="table_id" class="display">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Имя</th>
                    <th>Имейл</th>
                    <th>Админ</th>
                    <th>Премиум</th>
                    <th>Премиум до</th>
                    <th>Создано в</th>
                    <th>Изменено в</th>
                    <th>&nbsp</th>
                </tr>
                </thead>
                <tbody>
                @foreach ($users as $user)
                    <tr>
                        <td>{{ $user->id }}</td>
                        <td>{{ $user->name }}</td>
                        <td>{{ $user->email }}</td>
                        <td>{{ ($user->is_admin === 1 ? 'Да' : 'Нет') }}</td>
                        <td>{{ ($user->is_premium ===  1 ? 'Да' : 'Нет') }}</td>
                        <td>{{ $user->premium_expires_at }}</td>
                        <td>{{ $user->created_at }}</td>
                        <td>{{ $user->updated_at }}</td>
                        <td>
                            <a role="button" href="/admin/user/edit/{{$user->id}}" class="btn btn-primary">Изменить</a>
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
