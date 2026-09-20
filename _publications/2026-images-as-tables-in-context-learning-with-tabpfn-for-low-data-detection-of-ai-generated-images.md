---
layout: publication
title: Images as Tables - In-Context Learning with TabPFN for Low-Data Detection of AI-Generated Images
description: Treat image features as a table and adapt a detector through examples rather than retraining.
  This approach combines frozen visual features with TabPFN, showing promise when only a few labeled images
  from a new generator are available.
why: A detector trained on yesterday's image generator may struggle with tomorrow's. This method combines fixed
  image features with a model that learns from a small set of examples provided as context. It offers a lightweight
  way to adapt detection without repeatedly retraining a large vision network.
figures:
- label: Figure 1
  image: /images/publications/details/082-figure-1.webp
  alt: AI-image detection accuracy as the number of labeled examples increases.
  caption: In the pooled generator setting, LATTE reaches the highest accuracy (real/fake class detection)
    at the largest training size, but DINOv3-PCA-TabPFN is stronger at the smaller shared training sizes, which
    is the regime targeted by our in-context detector adaptation.
  source: https://arxiv.org/pdf/2606.00872#page=1
  width: 542
  height: 301
- label: Figure 2
  image: /images/publications/details/082-figure-2.webp
  alt: Representation and classifier comparison in the Multi-Multi development setting.
  caption: Representation and classifier comparison in the Multi-Multi development setting. DINOv3 features
    with TabPFN give the strongest and most stable performance across accuracy, precision, recall, F1, and
    ROC-AUC, while DINOv2, frequency features, and the MLP baseline are weaker in the low-data regime. All
    compared encoders and settings are explained in Appendix Section C.
  source: https://arxiv.org/pdf/2606.00872#page=3
  width: 1193
  height: 240
bibtex: |
  @inproceedings{walter2026imagesastables82,
    title = {{Images as Tables - In-Context Learning with TabPFN for Low-Data Detection of AI-Generated Images}},
    author = {Jan Philip Walter and Shashank Agnihotri and Margret Keuper},
    booktitle = {ICML Workshops 26},
    year = {2026},
    url = {https://arxiv.org/pdf/2606.00872}
  }
bibtex_file: /assets/bibtex/2026-images-as-tables-in-context-learning-with-tabpfn-for-low-data-detection-of-ai-generated-images.bib
abstract: |-
  AI-generated image detection is a moving-target problem: detectors trained on one generator often fail when a new generator appears, and only a few labeled examples are available. We study a simple image-to-table formulation for this regime, where each image is encoded by a frozen DINOv3 backbone, its CLS feature is reduced to a 500-dimensional structured row with PCA, and TabPFN performs real/fake classification by incontext tabular inference rather than task-specific classifier training. This turns fake-image detection into low-data structured prediction over learned visual features, making detector adaptation depend on the labeled context set instead of gradient-based fine-tuning. On GenImage, LATTE, a recent state-of-the-art detector, remains stronger when many labeled samples from all generators are available, by 7.4% in the largest pooled setting, but DINOv3-PCA-TabPFN is stronger in the practically important low-data regime, outperforming LATTE by up to 8.2%, and in transfer settings where the detector must generalize from one generator to another. These results position tabular foundation models as a strong complementary adaptation mechanism for image forensics, shifting adaptation from detector retraining to lightweight in-context updates with a small labeled set of examples. Code hyperlink here.
abstract_source: https://arxiv.org/pdf/2606.00872
content_status: complete
---
