---
layout: portfolio
title: "Off the clock"
permalink: /misc/
excerpt: "People, places, and projects beyond research: community, conservation, and life outside the lab."
author_profile: false
---
<div class="shell misc-page" data-filter-group>
  <section class="misc-intro" aria-labelledby="misc-title">
    <div>
      <p class="eyebrow">Misc / Beyond research</p>
      <h1 id="misc-title">Off the clock<span>.</span></h1>
      <p class="misc-lead">A few people, places, and projects that matter to me.</p>
      <p>Originally from Da Nang, Vietnam. Always curious about new places, good food, and ways to help.</p>
    </div>
    <a class="hometown" href="https://www.google.com/maps/search/?api=1&amp;query=Da+Nang+Vietnam">
      <span class="hometown-icon">{% include portfolio-icon.html name='pin' %}</span>
      <span><span class="eyebrow">Home roots</span><strong>Da Nang, Vietnam</strong><span>Coastal city. Lifelong connection.</span></span>
      <span class="hometown-arrow" aria-hidden="true">↗</span>
    </a>
  </section>
  <div class="memory-toolbar">
    <div class="filters" role="group" aria-label="Filter memories" hidden>
      <button type="button" data-filter="all" aria-pressed="true">Everything</button>
      <button type="button" data-filter="community" aria-pressed="false">Community</button>
      <button type="button" data-filter="conservation" aria-pressed="false">Conservation</button>
      <button type="button" data-filter="life" aria-pressed="false">Life</button>
    </div>
    <button class="surprise-button" type="button" data-surprise hidden>{% include portfolio-icon.html name='shuffle' %} Surprise me <span aria-hidden="true">↗</span></button>
  </div>
  <p class="sr-only" data-filter-status aria-live="polite" aria-atomic="true"></p>
  <section class="memories-section" aria-labelledby="memories-title" data-gallery>
    <h2 id="memories-title">A few chapters outside the lab<span>.</span></h2>
    <div class="memories-grid">
      {% for memory in site.data.memories %}
      <article class="memory-card" id="{{ memory.id }}" data-category="{{ memory.category }}" data-memory tabindex="-1">
        <img src="{{ memory.image | relative_url }}" alt="{{ memory.alt | escape }}" width="500" height="{{ memory.height }}" loading="lazy">
        <div class="memory-body">
          <p class="memory-meta"><span>{{ memory.date }}</span><span aria-hidden="true">·</span><span class="badge {{ memory.category }}">{{ memory.category | capitalize }}</span></p>
          <h3>{{ memory.title }}<span>.</span></h3>
          <p class="memory-location">{{ memory.location }}</p>
          <p>{{ memory.description }}</p>
          <details class="story-details"><summary><span class="story-closed">Read the story</span><span class="story-open">Close the story</span><span aria-hidden="true"> ↗</span></summary><div>{{ memory.story | markdownify }}</div></details>
        </div>
      </article>
      {% endfor %}
    </div>
  </section>
  <section class="cat-band" id="cats" aria-labelledby="cats-title" data-category="life" data-memory tabindex="-1">
    <div><h2 id="cats-title">The very important cat section<span>.</span></h2><p>Meet Mam and Muoi Tieu.</p></div>
    <div class="cat-names">
      <div class="cat-name">{% include portfolio-icon.html name='paw' %}<div><h3>Mam</h3><p>Fish Sauce</p></div></div>
      <div class="cat-name">{% include portfolio-icon.html name='paw' %}<div><h3>Muoi Tieu</h3><p>Pepper Salt</p></div></div>
    </div>
    <a href="mailto:{{ site.author.email }}?subject=Let%27s%20talk%20cats">Tell me about your cat <span aria-hidden="true">↗</span></a>
  </section>
</div>
