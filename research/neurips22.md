---
title: NeurIPS 22

---

# <i class="fas fa-microscope"></i>NeurIPS 22

<!-- Twitter embeds from https://publish.twitter.com/ -->

<a class="twitter-timeline" data-width="1000" data-height="1200" href="https://twitter.com/search?q=from%3A%40KeuperLabs %23NeurIPS2022 include%3Aretweets include%3Anativeretweets">Recent Tweets</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## Full Paper

### Trading off Image Quality for Robustness is not Necessary with Regularized Deterministic Autoencoders
#### Amrutha Saseendran, Kathrin Skubch, Margret Keuper
{% capture text %}
The susceptibility of Variational Autoencoders (VAEs) to adversarial attacks indicates the necessity to evaluate the robustness of the learned representations along
with the generation performance. The vulnerability of VAEs has been attributed
to the limitations associated with their variational formulation. Deterministic autoencoders could overcome the practical limitations associated with VAEs and
offer a promising alternative for image generation applications. In this work, we
propose an adversarially robust deterministic autoencoder with superior performance in terms of both generation and robustness of the learned representations.
We introduce a regularization scheme to incorporate adversarially perturbed data
points to the training pipeline without increasing the computational complexity or compromising the generation fidelity when compared to the robust VAEs
by leveraging a loss based on the two-point Kolmogorov–Smirnov test between
representations. We conduct extensive experimental studies on popular image
benchmark datasets to quantify the robustness of the proposed approach based
on the adversarial attacks targeted at VAEs. Our empirical findings show that the
proposed method achieves significant performance in both robustness and fidelity
when compared to the robust VAE models.

{%
  include link.html
  link="https://github.com/boschresearch/Robust_GMM_DAE"
  text="Source"
  icon="fa-brands fa-github"
  flip=true
%}
{% endcapture %}

{%
  include feature.html
  image="images/paper.jpg"
  link="https://pure.mpg.de/rest/items/item_3473164/component/file_3473165/content"
  title="Abstract"
  text=text
%}

### Robust Models are less Over-Confident 
#### Julia Grabinski, Paul Gavrikov, Janis Keuper, Margret Keuper
{% capture text %}
Despite the success of convolutional neural networks (CNNs) in many academic
benchmarks for computer vision tasks, their application in the real-world is still
facing fundamental challenges. One of these open problems is the inherent lack of
robustness, unveiled by the striking effectiveness of adversarial attacks. Current
attack methods are able to manipulate the network’s prediction by adding specific
but small amounts of noise to the input. In turn, adversarial training (AT) aims to
achieve robustness against such attacks and ideally a better model generalization
ability by including adversarial samples in the trainingset. However, an in-depth
analysis of the resulting robust models beyond adversarial robustness is still pending. In this paper, we empirically analyze a variety of adversarially trained models
that achieve high robust accuracies when facing state-of-the-art attacks and we
show that AT has an interesting side-effect: it leads to models that are significantly
less overconfident with their decisions, even on clean data than non-robust models.
Further, our analysis of robust models shows that not only AT but also the model’s
building blocks (like activation functions and pooling) have a strong influence on
the models’ prediction confidences.

{% endcapture %}

{%
  include feature.html
  image="images/paper.jpg"
  link="https://arxiv.org/pdf/2210.05938.pdf"
  title="Abstract"
  text=text
%}

## Workshop Paper

### MedNeurIPS Workshop: Does Medical Imaging learn different Convolution Filters?
#### Paul Gavrikov, Janis Keuper
{% capture text %}
Recent work has investigated the distributions of learned convolution filters through a large-scale study containing hundreds of heterogeneous image models. Surprisingly, on average, the distributions only show minor drifts in comparisons of various studied dimensions including the learned task, image domain, or dataset. However, among the studied image domains, medical imaging models appeared to show significant outliers through "spikey" distributions, and, therefore, learn clusters of highly specific filters different from other domains. Following this observation, we study the collected medical imaging models in more detail. We show that instead of fundamental differences, the outliers are due to specific processing in some architectures. Quite the contrary, for standardized architectures, we find that models trained on medical data do not significantly differ in their filter distributions from similar architectures trained on data from other domains. Our conclusions reinforce previous hypotheses stating that pre-training of imaging models can be done with any kind of diverse image data.

{:.center}
{% endcapture %}

{%
  include feature.html
  image="images/paper.jpg"
  link="https://arxiv.org/pdf/2210.13799"
  title="Abstract"
  text=text
%}
