@component('mail::message')
# {{$data["title"]}}

От кого: {{$data["name"]}}

Имейл отправителя: {{$data["email"]}}

{{$data["text"]}}

Спасибо,<br>
{{$data["name"]}}
@endcomponent
