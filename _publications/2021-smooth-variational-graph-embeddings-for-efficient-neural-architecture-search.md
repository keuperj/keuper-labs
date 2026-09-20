---
layout: publication
title: Smooth variational graph embeddings for efficient neural architecture search
description: Searching for better networks starts with a useful representation of their architectures. SVGe
  learns a smooth graph embedding that reconstructs architectures accurately and supports efficient performance
  prediction and search.
why: Designing an effective neural network often means spending substantial computing time trying many alternatives.
  This work learns a map of possible designs so that promising candidates become easier to find. It makes the
  search for better AI models more systematic and less dependent on expensive trial and error.
figures:
- label: Figure 1
  image: /images/publications/details/004-figure-1.webp
  alt: Graph decoder generating a neural network architecture from a latent representation.
  caption: Illustration of a single iteration during the graph generation process. a) A decoder-level GNN propagates
    the node embeddings through the partially created graph and aggregates them into a summary. b) A new node
    is created and its node type is selected using the summary of the partially created and the original graph.
    c) The newly created node is initialized with a node embedding. d) A score of all edges connecting the
    new node is calculated and evaluated into the set of new edges.
  source: https://arxiv.org/pdf/2010.04683v1#page=11
  width: 1193
  height: 271
- label: Figure 2
  image: /images/publications/details/004-figure-2.webp
  alt: Performance Prediction of fine tuned SVGe on NAS-Bench-101 test accuracy of 100 sampled graphs from
    the training set (left) and 100 sampled graphs from the test set (right).
  caption: Performance Prediction of fine tuned SVGe on NAS-Bench-101 test accuracy of 100 sampled graphs from
    the training set (left) and 100 sampled graphs from the test set (right).
  source: https://arxiv.org/pdf/2010.04683v1#page=12
  width: 548
  height: 234
bibtex: |
  @inproceedings{lukasik2021smoothvariationalgraph4,
    title = {{Smooth variational graph embeddings for efficient neural architecture search}},
    author = {Jovita Lukasik and David Friede and Arber Zela and Frank Hutter and Margret Keuper},
    booktitle = {International Conference on Learning Representations},
    year = {2021},
    url = {https://arxiv.org/pdf/2010.04683}
  }
bibtex_file: /assets/bibtex/2021-smooth-variational-graph-embeddings-for-efficient-neural-architecture-search.bib
abstract: |-
  In this paper, we propose an approach to neural architecture search (NAS) based on graph embeddings. NAS has been addressed previously using discrete, sampling based methods, which are computationally expensive as well as differentiable approaches, which come at lower costs but enforce stronger constraints on the search space. The proposed approach leverages advantages from both sides by building a smooth variational neural architecture embedding space in which we evaluate a structural subset of architectures at training time using the predicted performance while it allows to extrapolate from this subspace at inference time. We evaluate the proposed approach in the context of two common search spaces, the graph structure defined by the ENAS approach and the NAS-Bench-101 search space, and improve over the state of the art in both.
abstract_source: https://arxiv.org/pdf/2010.04683v1
content_status: complete
---
