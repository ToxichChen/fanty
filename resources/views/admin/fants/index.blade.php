@extends('admin.layouts.app')
@section('content')
    <h1>Список Фантов: </h1>
    <a role="button" href="/admin/fant/create" class="btn btn-success m-4">Создать новый</a>
    <div style="width: 1200px; border: 1px solid;">
        <div style="margin: 10px">
            <table id="table_id" class="display">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Настройка</th>
                    <th>Поднастройка</th>
                    <th>Группа фантов</th>
                    <th>Пол</th>
                    <th>Тип секса</th>
                    <th>Создано в</th>
                    <th>Изменено в</th>
                    <th>&nbsp</th>
                </tr>
                </thead>
                <tbody>
                @foreach ($fants as $fant)
                    <tr>
                        <td>{{ $fant->id }}</td>
                        <td>{{ $fant->setting_name }}</td>
                        <td>{{ $fant->subsetting_name }}</td>
                        <td>{{ $fant->fant_group_name }}</td>
                        <td>{{ ($fant->sex === 1 ? 'М' : ($fant->sex === 2 ? 'Ж' : '')) }}</td>
                        <td>{{ ($fant->sex_type === 1 ? 'Нежный' : ($fant->sex_type === 2 ? 'Жесткий' : '')) }}</td>
                        <td>{{ $fant->created_at }}</td>
                        <td>{{ $fant->updated_at }}</td>
                        <td>
                            <a role="button" href="/admin/fant/edit/{{$fant->id}}" class="btn btn-primary">Изменить</a>
                            <a role="button" href="/admin/fant/delete/{{$fant->id}}" class="btn btn-danger">Удалить</a>
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
