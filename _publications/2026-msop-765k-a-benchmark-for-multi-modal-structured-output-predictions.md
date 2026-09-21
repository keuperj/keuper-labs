---
layout: publication
title: mSOP-765k - A Benchmark For Multi-Modal Structured Output Predictions
description: Extracting structured product information demands more than reading text. mSOP-765k supplies over
  765,000 annotated advertisement images and evaluation tools for comparing multimodal models, including retrieval-augmented
  approaches.
why: Turning a product advertisement into reliable database fields requires understanding images, words, and
  numbers together. mSOP-765k provides more than 765,000 annotated examples and a common evaluation framework
  for that task. It makes the remaining gap between impressive demonstrations and accurate structured extraction
  easier to measure.
figures:
- label: Figure 1
  image: /images/publications/details/078-figure-1.webp
  alt: A pipeline converts a multimodal advertisement into structured key–value predictions.
  caption: Illustration of the multi-modal Structured Output Prediction task performed with the mSOP-765k dataset.
    The proposed benchmark measures the ability of a given processing pipeline to predict structured key-value
    pairs of textual, numerical, and list data.
  source: https://openreview.net/pdf?id=H7eYL4yFZS#page=1
  width: 975
  height: 248
- label: Figure 2
  image: /images/publications/details/078-figure-2.webp
  alt: A retail advertisement paired with its structured product and promotion attributes.
  caption: Representative sample from the mSOP-765k dataset, consisting of a query (input) image (2a) and the
    corresponding structured product target (2b).
  source: https://openreview.net/pdf?id=H7eYL4yFZS#page=4
  width: 658
  height: 890
bibtex: |
  @article{lamm2026msop765ka78,
    title = {{mSOP-765k}: A Benchmark For Multi-Modal Structured Output Predictions},
    author = {Bianca Lamm and Janis Keuper},
    journal = {Transactions on Machine Learning Research},
    year = {2026},
    url = {https://openreview.net/forum?id=H7eYL4yFZS},
    issn = {2835-8856},
    note = {J2C Certification}
  }
bibtex_file: /assets/bibtex/2026-msop-765k-a-benchmark-for-multi-modal-structured-output-predictions.bib
abstract: |-
  This paper introduces mSOP-765k, a large-scale benchmark for the evaluation of multimodal Structured Output Prediction (mSOP) pipelines. Besides novel evaluation metrics, the benchmark provides combined training and test datasets with over 765,000 images taken from real-world product advertisements. Each of these images contains product visualizations, textual information like product name or brand, and numerical data such as product weight, price, and discount. All images are annotated with the corresponding structured information in form of dictionaries containing key-value pairs. An initial baseline evaluation, including various LLMs and VLMs, as well as multi-modal RAG approaches, shows that the proposed benchmark provides a challenging problem which can not yet be solved completely by state-of-the-art mSOP methods. The benchmark and dataset are available under a creative-commons license: https://www.msop-765k.org/.
abstract_source: https://openreview.net/pdf?id=H7eYL4yFZS
content_status: complete
---
