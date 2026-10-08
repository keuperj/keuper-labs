---
layout: publication
title: 2D Spatial Reasoning with Adaptive Neural Cellular Automata
description: Adaptive neural cellular automata learn where each grid cell should gather information as a solution
  evolves. This enables compact, iterative models to solve Sudoku, handwritten-digit Sudoku, shortest-path mazes,
  and global color-balance tasks with inspectable spatial reasoning patterns.
why: Solving a Sudoku or tracing a path through a maze requires local decisions to respect relationships across
  an entire grid. This paper gives neural cellular automata adaptive perception, allowing each cell to learn which
  other locations matter at each iteration. The resulting compact models tackle several controlled spatial reasoning
  benchmarks, while visualizing their learned sampling locations helps reveal the relationships they use. These
  experiments provide task-specific evidence about spatial reasoning on 2D grids.
figures:
- label: Figure 3
  image: /images/publications/details/103-figure-3.webp
  alt: Input and target examples for array Sudoku, handwritten-digit Sudoku, shortest-path maze solving, and global
    color balance.
  caption: The four 2D spatial reasoning tasks evaluated in this work. Each column shows the input (top) and target
    (bottom).
  source: https://arxiv.org/pdf/2610.08518#page=4
  width: 904
  height: 456
- label: Figure 5
  image: /images/publications/details/103-figure-5.webp
  alt: Fixed and adaptive perception patterns alongside an aNCA update step using learned deformable-convolution
    offsets and modulation.
  caption: Comparison of standard 3×3, dilated, constraint-aligned, and deformable perception patterns, followed
    by one aNCA update step. The perception module predicts offsets and modulations from the current state, guiding
    feature aggregation at adaptive grid locations; the update module then produces the next state.
  source: https://arxiv.org/pdf/2610.08518#page=5
  width: 1442
  height: 580
bibtex_file: /assets/bibtex/2026-2d-spatial-reasoning-with-adaptive-neural-cellular-automata.bib
content_status: complete
abstract: Many modern learning approaches are still struggling with spatial reasoning tasks, i.e. they lack the
  ability to utilize geometric information of perceived entities and their spatial relation to each other to solve
  problems. We introduce a novel Adaptive Neural Cellular Automata (aNCA) architecture which replaces the static
  and spatially invariant perception of standard NCAs by learnable, spatially variant and data-adaptive perceptive
  fields. We show that this conceptual change enables NCAs to iteratively reason over 2D spatial relations on grid-like
  data structures (e.g. images). Empirical results on public benchmarks show state of the art comprehensible results
  with high generalization abilities for solving image based puzzles like Sudoku or finding the shortest path in
  a maze. The implementation and all experimental setups are openly accessible as an extension to the NCAtorch framework
  at https://github.com/mspitzna/NCAtorch.
abstract_source: https://arxiv.org/pdf/2610.08518#page=1
bibtex: |
  @misc{spitznagel20262dspatialreasoningadaptive,
    title = {2D Spatial Reasoning with Adaptive Neural Cellular Automata},
    author = {Martin Spitznagel and Janis Keuper},
    year = {2026},
    eprint = {2610.08518},
    archivePrefix = {arXiv},
    primaryClass = {cs.CV},
    url = {https://arxiv.org/abs/2610.08518}
  }
---
