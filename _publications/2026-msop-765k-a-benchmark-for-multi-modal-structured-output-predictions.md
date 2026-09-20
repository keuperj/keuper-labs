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
- label: Task overview
  image: /images/publications/078-msop-765k-a-benchmark-for-multi-modal-structured-output-predictions.webp
  alt: A retail advertisement mapped to structured product and promotion attributes.
  caption: 'Multimodal structured output prediction: a pipeline turns visual, textual, and numerical information
    into typed key–value pairs. Illustration from the official mSOP-765k project page.'
  source: https://www.msop-765k.org/figures/abstract_mSOP765k.png
  width: 585
  height: 138
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
  This paper introduces mSOP-765k, a large-scale benchmark for the evaluation of multi-modal Structured Output Prediction (mSOP) pipelines. Besides novel evaluation metrics, the benchmark provides combined training and test datasets with over 765,000 images taken from real-world product advertisements. Each of these images contains product visualizations, textual information like product name or brand, and numerical data such as product weight, price, and discount. All images are annotated with the corresponding structured information in form of dictionaries containing key-value pairs. An initial baseline evaluation, including various LLMs and VLMs, as well as multi-modal RAG approaches, shows that the proposed benchmark provides a challenging problem which can not yet be solved completely by state-of-the-art mSOP methods. The benchmark and dataset are available under a creative-commons license: https://huggingface.co/datasets/retail-product-promotion/mSOP-765k.
abstract_source: https://www.msop-765k.org/
content_status: needs-pdf
---
