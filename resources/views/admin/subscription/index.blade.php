@extends('admin.layouts.app')
@section('content')
    <h1>Список Подписок: </h1>
    <a role="button" href="/admin/subscription/create" class="btn btn-success m-4">Создать новую</a>
    <div style="width: 1200px; border: 1px solid;">
        <div style="margin: 10px">
            <table id="table_id" class="display">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Название</th>
                    <th>Описание</th>
                    <th>Цена</th>
                    <th>Длительность</th>
                    <th>Создано в</th>
                    <th>Изменено в</th>
                    <th>&nbsp</th>
                </tr>
                </thead>
                <tbody>
                @foreach ($subscriptions as $subscription)
                    <tr>
                        <td>{{ $subscription->id }}</td>
                        <td>{{ $subscription->title }}</td>
                        <td>{{ $subscription->description }}</td>
                        <td>{{ $subscription->price }}</td>
                        <td>{{ $subscription->duration }}</td>
                        <td>{{ $subscription->created_at }}</td>
                        <td>{{ $subscription->updated_at }}</td>
                        <td>
                            <a role="button" href="/admin/subscription/edit/{{$subscription->id}}" class="btn btn-primary">Изменить</a>
                            <a role="button" href="/admin/subscription/delete/{{$subscription->id}}" class="btn btn-danger">Удалить</a>
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
