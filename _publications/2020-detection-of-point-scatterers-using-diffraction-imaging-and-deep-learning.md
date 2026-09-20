---
layout: publication
title: Detection of point scatterers using diffraction imaging and deep learning
description: Weak diffraction signals can reveal geological details that conventional reflections miss. This
  work combines diffraction imaging with a CNN trained on synthetic examples to locate subsurface scattering
  points, including challenging signals in field data.
why: Small geological features can leave faint signals that are overwhelmed by stronger reflections. This work
  teaches a model to recognize those signals using simulated examples, then tests it on field recordings. It
  offers a way to make otherwise hard-to-see underground structures easier to locate.
figures:
- label: Figure 1
  image: /images/publications/details/003-figure-1.webp
  alt: Ray-pair geometry for local-angle-domain seismic diffraction imaging.
  caption: Two-dimensional representation of the local angle domain imaging geometry. A ray pair obtained by
    shooting from the migration point p(x, z) and reaching a source/receiver pair is drawn. Vectors νd and
    νu are the tangents to the slowness vectors of the down- and up-going rays at p. The dip vector ν is defined
    as the sum of those vectors, and migration dip ν is the angle between ν and the vertical. The opening angle
    θ is the angle between νd and νu. n is the normal to the locally planar geological reflector.
  source: https://hal.science/hal-02354803/document#page=4
  width: 524
  height: 405
- label: Figure 2
  image: /images/publications/details/003-figure-2.webp
  alt: Two-dimensional illustration of the dip angle response, drawn for the zero-offset case, of (a) a horizontal
    planar reflector at depth z = zr separating two constant velocity half-spaces (b) a point scatterer in
    a constant velocity space located in (xs, zs).
  caption: Two-dimensional illustration of the dip angle response, drawn for the zero-offset case, of (a) a
    horizontal planar reflector at depth z = zr separating two constant velocity half-spaces (b) a point scatterer
    in a constant velocity space located in (xs, zs). The central row represents the subsurface model. p0,
    p1 and p2 are migration points. Ray pairs are plotted for p0 as well as the corresponding minimum and maximum
    dip-vectors (see Fig. 1). The upper row shows the recorded wave field. Colour-coded diffraction curves
    of the three migration points are displayed on the seismograms. The bottom panel represents the migrated
    wavefield sorted as dip angle gathers. Coloured wiggles correspond to the amplitudes picked by the migration
    operators.
  source: https://hal.science/hal-02354803/document#page=5
  width: 1156
  height: 848
bibtex: |
  @article{tschannen2020detectionofpoint3,
    title = {{Detection of point scatterers using diffraction imaging and deep learning}},
    author = {Valentin Tschannen and Matthias Delescluse and Norman Ettrich and Janis Keuper},
    journal = {Geophysical Prospecting},
    year = {2020},
    url = {https://www.earthdoc.org/content/journals/10.1111/1365-2478.12889?crawler=true&mimetype=application/pdf},
    doi = {10.1111/1365-2478.12889}
  }
bibtex_file: /assets/bibtex/2020-detection-of-point-scatterers-using-diffraction-imaging-and-deep-learning.bib
abstract: |-
  Diffracted waves carry high-resolution information that can help interpreting fine structural details at a scale smaller than the seismic wavelength. However, the diffraction energy tends to be weak compared to the reflected energy and is also sensitive to inaccuracies in the migration velocity, making the identification of its signal challenging. In this work, we present an innovative workflow to automatically detect scattering points in the migration dip angle domain using deep learning. By taking advantage of the different kinematic properties of reflected and diffracted waves, we separate the two types of signals by migrating the seismic amplitudes to dip angle gathers using prestack depth imaging in the local angle domain. Convolutional neural networks are a class of deep learning algorithms able to learn to extract spatial information about the data in order to identify its characteristics. They have now become the method of choice to solve supervised pattern recognition problems. In this work, we use wave equation modelling to create a large and diversified dataset of synthetic examples to train a network into identifying the probable position of scattering objects in the subsurface. After giving an intuitive introduction to diffraction imaging and deep learning and discussing some of the pitfalls of the methods, we evaluate the trained network on field data and demonstrate the validity and good generalization performance of our algorithm. We successfully identify with a high-accuracy and high-resolution diffraction points, including those which have a low signal to noise and reflection ratio. We also show how our method allows us to quickly scan through high dimensional data consisting of several versions of a dataset migrated with a range of velocities to overcome the strong effect of incorrect migration velocity on the diffraction signal.
abstract_source: https://hal.science/hal-02354803/document
content_status: complete
---
