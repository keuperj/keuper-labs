---
layout: publication
title: Balancing Diversity and Risk in LLM Sampling - How to Select Your Method and Parameter for Open-Ended
  Text Generation
description: Choosing a text-sampling method means balancing variety against unreliable continuations. This
  framework evaluates that trade-off at individual decoding steps and offers practical guidance for selecting
  truncation methods and parameters.
why: The settings used to sample an AI model's next word affect both variety and the risk of unreliable continuations.
  This work makes that trade-off easier to measure and compare. It offers practical guidance for choosing generation
  settings instead of relying solely on a familiar default.
figures:
- label: Figure 1
  image: /images/publications/details/068-figure-1.webp
  alt: Sentence prefixes illustrating why valid next-token choices depend on context.
  caption: N-gram models tend to overestimate the data support size given a prefix (marked by a red line) due
    to limited window size (marked with a blue window).
  source: https://arxiv.org/pdf/2408.13586#page=2
  width: 504
  height: 188
- label: Figure 2
  image: /images/publications/details/068-figure-2.webp
  alt: Histogram of the estimated optimal truncation values for gpt2-xl, which achieve exactly full recall
    of data support given different prefixes.
  caption: Histogram of the estimated optimal truncation values for gpt2-xl, which achieve exactly full recall
    of data support given different prefixes.
  source: https://arxiv.org/pdf/2408.13586#page=2
  width: 504
  height: 307
bibtex: |
  @inproceedings{zhou2025balancingdiversityand68,
    title = {{Balancing Diversity and Risk in LLM Sampling - How to Select Your Method and Parameter for Open-Ended Text Generation}},
    author = {Yuxuan Zhou and Margret Keuper and Mario Fritz},
    booktitle = {Annual Meeting of the Association for Computational Linguistics},
    year = {2025},
    url = {https://openreview.net/forum?id=7bwwDHoDU4}
  }
bibtex_file: /assets/bibtex/2025-balancing-diversity-and-risk-in-llm-sampling-how-to-select-your-method-and-parameter-for-open-ended-text-generation.bib
abstract: |-
  Sampling-based decoding strategies have been widely adopted for Large Language Models (LLMs) in numerous applications, targeting a balance between diversity and quality via temperature tuning and tail truncation. Considering the strong dependency of the candidate next tokens on different prefixes, recent studies propose to adaptively truncate the tail of LLMs’ predicted distribution. Although improved results have been reported with these methods on open-ended text generation tasks, the results are highly dependent on the curated parameters and the limited exemplar text. In this paper, we propose a systematic way to estimate the capacity of a truncation sampling method by considering the trade-off between diversity and risk at each decoding step, based on our collected prefix tree which preserves the context of a full sentence. Our work offers a comprehensive comparison of existing truncation sampling methods and serves as a practical user guideline for their parameter selection. Our code is available at github repository.
abstract_source: https://arxiv.org/pdf/2408.13586
content_status: complete
---
