---
layout: publication
title: Parameterized Adverse Lens Corruptions to Probe Model Robustness to Optical Tolerances
description: Lens blur is not always a harmless image degradation. Adverse Lens Corruption optimizes physically
  parameterized aberrations to find difficult optical conditions and test a model's sensitivity to lens tolerances.
why: Small optical imperfections can matter to a vision model even when blur seems harmless to a person. This
  paper searches for difficult blur patterns using parameters tied to lens aberrations, revealing vulnerabilities
  that ordinary noise tests do not capture. It gives researchers a way to investigate camera-related weaknesses
  before relying on a model in changing conditions.
figures:
- label: Figure 1
  image: /images/publications/details/089-figure-1.webp
  alt: Changes to a camera lens can turn correct object detections into incorrect predictions.
  caption: In safety critical applications such as autonomous driving, changes of the camera output can cause
    challenging data shifts that affect network performance, leading to potentially catastrophic failure. The
    figure shows, in a simplified fashion, how camera changes, e.g. due to conditions in the operational environment
    such as temperature and humidity changes, can result in incorrect detections. The root causes of such camera
    changes can be attributed to a separation or change of shape of lens elements, e.g., by lens overheating
    or the malfunctioning of focusing actuators within the lens.
  source: https://openreview.net/pdf?id=a93BmQRNxC#page=2
  width: 625
  height: 375
- label: Figure 2
  image: /images/publications/details/089-figure-2.webp
  alt: A flower image under increasingly strong optimized optical blur, with the corresponding blur kernels.
  caption: Adversarial optical attack examples with increasing thresholds φ. The image was created with an
    optical kernel from the PSF attack with the ResNet50. From left to right, φ increases from 0 to 5, where
    each inlet shows the corresponding kernel.
  source: https://openreview.net/pdf?id=a93BmQRNxC#page=6
  width: 956
  height: 223
bibtex: |
  @article{bauerle2026parameterizedadverselens89,
    title = {{Parameterized Adverse Lens Corruptions to Probe Model Robustness to Optical Tolerances}},
    author = {Kai Bäuerle and Patrick Müller and Ivo Ihrke and Margret Keuper},
    journal = {Transactions on Machine Learning Research},
    year = {2026},
    url = {https://openreview.net/pdf?id=a93BmQRNxC}
  }
bibtex_file: /assets/bibtex/2026-parameterized-adverse-lens-corruptions-to-probe-model-robustness-to-optical-tolerances.bib
content_status: complete
abstract: |-
  Deep neural networks excel at image classification on benchmarks like ImageNet, yet they remain vulnerable to adverse conditions, including environmental changes and sensor noise, such as lens blur or camera noise. Consequently, the study of these adverse noise corruptions has been extensive. At the same time, image blur, naturally introduced in optical systems, has been widely ignored as a threat to model robustness. In fact, Gaussian blur has even been considered as viable defense against adversarial attacks. In this work, we challenge the common perception of blur as a rather benign data corruption and study optics-driven, blur-based adversarial attacks. Specifically, we introduce Adverse Lens Corruption (ALC), an optics-driven robustness probe that, through adversarial optimization, identifies worst-case lens blurs by optimizing Zernike polynomial-based aberrations. Unlike traditional noise-based attacks, ALC provides a physically-motivated continuous search space. This enables the analysis of model robustness to optics-driven blur corruptions and complements existing noise and corruption benchmarks.
abstract_source: https://openreview.net/pdf?id=a93BmQRNxC
---
