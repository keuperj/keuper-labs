---
layout: publication
title: Combining Fine-Tuning and RAG for Structured Output Prediction on a Multimodal High Velocity Retail
  Dataset
description: Fine-tuning and retrieval help with different parts of a retail advertisement. A hybrid approach
  uses fine-tuning for visible information and retrieval for attributes absent from the image, achieving the
  strongest overall performance in the study.
why: An advertisement shows some product information but leaves other details unstated. This study finds that
  a fine-tuned model is strongest at reading visible information, while retrieving relevant examples helps
  with attributes that are missing from the image. Combining the two according to the information needed gives
  the best overall results, offering a practical design for changing retail catalogs.
figures:
- label: Figure 1
  image: /images/publications/details/096-figure-1.webp
  alt: Fine-tuning, visual retrieval, and a hybrid pipeline produce structured predictions from retail advertisements.
  caption: 'Structured Output Predictions (SOPs) from high velocity retail advertisements. We compare three
    approaches: a Fine-Tuned VLM, the Visual RAG Pipeline [13], and a combination of Fine-Tuning and Visual
    RAG Pipeline.'
  source: https://openreview.net/pdf?id=H4fdIUP8Jd#page=2
  width: 880
  height: 263
- label: Figure 2
  image: /images/publications/details/096-figure-2.webp
  alt: A product advertisement paired with a table of its product and promotion data.
  caption: Data item of the multimodal mSOP-765k dataset. It consists of an advertisement image and the corresponding
    structured output of the product and promotion data.
  source: https://openreview.net/pdf?id=H4fdIUP8Jd#page=3
  width: 426
  height: 745
bibtex: |
  @inproceedings{lamm2026combiningfinetuningand96,
    title = {{Combining Fine-Tuning and RAG for Structured Output Prediction on a Multimodal High Velocity Retail Dataset}},
    author = {Bianca Lamm and Janis Keuper},
    booktitle = {MUCG Workshop at ECCV 26},
    year = {2026},
    url = {https://openreview.net/pdf?id=H4fdIUP8Jd}
  }
bibtex_file: /assets/bibtex/2026-combining-finetuning-and-rag-for-structured-output-prediction-on-a-multimodal-high-velocity-retail-dataset.bib
content_status: complete
abstract: |-
  Domain-specific fine-tuning and retrieval can improve Vision Language Model (VLM) performance on specialized visual tasks. In this work, we study Structured Output Predictions (SOPs) for retail advertisement images with Qwen2.5-VL under Fine-Tuning and Retrieval Augmented Generation (RAG) settings. We evaluate both settings on the multimodal mSOP-765k dataset, which pairs advertisement images with SOPs. The images are cropped from retail leaflets with a frequently changing product assortment, yielding a high velocity dataset. The fine-tuned VLM performs best for information visible in the image, while the Visual RAG Pipeline is more accurate for attributes not shown in the image. A hybrid strategy that generates predictions based on whether the required information is present in the image achieves the strongest overall performance.
abstract_source: https://openreview.net/pdf?id=H4fdIUP8Jd
---
