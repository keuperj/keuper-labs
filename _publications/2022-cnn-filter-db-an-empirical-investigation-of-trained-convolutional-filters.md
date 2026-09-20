---
layout: publication
title: CNN Filter DB - An Empirical Investigation of Trained Convolutional Filters
description: CNN Filter DB makes more than a billion learned filters available for studying what neural networks
  learn. Its analysis reveals both shared filter statistics across tasks and degenerate filters that can undermine
  robustness and transfer learning.
why: Researchers often reuse a pretrained vision model without knowing much about the filters inside it. CNN
  Filter DB provides more than a billion filters for examining shared patterns, unusual behavior, and poorly
  functioning components. That evidence can inform how models are selected and reused for new applications.
figures:
- label: Figure 1
  image: /images/publications/details/016-figure-1.webp
  alt: A collection of learned convolution kernels from CNN Filter DB.
  caption: First 3 × 3 filters extracted of each convolution layer in a ResNet-18 trained on CIFAR-10. The
    filters show a clear loss of diversity and increasing sparsity with depth. The colormap range is determined
    layer-wise by the absolute peak weight of all filters in that layer.
  source: https://openaccess.thecvf.com/content/CVPR2022/papers/Gavrikov_CNN_Filter_DB_An_Empirical_Investigation_of_Trained_Convolutional_Filters_CVPR_2022_paper.pdf#page=1
  width: 543
  height: 356
- label: Figure 2
  image: /images/publications/details/016-figure-2.webp
  alt: Comparison of layer entropy and sparsity of overparameterized, robust, and regular classification models.
  caption: Comparison of layer entropy and sparsity of overparameterized, robust, and regular classification
    models. Outliers are hidden for clarity.
  source: https://openaccess.thecvf.com/content/CVPR2022/papers/Gavrikov_CNN_Filter_DB_An_Empirical_Investigation_of_Trained_Convolutional_Filters_CVPR_2022_paper.pdf#page=4
  width: 1193
  height: 517
bibtex: |
  @inproceedings{gavrikov2022cnnfilterdb16,
    title = {{CNN Filter DB - An Empirical Investigation of Trained Convolutional Filters}},
    author = {Paul Gavrikov and Janis Keuper},
    booktitle = {Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR 2022)},
    year = {2022},
    url = {https://openaccess.thecvf.com/content/CVPR2022/papers/Gavrikov_CNN_Filter_DB_An_Empirical_Investigation_of_Trained_Convolutional_Filters_CVPR_2022_paper.pdf}
  }
bibtex_file: /assets/bibtex/2022-cnn-filter-db-an-empirical-investigation-of-trained-convolutional-filters.bib
abstract: |-
  Currently, many theoretical as well as practically relevant questions towards the transferability and robustness of Convolutional Neural Networks (CNNs) remain unsolved. While ongoing research efforts are engaging these problems from various angles, in most computer vision related cases these approaches can be generalized to investigations of the effects of distribution shifts in image data. In this context, we propose to study the shifts in the learned weights of trained CNN models. Here we focus on the properties of the distributions of dominantly used 3 × 3 convolution filter kernels. We collected and publicly provide a dataset with over 1.4 billion filters from hundreds of trained CNNs, using a wide range of datasets, architectures, and vision tasks. In a first use case of the proposed dataset, we can show highly relevant properties of many publicly available pre-trained models for practical applications: I) We analyze distribution shifts (or the lack thereof) between trained filters along different axes of meta-parameters, like visual category of the dataset, task, architecture, or layer depth. Based on these results, we conclude that model pre-training can succeed on arbitrary datasets if they meet size and variance conditions. II) We show that many pre-trained models contain degenerated filters which make them less robust and less suitable for fine-tuning on target applications. Data & Project website: https://github.com/paulgavrikov/cnn-filter-db
abstract_source: https://openaccess.thecvf.com/content/CVPR2022/papers/Gavrikov_CNN_Filter_DB_An_Empirical_Investigation_of_Trained_Convolutional_Filters_CVPR_2022_paper.pdf
content_status: complete
---
