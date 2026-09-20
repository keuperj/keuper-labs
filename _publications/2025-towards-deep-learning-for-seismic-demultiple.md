---
layout: publication
title: Towards deep learning for seismic demultiple
description: Train on simulated seismic data, then remove unwanted multiples in field recordings. This study
  compares training objectives and shows the value of predicting multiples before subtracting them, including
  under noisy conditions.
why: Unwanted repeated reflections complicate the interpretation of seismic surveys. This study compares ways
  to train models on simulated data and finds value in predicting those unwanted signals before subtracting
  them. Tests on field recordings help connect the training choices to practical processing challenges, including
  noise.
figures:
- label: Figure 1
  image: /images/publications/details/059-figure-1.webp
  alt: Synthetic seismic training-data generation from wavelets and reflectivity to mixed traces.
  caption: Generation of training data. (a) Source time function. (b) 1D reflectivity series. (c) 2D reflectivity
    series. (d) Synthetic primaries obtained by convolution of the source time function and the 2D reflectivity
    series. (e) Primaries (P) after NMO correction. (f) Multiples (M) generated following the same workflow
    as primaries. (g) Mixed primaries and multiples (C= P+ M).
  source: https://opus.hs-offenburg.de/frontdoor/deliver/index/docId/10963/file/GPR_GPR13672.pdf#page=5
  width: 1094
  height: 454
- label: Figure 2
  image: /images/publications/details/059-figure-2.webp
  alt: Training data examples in the form of five CDP gathers of varied frequency and reflectivity content.
  caption: Training data examples in the form of five CDP gathers of varied frequency and reflectivity content.
    (a) Synthetic gathers (labelled C in the text) with mixed primaries and multiples. (b) Primaries (labelled
    P in the text). (c) Multiples (labelled M in the text).
  source: https://opus.hs-offenburg.de/frontdoor/deliver/index/docId/10963/file/GPR_GPR13672.pdf#page=6
  width: 1131
  height: 445
bibtex: |
  @article{fernandez2025towardsdeeplearning59,
    title = {{Towards deep learning for seismic demultiple}},
    author = {Mario Fernandez, and Matthias Delescluse, and Alain Rabaute and Norman Ettrich and Janis Keuper},
    journal = {Geophysical Prospecting},
    year = {2025},
    url = {https://onlinelibrary.wiley.com/doi/full/10.1111/1365-2478.13672},
    doi = {10.1111/1365-2478.13672}
  }
bibtex_file: /assets/bibtex/2025-towards-deep-learning-for-seismic-demultiple.bib
abstract: |-
  Multiple attenuation is an important step in seismic data processing, leading to improved imaging and interpretation. Radon-based algorithms are commonly used for discriminating primaries and multiples in common depth point seismic gathers. This process implies a large number of parameters that need to be optimized for a satisfactory result. Moreover, Radon-based approaches sometimes present challenges in discriminating primaries and multiples with similar moveouts. Deep learning, based on convolutional neural networks, has recently shown promising results in seismic processing tasks that could mitigate the challenges of conventional methods. In this work, we detail how to train convolutional neural networks with only synthetic seismic data for assessing the demultiple problem in field datasets. We compare different training strategies for multiples removal based on different loss functions. We evaluate the performance of the different strategies on 400 clean and noisy synthetic data. We found that training a convolutional neural network to predict the multiples and then subtracting them from the input image is the most effective strategy for demultiple, especially for noisy data. Finally, we test our model to predict multiples on an elastic synthetic dataset and four distinctive field datasets. Our proposed approach reports successful generalization capabilities predicting and eliminating internal and surface-related multiples before and after migration while mitigating Radon challenges and relieving the user from any manual tasks. As a result, our effectively trained models bring a new valuable tool for seismic demultiple to consider in existing processing workflows.
abstract_source: https://opus.hs-offenburg.de/frontdoor/deliver/index/docId/10963/file/GPR_GPR13672.pdf
content_status: complete
---
