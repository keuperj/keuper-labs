---
layout: publication
title: Missing Fine Details in Images - Last Seen in High Frequencies
description: Fine textures can disappear when image tokenizers favor low-frequency structure. This study diagnoses
  that imbalance and explores separate optimization of frequency bands to preserve sharper details in reconstructed
  images.
why: Image generators can lose fine texture before generation even starts, when an image is compressed into
  an internal representation. This work investigates that imbalance between broad structure and fine detail.
  Treating the two kinds of information separately offers a route to sharper reconstructions.
figures:
- label: Figure 1
  image: /images/publications/details/071-figure-1.webp
  alt: Fine-detail reconstructions comparing input images, a baseline tokenizer, and the proposed method.
  caption: 'Visual comparison of reconstructions. From left to right: example original image, VAVAE reconstruction,
    and our approach (FA- VAE). The red color highlighted regions emphasize areas rich in textures, edges,
    and text. Our method better preserves high-frequency details and sharp structures, resulting in reconstructions
    visually closer to the input.'
  source: https://arxiv.org/pdf/2509.05441v1#page=2
  width: 402
  height: 374
- label: Figure 2
  image: /images/publications/details/071-figure-2.webp
  alt: FA-VAE.
  caption: FA-VAE. The Overall pipeline of FA-VAE latent tokenizer.
  source: https://arxiv.org/pdf/2509.05441v1#page=3
  width: 881
  height: 329
bibtex: |
  @inproceedings{medi2025missingfinedetails71,
    title = {{Missing Fine Details in Images - Last Seen in High Frequencies}},
    author = {Tejaswini Medi and Hsien-Yi Wang and Arianna Rampini and Margret Keuper},
    booktitle = {Proceedings of the IEEE/CVF International Conference on Computer Vision Workshops (ICCVw 2025)},
    year = {2025},
    url = {https://arxiv.org/pdf/2509.05441?}
  }
bibtex_file: /assets/bibtex/2025-missing-fine-details-in-images-last-seen-in-high-frequencies.bib
abstract: |-
  Latent generative models have shown remarkable progress in high-fidelity image synthesis, typically using a two-stage training process that involves compressing images into latent embeddings via learned tokenizers in the first stage. The quality of generation strongly depends on how expressive and well-optimized these latent embeddings are. While various methods have been proposed to learn effective latent representations, the reconstructed images often lack realism, particularly in textured regions with sharp transitions, due to loss of fine details governed by high frequencies. We conduct a detailed frequency decomposition of existing state-ofthe-art (SOTA) latent tokenizers and show that conventional objectives inherently prioritize low-frequency reconstruction, often at the expense of high-frequency fidelity. Our analysis reveals these latent tokenizers exhibit a bias toward lowfrequency information, when jointly optimized, leading to over-smoothed outputs and visual artifacts that diminish perceptual quality. To address this, we propose a wavelet-based, frequency-aware variational autoencoder (FA-VAE) framework that explicitly decouples the optimization of low- and high-frequency components. This decoupling enables improved reconstruction of fine textures while preserving global structure. Our approach bridges the fidelity gap in current latent tokenizers and emphasizes the importance of frequency-aware optimization for realistic image representation, with broader implications for applications in content creation, neural rendering, and medical imaging.
abstract_source: https://arxiv.org/pdf/2509.05441v1
content_status: complete
---
