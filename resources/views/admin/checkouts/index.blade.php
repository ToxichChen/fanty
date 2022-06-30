@extends('admin.layouts.app')
@section('content')
    <h1>Список Платежей: </h1>
    <div style="width: 1200px; border: 1px solid;">
        <div style="margin: 10px">
            <table id="table_id" class="display">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Имейл</th>
                    <th>ID пользователя</th>
                    <th>ID платежа интеркассы</th>
                    <th>Подписка</th>
                    <th>Статус оплаты</th>
                    <th>Сумма</th>
                    <th>Создано в</th>
                </tr>
                </thead>
                <tbody>
                @foreach ($checkouts as $checkout)
                    <tr>
                        <td>{{ $checkout->id }}</td>
                        <td>{{ $checkout->email }}</td>
                        <td>{{ $checkout->user_id }}</td>
                        <td>{{ $checkout->checkout_id }}</td>
                        <td>{{ $checkout->subscription_id }}</td>
                        <td>{{ $checkout->state }}</td>
                        <td>{{ $checkout->created_at }}</td>
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
