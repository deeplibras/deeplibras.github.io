<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{ page.title ? page.title : config.title }}</title>
    <meta name="description" content="{{ page.description ? page.description : config.description }}">
    <meta name="keywords" content="{{ page.keywords ? page.keywords : config.keywords }}">
    <meta name="author" content="{{ config.authors }}">
    <meta name="robots" content="index, follow">
    <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Open+Sans:300,400|Roboto:300,400">
    <link rel="shortcut icon" type="image/png" href="/images/icon/favicon.png" sizes="16x16">

    {{ css("css/main") }}
    {{ css("css/lightbox.min") }}

    {% if page.layout == "event" %}
        {{ css('css/event') }}
    {% endif %}

    {% if page.layout == "contact" %}
        {{ css('css/contact') }}
    {% endif %}

    {% if page.layout == "team" %}
        {{ css('css/team') }}
    {% endif %}

</head>