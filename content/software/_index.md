---
title: "Software"
---

*last updated March 26, 2020*

# Neural Network Simulations

We develop and use the *emergent* neural network simulation system for our research and teaching.  As of March, 2020, we have largely completed a transition to a brand new framework written in the [Go](https://golang.org) language, which can be directly accessed via Python by using the [GoPy](https://github.com/go-python/gopy) tool that directly exposes the full Go interface transparently to Python.

* [emergent](https://github.com/emer/emergent)

* [CCN textbook simulations](https://github.com/CompCogNeuro/sims) -- used in teaching.

* [CCN Online Textbook](https://grey.colorado.edu/CompCogNeuro/index.php/CCNBook/Main)

* [CCNLab github page](https://github.com/CCNLab) -- published models, papers, detailed data and results are available in here, along with all our lab figures.  We open up repositories to the public when a project is published.

The [previous C++ version of *emergent*](https://grey.colorado.edu/emergent/index.php/Main_Page) is no longer being developed.

The new version allows much more end-user control and flexibility, and is based on the now-standard paradigm of "just writing code" to create your simulation model and run it.  The Go emergent system provides a varying levels of standard toolkits (packages) for the neural models and a range of GUI tools for visualizing and analyzing the models.

# OpenSource & Cloud-based Lab Tech

We have now migrated almost everything over to opensource and cloud-based services.  Most of it is centered around github, including this website.  Here are the links:

* CCNLab github: https://github.com/CCNLab -- academic organization can have free private repositories so we have a lot here that you can't see, for work in progress.  The general policy is to have a new repository for each project, that contains the models, papers, expt scripts (but not raw data!) for each such project.  When the project is published, the repository can be made public.  All our older projects are in large topic-level repositories migrated from svn so they aren't public.

* This public website is written in [Hugo](https://gohugo.io) and hosted very easily on [Netlify](https://netlify.com).  We also have an internal website using same tech that is hosted on our own server -- not sure yet if netlify can do private pages..

* Opensource slack alternative that we use for our lab: [Zulip](https://zulipchat.com) -- has full source on github and can be hosted on your own server for free, or you can use their server and pay same pricing as slack.  Has the advantage of supporting full markdown and also has clear topic-level organization within streams for better organization.  Overall we are now finding that zulip supplants most of the prior wiki use-cases and is really an indespensible tool for lab collaboration!  Posting and discussing incremental results etc is very easy.

* Email lists are on [google groups](https://groups.google.com)

* [Zotero CCNLab](https://www.zotero.org/groups/340666/ccnlab) -- you are welcome to join our group and tap into roughly 30k citations of all the best research :)  Lots of PDF's in there.  We use [Better Bibtex](https://github.com/retorquere/zotero-better-bibtex) and http://zotfile.com/ plugins to work with LaTeX / BibTeX -- great tools.

# Zotero config

Notes for anyone using the CCNLab zotero setup:

0. For first sync with the client to desktop, probably better to set Sync to `as needed` to get the library downloaded quickly, and then do `at sync time` if you want later and let it churn overnight with a good network connection.

1. Install Better Bibtex: https://retorque.re/zotero-better-bibtex/  (install in `Tools/Add Ons`) -- this adds a `Citekey` field which we use to track all references and cite in bibtex -- provides a handy way to refer to a paper.

2. Configure citation key in `Preferences / Better Bibtex` as:

```
[authors3][shortyear]
```

3. Install Zotfile: http://zotfile.com/ and set `Tools / ZotFile preferences / Renaming Rules` `Renaming format` to `{%b}` (for all item types except patents -- we don't care about patents so leave as is).

4. Set `General / Preferences` to `Automatically rename attachment files using parent metadata` -- this in conjunction with Zotfile renames pdf's using citekey.

5. Be sure to check for an existing entry before adding, and if you accidentally add a duplicate (it will end with `a` in the citekey as a clue) please delete it or merge it using `Duplicate items` section.

