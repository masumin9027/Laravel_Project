<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>
        <script type="text/javascript">
            window.Laravel = window.Laravel || {};
            window.Laravel.csrfToken = "{{csrf_token()}}";
        </script>
        <!-- Styles -->
        <link href="css/app.css" rel="stylesheet" type="text/css">
        <link href="https://cdn.jsdelivr.net/npm/vuetify/dist/vuetify.min.css" rel="stylesheet">
        <link href='https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons' rel="stylesheet">
        <meta name="csrf-token" content="{{ csrf_token() }}">
    </head>
    <body>
        <div id="app">
            <router-view></router-view>
        </div>
        <script src="js/app.js"></script>
    </body>
</html>
