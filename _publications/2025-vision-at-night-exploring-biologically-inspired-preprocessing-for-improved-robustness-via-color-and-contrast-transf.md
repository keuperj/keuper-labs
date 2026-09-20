---
layout: publication
title: Vision At Night - Exploring Biologically Inspired Preprocessing For Improved Robustness Via Color And
  Contrast Transformations
description: A different input representation can help vision models cope with darkness. Inspired by retinal
  processing, fixed color and contrast transformations emphasize structural cues and improve segmentation under
  difficult lighting.
why: Darkness changes the information available to a camera, while many vision models are trained mainly on
  ordinary color photographs. This work explores simple transformations inspired by how biological vision handles
  color and contrast. It shows that changing the representation of the input can improve robustness without
  making the learned model more complicated.
figures:
- label: Figure 1
  image: /images/publications/details/072-figure-1.webp
  alt: Nighttime segmentation using alternative color and contrast representations.
  caption: Robustness can begin before the neural network. In-distribution (above, Cityscapes [9]) versus OOD
    low-light (below, ACDC Night [44]) results for UPerNet. The leftmost column shows the baseline, which transfers
    poorly to ACDC Night, while our biologically inspired preprocessing in all considered variants (luminance,
    color-opponency, and single-color) significantly improves results across all labels by preserving robust
    structural cues.
  source: https://arxiv.org/pdf/2509.24863#page=1
  width: 543
  height: 360
- label: Figure 2
  image: /images/publications/details/072-figure-2.webp
  alt: Overview of the four evaluated pipelines.
  caption: 'Overview of the four evaluated pipelines. In comparison with a baseline (top row), we consider
    our preprocessing in three variants: luminance, color-opponency and single-color. Our preprocessing begins
    with a color remapping (1) from RGB values to three different color spaces. Then follows the contrast extraction
    (2), where we simulate a convolution with a DoG-like kernel. Finally, we enforce sparsity (3) by setting
    low absolute values to zero, highlighted in pink. Each variant produces 3 channels that serve as a new
    input to different neural network architecures (right).'
  source: https://arxiv.org/pdf/2509.24863#page=4
  width: 1193
  height: 471
bibtex: |
  @inproceedings{stracke2025visionatnight72,
    title = {{Vision At Night - Exploring Biologically Inspired Preprocessing For Improved Robustness Via Color And Contrast Transformations}},
    author = {Lorena Stracke and Lia Nimmermann and Shashank Agnihotri and Margret Keuper and Volker Blanz},
    booktitle = {Proceedings of the IEEE/CVF International Conference on Computer Vision Workshops (ICCVw 2025)},
    year = {2025},
    url = {https://arxiv.org/pdf/2509.24863}
  }
bibtex_file: /assets/bibtex/2025-vision-at-night-exploring-biologically-inspired-preprocessing-for-improved-robustness-via-color-and-contrast-transf.bib
abstract: |-
  Deep neural networks surpass humans on many vision benchmarks, yet remain far less robust to distribution shifts such as illumination and weather changes. Existing approaches address this challenge by additional training data, extensive augmentation, architectural modifications, or test-time adaptation. In this work, we explore a complementary direction: inspired by the human retina, we propose a fixed, model-agnostic preprocessing module that extracts signals that are more stable with respect to variations of illumination. Our method combines color remapping with local contrast extraction, producing sparse representations that emphasize structural features. We study its impact on semantic segmentation by training on Cityscapes and evaluating generalization under adverse conditions on Dark Zurich and ACDC. Our results show that the biologically inspired preprocessing preserves in-distribution performance while consistently improving robustness in challenging lighting scenarios, such as nighttime, where annotated training data are scarce. Moreover, the segmentation accuracy remains stable even when the contrast-based representation is sparsified by up to 70%. These gains suggest that rethinking the input representation itself can improve robustness while also opening opportunities for lower-latency, transmission-aware imaging sensors when sparsity can be exploited close to acquisition.
abstract_source: https://arxiv.org/pdf/2509.24863
content_status: complete
---
