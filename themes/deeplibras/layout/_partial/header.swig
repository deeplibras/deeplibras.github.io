<header class="header">
    <div class="logo">
        <a href="{{ config.root + page.lang }}">
            {{ image_tag('images/deeplibras-white.png') }}
        </a>
    </div>
    <h1 class="has-text-white subtitle">
        {{ __('header.subtitle') }}
    </h1>
</header>

<nav class="navbar">
    <div class="nav-wrapper">

        <div class="nav">
            <ul>
                {% for name, link in site.data.nav %}
                    <li class="nav-item">
                        <a href="{{ config.root + page.lang + link }}">{{ __("nav."+name) }}</a>
                    </li>
                {% endfor %}
            </ul>
        </div>

        <div class="languages">
            {% for lang in config.languages %}
                <div class="language">
                    <a href="{{ change_language(lang) }}">
                        {{ image_tag('images/icon/'+lang+'.png') }}
                    </a>
                </div>
            {% endfor %}
        </div>
        
    </div>
</nav>