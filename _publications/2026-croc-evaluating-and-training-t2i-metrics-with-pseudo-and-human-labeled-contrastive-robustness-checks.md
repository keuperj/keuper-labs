---
layout: publication
title: CROC Evaluating and Training T2I Metrics with Pseudo- and Human-Labeled Contrastive Robustness Checks
description: An image-quality metric should notice when a small prompt change changes the intended meaning.
  CROC generates contrastive checks at scale, adds a human-supervised benchmark, and uses the resulting data
  to train a more capable evaluation metric.
why: A score for text-to-image generation should notice when an image misses a crucial part of a prompt. CROC
  tests that ability using closely contrasted examples, including human-checked cases. It also uses these examples
  to improve an evaluation model, connecting the discovery of weaknesses to a concrete training approach.
figures:
- label: Figure 1
  image: /images/publications/details/092-figure-1.webp
  alt: Contrastive prompt-image pairs testing text-image evaluation metrics.
  caption: Contrastive evaluation of T2I metrics. Given a text-to-image metric that assigns quality scores
    to text-image pairs, matching pairs (green) should receive higher scores than non-matching pairs (red).
    In textbased evaluations, the original text is replaced with a contrastive text, while in image-based evaluations,
    the original image is replaced. In inverse evaluations, the matching pair is defined by the contrastive
    text and image used in the forward evaluations.
  source: https://pure.mpg.de/rest/items/item_3656558_3/component/file_3717264/content#page=2
  width: 503
  height: 531
- label: Figure 2
  image: /images/publications/details/092-figure-2.webp
  alt: Overview of the CROCsyn data generation process.
  caption: Overview of the CROCsyn data generation process. First, we construct our taxonomy based on related
    work and with LLM support. The image shows example categories. Second, we pass selected categories of the
    taxonomy to an LLM (e.g., “running” and “bridges and infrastructure”) to generate the original text TO
    and the contrast text TC for one sample. Then these are passed to a diffusion model to generate the original
    image IO and the contrast image IC.
  source: https://pure.mpg.de/rest/items/item_3656558_3/component/file_3717264/content#page=4
  width: 1156
  height: 411
bibtex: |
  @article{leiter2026crocevaluatingand92,
    title = {{CROC Evaluating and Training T2I Metrics with Pseudo- and Human-Labeled Contrastive Robustness Checks}},
    author = {Christoph Leiter and Yuki M. Asano and Margret Keuper and Steffen Eger},
    journal = {Transactions of the Association for Computational Linguistics},
    year = {2026},
    url = {http://hdl.handle.net/21.11116/0000-0013-3F33-C}
  }
bibtex_file: /assets/bibtex/2026-croc-evaluating-and-training-t2i-metrics-with-pseudo-and-human-labeled-contrastive-robustness-checks.bib
abstract: |-
  The assessment of evaluation metrics (metaevaluation) is crucial for determining the suitability of existing metrics in text-toimage (T2I) generation tasks. Humanbased meta-evaluation is costly and timeintensive, and automated alternatives are scarce. We address this gap and propose CROC: a scalable framework for automated Contrastive Robustness Checks that systematically probes and quantifies metric robustness by synthesizing contrastive test cases across a comprehensive taxonomy of image properties. With CROC, we generate a pseudo-labeled dataset (CROCsyn) of over 1 million contrastive prompt–image pairs to enable a fine-grained comparison of evaluation metrics. We also use this dataset to train CROCScore, a new metric that achieves state-of-the-art performance among open-source methods, demonstrating an additional key application of our framework. To complement this dataset, we introduce a human-supervised benchmark (CROChum) targeting especially challenging categories. Our results highlight robustness issues in existing metrics: for example, many fail on prompts involving negation, and all tested open-source metrics fail on at least 24% of cases involving correct identification of body parts.
abstract_source: https://pure.mpg.de/rest/items/item_3656558_3/component/file_3717264/content
content_status: complete
---
