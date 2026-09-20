---
layout: publication
title: Benchmarking Document Parsers on Mathematical Formula Extraction from PDFs
description: A formula can be written differently while retaining exactly the same meaning. This benchmark
  uses controlled PDF generation and semantic evaluation to compare formula extraction, with human judgments
  validating the assessment approach.
why: A mathematical expression can be represented in several ways without changing its meaning. This benchmark
  evaluates whether PDF extraction preserves that meaning, rather than merely reproducing a matching character
  string. It helps researchers choose tools that retain the scientific content needed for downstream analysis.
figures:
- label: Figure 1
  image: /images/publications/details/087-figure-1.webp
  alt: PDF formula-generation, extraction, matching, and semantic-evaluation pipeline.
  caption: Overview of the three main components of the benchmarking framework. The formula dataset component
    extracts and processes mathematical formulas from Wikipedia to create the wikipedia-latex-formulas-319k
    collection. The benchmark dataset component generates synthetic PDFs with precise ground truth by randomly
    combining sampled formulas from this dataset with text segments and inline formulas using randomly composed
    LaTeX templates. The evaluation pipeline component matches parsed text against ground truth using two-stage
    LLM-based matching and evaluates all formula pairs.
  source: https://arxiv.org/pdf/2512.09874#page=5
  width: 784
  height: 998
- label: Figure 2
  image: /images/publications/details/087-figure-2.webp
  alt: Correlation of Automated Metrics with Human Evaluations
  caption: Correlation of Automated Metrics with Human Evaluations
  source: https://arxiv.org/pdf/2512.09874#page=9
  width: 622
  height: 1154
bibtex: |
  @inproceedings{horn2026benchmarkingdocumentparsers87,
    title = {{Benchmarking Document Parsers on Mathematical Formula Extraction from PDFs}},
    author = {Pius Horn and Janis Keuper},
    booktitle = {International Conference on Pattern Recognition},
    year = {2026},
    url = {https://arxiv.org/pdf/2512.09874}
  }
bibtex_file: /assets/bibtex/2026-benchmarking-document-parsers-on-mathematical-formula-extraction-from-pdfs.bib
abstract: |-
  Correctly parsing mathematical formulas from PDFs is critical for training large language models and building scientific knowledge bases from academic literature, yet existing benchmarks either exclude formulas entirely or lack semantically-aware evaluation metrics. We introduce a benchmarking framework centered on synthetically generated PDFs with precise LaTeX ground truth, enabling systematic control over layout, formulas, and content characteristics. For evaluation, we apply LLM-as-a-judge to assess semantic equivalence of parsed formulas, capturing mathematical meaning beyond surface-level notation differences. We validate this approach through a human study (250 formula pairs, 750 ratings from 30 evaluators), showing a Pearson correlation of r=0.78 with human judgment, compared to r=0.34 for character-level matching (CDM) and r≈0 for text similarity. Our robust two-stage matching pipeline combining LLM-based extraction with fuzzy validation reliably aligns parsed formulas with ground truth despite format inconsistencies across parsers. Evaluating 20+ contemporary PDF parsers across 100 synthetic documents with 2,000+ formulas reveals significant performance disparities, providing actionable guidance for practitioners selecting parsers for downstream applications.
abstract_source: https://arxiv.org/pdf/2512.09874
content_status: complete
---
