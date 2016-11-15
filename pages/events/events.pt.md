---
title: Eventos
layout: default
permalink: /events/
lang: pt
nav: 2
---
# Encontro para Coleta de Sinais da LIBRAS (ECLS)
Com a finalidade de obter dados da LIBRAS para o desenvolvimento do projeto de pesquisa, os membros do DeepLIBRAS realizam, esporadicamente, encontros para reunir surdos e não-surdos que dominam a língua de sinais do Brasil para gravar sinais da LIBRAS utilizando câmeras de cor e profundidade.

{% haml gallery.haml %}

<div class="session list events" markdown="1">
# Eventos
{% for event in site.pages %}
{% if event.layout == "event" %}
- [{{ event.title }}]({{ event.url }})
{% endif %}
{% endfor %}
</div>
