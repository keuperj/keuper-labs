---
layout: publication
title: Learning the essential in less than 2k additional weights - a simple approach to improve image classification
  stability under corruptions
description: A single preprocessing layer can recover information that remains useful under image corruptions.
  With fewer than 2,000 additional weights, this approach learns a simple linear transformation that improves
  classification stability at low cost.
why: A small addition to the input pipeline can make an existing classifier more stable under image corruption.
  This work learns that addition using fewer than 2,000 extra weights. It demonstrates that improving reliability
  can sometimes begin with a lightweight preprocessing step rather than a larger network.
figures:
- label: Figure 1
  image: /images/publications/details/051-figure-1.webp
  alt: Classification accuracy across optical corruptions with and without the preprocessing layer.
  caption: A pre-pended large kernel convolution layer (ours) can increase the robustness of classification
    networks against unknown corruptions without additional data augmentation. Here, we show ResNet50 improved
    with a trainable pre-pended filter evaluated on ImageNette (Howard, 2023) blur and corruptions from OpticsBench
    (Müller et al., 2023). For each corruption type, five levels of severity are shown from left to right.
    The variation, visualized via the box plots, results from five different seeds per model.
  source: https://pure.mpg.de/rest/items/item_3625007/component/file_3625008/content#page=2
  width: 538
  height: 295
- label: Figure 2
  image: /images/publications/details/051-figure-2.webp
  alt: The architecture of our proposed trainable input layer.
  caption: The architecture of our proposed trainable input layer. We learn a single depth-wise convolution
    to encourage the model to represent the essential, i.e. the part of the input data that is crucial for
    classification.
  source: https://pure.mpg.de/rest/items/item_3625007/component/file_3625008/content#page=4
  width: 1193
  height: 334
bibtex: |
  @article{bauerle2024learningtheessential51,
    title = {{Learning the essential in less than 2k additional weights - a simple approach to improve image classification stability under corruptions}},
    author = {Kai Bäuerle and Patrick Müller and Syed Muhammad Kazim and Ivo Ihrke and Margret Keuper},
    journal = {Transactions on Machine Learning Research},
    year = {2024},
    url = {https://openreview.net/pdf?id=i2SuGWtIIm}
  }
bibtex_file: /assets/bibtex/2024-learning-the-essential-in-less-than-2k-additional-weights-a-simple-approach-to-improve-image-classification-stabili.bib
abstract: |-
  The performance of image classification on well-known benchmarks such as ImageNet is remarkable, but in safety-critical situations, the accuracy often drops significantly under adverse conditions. To counteract these performance drops, we propose a very simple modification to the models: we pre-pend a single, dimension preserving convolutional layer with a large linear kernel whose purpose it is to extract the information that is essential for image classification. We show that our simple modification can increase the robustness against common corruptions significantly, especially for corruptions of high severity. We demonstrate the impact of our channel-specific layers on ImageNet-100 and ImageNette classification tasks and show an increase of up to 30% accuracy on corrupted data in the top1 accuracy. Further, we conduct a set of designed experiments to qualify the conditions for our findings. Our main result is that a data- and network-dependent linear subspace carries the most important classification information (the essential), which our proposed pre-processing layer approximately identifies for most corruptions, and at very low cost.
abstract_source: https://pure.mpg.de/rest/items/item_3625007/component/file_3625008/content
content_status: complete
---
