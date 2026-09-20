---
layout: publication
title: Surrogate NAS benchmarks - Going beyond the limited search spaces of tabular NAS benchmarks
description: Evaluating architecture-search methods need not require training every candidate network. Learned
  surrogate benchmarks make large search spaces accessible at a fraction of the cost, supporting more realistic
  and reproducible NAS comparisons.
why: Comparing methods for designing neural networks can consume vast amounts of computation before the comparison
  even begins. These learned benchmarks estimate how candidate designs would perform without training every
  one. They make larger, more realistic search spaces available for repeatable experiments at much lower cost.
figures:
- label: Figure 1
  image: /images/publications/details/012-figure-1.webp
  alt: Surrogate performance-prediction error as the number of training architectures increases.
  caption: Number of architectures used for training the GIN surrogate model vs MAE on the NAS-Bench- 101 dataset.
  source: https://pure.mpg.de/rest/items/item_3404264/component/file_3404265/content#page=3
  width: 344
  height: 190
- label: Figure 2
  image: /images/publications/details/012-figure-2.webp
  alt: Anytime performance of different optimizers on the real benchmark (left) and the surrogate benchmark
    (GIN (middle) and XGB (right)) when training ensembles on data collected from all optimizers.
  caption: Anytime performance of different optimizers on the real benchmark (left) and the surrogate benchmark
    (GIN (middle) and XGB (right)) when training ensembles on data collected from all optimizers. Trajectories
    on the surrogate benchmark are averaged over 5 optimizer runs and the standard deviation is depicted.
  source: https://pure.mpg.de/rest/items/item_3404264/component/file_3404265/content#page=7
  width: 894
  height: 265
bibtex: |
  @inproceedings{zela2022surrogatenasbenchmarks12,
    title = {{Surrogate NAS benchmarks - Going beyond the limited search spaces of tabular NAS benchmarks}},
    author = {Arber Zela and Julien Niklas Siems and Lucas Zimmer and Jovita Lukasik and Margret Keuper and Frank Hutter},
    booktitle = {International Conference on Learning Representations},
    year = {2022},
    url = {https://pure.mpg.de/rest/items/item_3404264/component/file_3404265/content}
  }
bibtex_file: /assets/bibtex/2022-surrogate-nas-benchmarks-going-beyond-the-limited-search-spaces-of-tabular-nas-benchmarks.bib
abstract: |-
  The most significant barrier to the advancement of Neural Architecture Search (NAS) is its demand for large computational resources, which hinders scientifically sound empirical evaluations of NAS methods. Tabular NAS benchmarks have alleviated this problem substantially, making it possible to properly evaluate NAS methods in seconds on commodity machines. However, an unintended consequence of tabular NAS benchmarks has been a focus on extremely small architectural search spaces since their construction relies on exhaustive evaluations of the space. This leads to unrealistic results that do not transfer to larger spaces. To overcome this fundamental limitation, we propose a methodology to create cheap NAS surrogate benchmarks for arbitrary search spaces. We exemplify this approach by creating surrogate NAS benchmarks on the existing tabular NAS-Bench-101 and on two widely used NAS search spaces with up to 10²¹ architectures (10¹³ times larger than any previous tabular NAS benchmark). We show that surrogate NAS benchmarks can model the true performance of architectures better than tabular benchmarks (at a small fraction of the cost), that they lead to faithful estimates of how well different NAS methods work on the original non-surrogate benchmark, and that they can generate new scientific insight. We open-source all our code and believe that surrogate NAS benchmarks are an indispensable tool to extend scientifically sound work on NAS to large and exciting search spaces.
abstract_source: https://pure.mpg.de/rest/items/item_3404264/component/file_3404265/content
content_status: complete
---
