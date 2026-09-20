---
layout: publication
title: Examining the Impact of Optical Aberrations to Image Classification and Object Detection Models
description: Camera optics introduce blur that simple synthetic kernels do not capture. OpticsBench and LensCorruptions
  probe realistic aberrations across classification and detection models, supporting more representative robustness
  evaluation.
why: Blur from real optics is more complicated than a generic smoothing filter. This work tests classification
  and detection models with camera-inspired aberrations to expose differences that simpler tests miss. It helps
  connect model evaluation to the physical imaging system supplying the data.
figures:
- label: Figure 1
  image: /images/publications/details/088-figure-1.webp
  alt: A flower image under different optical aberrations, including astigmatism and coma.
  caption: 'Blur image corruptions applied to an ImageNet image. The effects of baseline blur [7] and OpticsBench
    blur kernels [11] are visualized for severity 4. Although the image looks similarly blurred for the different
    kernels, the details are different: for example, the petals of the flower remain white for the baseline
    blur, while they have reddish and bluish color fringes for the multi-channel (R, G, B) primary aberrations
    considered in OpticsBench. The baseline is uniformly blurred, while astigmatism and coma introduce directional
    blur. In this article, we investigate how realistic blur kernel properties impact current image classification
    and object detection models.'
  source: https://arxiv.org/pdf/2504.18510#page=1
  width: 546
  height: 190
- label: Figure 2
  image: /images/publications/details/088-figure-2.webp
  alt: The Modulation Transfer Function (MTF) and its derived metrics, MTF50 and MTF20 frequencies (markers),
    objectively measure lens quality in terms of sharpness.
  caption: The Modulation Transfer Function (MTF) and its derived metrics, MTF50 and MTF20 frequencies (markers),
    objectively measure lens quality in terms of sharpness. The higher the contrast, the better, so the higher
    the frequency assigned to either MTF50 or MTF20, the better. The effect of each MTF is illustrated by convolving
    the bar targets at the top right with the corresponding PSFs. The six spatial frequencies (cyc/px) double
    from left to right, while the far right represents the maximum frequency - the Nyquist frequency (0.5 cyc/px).
    The black MTF represents a high quality lens with high contrast transfer and an MTF50 frequency around
    0.25 cyc/px (half Nyquist), visible in the bar target’s penultimate frequency bin. The orange MTF drops
    off quickly with an MTF50 frequency around 0.0625 cyc/px visible in bar target’s third frequency bin. Below
    MTF20 or even MTF10, the bar patterns are hardly discernible and turn all grayish.
  source: https://arxiv.org/pdf/2504.18510#page=3
  width: 576
  height: 303
bibtex: |
  @article{muller2026examiningtheimpact88,
    title = {{Examining the Impact of Optical Aberrations to Image Classification and Object Detection Models}},
    author = {Patrick Müller and Alexander Braun and Margret Keuper},
    journal = {IEEE Transactions on Pattern Analysis and Machine Intelligence},
    year = {2026},
    url = {https://www.computer.org/csdl/journal/tp/2026/03/11205303/2aRi0yIwjS}
  }
bibtex_file: /assets/bibtex/2026-examining-the-impact-of-optical-aberrations-to-image-classification-and-object-detection-models.bib
abstract: |-
  Deep neural networks (DNNs) have proven to be successful in various computer vision applications such that models even infer in safety-critical situations. Therefore, vision models have to behave in a robust way to disturbances such as noise or blur. While seminal benchmarks exist to evaluate model robustness to diverse corruptions, blur is often approximated in an overly simplistic way to model defocus, while ignoring the different blur kernel shapes that result from optical systems. To study model robustness against realistic optical blur effects, this paper proposes two datasets of blur corruptions, which we denote OpticsBench and LensCorruptions. OpticsBench examines primary aberrations such as coma, defocus, and astigmatism, i.e. aberrations that can be represented by varying a single parameter of Zernike polynomials. To go beyond the principled but synthetic setting of primary aberrations, LensCorruptions samples linear combinations in the vector space spanned by Zernike polynomials, corresponding to 100 real lenses. Evaluations for image classification and object detection on ImageNet and MSCOCO show that for a variety of different pre-trained models, the performance on OpticsBench and LensCorruptions varies significantly, indicating the need to consider realistic image corruptions to evaluate a model’s robustness against blur.
abstract_source: https://arxiv.org/pdf/2504.18510
content_status: complete
---
