---
layout: portfolio
permalink: /
title: "Hy Dang — AI Researcher"
excerpt: "Reliable and self-improving AI agents. Research, publications, and news from Hy Dang at the University of Notre Dame."
author_profile: false
redirect_from:
  - /about/
  - /about.html
---
<section class="hero shell" aria-labelledby="intro-title">
  <div class="hero-copy">
    <p class="eyebrow">AI researcher · Notre Dame</p>
    <h1 id="intro-title">Building agents that<br class="desktop-break"> learn, reason &amp; use tools<span>.</span></h1>
    <p class="intro">I’m Hy Dang, a Ph.D. candidate in Computer Science and Engineering at the <a href="https://www.nd.edu/">University of Notre Dame</a>. I work in the <a href="http://www.meng-jiang.com/lab.html">DM2 Lab</a>, advised by <a href="http://www.meng-jiang.com/">Prof. Meng Jiang</a>. My research focuses on reliable and self-improving LLM agents: how they use and create tools, learn from experience, and tackle complex reasoning tasks.</p>
    <aside class="opportunity-note" aria-label="Career opportunities">
      <p class="opportunity-label">Open to opportunities</p>
      <p>I’m actively looking for <strong>Applied Scientist / Research Scientist</strong> roles starting in <strong>Summer/Fall 2027</strong>. If you think I’d be a good fit for your team, <a href="mailto:{{ site.author.email }}?subject=Applied%20Scientist%20%2F%20Research%20Scientist%20opportunity">let’s connect<span aria-hidden="true"> ↗</span></a>.</p>
    </aside>
    <div class="hero-actions">
      <a class="button primary" href="#research">Explore my research <span aria-hidden="true">↗</span></a>
      <a class="button" href="{{ '/files/Hy_Dang_CV.pdf' | relative_url }}">Download CV <span aria-hidden="true">↓</span></a>
    </div>
  </div>
  <div class="portrait-block">
    <img class="portrait" src="{{ '/images/hy_dang_headshot.png' | relative_url }}" alt="Hy Dang" width="1760" height="1844" fetchpriority="high">
    {% include portfolio-social.html %}
  </div>
</section>
<section class="section-rule" id="journey" aria-labelledby="journey-title">
  <div class="shell section-space" data-filter-group>
    <div class="section-heading">
      <div><h2 id="journey-title">A journey in the making<span>.</span></h2><p>Research, industry, and milestones during my Ph.D.</p></div>
      <div class="filters" role="group" aria-label="Filter milestones" hidden>
        <button type="button" data-filter="all" aria-pressed="true">All</button>
        <button type="button" data-filter="research" aria-pressed="false">Research</button>
        <button type="button" data-filter="industry" aria-pressed="false">Industry</button>
        <button type="button" data-filter="education" aria-pressed="false">Education</button>
      </div>
    </div>
    <p class="sr-only" data-filter-status aria-live="polite" aria-atomic="true"></p>
    <ol class="timeline">
      {% for event in site.data.journey %}
      <li class="timeline-item" data-category="{{ event.category }}">
        <span class="timeline-date">{{ event.date }}</span>
        <span class="timeline-node" aria-hidden="true"></span>
        <details class="milestone">
          <summary>
            <span class="milestone-copy"><span class="milestone-title">{{ event.title }}</span><span class="milestone-subtitle">{{ event.subtitle }}</span></span>
            <span class="badge {{ event.category }}">{{ event.category | capitalize }}</span><span class="expand-icon" aria-hidden="true"></span>
          </summary>
          <div class="milestone-detail">{{ event.details | markdownify }}{% if event.link %}<a href="{% if event.link contains '://' %}{{ event.link }}{% else %}{{ event.link | relative_url }}{% endif %}">{{ event.link_label }} <span aria-hidden="true">↗</span></a>{% endif %}</div>
        </details>
      </li>
      {% endfor %}
    </ol>
  </div>
</section>
<section class="section-rule" id="research" aria-labelledby="research-title">
  <div class="shell section-space">
    <div class="section-heading"><div><h2 id="research-title">Selected research<span>.</span></h2><p>Tools, reasoning, and the systems we build around them.</p></div></div>
    <div class="research-grid">
      {% for selected in site.data.selected_research %}
      {% assign source_path = selected.slug | prepend: '_publications/' | append: '.md' %}
      {% assign pub = site.publications | where: 'path', source_path | first %}
      {% if pub %}
      {% assign paper_url = pub.paper_link | default: pub.arxiv %}
      <article class="research-card">
        <span class="badge research">{{ selected.venue }}</span>
        <h3>{{ pub.title }}</h3>
        <div class="research-actions">
          <a href="{{ paper_url }}" aria-label="Read {{ pub.title | escape }}">Paper <span aria-hidden="true">↗</span></a>
          {% if pub.link %}<a href="{{ pub.link | relative_url }}" aria-label="Project page for {{ pub.title | escape }}">Project <span aria-hidden="true">↗</span></a>{% endif %}
        </div>
      </article>
      {% endif %}
      {% endfor %}
    </div>
  </div>
</section>
<aside class="personal-band" aria-labelledby="beyond-title">
  <div class="shell personal-inner">
    <div><h2 id="beyond-title">A little beyond research<span>.</span></h2><p>Usually thinking about agents.<br>Occasionally distracted by Mam &amp; Muoi Tieu.</p></div>
    <a class="text-link" href="{{ '/misc/' | relative_url }}">Meet the person behind the papers <span aria-hidden="true">↗</span></a>
  </div>
</aside>
