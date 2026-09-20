---
layout: publication
title: We need to re-think the concept of “real” images
description: Modern phone photographs already contain substantial algorithmic processing. This position paper
  asks what a "real" image means for deepfake detection and calls for definitions and benchmarks that reflect
  contemporary photography.
why: A modern phone photograph already contains substantial software processing, sometimes including learned
  image reconstruction. This position paper asks what that means for calling one image real and another fake.
  Clearer definitions can lead to detection benchmarks that better reflect contemporary photography.
figures:
- label: Figure 1
  image: /images/publications/details/081-figure-1.webp
  alt: Camera-model and capture-date distributions in EXIF-tagged LAION images.
  caption: 'Novelty of photos and used imaging devices in the latest Re-LAION 5B dataset. For our exif -analysis
    we focus on images taken by iPhones, which make up about 20% of the images in the dataset. Left: distribution
    of iPhones models1. Right: distribution of the image generation dates. Note that even in this latest large
    scale image dataset, hardly any image is newer than 2021.'
  source: https://arxiv.org/pdf/2509.21864#page=5
  width: 857
  height: 350
- label: Figure 2
  image: /images/publications/details/081-figure-2.webp
  alt: Size distribution in x (width) and y (height) of all LAION 5B images taken with iPhones.
  caption: Size distribution in x (width) and y (height) of all LAION 5B images taken with iPhones. The cut
    of image resolutions at 400px of the smaller image dimension is a design choice of the dataset [38].
  source: https://arxiv.org/pdf/2509.21864#page=6
  width: 897
  height: 544
bibtex: |
  @inproceedings{keuper2026weneedto81,
    title = {{We need to re-think the concept of ``real'' images}},
    author = {Janis Keuper and Margret Keuper},
    booktitle = {International Conference on Machine Learning},
    year = {2026},
    url = {https://icml.cc/virtual/2026/poster/67151}
  }
bibtex_file: /assets/bibtex/2026-we-need-to-re-think-the-concept-of-real-images.bib
abstract: |-
  The wide availability and low usability barrier of modern image generation models has triggered the reasonable fear of criminal misconduct and negative social implications. The machine learning community has been engaging this problem with an extensive series of publications proposing algorithmic solutions for the detection of “fake”, e.g. entirely generated or partially manipulated images. While there is undoubtedly some progress towards technical solutions of the problem, we argue that current and prior work is focusing too much on generative algorithms and “fake” data-samples, neglecting a clear definition and data collection of “real” images. The fundamental question “what is a real image?” might appear to be quite philosophical, but our analysis shows that the development and evaluation of basically all current “fake”-detection methods is relying on only a few, quite old lowresolution datasets of “real” images like ImageNet. However, the technology for the acquisition of “real” images, aka taking photos, has drastically evolved over the last decade: Today, over 90% of all photographs are produced by smartphones which typically use algorithms to compute an image from multiple inputs (over time) from multiple sensors. Based on the fact that these image formation algorithms are typically neural network architectures which are closely related to “fake”-image generators, we state the position that today, we need to re-think the concept of “real” images. The purpose of this position paper is to raise the awareness of the current shortcomings in this active field of research and to trigger an open discussion whether the detection of “fake” images is a sound objective at all. At the very least, we need a clear technical definition of “real” images and new benchmark datasets.
abstract_source: https://arxiv.org/pdf/2509.21864
content_status: complete
---
