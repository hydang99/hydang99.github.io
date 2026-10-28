---
layout: portfolio
permalink: /
title: "Hy Dang"
excerpt: "Hy Dang is a Ph.D. candidate at the University of Notre Dame researching reliable and self-improving LLM agents."
author_profile: false
redirect_from:
  - /about/
  - /about.html
---
<div class="shell academic-home">
  <section class="profile" aria-labelledby="intro-title">
    <div class="profile-copy">
      <h1 id="intro-title">Hy Dang</h1>
      <p class="affiliation">Ph.D. Candidate · Computer Science and Engineering<br>University of Notre Dame</p>
      <p>I am a Ph.D. candidate at the <a href="https://www.nd.edu/">University of Notre Dame</a>, where I work in the <a href="http://www.meng-jiang.com/lab.html">DM2 Lab</a> advised by <a href="http://www.meng-jiang.com/">Prof. Meng Jiang</a>.</p>
      <p>My research focuses on <strong>reliable and self-improving LLM agents</strong>. I study how agents use and create tools, learn reusable skills from experience, and solve complex reasoning tasks.</p>
      <nav class="profile-links" aria-label="Contact and academic profiles">
        <a href="mailto:{{ site.author.email }}">Email</a>
        <a href="{{ site.author.googlescholar }}">Google Scholar</a>
        <a href="{{ '/files/Hy_Dang_CV.pdf' | relative_url }}">CV (PDF)</a>
        <a href="https://github.com/{{ site.author.github }}">GitHub</a>
        <a href="https://x.com/{{ site.author.twitter }}">X / Twitter</a>
      </nav>
    </div>
    <img class="profile-photo" src="{{ '/images/hy_dang_headshot.png' | relative_url }}" alt="Hy Dang" width="1760" height="1844" fetchpriority="high">
  </section>

  <p class="availability"><strong>I am seeking Applied Scientist / Research Scientist roles starting Summer/Fall 2027.</strong> Please <a href="mailto:{{ site.author.email }}">get in touch</a> if there is a potential fit.</p>

  <section class="academic-section" id="news" aria-labelledby="news-title">
    <span id="journey" class="anchor-alias" aria-hidden="true"></span>
    <h2 id="news-title">News</h2>
    <ul class="news-list">
      <li><time datetime="2026-09">Sep 2026</time><div>I completed an Applied Scientist internship at <strong>Oracle</strong>, working on skill evolution for LLM agents.</div></li>
      <li><time datetime="2026-08">Aug 2026</time><div><a href="{{ '/publication/opentools/' | relative_url }}">OpenTools</a> was accepted to <strong>EMNLP 2026 Demo Track</strong>.</div></li>
      <li><time datetime="2026-06">Jun 2026</time><div>I passed my Oral Candidacy Exam: <em>Towards Reliable Tool-Augmented Agentic AI Frameworks</em>.</div></li>
      <li><time datetime="2026-04">Apr 2026</time><div>Our paper on <a href="https://dl.acm.org/doi/full/10.1145/3817023">rideshare drivers’ earning and work patterns</a> was accepted to <strong>CSCW 2026</strong>.</div></li>
      <li><time datetime="2025-08">Aug 2025</time><div>Our work on <a href="{{ '/publication/emnlp_2025/' | relative_url }}">guided templates for LLM function calling</a>, from my Amazon internship, was accepted to <strong>EMNLP 2025</strong>.</div></li>
      <li><time datetime="2025-05">May 2025</time><div><a href="https://aclanthology.org/2025.acl-long.254/">DYDECOMP</a> was accepted to <strong>ACL 2025</strong>.</div></li>
    </ul>
    <details class="older-news">
      <summary>Earlier news</summary>
      <ul class="news-list">
        {% for event in site.data.journey offset:6 %}
        <li><span class="news-date">{{ event.date }}</span><div>{{ event.details | markdownify }}{% if event.link %}<a href="{% if event.link contains '://' %}{{ event.link }}{% else %}{{ event.link | relative_url }}{% endif %}">{{ event.link_label }}</a>{% endif %}</div></li>
        {% endfor %}
      </ul>
    </details>
  </section>

  <section class="academic-section" id="research" aria-labelledby="research-title">
    <h2 id="research-title">Selected Publications</h2>
    <p class="section-note">See <a href="{{ site.author.googlescholar }}">Google Scholar</a> for the full publication list. * Equal contribution.</p>
    {% include academic-publications.html %}
  </section>

  <section class="academic-section" id="experience" aria-labelledby="experience-title">
    <h2 id="experience-title">Experience</h2>
    <ul class="experience-list">
      <li>
        <img class="experience-logo" src="{{ '/images/companies/oracle.png' | relative_url }}" alt="" width="100" height="48" loading="lazy">
        <div class="experience-details"><strong>Oracle</strong> · Applied Scientist Intern<p>Skill evolution for LLM agents · Redwood City, CA</p></div>
        <span class="experience-date">Jun–Sep 2026</span>
      </li>
      <li>
        <img class="experience-logo" src="{{ '/images/companies/amazon.svg' | relative_url }}" alt="" width="100" height="48" loading="lazy">
        <div class="experience-details"><strong>Amazon Rufus</strong> · Applied Scientist Intern<p>Tool use and function calling for LLMs · Palo Alto, CA</p></div>
        <span class="experience-date">Sep 2024–May 2025</span>
      </li>
    </ul>
    <p><a href="{{ '/cv/' | relative_url }}">Full CV, education, and service</a></p>
  </section>

  <section class="academic-section" id="contact" aria-labelledby="contact-title">
    <h2 id="contact-title">Contact</h2>
    <p><a href="mailto:{{ site.author.email }}">{{ site.author.email }}</a><br>355 Fitzpatrick Hall of Engineering<br>University of Notre Dame, Notre Dame, IN</p>
    <p class="personal-note">Outside research, I enjoy spending time with my cats, Mam and Muoi Tieu. <a href="{{ '/misc/' | relative_url }}">More about me</a>.</p>
  </section>
</div>
