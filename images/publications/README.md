# Publication teasers

These WebP thumbnails reproduce figures from the lab's papers, or the authors' official project pages. They are resized and cropped for display; they are not generated illustrations. Copyright remains with the respective authors and publishers.

Each publication in `_data/sources.yaml` records:

- `description`: two original editorial sentences about the paper.
- `tags`: consistently named, searchable research topics.
- `teaser`: local thumbnail path, separate from the existing venue `image`.
- `teaser-alt`: a description of the figure for screen readers.
- `teaser-source`: the source PDF with its page number, or the original project illustration.
- `extra-links`: verified paper-specific resources; `source` links are labeled **Code**.

Edit `_data/sources.yaml`, then run `python auto-cite/auto-cite.py` with the dependencies in `auto-cite/requirements.txt` to regenerate `_data/citations.yaml`. Both data files are checked in. The existing Auto Cite workflow also regenerates citations when source data changes.

`_data/publication-review.yaml` records the source, figure crop (PDF points), code URL, and review status for each entry. Its order matches the publication source data. Code links were checked on 2026-09-20; absence of a link means no verified public implementation was found, not that none exists. An empty announced repository is not treated as released code.

## Remaining source material needed

94 of the 100 entries have original teaser figures. Six entries still need accessible PDFs or author-supplied figures:

| Paper | Remaining work |
| --- | --- |
| Assessing Domain Generalization of Semantic Segmenters with Synthetic Data | The existing workshop URL redirects to sign-in. Verify the scope-only description against the paper and add a figure. |
| Fréchet Inception Distance is Failing to Preserve Rank Consistency for Synthetic Out-of-Distribution Samples | OpenReview download blocked. Verify the scope-only description and add a figure. |
| Parameterized Adverse Lens Corruptions to Probe Model Robustness to Optical Tolerances | Abstract reviewed; full PDF download blocked. Add a figure. |
| We need theory-grounded explainability for abstract tasks to quantify model bias | Author announcement reviewed and missing paper link located; OpenReview download blocked. Check the full text and add a figure. |
| Combining Finetuning and RAG for Structured Output Prediction on a Multimodal High Velocity Retail Dataset | Scope and code verified on the official mSOP project page; OpenReview download blocked. Check the full text and add a figure. |
| Unsupervised Visual Concept Bottlenecks for Interpretable Bioimage Classification | OpenReview download blocked. Verify the scope-only description and add a figure. |

These entries retain their venue logo. No substitute figure or unverified result is presented as coming from the paper.
