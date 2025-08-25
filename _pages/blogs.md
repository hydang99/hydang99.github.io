---
layout: archive
title: Blogs
permalink: /blogs/
author_profile: true
---
I love to read papers and find myself writing blogs to better understand the problems I encounter in my research. Here you'll find my thoughts, insights, and discussions on various topics in Computer Science, particularly in Natural Language Processing, Information Retrieval, and Data Mining.

{% assign all_categories = "" | split: "," %}
{% for post in site.posts %}
  {% for category in post.categories %}
    {% unless all_categories contains category %}
      {% assign all_categories = all_categories | push: category %}
    {% endunless %}
  {% endfor %}
{% endfor %}

{% assign sorted_categories = all_categories | sort %}
{% for category in sorted_categories %}
  {% assign posts_in_category = "" | split: "," %}
  {% for post in site.posts %}
    {% if post.categories contains category %}
      {% assign posts_in_category = posts_in_category | push: post %}
    {% endif %}
  {% endfor %}
  
{% if posts_in_category.size > 0 %}
<h3><i class="fas fa-folder-open" style="color: #28a745; margin-right: 8px;"></i>{{ category | capitalize }} Posts</h3>
{% for post in posts_in_category %}
<div class="blog-post" style="margin-top: 2px; margin-bottom: 15px; padding: 6px 10px; border-left: 3px solid #007bff; background-color: #f8f9fa;">
  <h3 style="margin: 0 0 5px 0;"><i class="fas fa-file-alt" style="color: #6c757d; margin-right: 8px;"></i><a href="{{ post.url }}">{{ post.title }}</a></h3>
  {% if post.excerpt %}
    <p style="margin: 5px 0;"><i class="fas fa-lightbulb" style="color: #ffc107; margin-right: 8px;"></i><strong>TLDR:</strong> {{ post.excerpt }}</p>
  {% endif %}
  <p class="post-meta" style="margin: 5px 0; font-size: 0.9em; color: #666;">
    <i class="fas fa-calendar-alt"></i> {{ post.date | date: "%B %d, %Y" }}
    <br><i class="fas fa-tag"></i> {{ category | capitalize }}
  </p>
</div>
{% endfor %}
{% endif %}
{% endfor %}

---

<i class="fas fa-plus-circle" style="color: #28a745; margin-right: 8px;"></i>*More blog posts coming soon! I'm actively working on sharing insights from my research and experiences in the field.*
