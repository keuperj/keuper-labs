---
layout: publication
title: 'Position: We need theory-grounded explainability for abstract classification to quantify model bias'
description: Explanations of abstract concepts need a validated reference, not just a plausible story. Case
  studies of wealth and affluence show how models and human annotators diverge, motivating context-specific
  definitions that make bias measurable.
why: People do not all mean the same thing when they call an image wealthy or affluent. This paper shows that
  models overlook some human wealth cues and that human ratings of generated scenes vary across countries.
  It argues for defining the social context and using validated measures, so that explanations can support
  a meaningful assessment of bias.
figures:
- label: Figure 1
  image: /images/publications/details/095-figure-1.webp
  alt: A heatmap compares wealth cues used by psychologists and seven foundation models.
  caption: Psychologists [25] and foundation models show different foci in wealth cues. While all observations
    contain possessions as an indicator, we observe divergence in high-spending willingness, character, and
    self-presentation.
  source: https://openreview.net/pdf?id=Oz2id4l0SX#page=3
  width: 870
  height: 480
- label: Figure 2
  image: /images/publications/details/095-figure-2.webp
  alt: Human affluence ratings disagree differently for generated images of Indonesia and the United Arab Emirates.
  caption: 'GeoDiv country-specific human annotation statistics for affluence in generated images show divergence
    between annotators, especially for UAE, where annotator 2’s predictions are more centered around the middle
    score, whereas annotators 1 and 3 reported right-skewed affluence levels. [Note: y-axis scales differ between
    (a) and (b).]'
  source: https://openreview.net/pdf?id=Oz2id4l0SX#page=5
  width: 876
  height: 250
bibtex: |
  @inproceedings{prasse2026weneedtheory95,
    title = {{Position: We need theory-grounded explainability for abstract classification to quantify model bias}},
    author = {Katharina Prasse and Margret Keuper},
    booktitle = {exCV Workshop at ECCV 26},
    year = {2026},
    url = {https://openreview.net/forum?id=Oz2id4l0SX}
  }
bibtex_file: /assets/bibtex/2026-we-need-theory-grounded-explainability-for-abstract-tasks-to-quantify-model-bias.bib
content_status: complete
abstract: |
  Explainability for denotative and connotative tasks differs fundamentally. While denotative features (e.g. of a bird species or of a melanoma) can be universally agreed upon, representations of connotative classes (e.g. wealth of a person or affluence) are subject to cultural, geographic location, and personal beliefs. Because images offer a richer contextual signal compared to text, they may amplify model bias. We advocate for explainability in abstract classification tasks on the basis of two case studies: (1) Comparing seven foundation models in their perception of personal wealth against a psychologically validated survey on wealth cues shows that models collectively omit the character dimensions of the taxonomy. (2) Human annotators reach satisfactory levels of agreement (Krippendorff’s α ≥0.67) on affluence in generated images in 3 / 14 assessed countries. Current XAI methods lack a validated ontology to evaluate abstract classes against and thus seemingly plausible explanations may be inadequate for the given task. We argue that abstract classification requires an explicit declaration of context - population, geographic location, cultural norm, time frame - and an externally validated measure suitable for the specific context. This renders classification bias quantifiable and models steerable.
abstract_source: https://openreview.net/pdf?id=Oz2id4l0SX
---
