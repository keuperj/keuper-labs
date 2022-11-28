---
title: Contact
nav:
  order: 5
  tooltip: Email, address, and location
---

# <i class="fas fa-envelope"></i>Contact

This website aggregates research from several closely cooperating labs from multiple institutions. Please refer to the individual lab sites linked below for contact details. 

{%
  include link.html
  type="email"
  icon=""
  text="mail@keuper-labs.org"
  tooltip=""
  link="mail@keuper-labs.org"
  style="button"
%}

{:.center}

{% include section.html %}



{% capture col1 %}
{%
  include figure.html
  image="images/photo.jpg"
  caption="The Center for Wit and Sagacity"
%}
{%
  include link.html
  link="team"
  text="Meet our team"
  icon="fas fa-arrow-right"
  flip=true
%}
{% endcapture %}
{% capture col2 %}
{%
  include figure.html
  image="images/photo.jpg"
  caption="Department of Metaphor"
%}
{%
  include link.html
  link="team"
  text="Meet our team"
  icon="fas fa-arrow-right"
  flip=true
%}
{% endcapture %}

{% include two-col.html col1=col1 col2=col2 %}

{% capture col1 %}
{%
  include figure.html
  image="images/photo.jpg"
  caption="The Center for Wit and Sagacity"
%}
{%
  include link.html
  link="team"
  text="Meet our team"
  icon="fas fa-arrow-right"
  flip=true
%}
{% endcapture %}
{% capture col2 %}
{%
  include figure.html
  image="images/photo.jpg"
  caption="Department of Metaphor"
%}
{%
  include link.html
  link="team"
  text="Meet our team"
  icon="fas fa-arrow-right"
  flip=true
%}
{% endcapture %}

{% include two-col.html col1=col1 col2=col2 %}
