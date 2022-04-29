@extends('admin.layouts.app')
@section('content')
    <h1>Список Платежей: </h1>
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
                @foreach ($checkouts as $checkout)
                    <tr>
                        <td>{{ $checkout->id }}</td>
                        <td>{{ $checkout->title }}</td>
                        <td>{{ $checkout->text }}</td>
                        <td>{{ $checkout->created_at }}</td>
                        <td>{{ $checkout->updated_at }}</td>
                        <td>
                            <a role="button" href="/admin/checkout/edit/{{$checkout->id}}" class="btn btn-primary">Изменить</a>
                            <a role="button" href="/admin/checkout/delete/{{$checkout->id}}" class="btn btn-danger">Удалить</a>
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
