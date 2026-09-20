---
layout: publication
title: Ambiguous Annotations - When is a Pedestrian not a Pedestrian?
description: Sometimes a difficult label is ambiguous rather than simply wrong. By studying pedestrian annotations,
  we show how identifying such cases can improve training efficiency and detection performance while preserving
  dataset representativeness.
why: Some images do not have an obvious single correct label, even for human annotators. This work examines
  what that ambiguity means for detecting people in street scenes. Recognizing such cases can improve the use
  of training data and make dataset quality a more thoughtful question than simply counting labeling errors.
figures:
- label: Figure 1
  image: /images/publications/details/045-figure-1.webp
  alt: Pedestrian examples with low, medium, and high annotation ambiguity.
  caption: Image Properties. Medium and high ambiguity here corresponds to an ambiguity measure of 0.4 to 0.49
    and over 0.65 respectively. Examples from the ECP Dataset [4].
  source: https://arxiv.org/pdf/2405.08794#page=3
  width: 1193
  height: 640
- label: Figure 2
  image: /images/publications/details/045-figure-2.webp
  alt: 'Neighboring Classes: “Pedestrian” versus “Rider”, with the distinctive criterion that a person with
    at least one foot on the ground is to be labelled as a pedestrian.'
  caption: 'Neighboring Classes: “Pedestrian” versus “Rider”, with the distinctive criterion that a person
    with at least one foot on the ground is to be labelled as a pedestrian. Examples from the ECP Dataset [4].'
  source: https://arxiv.org/pdf/2405.08794#page=3
  width: 1111
  height: 668
bibtex: |
  @inproceedings{schwirten2024ambiguousannotationswhen45,
    title = {{Ambiguous Annotations - When is a Pedestrian not a Pedestrian?}},
    author = {Luisa Schwirten and Jannes Scholz and Daniel Kondermann and Janis Keuper},
    booktitle = {Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition Workshops (CVPRw 2024)},
    year = {2024},
    url = {https://arxiv.org/pdf/2405.08794}
  }
bibtex_file: /assets/bibtex/2024-ambiguous-annotations-when-is-a-pedestrian-not-a-pedestrian.bib
abstract: |-
  Datasets labelled by human annotators are widely used in the training and testing of machine learning models. In recent years, researchers are increasingly paying attention to label quality. However, it is not always possible to objectively determine whether an assigned label is correct or not. The present work investigates this ambiguity in the annotation of autonomous driving datasets as an important dimension of data quality. Our experiments show that excluding highly ambiguous data from the training improves model performance of a state-of-the-art pedestrian detector in terms of LAMR, precision and F1 score, thereby saving training time and annotation costs. Furthermore, we demonstrate that, in order to safely remove ambiguous instances and ensure the retained representativeness of the training data, an understanding of the properties of the dataset and class under investigation is crucial.
abstract_source: https://arxiv.org/pdf/2405.08794
content_status: complete
---
