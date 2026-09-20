---
layout: publication
title: Retail-786k - a Large-Scale Dataset for Visual Entity Matching
description: Recognizing the same product is different from finding products that serve the same purpose. Retail-786k
  introduces large-scale visual entity matching with real advertisement images, challenging models to transfer
  product-equivalence concepts to unseen examples.
why: Matching retail products requires more than recognizing broad categories such as milk or coffee. Retail-786k
  supplies a large collection of real advertisement images for studying which products represent the same kind
  of item. It gives researchers a demanding setting for testing whether that understanding transfers to products
  they have not seen before.
figures:
- label: Figure 1
  image: /images/publications/details/042-figure-1.webp
  alt: Retail advertisement crops showing visually similar products and their prices.
  caption: In the context of retail products, the term “visual entity matching” refers to the task of linking
    individual product images from diverse sources to a semantic product grouping. Here all images show different
    products from the same entity which is defined by the fact that single images are used as “placeholders“
    by retailers to promote all products of the entity. For higher resolution version, refer to Figure 15 in
    the appendix.
  source: https://arxiv.org/pdf/2309.17164#page=2
  width: 1193
  height: 394
- label: Figure 2
  image: /images/publications/details/042-figure-2.webp
  alt: Inside the dashed rectangle, samples from a representative entity show the typical intra-entity variations.
  caption: Inside the dashed rectangle, samples from a representative entity show the typical intra-entity
    variations. In contrast to this, there are samples having a strong visually similarity although they belong
    to different entities. These samples are framed by the solid rectangle, circle, and polygon.
  source: https://arxiv.org/pdf/2309.17164#page=4
  width: 541
  height: 296
bibtex: |
  @inproceedings{lamm2024retail786ka42,
    title = {{Retail-786k - a Large-Scale Dataset for Visual Entity Matching}},
    author = {Bianca Lamm and Janis Keuper},
    booktitle = {DMLR Workshop at International Conference on Learning Representations (ICLR 24)},
    year = {2024},
    url = {https://www.retail-786k.org/}
  }
bibtex_file: /assets/bibtex/2024-retail-786k-a-large-scale-dataset-for-visual-entity-matching.bib
abstract: |-
  Entity Matching (EM) defines the task of learning to group objects by transferring semantic concepts from example groups (=entities) to unseen data. Despite the general availability of image data in the context of many EM-problems, most currently available EM-algorithms solely rely on (textual) meta data. In this paper, we introduce the first publicly available large-scale dataset for “visual entity matching”, based on a production level use case in the retail domain. Using scanned advertisement leaflets, collected over several years from different European retailers, we provide a total of ∼786k manually annotated, high resolution product images containing ∼18k different individual retail products which are grouped into ∼3k entities. The annotation of these product entities is based on a price comparison task, where each entity forms an equivalence class of comparable products. Following on a first baseline evaluation, we show that the proposed “visual entity matching” constitutes a novel learning problem which can not sufficiently be solved using standard image based classification and retrieval algorithms. Instead, novel approaches which allow to transfer example based visual equivalent classes to new data are needed to address the proposed problem. The aim of this paper is to provide a benchmark for such algorithms. Information about the dataset, evaluation code and download instructions are provided under the website: https://www.retail-786k.org/.
abstract_source: https://arxiv.org/pdf/2309.17164
content_status: complete
---
