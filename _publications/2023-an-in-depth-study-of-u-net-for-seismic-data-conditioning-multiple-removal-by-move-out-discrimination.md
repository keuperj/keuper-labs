---
layout: publication
title: An In-Depth Study of U-net for Seismic Data Conditioning - Multiple Removal by Move-Out Discrimination
description: Seismic multiple removal can be simplified with a U-Net trained entirely on synthetic data. Alongside
  field-data experiments, this study examines hyperparameters and uncertainty to make the model's behavior
  easier to understand and use.
why: Repeated seismic reflections can hide the underground structures an interpreter wants to see. This study
  trains a neural network to remove them using synthetic examples and examines how its settings and uncertainty
  affect the results. The detailed analysis helps practitioners judge the method rather than treating it as
  an unexplained black box.
figures:
- label: Figure 1
  image: /images/publications/details/034-figure-1.webp
  alt: U-Net encoder and decoder architecture for seismic multiple removal.
  caption: U-net architecture for multiple attenuation. The task of this model is to learn to remove multiples
    while keeping the rest of the image unmodified, i.e., primaries and data characteristics.
  source: https://opus.hs-offenburg.de/frontdoor/deliver/index/docId/8245/file/durall-et-al-2023.pdf#page=4
  width: 549
  height: 317
- label: Figure 2
  image: /images/publications/details/034-figure-2.webp
  alt: Visualization of the U-net inner structure after each block.
  caption: 'Visualization of the U-net inner structure after each block. Left: From top to bottom, each row
    shows three randomly selected filters and the histogram of the first moment (mean) of all the filters from
    each block, where the x-axis is the weight values and the y-axis is the frequency of appearance. Right:
    From upper left to bottom right, following a “Z” shape, the transformations that the input image undergoes
    before the multiples are removed. Each group shows four random feature maps and belongs to one block of
    the U-net structure (see Figure 1).'
  source: https://opus.hs-offenburg.de/frontdoor/deliver/index/docId/8245/file/durall-et-al-2023.pdf#page=4
  width: 707
  height: 661
bibtex: |
  @article{durall2023anindepth34,
    title = {{An In-Depth Study of U-net for Seismic Data Conditioning - Multiple Removal by Move-Out Discrimination}},
    author = {Ricard Durall and Ammar Ghanim and Norman Ettrich and Janis Keuper},
    journal = {Geophysics},
    year = {2023},
    url = {https://library.seg.org/doi/pdf/10.1190/geo2023-0146.1},
    doi = {10.1190/geo2023-0146.1}
  }
bibtex_file: /assets/bibtex/2023-an-in-depth-study-of-u-net-for-seismic-data-conditioning-multiple-removal-by-move-out-discrimination.bib
abstract: |-
  Seismic processing often involves suppressing multiples that are an inherent component of collected seismic data. Elaborate multiple prediction and subtraction schemes such as surface-related multiple removal have become standard in industry workflows. In cases of limited spatial sampling, low signal-to-noise ratio, or conservative subtraction of the predicted multiples, the processed data frequently suffer from residual multiples. To tackle these artifacts in the postmigration domain, practitioners often rely on Radon transformbased algorithms. However, such traditional approaches are both time-consuming and parameter dependent, making them relatively complex. In this work, we present a deep learning-based alternative that provides competitive results, while reducing the complexity of its usage, and, hence simplifying its applicability. Our proposed model demonstrates excellent performance when applied to complex field data, despite it being exclusively trained on synthetic data. Furthermore, extensive experiments show that our method can preserve the inherent characteristics of the data, avoiding undesired oversmoothed results, while removing the multiples from seismic offset or angle gathers. Finally, we conduct an in-depth analysis of the model, where we pinpoint the effects of the main hyperparameters on real data inference, and we probabilistically assess its performance from a Bayesian perspective. In this study, we put particular emphasis on helping the user reveal the inner workings of the neural network and attempt to unbox the model.
abstract_source: https://opus.hs-offenburg.de/frontdoor/deliver/index/docId/8245/file/durall-et-al-2023.pdf
content_status: complete
---
