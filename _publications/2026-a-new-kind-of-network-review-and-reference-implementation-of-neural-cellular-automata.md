---
layout: publication
title: A New Kind of Network? Review and Reference Implementation of Neural Cellular Automata
description: Simple local update rules can produce complex learned behavior. This review organizes neural cellular
  automata into a unified framework and introduces NCAtorch as a modular reference implementation for reproducible
  experimentation.
why: Complex patterns can emerge when many simple units repeatedly follow local rules. This review explains
  how neural cellular automata learn such rules and provides a shared software framework for experimenting
  with them. The combination makes a less conventional model family easier to understand, reproduce, and extend.
figures:
- label: Figure 1
  image: /images/publications/details/083-figure-1.webp
  alt: A cellular automaton evolving through local update rules over time.
  caption: Visualization of a simple, 1D CA with binary states. a) shows the recursive update of grid states
    over time by applying the update rules R on the 3 × 1 cell neighborhoods shown in b).
  source: https://arxiv.org/pdf/2604.24990#page=1
  width: 538
  height: 387
- label: Figure 2
  image: /images/publications/details/083-figure-2.webp
  alt: Sketch of a basic CNN implementation of a 2D NCA with a 3D state space.
  caption: Sketch of a basic CNN implementation of a 2D NCA with a 3D state space. The initial grid is fed
    into a CNN architecture which updates the state additively and is called recursively for each time step.
    During training, the network is trained via usual gradient updates computed per timestep.
  source: https://arxiv.org/pdf/2604.24990#page=2
  width: 527
  height: 281
bibtex: |
  @article{spitznagel2026anewkind83,
    title = {{A New Kind of Network? Review and Reference Implementation of Neural Cellular Automata}},
    author = {Martin Spitznagel and Janis Keuper},
    journal = {Transactions on Machine Learning Research},
    year = {2026},
    url = {https://openreview.net/pdf?id=NRwjj0ZLq0}
  }
bibtex_file: /assets/bibtex/2026-a-new-kind-of-network-review-and-reference-implementation-of-neural-cellular-automata.bib
abstract: |-
  Stephen Wolfram proclaimed in his 2003 seminal work “A New Kind Of Science” that simple recursive programs in the form of Cellular Automata (CA) are a promising approach to replace currently used mathematical formalizations, e.g. differential equations, to improve the modeling of complex systems. Over two decades later, while Cellular Automata have still been waiting for a substantial breakthrough in scientific applications, recent research showed new and promising approaches which combine Wolfram’s ideas with learnable Artificial Neural Networks: So-called Neural Cellular Automata (NCA) are able to learn the complex update rules of CA from data samples, allowing them to model complex, self-organizing generative systems. The aim of this paper is to review the existing work on NCA and provide a unified modular framework and notation, as well as a reference implementation in the open-source library NCAtorch. Project Website: https://www.neural-cellular-automata.org/ Source Code: https://github.com/mspitzna/NCAtorch
abstract_source: https://arxiv.org/pdf/2604.24990
content_status: complete
---
