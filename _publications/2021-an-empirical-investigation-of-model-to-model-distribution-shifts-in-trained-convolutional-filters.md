---
layout: publication
title: An Empirical Investigation of Model-to-Model Distribution Shifts in Trained Convolutional Filters
description: What changes inside a CNN when its training data or task changes? This early study compares more
  than half a billion learned convolution filters, opening a new window onto transfer learning and distribution
  shifts through model weights.
why: We usually study AI by looking at its answers, but its learned filters also tell a story. This work compares
  hundreds of millions of these small pattern detectors across models and tasks. The shared dataset opens a
  practical route to understanding what transfers between applications and what changes when the training data
  changes.
figures:
- label: Figure 1
  image: /images/publications/details/006-figure-1.webp
  alt: Learned convolution filters and their distribution across network depths.
  caption: Principal components vi and (cumulative) explained variance ratio per component for filters from
    (a) full dataset, (b) models trained on formula data, (c) GAN discriminators, (d) first convolution layers.
    More examples in subsection A.3.
  source: https://arxiv.org/pdf/2201.08465#page=2
  width: 894
  height: 324
- label: Figure 2
  image: /images/publications/details/006-figure-2.webp
  alt: Coefficient distributions along the principal components for selected data types.
  caption: Coefficient distributions along the principal components for selected data types. Full overview
    in subsection A.5.
  source: https://arxiv.org/pdf/2201.08465#page=2
  width: 894
  height: 237
bibtex: |
  @inproceedings{gavrikov2021anempiricalinvestigation6,
    title = {{An Empirical Investigation of Model-to-Model Distribution Shifts in Trained Convolutional Filters}},
    author = {Paul Gavrikov and Janis Keuper},
    booktitle = {NeurIPS 21 Workshop - Distribution shifts - connecting methods and applications (DistShift)},
    year = {2021},
    url = {https://arxiv.org/abs/2201.08465}
  }
bibtex_file: /assets/bibtex/2021-an-empirical-investigation-of-model-to-model-distribution-shifts-in-trained-convolutional-filters.bib
abstract: |-
  We present first empirical results from our ongoing investigation of distribution shifts in image data used for various computer vision tasks. Instead of analyzing the original training and test data, we propose to study shifts in the learned weights of trained models. In this work, we focus on the properties of the distributions of dominantly used 3 × 3 convolution filter kernels. We collected and publicly provide a data set with over half a billion filters from hundreds of trained CNNs, using a wide range of data sets, architectures, and vision tasks. Our analysis shows interesting distribution shifts (or the lack thereof) between trained filters along different axes of meta-parameters, like data type, task, architecture, or layer depth. We argue, that the observed properties are a valuable source for further investigation into a better understanding of the impact of shifts in the input data to the generalization abilities of CNN models and novel methods for more robust transfer-learning in this domain. Data available at: https://github.com/paulgavrikov/CNN-Filter-DB/.
abstract_source: https://arxiv.org/pdf/2201.08465
content_status: complete
---
