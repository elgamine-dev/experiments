@extends('layouts.app')

@section('title', 'Fun with web APIs')

@section('js', asset('js/web-apis.js'))

@section('content')
<div class="container">
    <div class="">
        <h3>Let's have fun with web APIs</h3>
        <div class="border border-color-teal-300">
            <ol>
                <li>Visibility <span id="visibility-state"></span></li>
            </ol>
        </div>
    </div>
</div>
@endsection
