---
layout: publication
title: Fake or JPEG? Revealing Common Biases in Generated Image Detection Datasets
description: Is an image detector learning synthetic content, or just JPEG compression? We uncover compression
  and image-size shortcuts in generation-detection datasets and show how removing them changes robustness and
  cross-generator evaluation.
why: A fake-image detector may appear successful because it has learned how files were compressed, rather than
  whether their content was generated. This study exposes those shortcuts and examines what happens when they
  are removed. It helps make deepfake evaluation more honest and more relevant to images from unfamiliar generators.
figures:
- label: Figure 1
  image: /images/publications/details/037-figure-1.webp
  alt: Cross-generator detection results before and after correcting dataset biases.
  caption: Reproduced Results. Cross-generator performance of a ResNet50 classifier from the GenImage paper
    (left), and our reproduced results (right). The matrix shows the accuracy (in %) of a model trained on
    a GenImage training subset (row), when evaluated on a GenImage validation subset (column).
  source: https://arxiv.org/pdf/2403.17608#page=4
  width: 1193
  height: 466
- label: Figure 2
  image: /images/publications/details/037-figure-2.webp
  alt: Cross-generator performance of detectors trained on raw GenImage for different compression quality factors,
    given in accuracy (in %).
  caption: Cross-generator performance of detectors trained on raw GenImage for different compression quality
    factors, given in accuracy (in %).
  source: https://arxiv.org/pdf/2403.17608#page=5
  width: 1193
  height: 751
bibtex: |
  @inproceedings{grommelt2024fakeorjpeg37,
    title = {{Fake or JPEG? Revealing Common Biases in Generated Image Detection Datasets}},
    author = {Patrick Grommelt and Louis Weiss and Franz-Josef Pfreundt and Janis Keuper},
    booktitle = {CEGIS Workshop at ECCV 24},
    year = {2024},
    url = {https://arxiv.org/pdf/2403.17608}
  }
bibtex_file: /assets/bibtex/2024-fake-or-jpeg-revealing-common-biases-in-generated-image-detection-datasets.bib
abstract: |-
  The widespread adoption of generative image models has highlighted the urgent need to detect artificial content, which is a crucial step in combating widespread manipulation and misinformation. Consequently, numerous detectors and associated datasets have emerged. However, many of these datasets inadvertently introduce undesirable biases, thereby impacting the effectiveness and evaluation of detectors. In this paper, we emphasize that many datasets for AI-generated image detection contain biases related to JPEG compression and image size. Using the GenImage dataset, we demonstrate that detectors indeed learn from these undesired factors. Furthermore, we show that removing the named biases substantially increases robustness to JPEG compression and significantly alters the cross-generator performance of evaluated detectors. Specifically, it leads to more than 11 percentage points increase in cross-generator performance for ResNet50 and Swin-T detectors on the GenImage dataset, achieving state-of-the-art results. We provide the dataset and source codes of this paper on the anonymous website: https://www.unbiased-genimage.org
abstract_source: https://arxiv.org/pdf/2403.17608
content_status: complete
---
