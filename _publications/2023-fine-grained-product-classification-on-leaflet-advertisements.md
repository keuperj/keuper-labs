---
layout: publication
title: Fine-Grained Product Classification on Leaflet Advertisements
description: Nearly identical products are hard to distinguish from pictures alone. Our leaflet dataset and
  multimodal classifier show how combining product imagery with extracted text improves fine-grained retail
  recognition.
why: Two product packages may look almost identical even though their labels identify different items. This
  work combines the picture with its printed text to recognize fine-grained product differences. Its dataset
  and experiments show why using both sources of information can be valuable for processing retail leaflets.
figures:
- label: Figure 1
  image: /images/publications/details/028-figure-1.webp
  alt: Product crops from retail leaflets grouped across prices and retailers.
  caption: Price monitoring based on printed leaflets is a key data analysis task in retail, which technically
    can be defined as a finegrained, multi-modal classification problem. We provide a first public dataset
    with 41.6k annotated samples for this task.
  source: https://arxiv.org/pdf/2305.03706#page=1
  width: 543
  height: 269
- label: Figure 2
  image: /images/publications/details/028-figure-2.webp
  alt: Training set (top) and test set (bottom) of a class.
  caption: Training set (top) and test set (bottom) of a class.
  source: https://arxiv.org/pdf/2305.03706#page=2
  width: 487
  height: 559
bibtex: |
  @inproceedings{ladwig2023finegrainedproduct28,
    title = {{Fine-Grained Product Classification on Leaflet Advertisements}},
    author = {Daniel Ladwig and Bianca Lamm and Janis Keuper},
    booktitle = {Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition Workshops (CVPRW 2023)},
    year = {2023},
    url = {https://arxiv.org/pdf/2305.03706}
  }
bibtex_file: /assets/bibtex/2023-fine-grained-product-classification-on-leaflet-advertisements.bib
abstract: |-
  In this paper, we describe a first publicly available fine-grained product recognition dataset based on leaflet images. Using advertisement leaflets, collected over several years from different European retailers, we provide a total of 41.6k manually annotated product images in 832 classes. Further, we investigate three different approaches for this fine-grained product classification task, Classification by Image, by Text, as well as by Image and Text. The approach ”Classification by Text” uses the text extracted directly from the leaflet product images. We show, that the combination of image and text as input improves the classification of visual difficult to distinguish products. The final model leads to an accuracy of 96.4% with a Top-3 score of 99.2%. https://github.com/ladwigd/Leaflet-Product-Classification
abstract_source: https://arxiv.org/pdf/2305.03706
content_status: complete
---
