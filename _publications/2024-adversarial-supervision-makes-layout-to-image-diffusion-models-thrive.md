---
layout: publication
title: Adversarial Supervision Makes Layout-to-Image Diffusion Models Thrive
description: Generate images that follow a scene layout and remain editable through text. ALDM adds adversarial
  supervision to diffusion training, improving layout fidelity and making generated scenes useful for segmentation
  data augmentation.
why: An image generator should put objects where a supplied layout says they belong, while still allowing the
  scene's appearance to change. This work improves that balance through additional training feedback. The resulting
  images can also diversify training data for systems that need to understand unfamiliar scenes.
figures:
- label: Figure 1
  image: /images/publications/details/040-figure-1.webp
  alt: Layout-conditioned image generation under different text descriptions and weather conditions.
  caption: In contrast to prior L2I synthesis methods (Xue et al., 2023; Zhang & Agrawala, 2023), our ALDM
    model can synthesize faithful samples that are well aligned with the layout input, while preserving controllability
    via text prompt. Equipped with these both valuable properties, we can synthesize diverse samples of practical
    utility for downstream tasks, such as data augmentation for improving domain generalization of semantic
    segmentation models.
  source: https://arxiv.org/pdf/2401.08815#page=1
  width: 894
  height: 536
- label: Figure 2
  image: /images/publications/details/040-figure-2.webp
  alt: Method overview.
  caption: 'Method overview. To enforce faithfulness, we propose two novel training strategies to improve the
    traditional L2I diffusion model training (area (A)): adversarial supervision via a segmenter-based discriminator
    illustrated in area (B), and multistep unrolling strategy in area (C).'
  source: https://arxiv.org/pdf/2401.08815#page=4
  width: 894
  height: 487
bibtex: |
  @inproceedings{li2024adversarialsupervisionmakes40,
    title = {{Adversarial Supervision Makes Layout-to-Image Diffusion Models Thrive}},
    author = {Yumeng Li and Margret Keuper and Dan Zhang and Anna Khoreva1},
    booktitle = {International Conference on Learning Representations},
    year = {2024},
    url = {https://yumengli007.github.io/ALDM/}
  }
bibtex_file: /assets/bibtex/2024-adversarial-supervision-makes-layout-to-image-diffusion-models-thrive.bib
abstract: |-
  Despite the recent advances in large-scale diffusion models, little progress has been made on the layout-to-image (L2I) synthesis task. Current L2I models either suffer from poor editability via text or weak alignment between the generated image and the input layout. This limits their usability in practice. To mitigate this, we propose to integrate adversarial supervision into the conventional training pipeline of L2I diffusion models (ALDM). Specifically, we employ a segmentation-based discriminator which provides explicit feedback to the diffusion generator on the pixel-level alignment between the denoised image and the input layout. To encourage consistent adherence to the input layout over the sampling steps, we further introduce the multistep unrolling strategy. Instead of looking at a single timestep, we unroll a few steps recursively to imitate the inference process, and ask the discriminator to assess the alignment of denoised images with the layout over a certain time window. Our experiments show that ALDM enables layout faithfulness of the generated images, while allowing broad editability via text prompts. Moreover, we showcase its usefulness for practical applications: by synthesizing target distribution samples via text control, we improve domain generalization of semantic segmentation models by a large margin (∼12 mIoU points).
abstract_source: https://arxiv.org/pdf/2401.08815
content_status: complete
---
