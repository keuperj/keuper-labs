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
Joint research pages of the labs run by ***Margret Keuper and Janis Keuper***. We work on the intersections of **Machine Learning (ML), Computer Vision (CV), and ML/CV for Geophysics**.

{:.center}
### Latest Highlights
{%
  include card.html
  image="images/eccv24.png"
  link="https://keuperj.github.io/keuper-labs/research/?search=ECCV"
  title="ECCV 24"
  subtitle="Full paper + 3 Workshop paper"
  style="small"
%}
{%
  include card.html
  image="images/ICML.png"
  link="https://keuperj.github.io/keuper-labs/research/?search=ICML#2024"
  title="ICML 2024"
  subtitle="3 full paper"
  style="small"
%}
{%
  include card.html
  image="https://jmlr.org/tmlr/img/tmlr.jpg"
  link="https://www.keuper-labs.org/research/?search=TMLR"
  title="TMLR 24"
  subtitle="2 journal paper"
  style="small"
%}
{%
  include card.html
  image="images/cvpr_24.png"
  link="https://keuperj.github.io/keuper-labs/research/?search=CVPR#2024"
  title="CVPR 2024"
  subtitle="full paper + 2 workshop paper"
  style="small"
%}
{%
  include card.html
  image="images/ijcv.jpeg"
  link="https://keuperj.github.io/keuper-labs/research/?search=IJCV#2024"
  title="IJCV 24"
  subtitle="2 journal paper"
  style="small"
%}
{%
  include card.html
  image="images/iclr_22.png"
  link="https://keuperj.github.io/keuper-labs/research/?search=ICLR%2024#2024"
  title="ICLR 24"
  subtitle="full paper and 2 workshop paper accepted"
  style="small"
%}



{% include section.html %}


{% capture text %}
Find our latest papers on Computer Vision, Machine Learning and Physics topics...

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
Explore our current and past research projects...

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

# News (follow us on <a src="https://bsky.app/profile/keuper-labs.bsky.social">BlueSky:@keuper-labs.bsky.social</a>)
<script type="module" src="https://cdn.jsdelivr.net/npm/bsky-embed/dist/bsky-embed.es.js" async></script>
  <bsky-embed
    username="keuper-labs.bsky.social"
    mode=""
    limit="10"
  >
  </bsky-embed>

{:.center}
