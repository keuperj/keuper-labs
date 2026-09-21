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

99 of the 100 entries now have original paper teaser figures. Only **Assessing Domain Generalization of Semantic Segmenters with Synthetic Data** still needs its full paper, original abstract, and figures. Its existing workshop URL is not a paper download; its current summary remains scope-only.

The six PDFs supplied on 2026-09-21 have been reviewed and incorporated. See [Papers needing PDFs](../../docs/publications-needing-pdfs.md) for the completed items and the remaining request.

## Publication detail pages

Each source entry now has a `detail-page` URL pointing to its document in `_publications/`. The research list links to these pages; the original external `link` remains the paper resource. The `publications` collection uses the shared `_layouts/publication.html` layout and works with GitHub Pages without a custom Jekyll plugin.

The detail documents contain the original abstract and its source, an editorial `why` section written for a general audience, figures with captions and source-page links, and BibTeX. `images/publications/details/` contains 198 larger, optimized WebP figures: two for each of the 99 accessible papers. The mSOP-765k page now uses its supplied full PDF for both figures and the abstract. Full-size figure links allow readers to inspect small labels.

Abstracts and captions were extracted from the linked sources, with PDF line breaks, ligatures, and broken word spacing normalized. The equation-heavy caption for “Trading off Image Quality for Robustness…” Figure 1 is a prose adaptation, recorded in the review data. Figure crops and abstract sources are documented in `_data/publication-review.yaml`.

BibTeX uses known author, title, year, venue, and URL metadata. Unknown volume, page, and identifier fields are omitted. Keep a document's `bibtex` field and its corresponding `assets/bibtex/*.bib` download synchronized when editing a citation. The copy button falls back to selecting the citation if clipboard access is unavailable; the text and download remain available without JavaScript.

For the **one remaining PDF needed**, see [Papers needing PDFs](../../docs/publications-needing-pdfs.md).

## Related publications

`_data/related-publications.yaml` contains three editorially selected related lab-paper URLs for every page. Links emphasize follow-up studies, earlier versions, shared methods, and closely related applications. The layout resolves titles and venues from the citation data so corrections stay synchronized. Keep these URLs stable when updating paper titles. When adding a publication, add its related-paper links here and consider linking back to it from existing relevant pages.
