---
layout: publication
title: Beyond String Matching - Semantic Evaluation of PDF Table Extraction
description: Table extraction should preserve meaning, not just matching strings. This benchmark combines controlled
  PDFs with an LLM-based semantic assessment that aligns more closely with human judgments than conventional
  structural metrics.
why: A table can be extracted with slightly different formatting and still preserve its meaning, or look similar
  while containing a serious error. This benchmark evaluates that distinction using controlled documents and
  a semantic assessment checked against human judgments. It gives users a more useful basis for choosing tools
  that turn PDF tables into reliable data.
figures:
- label: Figure 1
  image: /images/publications/details/099-figure-1.webp
  alt: Semantic table-evaluation examples, human-judgment correlations, and the synthetic PDF benchmark.
  caption: Rule-based metrics both over-reward semantically broken outputs and penalize benign representational
    variation (a); an LLM-as-a-judge approach validated on 1,554 human ratings aligns substantially better
    with human judgment (Pearson r=0.93 vs. r=0.68 for TEDS) (b); and used to benchmark 21 parsers on 100 synthetic
    PDFs that embed 451 real arXiv tables with their LaTeX source as exact ground truth (c).
  source: https://arxiv.org/pdf/2603.18652#page=2
  width: 804
  height: 359
- label: Figure 2
  image: /images/publications/details/099-figure-2.webp
  alt: 'Overview of the benchmark generation pipeline: arXiv LATEX tables are collected, cleaned, and validated,
    then placed alongside filler text under a sampled layout, yielding a PDF page paired with a JSON ground
    truth.'
  caption: 'Overview of the benchmark generation pipeline: arXiv LATEX tables are collected, cleaned, and validated,
    then placed alongside filler text under a sampled layout, yielding a PDF page paired with a JSON ground
    truth.'
  source: https://arxiv.org/pdf/2603.18652#page=5
  width: 822
  height: 238
bibtex: |
  @inproceedings{horn2026beyondstringmatching99,
    title = {{Beyond String Matching - Semantic Evaluation of PDF Table Extraction}},
    author = {Pius Horn and Janis Keuper},
    booktitle = {British Machine Vision Conference},
    year = {2026},
    url = {https://openreview.net/pdf?id=8KZckKjivl}
  }
bibtex_file: /assets/bibtex/2026-beyond-string-matching-semantic-evaluation-of-pdf-table-extraction.bib
abstract: |-
  Reliably extracting tables from PDFs is essential for large-scale scientific data mining and knowledge base construction, yet existing evaluation approaches rely on rule-based metrics that fail to capture semantic equivalence of table content. We present a benchmarking framework based on synthetically generated PDFs with precise LaTeX ground truth, using tables sourced from arXiv to ensure realistic complexity and diversity. As our central methodological contribution, we apply LLM-as-a-judge for semantic table evaluation, integrated into a matching pipeline that accommodates inconsistencies in parser outputs. Through a human validation study comprising over 1,500 quality judgments on extracted table pairs, we show that LLM-based evaluation achieves substantially higher correlation with human judgment (Pearson r=0.93) compared to currently used Tree Edit Distance-based Similarity (TEDS, r=0.68) and Grid Table Similarity (GriTS, r=0.70). Evaluating 21 contemporary PDF parsers across 100 synthetic documents containing 451 tables reveals significant performance disparities. Our results offer practical guidance for selecting parsers for tabular data extraction and establish a reproducible, scalable evaluation methodology for this critical task.
abstract_source: https://arxiv.org/pdf/2603.18652
content_status: complete
---
