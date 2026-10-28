---
layout: portfolio
title: "Personal"
permalink: /misc/
excerpt: "People, places, and projects beyond research: community, conservation, and life outside the lab."
author_profile: false
---
<div class="shell secondary-page">
  <header class="page-heading">
    <h1>Personal</h1>
    <p>I'm originally from <a href="https://www.google.com/maps/search/?api=1&amp;query=Da+Nang+Vietnam">Da Nang, Vietnam</a>. Outside research, I enjoy exploring new places, good food, and community activities.</p>
  </header>
  <section aria-labelledby="memories-title">
    <h2 id="memories-title">Community and conservation</h2>
    <div class="entry-list">
      {% for memory in site.data.memories %}
      <article class="personal-entry" id="{{ memory.id }}">
        <img src="{{ memory.image | relative_url }}" alt="{{ memory.alt | escape }}" width="500" height="{{ memory.height }}" loading="lazy">
        <div>
          <h3>{{ memory.location }}</h3>
          <p class="article-meta">{{ memory.date }}</p>
          {{ memory.story | markdownify }}
        </div>
      </article>
      {% endfor %}
    </div>
  </section>
  <section id="cats" aria-labelledby="cats-title">
    <h2 id="cats-title">Cats</h2>
    <p>My cats are Mam (Fish Sauce) and Muoi Tieu (Pepper Salt).</p>
    <p><a href="mailto:{{ site.author.email }}?subject=Let%27s%20talk%20cats">Tell me about your cat</a>.</p>
  </section>
</div>
