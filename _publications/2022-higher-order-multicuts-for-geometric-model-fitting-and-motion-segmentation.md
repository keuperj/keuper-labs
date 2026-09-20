---
layout: publication
title: Higher-Order Multicuts for Geometric Model Fitting and Motion Segmentation
description: Grouping points into lines, motions, or geometric transformations requires relationships beyond
  pairs. Our higher-order multicut formulation captures these relationships and provides an efficient local-search
  solver without fixing the number of groups in advance.
why: Separating different motions or geometric structures in an image requires more than comparing points two
  at a time. This method considers richer groups of relationships and does not require the number of groups
  to be fixed beforehand. It gives vision systems a more flexible way to organize scenes into meaningful parts.
figures:
- label: Figure 1
  image: /images/publications/details/013-figure-1.webp
  alt: Graphs illustrating a partition, multicut edges, and lifted relationships.
  caption: (a) An example of a graph decomposition and its encodings. Switching green and red labels will produce
    a different encoding for the same decomposition. Dashed lines, in turn, constitute a multicut of a graph
    and uniquely define its decomposition. (b) An example of a lifted graph decomposition and it encoding.
    Blue lines denote lifted edges, that connect vertices which are not direct neighbors in the graph. (c)
    An example of 3rd-order costs, that consider three nodes at a time (light blue triangles) for a better
    join / cut decision. If a higher-order cost does not correspond to a clique in the graph, we add lifted
    edges.
  source: https://pure.mpg.de/rest/items/item_3367293_6/component/file_3367904/content#page=4
  width: 577
  height: 288
- label: Figure 2
  image: /images/publications/details/013-figure-2.webp
  alt: '(a) Line fitting: We fit a line using TLS into a set of points and assume that the latter are independently
    drawn from a 1D Gaussian centered on the line and orthogonal to it.'
  caption: '(a) Line fitting: We fit a line using TLS into a set of points and assume that the latter are independently
    drawn from a 1D Gaussian centered on the line and orthogonal to it. (b) Homography Estimation: For a pair
    of images with annotated correspondences (yellow line) we directly model the distance r between the corresponding
    and projected point. In the example above, a point from the second image corresponds to a red dot, but
    its projection via the estimated homography is a bit off (blue dot). Uncertainty model corresponds to a
    2D isotropic Gaussian centered at the red point.'
  source: https://pure.mpg.de/rest/items/item_3367293_6/component/file_3367904/content#page=6
  width: 577
  height: 298
bibtex: |
  @article{levinkov2022higherordermulticuts13,
    title = {{Higher-Order Multicuts for Geometric Model Fitting and Motion Segmentation}},
    author = {Evgeny Levinkov and Amirhossein Kardoost and Bjoern Andres and Margret Keuper},
    journal = {IEEE Transactions on Pattern Analysis and Machine Intelligence},
    year = {2022},
    url = {https://ieeexplore.ieee.org/iel7/34/9970415/09706260.pdf}
  }
bibtex_file: /assets/bibtex/2022-higher-order-multicuts-for-geometric-model-fitting-and-motion-segmentation.bib
abstract: |-
  The minimum cost lifted multicut problem is a generalization of the multicut problem (also known as correlation clustering) and is a means to optimizing a decomposition of a graph w.r.t. both positive and negative edge costs. It has been shown to be useful in a large variety of applications in computer vision thanks to the fact that multicut-based formulations do not require the number of components given a priori; instead, it is deduced from the solution. However, the standard multicut cost function is limited to pairwise relationships between nodes, while several important applications either require or can benefit from a higher-order cost function, i.e. hyper-edges. In this paper, we propose a pseudo-boolean formulation for a multiple model fitting problem. It is based on a formulation of any-order minimum cost lifted multicuts, which allows to partition an undirected graph with pairwise connectivity such as to minimize costs defined over any set of hyper-edges. As the proposed formulation is NP-hard and the branch-and-bound algorithm (as well as obtaining lower bounds) is too slow in practice, we propose an efficient local search algorithm for inference into resulting problems. We demonstrate versatility and effectiveness of our approach in several applications: 1) We define a geometric multiple model fitting, more specifically, a line fitting problem on all triplets of points and group points, that belong to the same line, together. 2) We formulate homography and motion estimation as a geometric model fitting problem where the task is to find groups of points that can be explained by the same geometrical transformation. 3) In motion segmentation our model allows to go from modeling translational motion to Euclidean or affine transformations, which improves the segmentation quality in terms of F-measure.
abstract_source: https://pure.mpg.de/rest/items/item_3367293_6/component/file_3367904/content
content_status: complete
---
