---
title: Home
---
{%
  include figure.html
  image="images/logo.svg"
  width="200px"
%}

{% include section.html %}

# Keuper Labs
Joint research pages of the labs run by ***Margret and Janis Keuper***. We work on the intersections of **Machine Learning, Computer Vision and High Performance Computing**.

{:.center}


{% include section.html %}


# Research

{% capture text %}
Find our latest papers on Computer Vision, Machine Learning and HPC topics...

{%
  include link.html
  link="research"
  text="See what we've published"
  icon="fas fa-arrow-right"
  flip=true
%}
{:.center}
{% endcapture %}

{%
  include feature.html
  image="images/paper.jpg"
  link="research"
  title="Our Research"
  text=text
%}

{% capture text %}
Explore our current ond past research projects...

{%
  include link.html
  link="tools"
  text="Browse our projects"
  icon="fas fa-arrow-right"
  flip=true
%}
{:.center}
{% endcapture %}

{%
  include feature.html
  image="images/projects.jpg"
  link="resources"
  title="Our Projects"
  flip=true
  text=text
%}

{% capture text %}
Meet our teams and find open positions... 

{%
  include link.html
  link="team"
  text="Meet our teams"
  icon="fas fa-arrow-right"
  flip=true
%}
{:.center}
{% endcapture %}

{%
  include feature.html
  image="images/eccv.jpg"
  link="team"
  title="Our Team"
  text=text
%}

# News

<!-- Twitter embeds from https://publish.twitter.com/ -->

<a class="twitter-timeline" data-width="1000" data-height="600" href="https://twitter.com/KeuperLabs?ref_src=twsrc%5Etfw">Recent Tweets</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
{:.center}

<a href="https://twitter.com/KeuperLabs?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-show-count="false">Follow @KeuperLabs</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
<a href="https://twitter.com/intent/tweet?screen_name=KeuperLabs&ref_src=twsrc%5Etfw" class="twitter-mention-button" data-show-count="false">Tweet to @KeuperLabs</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
{:.center}
