---
layout: publication
title: Corner Cases - How Size and Position of Objects Challenge ImageNet-Trained Models
description: Move an object away from the center or make it smaller, and a classifier may lean more heavily
  on its background. Hard-Spurious-ImageNet exposes these interactions and tests whether existing bias-mitigation
  methods cope with them.
why: Moving an object toward the edge of a photo should not change what it is. This work shows how object size
  and position can instead make classifiers rely more on the background. Its challenging examples reveal failures
  that standard, well-framed benchmark images may overlook.
figures:
- label: Figure 1
  image: /images/publications/details/061-figure-1.webp
  alt: Object localization examples under changes in position and background.
  caption: Gradcam visualizations for Pre-trained ConvNext-Base. a) Model predicts core class Tench when the
    object is located in the center of the image, b) Spurious class Zucchini is predicted when the core class
    moves away from the center, c) Class Goldfish is predicted when the size of the core object is large (112×112),
    d) Spurious class Sea Lion is predicted when size of core object reduces to 84 × 84.
  source: https://arxiv.org/pdf/2505.03569#page=2
  width: 1193
  height: 261
- label: Figure 2
  image: /images/publications/details/061-figure-2.webp
  alt: 'Left: ImageNet-1k classes and their center and size scores.'
  caption: 'Left: ImageNet-1k classes and their center and size scores. Toyshop has largest center and size
    scores, whereas Volleyball has smallest center score and Balance Beam has smallest size score. Other classes
    are sampled randomly for visualization. Right: Counts in log scale of relative centers of ground truth
    bounding boxes containing the object corresponding to the image class (ImageNet-1k validation set). Most
    object centers are concentrated around the image center, while some are present along the main axes. Objects
    of interest are rarely present in image corners.'
  source: https://arxiv.org/pdf/2505.03569#page=3
  width: 1052
  height: 318
bibtex: |
  @inproceedings{fatima2025cornercaseshow61,
    title = {{Corner Cases - How Size and Position of Objects Challenge ImageNet-Trained Models}},
    author = {M. Fatima and S. Jung and M. Keuper},
    booktitle = {Synthetic Data for Computer Vision Workshop@ CVPR 2025},
    year = {2025},
    url = {https://openreview.net/forum?id=B6l94JAyKr}
  }
bibtex_file: /assets/bibtex/2025-corner-cases-how-size-and-position-of-objects-challenge-imagenet-trained-models.bib
abstract: |-
  Backgrounds in images play a major role in contributing to spurious correlations among different data points. Owing to aesthetic preferences of humans capturing the images, datasets can exhibit positional (location of the object within a given frame) and size (region-of-interest to image ratio) biases for different classes. In this paper, we show that these biases can impact how much a model relies on spurious features in the background to make its predictions. To better illustrate our findings, we propose a synthetic dataset derived from ImageNet-1k, Hard-Spurious-ImageNet, which contains images with various backgrounds, object positions, and object sizes. By evaluating the dataset on different pretrained models, we find that most models rely heavily on spurious features in the background when the region-of-interest (ROI) to image ratio is small and the object is far from the center of the image. Moreover, we also show that current methods that aim to mitigate harmful spurious features, do not take into account these factors, hence fail to achieve considerable performance gains for worst-group accuracies when the size and location of core features in an image change. The dataset and implementation code are available at https://github.com/Mishalfatima/Corner_Cases.
abstract_source: https://arxiv.org/pdf/2505.03569
content_status: complete
---
