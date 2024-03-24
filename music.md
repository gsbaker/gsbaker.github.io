---
layout: page
title: 👍 Music
---

<div class="card">
<div class="card-header">
George's Favourite Albums
</div>
<ul class="list-group list-group-flush">
{% for album in site.data.albums %}
  <li class="list-group-item">
  <span class="text-muted">{{ album.artist }}:</span> <span class="fw-bold">{{ album.title }}</span>   
  </li>
{% endfor %}
</ul>
</div>
