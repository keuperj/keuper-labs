---
layout: publication
title: DCBM - Data-Efficient Visual Concept Bottleneck Models
description: DCBM builds interpretable classifiers from dataset-specific visual concepts. Foundation-model
  region extraction makes efficient use of limited examples, while localized concepts help explain predictions
  in fine-grained and unfamiliar domains.
why: An interpretable classifier should show which visual evidence supports its answer. DCBM learns a compact
  collection of concepts from image regions and can locate those concepts in new examples. It offers an efficient
  approach for specialized recognition tasks where both training data and understandable explanations matter.
figures:
- label: Figure 1
  image: /images/publications/details/067-figure-1.webp
  alt: Visual concepts extracted from training-image regions and used for an interpretable prediction.
  caption: DCBMs extract image regions as concepts. Using vision foundation models, we use crop image regions
    as concepts for CBM training. Based on few concept samples (50 imgs / class), DCBMs offer interpretability
    even for fine-grained classification.
  source: https://arxiv.org/pdf/2412.11576#page=1
  width: 541
  height: 304
- label: Figure 2
  image: /images/publications/details/067-figure-2.webp
  alt: DCBM framework.
  caption: DCBM framework. The DCBM framework generates concept proposals through foundation models (Step 1).
    These proposals are then clustered, each represented by its centroid (Step 2). Finally, the unique concepts
    are utilized to train a sparse CBM, effectively (Step 3). We leverage the image-text alignment to map the
    visual concept to the corresponding textual concept (Step 4). We can remove undesired concepts after Step
    2.
  source: https://arxiv.org/pdf/2412.11576#page=4
  width: 1193
  height: 449
bibtex: |
  @inproceedings{prasse2025dcbmdataefficient67,
    title = {{DCBM - Data-Efficient Visual Concept Bottleneck Models}},
    author = {Katharina Prasse and Patrick Knab and Sascha Marton and Christian Bartelt and Margret Keuper},
    booktitle = {International Conference on Machine Learning},
    year = {2025},
    url = {https://arxiv.org/pdf/2412.11576}
  }
bibtex_file: /assets/bibtex/2025-dcbm-data-efficient-visual-concept-bottleneck-models.bib
abstract: |-
  Concept Bottleneck Models (CBMs) enhance the interpretability of neural networks by basing predictions on human-understandable concepts. However, current CBMs typically rely on concept sets extracted from large language models or extensive image corpora, limiting their effectiveness in data-sparse scenarios. We propose Data-efficient CBMs (DCBMs), which reduce the need for large sample sizes during concept generation while preserving interpretability. DCBMs define concepts as image regions detected by segmentation or detection foundation models, allowing each image to generate multiple concepts across different granularities. Exclusively containing dataset-specific concepts, DCBMs are well suited for fine-grained classification and outof-distribution tasks. Attribution analysis using Grad-CAM demonstrates that DCBMs deliver visual concepts that can be localized in test images. By leveraging dataset-specific concepts instead of predefined or general ones, DCBMs enhance adaptability to new domains. The code is available at: https://github.com/KathPra/DCBM.
abstract_source: https://arxiv.org/pdf/2412.11576
content_status: complete
---
