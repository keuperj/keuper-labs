---
layout: publication
title: Decoupling High and Low Frequencies for Faithful Image Generation with Fine Details
description: Sharp details should survive compression into a generative model's latent space. DeBaT learns
  low- and high-frequency representations separately, improving fine-detail reconstruction while retaining
  coherent global structure.
why: Fine details can vanish when a generator stores an image in a compressed internal form. DeBaT separates
  broad structure from high-frequency detail so that both receive dedicated attention. It improves the preservation
  of texture and small features while keeping the overall image coherent.
figures:
- label: Figure 1
  image: /images/publications/details/093-figure-1.webp
  alt: Fine-detail reconstruction crops comparing DeBaT with a baseline tokenizer.
  caption: Reconstruction quality for two examples. We compare the reconstruction of VA-VAE to our approach
    DeBaT. Highlighted regions emphasize textures and edges. DeBaT better preserves high-frequency details
    and sharp structures, producing reconstructions visually closer to the input. Arrows indicate reconstruction
    errors.
  source: https://arxiv.org/pdf/2509.05441v4#page=2
  width: 632
  height: 190
- label: Figure 2
  image: /images/publications/details/093-figure-2.webp
  alt: Comparison of wavelet based latent VAE tokenizer designs.
  caption: Comparison of wavelet based latent VAE tokenizer designs. Previous works for image (VA-VAE) and
    video (WF-VAE) generation leverage spatial compression properties of multiple wavelet stages, while low
    and high frequency bands are coupled in a joint latent code. We propose DeBaT, which preserves fine details
    by learning explicit latent codes for low and for high frequency bands through decoupled VAEs.
  source: https://arxiv.org/pdf/2509.05441v4#page=5
  width: 784
  height: 318
bibtex: |
  @inproceedings{medi2026decouplinghighand93,
    title = {{Decoupling High and Low Frequencies for Faithful Image Generation with Fine Details}},
    author = {Tejaswini Medi and Hsien-Yi Wang and Arianna Rampini and Margret Keuper},
    booktitle = {European Conference on Computer Vision},
    year = {2026},
    url = {https://arxiv.org/abs/2509.05441v4}
  }
bibtex_file: /assets/bibtex/2026-decoupling-high-and-low-frequencies-for-faithful-image-generation-with-fine-details.bib
abstract: |-
  Latent generative models compress images into learned embeddings prior to synthesis, and the generation quality critically depends on how faithfully these embeddings preserve visual detail. We observe that while such embeddings are effective at reconstructing low frequency structure, they struggle to recover sharp high frequency details that are essential for perceptual realism. Conventional reconstruction objectives implicitly prioritize coarse structural information over high frequency content, which can lead to overly smoothed outputs and degraded visual quality in textured regions. Motivated by this observation, we propose DeBaT, a Decoupled frequency Band Tokenizer that explicitly separates the learning of low and high frequency band embeddings. This decoupling enables accurate reconstruction of fine details while preserving global coherence. Integrated into a latent diffusion based generative model, DeBaT allows for sharper and more realistic samples than previous latent tokenizers, confirming that the explicit decoupling of high and low frequency bands eases the preservation of visual details in learned embedding spaces.
abstract_source: https://arxiv.org/pdf/2509.05441v4
content_status: complete
---
