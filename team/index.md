---
title: Team
nav:
  order: 3
  tooltip: About our team
---

# <i class="fas fa-users"></i>Team

{%
  include card.html
  image="images/margret_small.jpg"
  link="members/margret.html"
  title="Margret Keuper"
  subtitle="Computervision + Machine Learning"
  description="Margret is Professor for Visual Computing at the [University Siegen](https://www.vc.informatik.uni-siegen.de/en/keuper-margret) and head of the *Robust Visual Learning Group* at [MPI Saarbrücken](https://www.mpi-inf.mpg.de/de/departments/computer-vision-and-machine-learning/people/margret-keuper)."
  style="large"
%}
{%
  include card.html
  image="images/janis_SC15_small.jpg"
  link="members/janis.html"
  title="Janis Keuper"
  subtitle="Large Scale ML + Computer Vision"
  description="Janis is Professor for Data Science and Head of the *Institute for Machine Learning and Analytics* (IMLA) at [Offenburg University](https://imla.hs-offenburg.de/). He also leads the *Machine Learning in HPC* group at [Fraunhofer ITWM](https://www.itwm.fraunhofer.de/en/departments/hpc/data-analysis-and-machine-learning.html) in Kaiserslautern."
  style="large"
%}


{% include section.html %}

## PhD Students 
Displayed in arbitrary order... 

{%
  include list.html
  data="members"
  component="portrait"
  filters="role:phd"
%}

## Alumni (since start of this website)

{%
  include list.html
  data="members"
  component="portrait"
  filters="role:alumni"
%}

{:.center}


## Open Positions



{%
  include card.html
  image="images/imla_small.jpg"
  width="50px"
  title="Open PhD Positions"
  subtitle="at Fraunhofer IMLA, Offenburg"
  description="We are currently looking for talented PhD candidates in the field of reinforcement learning in our [KI-Bohrer](http://www.ki-bohrer.de/) project. For details contact [Janis](../members/janis.html)."
  style="large"
%}


