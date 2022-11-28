---
title: Team
nav:
  order: 3
  tooltip: About our team
---

# <i class="fas fa-users"></i>Team


{% capture text %}
**Margret Keuper** is Professor for Visual Computing at the University Siegen and head of the *Robust Visual Learning Group* at MPI Saarbrücken. Her research interests are ...

{%
  include link.html
  link="https://scholar.google.com/citations?user=KMqMQAcAAAAJ&hl=de"
  text="Google Scholar Profile"
  icon="fas fa-graduation-cap"
  flip=true
%}
{%
  include link.html
  link="https://www.vc.informatik.uni-siegen.de/en/keuper-margret"
  text="Official website at University Siegen"
  icon="fas fa-link"
  flip=true
%}
{%
  include link.html
  link="https://www.mpi-inf.mpg.de/de/departments/computer-vision-and-machine-learning/people/margret-keuper"
  text="Official website at MPI Saarbrücken"
  icon="fas fa-link"
  flip=true
%}
{% endcapture %}

{%
  include feature.html
  image="images/margret_small.jpg"
  height="100px"
  title="Margret Keuper"
  text=text
%}

{% capture text %}
**Janis Keuper** is Professor for Data Science and Head of the *Institute for Machine Learning and Analytics* (IMLA) at Offenburg University. He also leads the *Machine Learning in HPC* group at Fraunhofer ITWM in Kaiserslautern.

{%
  include link.html
  link="https://scholar.google.de/citations?view_op=list_works&hl=de&hl=de&user=BUkDvU0AAAAJ"
  text="Google Scholar Profile"
  icon="fas fa-graduation-cap"
  flip=true
%}
{%
  include link.html
  link="https://imla.hs-offenburg.de/"
  text="Official website at IMLA in Offenburg"
  icon="fas fa-link"
  flip=true
%}
{%
  include link.html
  link="https://www.itwm.fraunhofer.de/en/departments/hpc/data-analysis-and-machine-learning.html"
  text="Official website at Fraunhofer ITWM"
  icon="fas fa-link"
  flip=true
%}

{% endcapture %}

{%
  include feature.html
  image="images/janis_SC15_small.png"
  height="100px"
  title="Janis Keuper"
  text=text
%}



Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

{% include section.html %}

{%
  include list.html
  data="members"
  component="portrait"
  filters="role: pi"
%}
{%
  include list.html
  data="members"
  component="portrait"
  filters="role: phd"
%}
{%
  include list.html
  data="members"
  component="portrait"
  filters="role: programmer"
%}
{:.center}

{% include section.html background="images/banner.jpg" dark=true%}

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

{% include section.html %}

## Join

#### Post Dogtoral Researcher

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

- 3+ (dog) years experience managing bone portfolios
- Strong desire to learn tricks and go on walkies
- Aptitude to sit and stay

{% include link.html type="external" link="https://google.com/" text="Apply Now" icon="" style="button" %}
{:.center}

{% include section.html %}

## Funding

Our work is made possible by funding from several organizations.
{:.center}

{%
  include gallery.html
  style="square"

  image1="images/photo.jpg"
  link1="https://nasa.gov/"
  tooltip1="Cool Foundation"

  image2="images/photo.jpg"
  link2="https://nasa.gov/"
  tooltip2="Cool Institute"

  image3="images/photo.jpg"
  link3="https://nasa.gov/"
  tooltip3="Cool Initiative"

  image4="images/photo.jpg"
  link4="https://nasa.gov/"
  tooltip4="Cool Foundation"

  image5="images/photo.jpg"
  link5="https://nasa.gov/"
  tooltip5="Cool Institute"

  image6="images/photo.jpg"
  link6="https://nasa.gov/"
  tooltip6="Cool Initiative"
%}
