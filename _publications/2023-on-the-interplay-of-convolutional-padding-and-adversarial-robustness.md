---
layout: publication
title: On the Interplay of Convolutional Padding and Adversarial Robustness
description: The border of an image can expose a hidden architectural weakness. We analyze how convolutional
  padding shapes adversarial perturbations and how alternative padding choices affect robustness.
why: The extra pixels added around an image before processing may seem like a minor implementation choice.
  This paper shows that they can influence where attacks concentrate and how well a network resists them. It
  brings a usually hidden design decision into the discussion of dependable image recognition.
figures:
- label: Figure 1
  image: /images/publications/details/032-figure-1.webp
  alt: Spatial distribution of adversarial perturbations for different padding methods.
  caption: Average perturbations of 1,000 CIFAR-10 samples where attacks were successful. Adversarial attacks
    show perturbation anomalies (more or fewer perturbations) at image boundaries that can be attributed to
    padding. Shown here is a ResNet-20 trained without adversarial defenses with different padding modes under
    attacks of highbudget l∞- (top row) and l2-bounded (bottom row) APGD- CE.
  source: https://arxiv.org/pdf/2308.06612#page=1
  width: 543
  height: 289
- label: Figure 2
  image: /images/publications/details/032-figure-2.webp
  alt: Examples of a CIFAR-10 training sample increased to an image resolution to 64 × 64 px by different padding
    approaches.
  caption: Examples of a CIFAR-10 training sample increased to an image resolution to 64 × 64 px by different
    padding approaches.
  source: https://arxiv.org/pdf/2308.06612#page=2
  width: 543
  height: 172
bibtex: |
  @inproceedings{gavrikov2023ontheinterplay32,
    title = {{On the Interplay of Convolutional Padding and Adversarial Robustness}},
    author = {Paul Gavrikov and Janis Keuper},
    booktitle = {Proceedings of the IEEE/CVF International Conference on Computer Vision Workshops (ICCVw 2023)},
    year = {2023},
    url = {https://arxiv.org/pdf/2308.06612}
  }
bibtex_file: /assets/bibtex/2023-on-the-interplay-of-convolutional-padding-and-adversarial-robustness.bib
abstract: |-
  It is common practice to apply padding prior to convolution operations to preserve the resolution of feature-maps in Convolutional Neural Networks (CNN). While many alternatives exist, this is often achieved by adding a border of zeros around the inputs. In this work, we show that adversarial attacks often result in perturbation anomalies at the image boundaries, which are the areas where padding is used. Consequently, we aim to provide an analysis of the interplay between padding and adversarial attacks and seek an answer to the question of how different padding modes (or their absence) affect adversarial robustness in various scenarios.
abstract_source: https://arxiv.org/pdf/2308.06612
content_status: complete
---
