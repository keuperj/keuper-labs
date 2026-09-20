---
layout: publication
title: Reliable Evaluation of Attribution Maps in CNNs - A Perturbation-Based Approach
description: Explanations need reliable evaluation, too. We replace disruptive pixel deletion with adversarial
  perturbations to assess attribution maps more consistently and reduce the distribution shifts that can distort
  their rankings.
why: A colorful explanation map is useful only if it identifies information that truly affects a model's decision.
  This paper examines how common tests can distort that assessment by changing images too drastically. Its
  alternative aims to compare explanation methods more consistently, improving the evidence behind claims of
  interpretability.
figures:
- label: Figure 1
  image: /images/publications/details/052-figure-1.webp
  alt: Attribution maps with different insertion and deletion evaluation scores.
  caption: 'Visualization of four different attribution maps (AM) and two evaluation methods on the same input
    image and the same model (EfficientNet-B0 (Tan & Le, 2019)). Visually, it is impossible to objectively
    determine which result gives the “best” estimate of the image regions with the highest impact on the model
    decision. Current evaluation methods of the used AMs also give conflicting results: the Deletion method
    (lower is better) (Fong & Vedaldi, 2017; Petsiuk et al., 2018) ranks Guided Integrated Gradients (IG) (Kapishnikov
    et al., 2021) first, while the Insertion method (higher is better) points towards Blur IG (Xu et al., 2020).
    Refer also to Fig. 2 for a comparison between more images'
  source: https://link.springer.com/content/pdf/10.1007/s11263-024-02282-6.pdf#page=2
  width: 547
  height: 592
- label: Figure 2
  image: /images/publications/details/052-figure-2.webp
  alt: This plot illustrates the degree of similarity among all attribution maps.
  caption: This plot illustrates the degree of similarity among all attribution maps. The matrix was computed
    by averaging the individual correlation results across all attribution maps in the ImageNet dataset with
    ResNet-50
  source: https://link.springer.com/content/pdf/10.1007/s11263-024-02282-6.pdf#page=5
  width: 1156
  height: 826
bibtex: |
  @article{nieradzik2024reliableevaluationof52,
    title = {{Reliable Evaluation of Attribution Maps in CNNs - A Perturbation-Based Approach}},
    author = {Lars Nieradzik and Henrike Stephani and Janis Keuper},
    journal = {International Journal of Computer Vision},
    year = {2024},
    url = {https://link.springer.com/article/10.1007/s11263-024-02282-6},
    doi = {10.1007/s11263-024-02282-6}
  }
bibtex_file: /assets/bibtex/2024-reliable-evaluation-of-attribution-maps-in-cnns-a-perturbation-based-approach.bib
abstract: |-
  In this paper, we present an approach for evaluating attribution maps, which play a central role in interpreting the predictions of convolutional neural networks (CNNs). We show that the widely used insertion/deletion metrics are susceptible to distribution shifts that affect the reliability of the ranking. Our method proposes to replace pixel modifications with adversarial perturbations, which provides a more robust evaluation framework. By using smoothness and monotonicity measures, we illustrate the effectiveness of our approach in correcting distribution shifts. In addition, we conduct the most comprehensive quantitative and qualitative assessment of attribution maps to date. Introducing baseline attribution maps as sanity checks, we find that our metric is the only contender to pass all checks. Using Kendall’s τ rank correlation coefficient, we show the increased consistency of our metric across 15 dataset-architecture combinations. Of the 16 attribution maps tested, our results clearly show SmoothGrad to be the best map currently available. This research makes an important contribution to the development of attribution maps by providing a reliable and consistent evaluation framework. To ensure reproducibility, we will provide the code along with our results.
abstract_source: https://link.springer.com/content/pdf/10.1007/s11263-024-02282-6.pdf
content_status: complete
---
