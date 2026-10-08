---
permalink: /
title: "About me"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---
I am a Ph.D. candidate in Computer Science and Engineering at [Notre Dame](https://www.nd.edu/), where I work in the [DM2 Lab](http://www.meng-jiang.com/lab.html) advised by [Prof. Meng Jiang](http://www.meng-jiang.com/).

My research focuses on building reliable and self-improving LLM agents capable of complex, multi-step reasoning and decision-making. I investigate how agents can effectively use and create tools, learn from experience, and autonomously evolve their capabilities.

My work centers on two directions: **tool-augmented agents**, including effective tool use and reliable tool construction, and **self-improving agents** that acquire and refine reusable skills through feedback and experience.

Outside research, I am very much a cat person, which means I am easily distracted by cats on the internet and in real life 🐈. I am also a proud dad of two amazing cats: Mam (Fish Sauce) and Muoi Tieu (Pepper Salt).

## ⭐ Recent News

<div class="recent-news" role="list">
  <div class="recent-news__item" role="listitem">
    <span class="recent-news__date" style="color: #28a745;">🎉 Sep, 2026</span>
    <span>I completed an <strong>Applied Scientist internship at Oracle</strong> in Redwood City, working on skill evolution for LLM agents.</span>
  </div>
  <div class="recent-news__item" role="listitem">
    <span class="recent-news__date" style="color: #007bff;">📄 Aug, 2026</span>
    <span><a href="https://arxiv.org/abs/2604.00137"><strong>OpenTools (first author)</strong></a> was accepted to <a href="https://2026.emnlp.org/"><strong>EMNLP 2026 Demo Track</strong></a>.</span>
  </div>
  <div class="recent-news__item" role="listitem">
    <span class="recent-news__date" style="color: #28a745;">🎉 Jun, 2026</span>
    <span>I passed my Oral Candidacy Exam and became a Ph.D. candidate. My thesis is titled <strong>Towards Reliable Tool-Augmented Agentic AI Frameworks</strong>. Thank you to my committee: Dr. Meng Jiang, Dr. Toby Li, Dr. Zhi Zheng, and Dr. Avi Sil.</span>
  </div>
  <div class="recent-news__item" role="listitem">
    <span class="recent-news__date" style="color: #007bff;">📄 Apr, 2026</span>
    <span><a href="https://arxiv.org/abs/2502.08893"><strong>Uncovering Disparities in Rideshare Drivers’ Earning and Work Patterns</strong></a> (first author) was accepted to <a href="https://cscw.acm.org/2026/"><strong>CSCW 2026</strong></a>.</span>
  </div>
  <div class="recent-news__item" role="listitem">
    <span class="recent-news__date" style="color: #007bff;">📄 Aug, 2025</span>
    <span><a href="https://arxiv.org/abs/2509.18076"><strong>LLM Function Calling with Templates</strong></a>, completed during my Amazon internship, was accepted to <a href="https://2025.emnlp.org/"><strong>EMNLP 2025 Main</strong></a>.</span>
  </div>
  <div class="recent-news__item" role="listitem">
    <span class="recent-news__date" style="color: #007bff;">📄 May, 2025</span>
    <span><a href="https://arxiv.org/abs/2503.15354"><strong>DYDECOMP</strong></a> was accepted to <a href="https://2025.aclweb.org/"><strong>ACL 2025 Main</strong></a>.</span>
  </div>
  <div class="recent-news__item" role="listitem">
    <span class="recent-news__date" style="color: #28a745;">🎉 Sep, 2024</span>
    <span>I joined <strong>Amazon Rufus</strong> as an Applied Scientist Intern in Palo Alto (September 2024–May 2025).</span>
  </div>
  <div class="recent-news__item" role="listitem">
    <span class="recent-news__date" style="color: #007bff;">📄 May, 2023</span>
    <span><a href="https://aclanthology.org/2023.codi-1.22.pdf"><strong>Community Recommendation Using Mental Health Discourse</strong></a> was accepted to <a href="https://sites.google.com/view/codi-2023/"><strong>CODI at ACL 2023</strong></a>.</span>
  </div>
  <div class="recent-news__item" role="listitem">
    <span class="recent-news__date" style="color: #b8860b;">🎓 Aug, 2022</span>
    <span>I joined the University of Notre Dame as a Ph.D. student in Computer Science and Engineering, advised by <a href="http://www.meng-jiang.com/"><strong>Prof. Meng Jiang</strong></a>.</span>
  </div>
  <div class="recent-news__item" role="listitem">
    <span class="recent-news__date" style="color: #b8860b;">🎓 Dec, 2021</span>
    <span>I graduated from Texas Christian University with degrees in Computer Science and Mathematics and a 4.0 GPA.</span>
  </div>
</div>

## 📃 Publications

{% include publications-cards.html limit=6 %}

## 📧 Contact
I’m best reached via email. I’m always open to interesting conversations and collaboration.
- Email: hdang [at] nd [dot] edu
- Office: 355 Fitzpatrick Hall of Engineering
- Location: University of Notre Dame, Notre Dame, IN 46565

<!---
Site-wide configuration
------
The main configuration file for the site is in the base directory in [_config.yml](https://github.com/academicpages/academicpages.github.io/blob/master/_config.yml), which defines the content in the sidebars and other site-wide features. You will need to replace the default variables with ones about yourself and your site's github repository. The configuration file for the top menu is in [_data/navigation.yml](https://github.com/academicpages/academicpages.github.io/blob/master/_data/navigation.yml). For example, if you don't have a portfolio or blog posts, you can remove those items from that navigation.yml file to remove them from the header. 

Create content & metadata
------
For site content, there is one markdown file for each type of content, which are stored in directories like _publications, _talks, _posts, _teaching, or _pages. For example, each talk is a markdown file in the [_talks directory](https://github.com/academicpages/academicpages.github.io/tree/master/_talks). At the top of each markdown file is structured data in YAML about the talk, which the theme will parse to do lots of cool stuff. The same structured data about a talk is used to generate the list of talks on the [Talks page](https://academicpages.github.io/talks), each [individual page](https://academicpages.github.io/talks/2012-03-01-talk-1) for specific talks, the talks section for the [CV page](https://academicpages.github.io/cv), and the [map of places you've given a talk](https://academicpages.github.io/talkmap.html) (if you run this [python file](https://github.com/academicpages/academicpages.github.io/blob/master/talkmap.py) or [Jupyter notebook](https://github.com/academicpages/academicpages.github.io/blob/master/talkmap.ipynb), which creates the HTML for the map based on the contents of the _talks directory).

**Markdown generator**

I have also created [a set of Jupyter notebooks](https://github.com/academicpages/academicpages.github.io/tree/master/markdown_generator
) that converts a CSV containing structured data about talks or presentations into individual markdown files that will be properly formatted for the academicpages template. The sample CSVs in that directory are the ones I used to create my own personal website at stuartgeiger.com. My usual workflow is that I keep a spreadsheet of my publications and talks, then run the code in these notebooks to generate the markdown files, then commit and push them to the GitHub repository.

How to edit your site's GitHub repository
------
Many people use a git client to create files on their local computer and then push them to GitHub's servers. If you are not familiar with git, you can directly edit these configuration and markdown files directly in the github.com interface. Navigate to a file (like [this one](https://github.com/academicpages/academicpages.github.io/blob/master/_talks/2012-03-01-talk-1.md) and click the pencil icon in the top right of the content preview (to the right of the "Raw | Blame | History" buttons). You can delete a file by clicking the trashcan icon to the right of the pencil icon. You can also create new files or upload files by navigating to a directory and clicking the "Create new file" or "Upload files" buttons. 

Example: editing a markdown file for a talk
![Editing a markdown file for a talk](/images/editing-talk.png)

For more info
------
More info about configuring academicpages can be found in [the guide](https://academicpages.github.io/markdown/). The [guides for the Minimal Mistakes theme](https://mmistakes.github.io/minimal-mistakes/docs/configuration/) (which this theme was forked from) might also be helpful.
--->
