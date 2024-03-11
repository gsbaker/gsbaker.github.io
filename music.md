---
layout: page
title: 👍 Music
---

# Great Albums

Albums I consider to be outstanding:

<ul>
{% for album in site.data.albums %}
  <li>
{{ album.title }} ({{ album.artist }})
  </li>
{% endfor %}
</ul>
