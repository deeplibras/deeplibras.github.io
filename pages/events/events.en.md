---
title: Events
layout: default
permalink: /events/
lang: en
nav: 2
---
# Meeting for Collecting Signs of Brazilian Sign Language (ECSL)
In order to get data of the Brazilian Sign Language for developing the research project, the DeepLIBRAS team sporadically organize meetings to bring together deaf and non-deaf people that speak the Brazilian Sign Language to record its signals using color and depth cameras.

{% haml gallery.haml %}

<div class="session list events" markdown="1">
# Eventos
{% for event in site.pages %}
{% if event.layout == "event" %}
- [{{ event.title }}]({{ event.url }})
{% endif %}
{% endfor %}
</div>
