---
title: Team
nav:
  order: 3
  tooltip: About our team
---

# <i class="fas fa-users"></i>Team

{%
  include card.html
  image="images/margret.jpg"
  link="members/margret.html"
  title="Margret Keuper"
  subtitle="University Siegen + MPI Saarbrücken"
  description="Margret is Professor for Visual Computing at the University Siegen and head of the *Robust Visual Learning Group* at MPI Saarbrücken."
  style="large"
%}
{%
  include card.html
  image="images/janis_SC15.png"
  link="members/janis.html"
  title="Janis Keuper"
  subtitle="IMLA Offenburg + ITWM Kaiserslautern"
  description="Janis is Professor for Data Science and Head of the *Institute for Machine Learning and Analytics* (IMLA) at Offenburg University. He also leads the *Machine Learning in HPC* group at Fraunhofer ITWM in Kaiserslautern."
  style="large"
%}


{% include section.html %}

## PhD Students
{%
  include list.html
  data="members"
  component="portrait"
  filters="role: siegen"
%}


{%
  include list.html
  data="members"
  component="portrait"
  filters="role: imla"
%}
{:.center}



