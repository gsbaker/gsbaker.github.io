---
layout: page
title: Home
permalink: /
description: Home
sitemap: true
---

Hi, I'm George. I'm a software engineer based in Edinburgh, UK. I primarily
work with Ruby on Rails as part of a product engineering team. I'm also
experienced with the Hotwire stack, including Stimulus and Turbo.

Before software engineering, I studied computer science at the University of
Birmingham, where I researched conformity to social pressure in online
behaviour.

<div>
  <div class="card">
  <ul class="list-group list-group-flush">
  <li class="list-group-item fs-5 fw-bold">
  Posts
  </li>
  {% for post in site.posts %}
      <li class="list-group-item">
      <span class="text-muted me-3">{{ post.date | date_to_string }}</span> <a href="{{ post.url }}">{{ post.title }}</a>
      </li>
  {% endfor %}
  </ul>
  </div>
</div>
