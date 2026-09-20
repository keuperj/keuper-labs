---
layout: publication
title: A Visual RAG Pipeline for Few-Shot Fine-Grained Product Classification
description: Add new retail products without retraining the classifier. Our visual RAG pipeline retrieves a
  few relevant examples to guide a vision-language model in predicting product identity, price, and promotion
  details.
why: Retail catalogs change too quickly to retrain a model for every new product. This pipeline retrieves relevant
  examples and gives them to a vision-language model as context. It offers a way to update recognition through
  the reference collection while also extracting prices and promotion details.
figures:
- label: Figure 1
  image: /images/publications/details/065-figure-1.webp
  alt: Visual retrieval-augmented generation pipeline for structured retail information.
  caption: 'Illustration of the presented Visual RAG pipeline. The pipeline is based on the RAG approach and
    is characterized by five main steps: Preprocessing; Vector Store; Retrieval, Classification, Relational
    Query; Prompt Generation; and Completion. Moreover, a contextual knowledge comprising few-shot samples
    with corresponding task solutions is appended to the prompt for the employed VLM. The prediction of the
    target GTINs serves as FGC. The additional predictions deliver to enrich the objectives.'
  source: https://arxiv.org/pdf/2504.11838#page=2
  width: 1193
  height: 304
- label: Figure 2
  image: /images/publications/details/065-figure-2.webp
  alt: Illustration of an item in the dataset that consists of an image (2a) and textual product and promotion
    data (2b).
  caption: Illustration of an item in the dataset that consists of an image (2a) and textual product and promotion
    data (2b).
  source: https://arxiv.org/pdf/2504.11838#page=3
  width: 542
  height: 650
bibtex: |
  @inproceedings{lamm2025avisualrag65,
    title = {{A Visual RAG Pipeline for Few-Shot Fine-Grained Product Classification}},
    author = {Bianca Lamm and Janis Keuper},
    booktitle = {Fine-Grained Visual Categorization Workshop at CVPR 2025},
    year = {2025},
    url = {https://arxiv.org/pdf/2504.11838?}
  }
bibtex_file: /assets/bibtex/2025-a-visual-rag-pipeline-for-few-shot-fine-grained-product-classification.bib
abstract: |-
  Despite the rapid evolution of learning and computer vision algorithms, Fine-Grained Classification (FGC) still poses an open problem in many practically relevant applications. In the retail domain, for example, the identification of fast changing and visually highly similar products and their properties are key to automated price-monitoring and product recommendation. This paper presents a novel Visual RAG pipeline that combines the Retrieval Augmented Generation (RAG) approach and Vision Language Models (VLMs) for few-shot FGC. This Visual RAG pipeline extracts product and promotion data in advertisement leaflets from various retailers and simultaneously predicts fine-grained product ids along with price and discount information. Compared to previous approaches, the key characteristic of the Visual RAG pipeline is that it allows the prediction of novel products without retraining, simply by adding a few class samples to the RAG database. Comparing several VLM back-ends like GPT-4o [23], GPT-4o-mini [24], and Gemini 2.0 Flash [10], our approach achieves 86.8% accuracy on a diverse dataset.
abstract_source: https://arxiv.org/pdf/2504.11838
content_status: complete
---
