---
layout: publication
title: Intra- and extra-source exemplar-based style synthesis for improved domain generalization
description: Style synthesis can prepare segmentation models for places and conditions they have never seen.
  This extended framework mixes content with styles from both training images and external exemplars, and explores
  stylized validation data for model selection.
why: Collecting and labeling images for every possible environment is rarely feasible. This work combines scene
  content with varied visual styles, including styles from outside the training set. It studies how that variety
  can improve performance in unfamiliar conditions and help select a model before deployment.
figures:
- label: Figure 1
  image: /images/publications/details/043-figure-1.webp
  alt: Segmentation of an unfamiliar snowy scene with and without style augmentation.
  caption: Semantic segmentation results of HRNet (Wang et al., 2021b) on unseen domain (snow), trained on
    Cityscapes (Cordts et al., 2016) and tested on ACDC (Sakaridis et al., 2021). The model trained with our
    ISSA can successfully segment the truck, while the baseline model fails completely
  source: https://link.springer.com/content/pdf/10.1007/s11263-023-01878-8.pdf#page=2
  width: 547
  height: 359
- label: Figure 2
  image: /images/publications/details/043-figure-2.webp
  alt: Qualitative results (best view in color and zoom in) of Style- GAN2 inversion methods on Cityscapes,
    i.e., pSp (Richardson et al., 2021), pSp†, Feature-Style encoder (Yao et al., 2022) and our masked noise
    encoder.
  caption: Qualitative results (best view in color and zoom in) of Style- GAN2 inversion methods on Cityscapes,
    i.e., pSp (Richardson et al., 2021), pSp†, Feature-Style encoder (Yao et al., 2022) and our masked noise
    encoder. Note, pSp† is an improved version of pSp (Richardson et al., 2021) introduced by us, training
    pSp with an additional discriminator and incorporate synthesized images for better initialization. pSp†
    can reconstruct the rough layout of the scene but still struggles to preserve details. The Feature-Style
    encoder shows a better reconstruction quality, yet it cannot faithfully reconstruct small objects (e.g.
    pedestrian), and some objects (e.g. the vehicle, bicycle) are rather blurry. Our masked noise encoder has
    highest image fidelity, preserving finer details in the inverted image (Color figure online)
  source: https://link.springer.com/content/pdf/10.1007/s11263-023-01878-8.pdf#page=4
  width: 1103
  height: 698
bibtex: |
  @article{li2024intraandextra43,
    title = {{Intra- and extra-source exemplar-based style synthesis for improved domain generalization}},
    author = {Yumeng Li and Dan Zhang and Margret Keuper and Anna Khoreva},
    journal = {International Journal of Computer Vision},
    year = {2024},
    url = {https://link.springer.com/article/10.1007/s11263-023-01878-8},
    doi = {10.1007/s11263-023-01878-8}
  }
bibtex_file: /assets/bibtex/2024-intra-and-extra-source-exemplar-based-style-synthesis-for-improved-domain-generalization.bib
abstract: |-
  The generalization with respect to domain shifts, as they frequently appear in applications such as autonomous driving, is one of the remaining big challenges for deep learning models. Therefore, we propose an exemplar-based style synthesis pipeline to improve domain generalization in semantic segmentation. Our method is based on a novel masked noise encoder for StyleGAN2 inversion. The model learns to faithfully reconstruct the image, preserving its semantic layout through noise prediction. Random masking of the estimated noise enables the style mixing capability of our model, i.e. it allows to alter the global appearance without affecting the semantic layout of an image. Using the proposed masked noise encoder to randomize style and content combinations in the training set, i.e., intra-source style augmentation (ISSA) effectively increases the diversity of training data and reduces spurious correlation. As a result, we achieve up to 12.4% mIoU improvements on driving-scene semantic segmentation under different types of data shifts, i.e., changing geographic locations, adverse weather conditions, and day to night. ISSA is model-agnostic and straightforwardly applicable with CNNs and Transformers. It is also complementary to other domain generalization techniques, e.g., it improves the recent state-of-the-art solution RobustNet by 3% mIoU in Cityscapes to Dark Zürich. In addition, we demonstrate the strong plug-n-play ability of the proposed style synthesis pipeline, which is readily usable for extra-source exemplars e.g., web-crawled images, without any retraining or fine-tuning. Moreover, we study a new use case to indicate neural network’s generalization capability by building a stylized proxy validation set. This application has significant practical sense for selecting models to be deployed in the open-world environment. Our code is available at https://github.com/boschresearch/ISSA.
abstract_source: https://link.springer.com/content/pdf/10.1007/s11263-023-01878-8.pdf
content_status: complete
---
