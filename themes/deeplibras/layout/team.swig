<div class="team">
    {% for role, person in site.data.team %}
        <div class="role {{ role }}">

            <h1 class="role-name">{{ __("roles." + role) }}</h1>

            {% for image, name in person %}
                <figure class="person">
                    <img class="person-photo" src="/images/person/{{ image }}.jpg">
                    <figcaption class="person-name">{{ name }}</figcaption>
                </figure>    
            {% endfor %}    

        </div>
    {% endfor %}
</div>

{{ page.content }}