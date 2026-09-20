---
layout: publication
title: Smart Eyes for Silent Threats - VLMs and In-Context Learning for THz Imaging
description: Specialist imaging tasks often have too few labels for conventional training. We adapt vision-language
  models to terahertz imagery through modality-aware prompts and in-context examples, exploring classification
  and interpretation without fine-tuning.
why: Specialized terahertz images are useful in settings where large labeled datasets may be unavailable. This
  study gives a vision-language model a small number of relevant examples and instructions tailored to that
  imaging method. It explores a way to obtain useful classifications and explanations without a full retraining
  process.
figures:
- label: Figure 1
  image: /images/publications/details/070-figure-1.webp
  alt: Amplitude and phase images of a terahertz sample.
  caption: Example frame from the dataset (Frame Number 0663), selected from the total of 1,400 frames. This
    frame displays intensity (top) and phase (bottom) plots. Each plot shows a circular region on the left
    indicating the C4 explosive and a rectangular region on the right indicating the metal plate. While the
    actual experiment displays intensity and phase images side by side (intensity left, phase right), this
    figure arranges them vertically for better readability.
  source: https://arxiv.org/pdf/2507.15576#page=2
  width: 543
  height: 381
- label: Figure 2
  image: /images/publications/details/070-figure-2.webp
  alt: Example illustrating how crops were extracted from the 1,400 frames in the dataset.
  caption: Example illustrating how crops were extracted from the 1,400 frames in the dataset. On the left
    is the complete frame (Frame Number 0663, also shown in Figure 1) displaying intensity and phase plots
    with the visible “C4” circle. On the right is an enlarged view of a selected crop from this frame.
  source: https://arxiv.org/pdf/2507.15576#page=2
  width: 543
  height: 294
bibtex: |
  @inproceedings{poggi2025smarteyesfor70,
    title = {{Smart Eyes for Silent Threats - VLMs and In-Context Learning for THz Imaging}},
    author = {Nicolas Poggi and Shashank Agnihotri and Margret Keuper},
    booktitle = {Proceedings of the IEEE/CVF International Conference on Computer Vision Workshops (ICCVw 2025)},
    year = {2025},
    url = {https://arxiv.org/pdf/2507.15576?}
  }
bibtex_file: /assets/bibtex/2025-smart-eyes-for-silent-threats-vlms-and-in-context-learning-for-thz-imaging.bib
abstract: |-
  Terahertz (THz) imaging enables non-invasive analysis for applications such as security screening and material classification, but effective image classification remains challenging due to limited annotations, low resolution, and visual ambiguity. We introduce In-Context Learning (ICL) with Vision-Language Models (VLMs) as a flexible, interpretable alternative that requires no fine-tuning. Using a modalityaligned prompting framework, we adapt two open-weight VLMs to the THz domain and evaluate them under zero-shot and one-shot settings. Our results show that ICL improves classification and interpretability in low-data regimes. This is the first application of ICL-enhanced VLMs to THz imaging, offering a promising direction for resource-constrained scientific domains. Code: GitHub repository.
abstract_source: https://arxiv.org/pdf/2507.15576
content_status: complete
---
