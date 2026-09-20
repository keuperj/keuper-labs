---
layout: publication
title: Physics-informed learning of aerosol microphysics
description: Climate models need detailed aerosol physics without prohibitive simulation costs. Our neural
  emulator accelerates aerosol microphysics while incorporating physical constraints to improve mass conservation
  and positivity.
why: Tiny airborne particles have an important effect on climate, but simulating their behavior is computationally
  costly. This work learns a fast approximation of the underlying microphysics and adds constraints based on
  physical knowledge. It demonstrates a route toward cheaper calculations while addressing requirements such
  as conserving mass.
figures:
- label: Figure 1
  image: /images/publications/details/019-figure-1.webp
  alt: Maps comparing simulated and predicted aerosol concentration changes.
  caption: The change in concentration modeled by the M7 module for the first time step of the test data is
    plotted on the left. The predicted change is plotted on the right. Both plots show the change in concentration
    on a logarithmic scale.
  source: https://www.cambridge.org/core/services/aop-cambridge-core/content/view/C468660D2AEE8E25DC3BF507517FF91A/S263446022200022Xa.pdf/div-class-title-physics-informed-learning-of-aerosol-microphysics-div.pdf#page=3
  width: 932
  height: 335
- label: Figure 2
  image: /images/publications/details/019-figure-2.webp
  alt: This figure shows the test prediction of our emulators against the true M7 values.
  caption: This figure shows the test prediction of our emulators against the true M7 values. For each type
    (species, number particles, and water), we plot the performance of one variable (using the median or worse
    performing, see all in Supplementary Material).
  source: https://www.cambridge.org/core/services/aop-cambridge-core/content/view/C468660D2AEE8E25DC3BF507517FF91A/S263446022200022Xa.pdf/div-class-title-physics-informed-learning-of-aerosol-microphysics-div.pdf#page=6
  width: 932
  height: 216
bibtex: |
  @article{harder2022physicsinformedlearning19,
    title = {{Physics-informed learning of aerosol microphysics}},
    author = {Paula Harder and Duncan Watson-Parris and Philip Stier and Dominik Strassel and Nicolas R Gauger and Janis Keuper},
    journal = {Environmental Data Science},
    year = {2022},
    url = {https://www.cambridge.org/core/services/aop-cambridge-core/content/view/C468660D2AEE8E25DC3BF507517FF91A/S263446022200022Xa.pdf/div-class-title-physics-informed-learning-of-aerosol-microphysics-div.pdf}
  }
bibtex_file: /assets/bibtex/2022-physics-informed-learning-of-aerosol-microphysics.bib
abstract: |-
  Aerosol particles play an important role in the climate system by absorbing and scattering radiation and influencing cloud properties. They are also one of the biggest sources of uncertainty for climate modeling. Many climate models do not include aerosols in sufficient detail due to computational constraints. To represent key processes, aerosol microphysical properties and processes have to be accounted for. This is done in the ECHAM-HAM (European Center for Medium-Range Weather Forecast-Hamburg-Hamburg) global climate aerosol model using the M7 microphysics, but high computational costs make it very expensive to run with finer resolution or for a longer time. We aim to use machine learning to emulate the microphysics model at sufficient accuracy and reduce the computational cost by being fast at inference time. The original M7 model is used to generate data of input–output pairs to train a neural network (NN) on it. We are able to learn the variables’ tendencies achieving an average R² score of 77.1%. We further explore methods to inform and constrain the NN with physical knowledge to reduce mass violation and enforce mass positivity. On a Graphics processing unit (GPU), we achieve a speed-up of up to over 64 times faster when compared to the original model.
abstract_source: https://www.cambridge.org/core/services/aop-cambridge-core/content/view/C468660D2AEE8E25DC3BF507517FF91A/S263446022200022Xa.pdf/div-class-title-physics-informed-learning-of-aerosol-microphysics-div.pdf
content_status: complete
---
