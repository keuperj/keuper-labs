---
layout: publication
title: Deep diffusion models for seismic processing
description: Can a generative model become a versatile seismic-processing tool? We investigate diffusion models
  for multiple removal, denoising, and interpolation, comparing their behavior on synthetic and field data
  with established methods.
why: Seismic recordings contain noise, missing information, and unwanted repeated reflections. This work tests
  whether one family of generative models can help with all three problems. By studying simulated and field
  data, it establishes a starting point for using diffusion models as versatile tools in seismic processing.
figures:
- label: Figure 1
  image: /images/publications/details/025-figure-1.webp
  alt: Graphical representations of latent-variable and diffusion models.
  caption: Scheme of the different latent variable models. (Top) Single latent variable model. (Center) Hierarchical
    latent variable model. (Bottom) Diffusion model.
  source: https://opus.hs-offenburg.de/frontdoor/deliver/index/docId/8238/file/1-s2.0-S009830042300081X-main.pdf#page=3
  width: 575
  height: 558
- label: Figure 2
  image: /images/publications/details/025-figure-2.webp
  alt: Denoising diffusion process.
  caption: Denoising diffusion process. While the Markov chain of the forward diffusion gradually adds noise
    to the input (dash arrows), the reverse process removes it stepwise (solid arrows).
  source: https://opus.hs-offenburg.de/frontdoor/deliver/index/docId/8238/file/1-s2.0-S009830042300081X-main.pdf#page=4
  width: 576
  height: 235
bibtex: |
  @article{durall2023deepdiffusionmodels25,
    title = {{Deep diffusion models for seismic processing}},
    author = {Ricard Durall and Ammar Ghanim and Mario Fernandez and Norman Ettrich and Janis Keuper},
    journal = {Computers \& Geosciences},
    year = {2023},
    url = {https://www.sciencedirect.com/science/article/pii/S009830042300081X}
  }
bibtex_file: /assets/bibtex/2023-deep-diffusion-models-for-seismic-processing.bib
abstract: |-
  Seismic data processing involves techniques to deal with undesired effects that occur during acquisition and pre-processing. These effects mainly comprise coherent artefacts such as multiples, non-coherent signals such as electrical noise, and loss of signal information at the receivers that leads to incomplete traces. In the past years, there has been a remarkable increase of machine-learning-based solutions that have addressed the aforementioned issues. In particular, deep-learning practitioners have usually relied on heavily fine-tuned, customized discriminative algorithms. Although, these methods can provide solid results, they seem to lack semantic understanding of the provided data. Motivated by this limitation, in this work, we employ a generative solution, as it can explicitly model complex data distributions and hence, yield to a better decision-making process. In particular, we introduce diffusion models for three seismic applications: demultiple, denoising and interpolation. To that end, we run experiments on synthetic and on real data, and we compare the diffusion performance with standardized algorithms. We believe that our pioneer study not only demonstrates the capability of diffusion models, but also opens the door to future research to integrate generative models in seismic workflows.
abstract_source: https://opus.hs-offenburg.de/frontdoor/deliver/index/docId/8238/file/1-s2.0-S009830042300081X-main.pdf
content_status: complete
---
