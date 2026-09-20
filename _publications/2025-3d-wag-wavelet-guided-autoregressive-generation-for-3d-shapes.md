---
layout: publication
title: 3D-WAG - Wavelet-Guided Autoregressive Generation for 3D Shapes
description: Generate detailed 3D shapes through compact, multiscale wavelet representations. 3D-WAG predicts
  progressively finer token maps, reducing the long sequences that make conventional autoregressive 3D generation
  expensive.
why: Generating detailed 3D objects can require very long sequences of predictions. This method organizes shape
  information from coarse structure to fine detail using wavelets. That reduces the burden of generation while
  preserving a route to rich, realistic geometry.
figures:
- label: Figure 1
  image: /images/publications/details/064-figure-1.webp
  alt: Examples of generated 3D shapes spanning furniture, vehicles, and clothing.
  caption: '3D-WAG overview. We propose an autoregressive approach to 3D shape generation, based on the “next-scale”
    prediction paradigm. Left: Our hierarchical, multi-scale wavelet encoding enables the efficient generation
    of highly detailed surfaces, outperforming prior models (e.g., UDiFF [104], in the red box) for comparable
    latent code dimensionality, and showcasing generalization in conditional 3D generation tasks, like text-to-3D.
    Right: Unconditional generation of diverse, high-fidelity shapes, supporting varied implicit spatial representations
    using our approach.'
  source: https://arxiv.org/pdf/2411.19037#page=2
  width: 807
  height: 230
- label: Figure 2
  image: /images/publications/details/064-figure-2.webp
  alt: Overview of our architecture.
  caption: Overview of our architecture. We follow a two-stage training approach that is standard with latent
    generative models. In Stage 1, we train a vector-quantized autoencoder (VQ-VAE) on the wavelet volumes
    with multi-scale patch-wise quantization [75] in the latent space giving us quantized feature maps ˆz1,
    ˆz2,..., ˆzK. In Stage 2, the multi-scale VQ-VAE codebook indices in the form of token maps f1, f2,...,
    fK are flattened and learned with an autoregressive decoder-only Transformer prior model, enabling next-scale
    generation. During inference, the generated token maps are reshaped and mapped to obtain multi-scale quantized
    features by using codebook. Then the obtained features are converted into wavelet volumes by the decoder
    from Stage 1. The wavelet volumes can be further converted into implicit functions using wavelet inversion.
  source: https://arxiv.org/pdf/2411.19037#page=5
  width: 822
  height: 194
bibtex: |
  @inproceedings{medi20253dwagwavelet64,
    title = {{3D-WAG - Wavelet-Guided Autoregressive Generation for 3D Shapes}},
    author = {Tejaswini Medi and Arianna Rampini and Pradyumna Reddy and Pradeep Kumar Jayaraman and Margret Keuper},
    booktitle = {Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition Workshops (CVPRw 2025)},
    year = {2025},
    url = {https://arxiv.org/abs/2411.19037}
  }
bibtex_file: /assets/bibtex/2025-3d-wag-wavelet-guided-autoregressive-generation-for-3d-shapes.bib
abstract: |-
  Autoregressive (AR) models excel in language and image generation, but their role in 3D generation faces high computational cost and resolution challenges. Existing 3D AR methods, using voxel grids or implicit representations, produce long, redundant token sequences, limiting high-fidelity 3D shape generation and incurring high inference cost. To address these issues, we introduce 3D-WAG, a novel autoregressive framework employing compact wavelet-based hierarchical representations for efficient and expressive 3D shape generation. By representing the shapes in the wavelet domain, 3D-WAG captures coarse to fine geometric details as multi-scale discrete token maps, using a 3D vector-quantized variational autoencoder (VQVAE), enabling efficient AR modeling and detailed shape understanding. Unlike conventional next-token prediction, 3D-WAG formulates 3D shape generation as a next-scale token map prediction problem, achieving a faster inference time of 1.15 seconds per sample on a single NVIDIA H100 GPU, which is 15 times faster than the state-of-the-art diffusion-based 3D generation model UDiFF. Furthermore, 3D-WAG supports unconditional, class-conditional, and text-conditional shape generation. Experimental results on standard 3D benchmarks, including ShapeNet and DeepFashion3D, show that 3D-WAG outperforms state-of-the-art methods on metrics such as Minimum Matching Distance (MMD) and Coverage (COV), generating highquality 3D shapes that accurately represent real-world data distributions.
abstract_source: https://arxiv.org/pdf/2411.19037
content_status: complete
---
