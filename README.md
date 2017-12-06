# basehealth.com

BaseHealth Marketing Site 2018
by Peter Laxalt 2018 (laxaltandmciver.co) (peterlaxalt.dribbble.com)
Converted from Laravel Blade templates to Jekyll templates in December 2017.

## Built with Jekyll
1. Be sure you have Jekyll installed.  Reference the official Jekyll [documentation](https://jekyllrb.com/docs/installation/) for getting setup.
1. `git clone git@github.com:peterlaxalt/basehealth-jekyll.git`
1. `cd basehealth-jekyll`
1. `bundle exec jekyll serve`
1. Navigate to [http://127.0.0.1:4000/](http://127.0.0.1:4000/) or [localhost:4000](localhost:4000)

## LMNTS.SCSS
We're using a very early version of LMNTS for this build. So here's the table of contents:

1. vendor: external stylesheets
    1. `normalize.css`

2. global variables: variables as well as classes used site-wide
    1. `base`
    2. `palette`
    3. `mixins`
    4. `typography`
    5. `animations`

3. page structure: core structure of website
    1. `rows`
    2. `columns`

4. site modules
    1. `nav`
    2. `footer`
    3. `content`
    4. `hero`

5. page specific styling
    1. `product`
    2. `home`
    3. `contact`
    4. `cart`
    5. `login`
    6. `collections`
    7. `[insert section here]`

## Prefixing & Snippets

We utilize includes. Please prefix your includes accordingly. See below.

- `svg-name.html` These are SVG codes for icons, images, etc.
- `js-scriptname.js` Page-specific Javascript.
- `lmnt-name.html` These elements of our pages. Buttons, sections, Shogun elements, etc.
- `molecule-name.html` These are groups of elements working together for specific cases. For example, navigation for normal pages may be standard, but custom collection pages have a colorized/modified navigation.

This prefixing convention stems into our `styles.scss` file. Please prefix appropriately so your IDE can pull prefixes nicely for efficient coding. See below.

### Variable Prefixing
- `$fnt-name` Fonts.
- `$clr-name` Colors.
- `$base-size` Universal Sizing.

### Style Prefixing
- `.txt-classname` Text.
- `.btn-classname` Buttons.
- `.bg-classname` Background.
- `.anim-classname` Animation.
- `.col-width` Columns.
- `.row-style` Rows.
- `.lmnt-name-classname` Module focused styling. Use paired with your elements in `/snippets/`.

## Copyright

Copyright (c) 2017 BaseHealth - All Rights Reserved.

Proprietary and confidential.
