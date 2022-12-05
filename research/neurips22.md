---
title: NeurIPS 22
nav:
  order: 2
  tooltip: Conference Summary 
---

# <i class="fas fa-microscope"></i>NeurIPS 22

<!-- Twitter embeds from https://publish.twitter.com/ -->


<a href="https://twitter.com/intent/tweet?screen_name=search&ref_src=twsrc%5Etfw" class="twitter-mention-button" data-size="large" data-related="keuperlabs" data-lang="en" data-show-count="false">Tweets from NeurIPS</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

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
  icon="fas fa-github"
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

### title
{% capture text %}
Find our latest papers on Computer Vision, Machine Learning and HPC topics...

{:.center}
{% endcapture %}

{%
  include feature.html
  image="images/paper.jpg"
  link="research"
  title="Our Research"
  text=text
%}
