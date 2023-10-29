---
title: Contact
nav:
  order: 5
  tooltip: Email, address, and location
---

# <i class="fas fa-envelope"></i>Contact

This private website aggregates research from closely cooperating labs from multiple institutions. Please refer to the individual lab sites linked below for contact details or write us a mail... 


{:.center}

{%
  include link.html
  type="email"
  icon=""
  text="mail@keuper-labs.org"
  tooltip=""
  link="mail@keuper-labs.org"
  style="button"
%}


{% include section.html %}



{% capture col1 %}
{%
  include figure.html
  image="images/logovc.png"
  link="https://www.vc.informatik.uni-siegen.de/en/keuper-margret"
  height="80px"
  caption="Visual Computing Group at the University of Siegen"
%}
{%
  include link.html
  link="https://www.uni-mannheim.de/dws/people/professors/prof-dr-ing-margret-keuper/"
  text="Visit group pages in Mannheim"
  icon="fas fa-arrow-right"
  flip=true
%}
{% endcapture %}
{% capture col2 %}
{%
  include figure.html
  image="images/logo_mpi_430.png"
  link="https://www.mpi-inf.mpg.de/de/departments/computer-vision-and-machine-learning/people/margret-keuper"
  height="80px"
  caption="Robust Visual Learning Group at MPI Saarbrücken"
%}
{%
  include link.html
  link="https://www.mpi-inf.mpg.de/de/departments/computer-vision-and-machine-learning/people/margret-keuper"
  text="visit group page in Saarbrücken"
  icon="fas fa-arrow-right"
  flip=true
%}
{% endcapture %}

{% include two-col.html col1=col1 col2=col2 %}

{% capture col1 %}
{%
  include figure.html
  image="images/RGB_IMLA_RGB_Farbe.jpg"
  link="https://imla.hs-offenburg.de/"
  height="80px"
  caption="Institute for Machine Learning and Analytics"
%}
{%
  include link.html
  link="https://imla.hs-offenburg.de/"
  text="visit group pages at Offenburg University"
  icon="fas fa-arrow-right"
  flip=true
%}
{% endcapture %}


{% include two-col.html col1=col1 col2=col2 %}
