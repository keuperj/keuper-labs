---
layout: publication
title: Implicit Representations for Constrained Image Segmentation
description: Build geometric knowledge directly into an image segmentation. Carefully parameterized implicit
  representations can enforce properties such as convexity, symmetry, and connectedness, helping resolve difficult
  or occluded boundaries.
why: When part of an object is hidden, the visible pixels may not be enough to determine its boundary. This
  method builds known shape properties directly into the representation of a segmentation. It lets useful geometric
  knowledge guide the result instead of hoping that a model learns every constraint from examples.
figures:
- label: Figure 1
  image: /images/publications/details/050-figure-1.webp
  alt: Image segmentations with convexity, symmetry, star-shape, and connectedness constraints.
  caption: Illustration of different constraints imposed via a suitable parametrization of the segmentation
    using an implicit representation.
  source: https://raw.githubusercontent.com/mlresearch/v235/main/assets/schneider24a/schneider24a.pdf#page=3
  width: 1193
  height: 478
- label: Figure 2
  image: /images/publications/details/050-figure-2.webp
  alt: Illustrating periodicity in implicit representations.
  caption: Illustrating periodicity in implicit representations.
  source: https://raw.githubusercontent.com/mlresearch/v235/main/assets/schneider24a/schneider24a.pdf#page=4
  width: 606
  height: 265
bibtex: |
  @inproceedings{schneider2024implicitrepresentationsfor50,
    title = {{Implicit Representations for Constrained Image Segmentation}},
    author = {J. P. Schneider and M. Fatima and J. Lukasik and A. Kolb and Margret Keuper and M. Moeller},
    booktitle = {International Conference on Machine Learning},
    year = {2024},
    url = {https://openreview.net/forum?id=IaV6AgrTUp}
  }
bibtex_file: /assets/bibtex/2024-implicit-representations-for-constrained-image-segmentation.bib
abstract: |-
  Implicit representations allow to use a parametric function that maps (spatial) coordinates to the value that is traditionally stored in each pixel, e.g. RGB values, instead of a discrete grid. This has recently proven quite advantageous as an internal representation for images or scenes for deep learning models. Yet, its potential to ensure certain properties of the solution has not yet been fully explored. In this work, we demonstrate that implicit representations are a powerful tool for enforcing a variety of different geometric constraints in image segmentation. While convexity, star-shape, path-connectedness, periodicity, or symmetry of the (spatial or space-time) region to be segmented are very challenging to enforce for pixel-wise discretizations, a suitable parametrization of an implicit representation, mapping spatial or spatio-temporal coordinates to the likeliness of a pixel belonging to the fore- or background, allows to provably ensure such constraints. Several numerical examples demonstrate that challenging segmentation scenarios can benefit from the inclusion of application-specific constraints, e.g. when occlusions prevent a faithful segmentation with classical approaches.
abstract_source: https://raw.githubusercontent.com/mlresearch/v235/main/assets/schneider24a/schneider24a.pdf
content_status: complete
---
