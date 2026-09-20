---
layout: publication
title: Efficient Fine-grained Image Retrieval with Vision Foundation Models for Industrial Objects
description: Finding the right spare part requires distinguishing nearly identical objects across viewpoints
  and backgrounds. A new industrial dataset and lightweight adaptation framework test how foundation-model
  features can improve this demanding retrieval task.
why: Finding a replacement industrial part can mean distinguishing objects that look almost identical. This
  work tests that problem across viewpoints and backgrounds and explores lightweight adaptation of existing
  vision models. Its dataset gives researchers a concrete way to measure progress on demanding fine-grained
  retrieval.
figures:
- label: Figure 1
  image: /images/publications/details/084-figure-1.webp
  alt: Retrieval performance of foundation-model embeddings on random and challenging spare-part galleries.
  caption: 'Image retrieval performance on Random and Challenge spare part object image gallery using vision
    foundation model embeddings. Star ∗indicate the pre-train model. Each embedding is represented by two points:
    Only CLS token and with patch tokens (P). Lines connect the points, highlighting the improvement in retrieval
    performance when patch tokens are incorporated.'
  source: https://openaccess.thecvf.com/content/CVPR2026W/FGVC13/papers/Liu_Efficient_Fine-grained_Image_Retrieval_with_Vision_Foundation_Models_for_Industrial_CVPRW_2026_paper.pdf#page=1
  width: 543
  height: 485
- label: Figure 2
  image: /images/publications/details/084-figure-2.webp
  alt: Object Examples.
  caption: 'Object Examples. Each row shows different objects from the same category: small metal parts with
    subtle structural differences, springs of different lengths, cables with different connectors, and PCBs
    with different layouts.'
  source: https://openaccess.thecvf.com/content/CVPR2026W/FGVC13/papers/Liu_Efficient_Fine-grained_Image_Retrieval_with_Vision_Foundation_Models_for_Industrial_CVPRW_2026_paper.pdf#page=3
  width: 543
  height: 448
bibtex: |
  @inproceedings{liu2026efficientfinegrained84,
    title = {{Efficient Fine-grained Image Retrieval with Vision Foundation Models for Industrial Objects}},
    author = {Yushi Liu and Christian Graf and Markus Spies and Margret Keuper},
    booktitle = {FGVC13 workshop Efficient Fine-grained Image Retrieval with Vision Foundation Models for Industrial Objects at CVPR 2026},
    year = {2026},
    url = {https://openaccess.thecvf.com/content/CVPR2026W/FGVC13/html/Liu_Efficient_Fine-grained_Image_Retrieval_with_Vision_Foundation_Models_for_Industrial_CVPRW_2026_paper.html}
  }
bibtex_file: /assets/bibtex/2026-efficient-fine-grained-image-retrieval-with-vision-foundation-models-for-industrial-objects.bib
abstract: |-
  Image-based object retrieval in industrial scenarios remains highly challenging due to the combination of finegrained visual similarity between parts and significant appearance variations caused by viewpoint, background, and illumination changes. In this work, we introduce a largescale dataset for fine-grained instance-level retrieval of industrial spare parts, comprising more than 17k object instances captured under both controlled and mobile acquisition conditions. Designed to reflect realistic retrieval challenges, the dataset provides a standardized benchmark for fine-grained industrial matching. Using this benchmark, we systematically compare three recent vision foundation models—DINOv2, DINOv3, and SigLIP2—analyze how token representations affect performance, with a particular focus on the roles of CLS and patch tokens and on pooling strategies. To bridge the gap between generic pretrained representations and retrieval-specific requirements, we utilize a lightweight framework that trains on top of frozen encoders. Results across multiple evaluation settings demonstrate consistent gains over off-the-shelf embeddings and suggest that patch-token representations can play an important role in fine-grained image retrieval, especially under larger viewpoint and background variations. The dataset is publicly available at: https://github.com/imyliu1717/industrial_spare_part_dataset.
abstract_source: https://openaccess.thecvf.com/content/CVPR2026W/FGVC13/papers/Liu_Efficient_Fine-grained_Image_Retrieval_with_Vision_Foundation_Models_for_Industrial_CVPRW_2026_paper.pdf
content_status: complete
---
