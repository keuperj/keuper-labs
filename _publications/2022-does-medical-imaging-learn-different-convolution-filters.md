---
layout: publication
title: Does Medical Imaging learn different Convolution Filters?
description: Do medical images require fundamentally different convolution filters? A closer look shows that
  apparent outliers largely reflect architectural processing choices, supporting the value of diverse pretraining
  data across image domains.
why: Medical images look very different from everyday photographs, so it is natural to expect their AI models
  to learn entirely different basic patterns. This study finds that some apparent differences instead come
  from network design. That strengthens the case for studying when broadly available pretraining can help specialized
  imaging tasks.
figures:
- label: Figure 1
  image: /images/publications/details/020-figure-1.webp
  alt: Distributions of learned filter coefficients across medical imaging networks.
  caption: KDEs of the coefficient distributions along every principal component for all medical imaging models
    from CNN Filter DB.
  source: https://arxiv.org/pdf/2210.13799#page=2
  width: 894
  height: 261
- label: Figure 2
  image: /images/publications/details/020-figure-2.webp
  alt: The first filters from a layer that learns only binarylike filters found in CompNet.
  caption: The first filters from a layer that learns only binarylike filters found in CompNet.
  source: https://arxiv.org/pdf/2210.13799#page=2
  width: 282
  height: 274
bibtex: |
  @inproceedings{gavrikov2022doesmedicalimaging20,
    title = {{Does Medical Imaging learn different Convolution Filters?}},
    author = {Paul Gavrikov and Janis Keuper},
    booktitle = {NeurIPS 22 Workshop - Medical Imaging meets NeurIPS},
    year = {2022},
    url = {https://arxiv.org/abs/2210.13799}
  }
bibtex_file: /assets/bibtex/2022-does-medical-imaging-learn-different-convolution-filters.bib
abstract: |-
  Recent work has investigated the distributions of learned convolution filters through a large-scale study containing hundreds of heterogeneous image models. Surprisingly, on average, the distributions only show minor drifts in comparisons of various studied dimensions including the learned task, image domain, or dataset. However, among the studied image domains, medical imaging models appeared to show significant outliers through “spikey” distributions, and, therefore, learn clusters of highly specific filters different from other domains. Following this observation, we study the collected medical imaging models in more detail. We show that instead of fundamental differences, the outliers are due to specific processing in some architectures. Quite the contrary, for standardized architectures, we find that models trained on medical data do not significantly differ in their filter distributions from similar architectures trained on data from other domains. Our conclusions reinforce previous hypotheses stating that pre-training of imaging models can be done with any kind of diverse image data.
abstract_source: https://arxiv.org/pdf/2210.13799
content_status: complete
---
