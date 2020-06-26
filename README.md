# THE BOOK

Congratulations! Open the book <a href="https://bubblin.io/book/baby-girl-names-by-sonica-arora" class="cover">here</a>.


[![forthebadge](https://forthebadge.com/images/badges/built-by-hipsters.svg)](https://bubblin.io/about)
<a href="https://bubblin.io/book/baby-girl-names-by-sonica-arora" class="cover"><img src="https://camo.githubusercontent.com/6d0507b14426923c8c4afad849afd1c8391597d7/68747470733a2f2f666f7274686562616467652e636f6d2f696d616765732f6261646765732f636865636b2d69742d6f75742e737667" alt="forthebadge" data-canonical-src="https://forthebadge.com/images/badges/check-it-out.svg" style="max-width:100%;"></a>
[<img src="https://raw.githubusercontent.com/marvindanig/assets/master/bubblin.png" width="44px" title="Bubblin Superbooks">](https://bubblin.io)


This book uses the [Superbook](https://bubblin.io/docs/format) format and is brought to you by [Bubblin](https://bubblin.io/about)&#x2014;The Binge Reader. Also, the Book Publishing Company for the web.


<blockquote><p>Date of publication: <date id="date">April 29, 2020</date></p></blockquote>

### TABLET FIRST &amp; OFFLINE FIRST

Superbooks are naturally responsive and work on all browsers, all viewports and devices and all operating systems. See support information [here](https://bubblin.io/support) and the full list of supported devices [here](https://bubblin.io/devices). In general, the most ideal surface to read these books on (recommended) are the \~9&quot; tablets like the iPad or the Galaxy Tab or Kindle Fire HD, ala &apos;on-web&apos;.

This book is _offline-first_. Is uses a Service Worker under the hood, so no explicit download is required to read or share the book OFFLINE.



<a href="https://bubblin.io/book/baby-girl-names-by-sonica-arora" class="cover"><img src="https://camo.githubusercontent.com/3d05c191fd879f30eee14672539100b9d74e23e5/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f5375706572626f6f6b2d5075626c69736865642d627269676874677265656e2e737667" alt="Publication: Live" data-canonical-src="https://img.shields.io/badge/Superbook-Published-brightgreen.svg" style="max-width:100%;"></a>
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://bubblin.io/cover/we-by-eugene-zamyatin#frontmatter)
[![Blueoak license](https://img.shields.io/badge/Blueoak-Council-blue.svg)](https://blueoakcouncil.org/license/1.0.0)


We try and support cross-platform books&#x2014;feel free to raise an issue or submit a PR if you face a problem.

---

### THE MANUSCRIPT, ala this repo.

The manuscript on this repo has been generated programmatically using [Bookiza Abelone](https://bookiza.io), [h2s](https://github.com/bookiza/h2s) and a few other sanitization libraries.


:point_right: As part of the vocabulary of publishing with Bookiza, this git repo is the `manuscript` whereas the &apos;consumer-ready&apos; distributable form i.e. `book` is hosted _live_ on the url specified at the top.


### GOING FULLSCREEN

To be able to read the book in [fullscreen mode](https://bubblin.io/blog/fullscreen-api-ipad), please try the following steps:

- Open the book on iOS (&gt; 12.00) Safari
- Tap the `...` button at the bottom right of the screen to open Superbook controls.
- Tap `&#x292E;` on the top right (middle button) to go fullscreen.

iPadOS Safari v12.0 and above only.

### CONTRIBUTIONS

Contributions are super welcome.

1. If you are good at spotting typographical errors, detect (and fix) the widows &amp; orphans and understand how line-tracking works for texts, go ahead submit your PR.

2. This book may contain older illustrations. Feel free to replace those with new art of your own. All approved art will be reciprocated with credit (link) on the book to the artist.

Optionally, you can also fork this book and publish your own edition of the work with your own take. See details below.

## HACKING, FIXES AND TRANSLATION TO OTHER LANGUAGES


#### A. HACK THE BOOK

Follow the below-given steps to mint your own edition with different typesetting, art or illustrations or to make a translation in another language:

1. Fork this repository on Github,
2. Clone the forked repository,
3. Install the [Bookiza](https://bookiza.io) binaries (this step requires node and npm both),
4. `cd` and `$ npm install` the dependencies
5. Start the dev server with `$ bookiza server`

Bookiza will stitch up the manuscript and serve the book on `localhost:4567`. Open the project on your favorite editor (VSC, Sublime, Atom) and hack away!

Feel free to submit a PR or republish your own new edition! If you end up creating a new avatar of this book, please leave us a note here. We love looking at interesting new takes from people across the world and share it with the community.


#### B. SUBMITTING FIXES

PRs are welcome but only for issues pertaining to this book (on this repository).

#### C. TRANSLATIONS

Translation to other languages or new takes of the current text itself can earn you a copyright. If you fork out a new edition with a translation in your own language we will automatically consider the new work for a premium publication.

### SOURCE:

National Data on the relative frequency of given names in the population of U.S. births where the individual has a Social Security Number
(Tabulated based on Social Security records as of March 3, 2019)

Using lists for each year of birth YYYY after 1879, we created a uniqueified array of objects called `us.json`.
Each record in the individual annual files has the format "name, sex, number," where name is 2 to 15 characters, sex is M (male) or F (female) and "number" is the number of occurrences of the name.
Each file is sorted first on sex and then on number of occurrences in descending order.
When there is a tie on the number of occurrences, names are listed in alphabetical order.
This sorting makes it easy to determine a name's rank.
The first record for each sex has rank 1, the second record for each sex has rank 2, and so forth.
To safeguard privacy, we restrict our list of names to those with at least 5 occurrences.

### CONTACT US

<a href="https://bubblin.io/blog/contact">Contact us</a> by mail **once** if someone on our team doesn&apos;t already respond within 24 hours. Sometimes we get a lot of mail. Do not follow-up with a second mail unless absolutely necessary.

## LICENSE

The body of work on this book i.e. manuscript (text, illustrations etc.) is either in public domain or is available under a Free Culture license as indicated below:

[![forthebadge](https://forthebadge.com/images/badges/cc-by.svg)](https://creativecommons.org/licenses/by/4.0/)

The sourcecode (libraries) in use for this book have been licensed by their respective owners.
