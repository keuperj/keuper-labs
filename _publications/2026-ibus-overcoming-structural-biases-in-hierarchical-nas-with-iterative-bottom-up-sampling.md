---
layout: publication
title: 'IBUS: Overcoming Structural Biases in Hierarchical NAS with Iterative Bottom-Up Sampling'
description: Top-down architecture sampling can overlook useful patterns such as skip-connections and convolutions.
  IBUS builds networks from compatible smaller blocks, improving accuracy over einspace across seven tasks by up
  to 13.7 percentage points and enabling hybrids of existing architecture families.
why: A flexible search space is only useful if sampling can reach its important architectural patterns. This study
  shows that top-down sampling in einspace rarely produces skip-connections or convolutions, then introduces IBUS
  to build larger networks from compatible smaller blocks. Across seven image, text, and other classification tasks,
  IBUS achieves higher mean accuracy than einspace with the same evolutionary search settings, with gains of up
  to 13.7 percentage points. It can also combine blocks from ResNets, vision transformers, and MLP-Mixers to explore
  hybrid architectures.
figures:
- label: Figure 1
  image: /images/publications/details/101-figure-1.webp
  alt: IBUS module types and the iterative process of selecting, validating, and adding building blocks to a growing
    pool.
  caption: Overview of our iterative bottom-up sampling IBUS. Starting from primitives, each sampling step composes
    existing building blocks using a random module type to create the next building block. This is repeated iteratively
    to sample complex architectures from bottom-up.
  source: https://openreview.net/pdf?id=AI5qzCymtR#page=2
  width: 1550
  height: 544
- label: Figure 2
  image: /images/publications/details/101-figure-2.webp
  alt: Counts of uniquely sampled convolutions and skip-connections in 2,000 architectures, comparing IBUS with
    einspace.
  caption: Numbers of uniquely sampled convolutions and skip-connections across 2000 randomly sampled architectures
    for IBUS and einspace. Overall, IBUS samples significantly more skip-connections and convolutions than einspace,
    ensuring that these crucial architectural patterns are not underrepresented.
  source: https://openreview.net/pdf?id=AI5qzCymtR#page=8
  width: 970
  height: 246
bibtex_file: /assets/bibtex/2026-ibus-overcoming-structural-biases-in-hierarchical-nas-with-iterative-bottom-up-sampling.bib
content_status: complete
paper_link_label: View on OpenReview
abstract: Most search spaces for neural architecture search (NAS) rely on a fixed macro-structure limiting their
  expressiveness. Recent works utilize context-free grammars (CFGs) to design expressive hierarchical search spaces
  that contain multiple architecture families. However, we found that such search spaces underrepresent certain
  crucial architectural patterns, e.g., skip-connections, due to inherent structural biases. We propose a new search
  space with a novel iterative bottom-up sampling approach, IBUS, to resolve such structural biases. IBUS also naturally
  enables using parts of existing architectures, e.g., ResNets and ViTs, to sample hybrid architectures. Our experiments
  show that IBUS consistently outperforms the current state-of-the-art CFG-based search space on all evaluation
  tasks, with final accuracy increases of up to 13.7%. Our code is available at https://github.com/boschresearch/ibus-nas.
abstract_source: https://openreview.net/pdf?id=AI5qzCymtR#page=1
bibtex: |
  @inproceedings{artykbayev2026ibus,
    title = {{IBUS}: Overcoming Structural Biases in Hierarchical {NAS} with Iterative Bottom-Up Sampling},
    author = {Abay Artykbayev and Martin Rapp and Benedikt Staffler and Margret Keuper},
    booktitle = {AutoML 2026 Methods Track},
    year = {2026},
    url = {https://openreview.net/forum?id=AI5qzCymtR}
  }
---
