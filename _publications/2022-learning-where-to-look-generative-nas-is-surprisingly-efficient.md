---
layout: publication
title: Learning Where To Look--Generative NAS is Surprisingly Efficient
description: Instead of repeatedly searching unpromising architectures, learn where good candidates are likely
  to be. AG-Net combines a generator with a performance predictor to guide efficient search, including joint
  optimization of accuracy and hardware latency.
why: Searching every possible neural network design is impractical. This method learns where promising designs
  are likely to be and concentrates the search there. It can consider both accuracy and the time a model takes
  to run, helping connect research performance to hardware constraints.
figures:
- label: Figure 1
  image: /images/publications/details/018-figure-1.webp
  alt: Generative architecture search with a performance predictor and iterative retraining.
  caption: (left) Our search method generates architectures from points in an architecture representation space
    that is iteratively optimized. (right) The architecture representation space is biased towards better-performing
    architectures with each search iteration. After only 48 evaluated architectures, our generator produces
    state-of-the-art performing architectures on NAS-Bench-101.
  source: https://arxiv.org/pdf/2203.08734#page=2
  width: 784
  height: 216
- label: Figure 2
  image: /images/publications/details/018-figure-2.webp
  alt: Representation of the training procedure for our generator in AG-Net.
  caption: Representation of the training procedure for our generator in AG-Net. The input is a randomly sampled
    latent vector z ∈Rd. First, the input node is generated, initialized and input to a GNN to generate a partial
    graph representation. The learning process iteratively generates node scores and edge scores using z and
    the partial graph representation until the output node is generated. The target for this generated graph
    is a randomly sampled architecture.
  source: https://arxiv.org/pdf/2203.08734#page=5
  width: 784
  height: 224
bibtex: |
  @inproceedings{lukasik2022learningwhereto18,
    title = {{Learning Where To Look--Generative NAS is Surprisingly Efficient}},
    author = {Jovita Lukasik and Steffen Jung and Margret Keuper},
    booktitle = {European Conference on Computer Vision},
    year = {2022},
    url = {https://arxiv.org/pdf/2203.08734.pdf}
  }
bibtex_file: /assets/bibtex/2022-learning-where-to-look-generative-nas-is-surprisingly-efficient.bib
abstract: |-
  The efficient, automated search for well-performing neural architectures (NAS) has drawn increasing attention in the recent past. Thereby, the predominant research objective is to reduce the necessity of costly evaluations of neural architectures while efficiently exploring large search spaces. To this aim, surrogate models embed architectures in a latent space and predict their performance, while generative models for neural architectures enable optimization-based search within the latent space the generator draws from. Both, surrogate and generative models, have the aim of facilitating query-efficient search in a well-structured latent space. In this paper, we further improve the trade-off between query-efficiency and promising architecture generation by leveraging advantages from both, efficient surrogate models and generative design. To this end, we propose a generative model, paired with a surrogate predictor, that iteratively learns to generate samples from increasingly promising latent subspaces. This approach leads to very effective and efficient architecture search, while keeping the query amount low. In addition, our approach allows in a straightforward manner to jointly optimize for multiple objectives such as accuracy and hardware latency. We show the benefit of this approach not only w.r.t. the optimization of architectures for highest classification accuracy but also in the context of hardware constraints and outperform state-of-the-art methods on several NAS benchmarks for single and multiple objectives. We also achieve state-of-the-art performance on ImageNet. The code is available at https://github.com/jovitalukasik/AG-Net.
abstract_source: https://arxiv.org/pdf/2203.08734
content_status: complete
---
