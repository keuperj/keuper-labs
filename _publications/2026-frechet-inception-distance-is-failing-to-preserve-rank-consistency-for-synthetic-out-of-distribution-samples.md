---
layout: publication
title: Fréchet Inception Distance is Failing to Preserve Rank Consistency for Synthetic Out-of-Distribution
  Samples
description: A generator ranking can change simply because its evaluation features do not suit the images.
  Controlled experiments show that domain-adapted representations make similarity rankings more consistent
  for shifted and non-natural images.
why: Researchers often use one score to decide which image generator is better. This study shows that the ranking
  can become unreliable when the score relies on visual features learned from a different kind of image. Adapting
  those features to the target domain produces more consistent comparisons, helping researchers evaluate scientific
  and other specialized imagery more meaningfully.
figures:
- label: Figure 1
  image: /images/publications/details/085-figure-1.webp
  alt: Three experimental settings compare image similarity rankings under shifts and domain adaptation.
  caption: 'Overview of the three experimental settings used to study representation effects on FID-style similarity
    rankings. Left: For natural images, we first obtain a clean reference ranking in the ImageNet-pretrained
    feature space. After induced distribution shifts (like Gaussian blur), we compare rankings obtained in
    the same feature space with those from blur-adapted models to examine whether the clean reference structure
    is preserved. Middle: For non-natural images, we compare ImageNet-pretrained and domain-adapted feature
    spaces on medical data using FID, D&C, and MMD. Right: For synthetic images, we use the same metrics to
    compare synthetic samples against real data in pretrained and domain-adapted feature spaces.'
  source: https://openreview.net/pdf?id=jWqcKaZdTS#page=2
  width: 1256
  height: 293
- label: Figure 2
  image: /images/publications/details/085-figure-2.webp
  alt: Example image transformations with increasing severity used to test ranking stability.
  caption: Illustration of the perturbations used in the natural-image experiments. Starting from the original
    image, we apply six common image transformations and gradually increase their severity to produce controlled
    distribution shifts.
  source: https://openreview.net/pdf?id=jWqcKaZdTS#page=5
  width: 595
  height: 583
bibtex: |
  @inproceedings{liu2026frechetinceptiondistance85,
    title = {{Fréchet Inception Distance is Failing to Preserve Rank Consistency for Synthetic Out-of-Distribution Samples}},
    author = {Linghui Liu and Henrike Stephani and Janis Keuper},
    booktitle = {Synthetic Data for Computer Vision Workshop at CVPR 2026},
    year = {2026},
    url = {https://openreview.net/pdf?id=jWqcKaZdTS}
  }
bibtex_file: /assets/bibtex/2026-frechet-inception-distance-is-failing-to-preserve-rank-consistency-for-synthetic-out-of-distribution-samples.bib
content_status: complete
abstract: |-
  Fréchet Inception Distance (FID) is widely used to evaluate how well synthetic images match a real target distribution. However, FID is known to depend strongly on the ImageNet-pretrained Inception representation, and it remains unclear whether its similarity rankings remain reliable when data move away from the ImageNet distribution. We study this question through controlled natural-image shifts, non-natural image datasets, and synthetic-to-real comparisons. Across these settings, we find that FID-based rankings become less reliable outside the ImageNet domain, and that this instability is driven mainly by the evaluation feature space. Our controlled shift experiments show that ranking consistency is largely preserved under some augmentations like photometric perturbations, but breaks down under others including Gaussian blur and noise. This instability is mainly caused by the mismatch between the evaluated data and the ImageNet-pretrained feature space. With domain-adapted representations, rankings become much more consistent across backbones and discrepancy metrics, and align better with the underlying data structure. Preliminary synthetic-to-real results further suggest that synthetic data evaluation can benefit from target-domain representations and complementary metrics.
abstract_source: https://openreview.net/pdf?id=jWqcKaZdTS
---
