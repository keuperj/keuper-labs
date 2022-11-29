---
title: 
nav:
  order: 3
  tooltip: About Janis
---

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
{%
  include link.html
  link="mailto:keuler_at_imla.ai"
  text="keuler_at_imla.ai"
  icon="fas fa-mail"
  flip=true
%}

{% endcapture %}

{%
  include feature.html
  image="images/janis_SC15.png"
  title=""
  text=text
%}

