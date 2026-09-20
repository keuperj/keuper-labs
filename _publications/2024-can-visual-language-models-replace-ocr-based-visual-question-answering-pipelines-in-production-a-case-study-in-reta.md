---
layout: publication
title: Can Visual Language Models Replace  OCR-Based Visual Question Answering Pipelines in Production? A Case
  Study in Retail
description: Can one vision-language model replace a carefully engineered retail extraction pipeline? Our case
  study finds strong performance on some attributes but substantial gaps on fine-grained product identity and
  discounts, identifying where production challenges remain.
why: Replacing a multi-step information-extraction system with one AI model is appealing, but it needs to work
  on the difficult details. This retail case study tests that promise on product attributes and promotional
  information. It identifies both useful capabilities and remaining gaps, giving a more concrete basis for
  production decisions.
figures:
- label: Figure 1
  image: /images/publications/details/038-figure-1.webp
  alt: A vision-language model answers a price question about a retail advertisement.
  caption: 'Illustration of the single-step process: input, model, output. The input consists of a product
    advertising image and a prompt querying specific product or advertising feature. A VLM is used as a model.'
  source: https://arxiv.org/pdf/2408.15626#page=1
  width: 543
  height: 324
- label: Figure 2
  image: /images/publications/details/038-figure-2.webp
  alt: Illustration of the process with the use of an LLM.
  caption: Illustration of the process with the use of an LLM. The prompt for the LLM is formed by the extracted
    text from the image getting by different OCR tools and the question about the feature ”brand” of the product.
  source: https://arxiv.org/pdf/2408.15626#page=3
  width: 542
  height: 322
bibtex: |
  @inproceedings{lamm2024canvisuallanguage38,
    title = {{Can Visual Language Models Replace  OCR-Based Visual Question Answering Pipelines in Production? A Case Study in Retail}},
    author = {Bianca Lamm and Janis Keuper},
    booktitle = {EVAL-FoMo Workshop at ECCV 24},
    year = {2024},
    url = {https://arxiv.org/pdf/2408.15626}
  }
bibtex_file: /assets/bibtex/2024-can-visual-language-models-replace-ocr-based-visual-question-answering-pipelines-in-production-a-case-study-in-reta.bib
abstract: |-
  Most production-level deployments for Visual Question Answering (VQA) tasks are still build as processing pipelines of independent steps including image pre-processing, object- and text detection, Optical Character Recognition (OCR) and (mostly supervised) object classification. However, the recent advances in vision Foundation Models [25] and Vision Language Models (VLMs) [23] raise the question if these custom trained, multi-step approaches can be replaced with pre-trained, single-step VLMs. This paper analyzes the performance and limits of various VLMs in the context of VQA and OCR [5, 9, 12] tasks in a production-level scenario. Using data from the Retail-786k [10] dataset, we investigate the capabilities of pre-trained VLMs to answer detailed questions about advertised products in images. Our study includes two commercial models, GPT-4V [16] and GPT-4o [17], as well as four open-source models: InternVL [5], LLaVA 1.5 [12], LLaVA-NeXT [13], and CogAgent [9]. Our initial results show, that there is in general no big performance gap between open-source and commercial models. However, we observe a strong task dependent variance in VLM performance: while most models are able to answer questions regarding the product brand and price with high accuracy, they completely fail at the same time to correctly identity the specific product name or discount. This indicates the problem of VLMs to solve fine-grained classification tasks as well to model the more abstract concept of discounts.
abstract_source: https://arxiv.org/pdf/2408.15626
content_status: complete
---
