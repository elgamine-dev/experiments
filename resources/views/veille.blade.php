@extends('layouts.app')

@section('title', 'A firebase + Vue experiment')

@section('js', asset('js/app.js'))

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div id="el">
            <links-component />
        </div>
    </div>
</div>
@endsection
