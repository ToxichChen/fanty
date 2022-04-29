@extends('admin.layouts.app')
@section('content')
    <form name="payment" method="post" action="https://sci.interkassa.com/" accept-charset="UTF-8">
        <input type="hidden" name="ik_co_id" value="62619b17972ad26cd11d0423"/>
        <input type="hidden" name="ik_pm_no" value="ID_1234"/>
        <input type="hidden" name="ik_am" value="1.44"/>
        <input type="hidden" name="ik_cur" value="uah"/>
        <input type="hidden" name="ik_desc" value="Payment Description"/>
        <input type="submit" value="Pay">
    </form>
@endsection
