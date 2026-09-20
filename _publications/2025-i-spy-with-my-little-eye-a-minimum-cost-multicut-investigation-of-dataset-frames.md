---
layout: publication
title: I Spy With My Little Eye A Minimum Cost Multicut Investigation of Dataset Frames
description: Discover recurring visual themes without fixing the number of clusters beforehand. A minimum-cost
  multicut approach groups images for visual framing analysis and shows how embedding choices expose different
  levels of thematic detail.
why: Social researchers often need to discover recurring themes in large image collections. This method groups
  images without requiring the number of themes to be chosen in advance. It also shows how the image representation
  changes the themes that emerge, helping make automated visual analysis easier to scrutinize.
figures:
- label: Figure 1
  image: /images/publications/details/055-figure-1.webp
  alt: Mapping pairs of image embeddings to clustering decisions.
  caption: The Multicut Problem can be understood as a Bayesian Network which aims to predict the optimal partitioning
    Y .
  source: https://arxiv.org/pdf/2412.01296#page=3
  width: 542
  height: 137
- label: Figure 2
  image: /images/publications/details/055-figure-2.webp
  alt: Calibration term [c] ablation across embedding spaces on ImageNette’s train set shows that embedding
    spaces where the distance between different data points is increased during training require a smaller
    cal compared to traditionally trained embedding spaces.
  caption: Calibration term [c] ablation across embedding spaces on ImageNette’s train set shows that embedding
    spaces where the distance between different data points is increased during training require a smaller
    cal compared to traditionally trained embedding spaces.
  source: https://arxiv.org/pdf/2412.01296#page=5
  width: 1193
  height: 368
bibtex: |
  @inproceedings{prasse2025ispywith55,
    title = {{I Spy With My Little Eye A Minimum Cost Multicut Investigation of Dataset Frames}},
    author = {Katharina Prasse and Isaac Bravo and Stefanie Walter and Margret Keuper},
    booktitle = {IEEE/CVF Winter Conference on Applications of Computer Vision},
    year = {2025},
    url = {https://arxiv.org/pdf/2412.01296}
  }
bibtex_file: /assets/bibtex/2025-i-spy-with-my-little-eye-a-minimum-cost-multicut-investigation-of-dataset-frames.bib
abstract: |-
  Visual framing analysis is a key method in social sciences for determining common themes and concepts in a given discourse. To reduce manual effort, image clustering can significantly speed up the annotation process. In this work, we phrase the clustering task as a Minimum Cost Multicut Problem [MP]. Solutions to the MP have been shown to provide clusterings that maximize the posterior probability, solely from provided local, pairwise probabilities of two images belonging to the same cluster. We discuss the efficacy of numerous embedding spaces to detect visual frames and show its superiority over other clustering methods. To this end, we employ the climate change dataset ClimateTV which contains images commonly used for visual frame analysis. For broad visual frames, DINOv2 is a suitable embedding space, while ConvNeXt V2 returns a larger number of clusters which contain fine-grain differences, i.e. speech and protest. Our insights into embedding space differences in combination with the optimal clustering - by definition - advances automated visual frame detection. Our code can be found at https://github.com/KathPra/MP4VisualFrameDetection.
abstract_source: https://arxiv.org/pdf/2412.01296
content_status: complete
---
