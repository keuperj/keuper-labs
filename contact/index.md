---
title: Contact
nav:
  order: 5
  tooltip: Email, address, and location
---

# <i class="fas fa-envelope"></i>Contact

This private website aggregates research from several closely cooperating labs from multiple institutions. Please refer to the individual lab sites linked below for contact details or write us a mail... 


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
  height="300px"
  caption="Visual Computing Group at the University of Siegen"
%}
{%
  include link.html
  link="https://www.vc.informatik.uni-siegen.de/en/keuper-margret"
  text="Visit group pages in Siegen"
  icon="fas fa-arrow-right"
  flip=true
%}
{% endcapture %}
{% capture col2 %}
{%
  include figure.html
  image="images/logo_mpi_430.png"
  height="300px"
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
  height="300px"
  caption="Institute for Machine Learning and Analytics at Offenburg University"
%}
{%
  include link.html
  link="https://imla.hs-offenburg.de/"
  text="visit group pages in Offenburg"
  icon="fas fa-arrow-right"
  flip=true
%}
{% endcapture %}
{% capture col2 %}
{%
  include figure.html
  image="images/itwm.svg"
  height="300px"
  caption="Machine Learning in HPC group at Fraunhofer ITWM"
%}
{%
  include link.html
  link="https://www.itwm.fraunhofer.de/en/departments/hpc/data-analysis-and-machine-learning.html"
  text="visit group pages in Kaiserslautern"
  icon="fas fa-arrow-right"
  flip=true
%}
{% endcapture %}

{% include two-col.html col1=col1 col2=col2 %}
