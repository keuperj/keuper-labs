---
layout: publication
title: Unsupervised Visual Concept Bottlenecks for Interpretable Bioimage Classification
description: Interpretable bioimage classification need not start with expensive manual concept labels. Across
  three microscopy datasets, unsupervised visual concept bottlenecks retain competitive predictions while exposing
  concepts that often align with biological structures.
why: Biologists need to see which structures support an image classifier’s answer. This study discovers visual
  concepts without manually labeling each concept, then checks them against expert judgments and biological
  attributes across three microscopy datasets. The models remain competitive at prediction while exposing evidence
  that often matches recognizable biological structures.
figures:
- label: Figure 1
  image: /images/publications/details/097-figure-1.webp
  alt: Microscopy examples from softwood anatomy, white blood cells, and colorectal tissue datasets.
  caption: Examples from the three microscopy datasets. Each column shows two examples from one class. The
    Softwood dataset contains five anatomical feature classes, and all patches are shown at the same scale.
    WBCAtt contains five white blood cell types, while NCT-CRC contains nine colorectal tissue classes.
  source: https://openreview.net/pdf?id=hois3HoeYg#page=5
  width: 870
  height: 443
- label: Figure 2
  image: /images/publications/details/097-figure-2.webp
  alt: Discovered softwood concepts at different image grid sizes, with expert-assessed quality differences.
  caption: Softwood concept visualizations across grid sizes. Each block shows the top-12 activating patches
    of one discovered concept, as inspected by the domain experts. Patches are resized to a common display
    size. All examples are from the bordered class, where bordered pits appear as small ring-like patterns
    around a bright center. The 2×2 and 3×3 examples are expert-good concepts, while the 4×4 examples are weak
    concepts, often capturing only partial or blurred bordered-pit morphology.
  source: https://openreview.net/pdf?id=hois3HoeYg#page=8
  width: 816
  height: 236
bibtex: |
  @inproceedings{liu2026unsupervisedvisualconcept97,
    title = {{Unsupervised Visual Concept Bottlenecks for Interpretable Bioimage Classification}},
    author = {Linghui Liu and Henrike Stephani and Jördis Sieburg-Rockel and Stephanie Helmling and Andrea Olbrich and Janis Keuper},
    booktitle = {BioImage Computing Workshop at ECCV 26},
    year = {2026},
    url = {https://openreview.net/pdf?id=hois3HoeYg}
  }
bibtex_file: /assets/bibtex/2026-unsupervised-visual-concept-bottlenecks-for-interpretable-bioimage-classification.bib
content_status: complete
abstract: |-
  Concept Bottleneck Models (CBM) have recently shown promising results towards more interpretable image classification. However, the application of this explainable learning method in bioimage analysis has so far been limited by the cost of expert concept annotation. We therefore investigate whether unsupervised visual concept bottlenecks can offer an interpretable alternative for microscopy image classification by discovering concepts from local image regions rather than relying on manually defined labels. Our study covers three bioimage datasets representing softwood anatomical features, white blood cell morphology, and colorectal histopathology. We compare task-trained representations with frozen foundation-model features adapted through a lightweight projection layer, and evaluate both dense and sparse bottlenecks. Beyond classification performance, we assess the biological quality of the discovered concepts using human expert verifications and available attribute annotations. Our results show that, across datasets, unsupervised concept bottlenecks retain competitive predictive performance while producing inspectable visual concepts, which often align with known biological structures.
abstract_source: https://openreview.net/pdf?id=hois3HoeYg
---
