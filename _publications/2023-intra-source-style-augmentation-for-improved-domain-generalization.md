---
layout: publication
title: Intra-Source Style Augmentation for Improved Domain Generalization
description: Change an image's style without changing its semantic layout. Intra-source style augmentation
  uses a masked-noise StyleGAN encoder to diversify training scenes and improve segmentation under unfamiliar
  weather and appearance conditions.
why: A system trained to understand sunny street scenes may struggle when it snows. This method changes the
  appearance of training images while preserving what is in the scene. That supplies useful visual variety
  without requiring new annotations for every weather condition or style.
figures:
- label: Figure 1
  image: /images/publications/details/030-figure-1.webp
  alt: Snowy driving scene segmented by the baseline and style-augmented model.
  caption: Semantic segmentation results of HRNet [23] on unseen domain (snow), trained on Cityscapes [5] and
    tested on ACDC [20]. The model trained with our ISSA can successfully segment the truck, while the baseline
    model fails completely.
  source: https://generative-vision.github.io/workshop-CVPR-23/data/12.pdf#page=1
  width: 547
  height: 342
- label: Figure 2
  image: /images/publications/details/030-figure-2.webp
  alt: Qualitative results (best view in color and zoom in) of StyleGAN2 inversion methods on Cityscapes, i.e.,
    pSp†, Feature-Style encoder [26] and our masked noise encoder.
  caption: Qualitative results (best view in color and zoom in) of StyleGAN2 inversion methods on Cityscapes,
    i.e., pSp†, Feature-Style encoder [26] and our masked noise encoder. Note, pSp† is an improved version
    of pSp [18] introduced by us. pSp† can reconstruct the rough layout of the scene but still struggles to
    preserve details. The Feature-Style encoder shows a better reconstruction quality, yet it cannot faithfully
    reconstruct small objects (e.g. pedestrian), and some objects (e.g. the vehicle, bicycle) are rather blurry.
    Our masked noise encoder has highest image fidelity, preserving finer details in the inverted image.
  source: https://generative-vision.github.io/workshop-CVPR-23/data/12.pdf#page=2
  width: 1111
  height: 339
bibtex: |
  @inproceedings{li2023intrasourcestyle30,
    title = {{Intra-Source Style Augmentation for Improved Domain Generalization}},
    author = {Yumeng Li and Dan Zhang and Margret Keuper and Anna Khoreva},
    booktitle = {Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition Workshops (CVPRW 2023)},
    year = {2023},
    url = {https://generative-vision.github.io/workshop-CVPR-23/data/12.pdf}
  }
bibtex_file: /assets/bibtex/2023-intra-source-style-augmentation-for-improved-domain-generalization.bib
abstract: |-
  The generalization with respect to domain shifts, as they frequently appear in applications such as autonomous driving, is one of the remaining big challenges for deep learning models. Therefore, we propose an intra-source style augmentation (ISSA) method to improve domain generalization in semantic segmentation. Our method is based on a novel masked noise encoder for StyleGAN2 inversion. The model learns to faithfully reconstruct the image, preserving its semantic layout through noise prediction. Random masking of the estimated noise enables the style mixing capability of our model, i.e. it allows to alter the global appearance without affecting the semantic layout of an image. Using the proposed masked noise encoder to randomize style and content combinations in the training set, ISSA effectively increases the diversity of training data and reduces spurious correlation. As a result, we achieve up to 11.3% mIoU improvements on driving-scene semantic segmentation under domain shifts, e.g., adverse weather conditions.
abstract_source: https://generative-vision.github.io/workshop-CVPR-23/data/12.pdf
content_status: complete
---
