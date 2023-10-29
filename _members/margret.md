---
title: 
nav:
  order: 3
  tooltip: About Margret
---


{% capture text %}
**Margret Keuper** is full Professor for Machine Learning at Mannheim University and head of the *Robust Visual Learning Group* at MPI Saarbrücken. Her research interests are ...

{%
  include link.html
  link="https://scholar.google.com/citations?user=KMqMQAcAAAAJ&hl=de"
  text="Google Scholar Profile"
  icon="fas fa-graduation-cap"
  flip=true
%}
{%
  include link.html
  link="https://www.uni-mannheim.de/dws/people/professors/prof-dr-ing-margret-keuper/"
  text="Official website at Mannheim University"
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
  image="images/margret.jpg"
  height="100px"
  title=""
  text=text
%}
