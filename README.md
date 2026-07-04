# Merit & Mint — skincare site

A three-page site: **Home** (`index.html`), **Shop** (`shop.html`), and **Contact** (`contact.html`), sharing one stylesheet and one script.

```
verdant-site/
├─ index.html        Home
├─ shop.html         Shop (filtering + quick-view)
├─ contact.html      Contact / enquiry form
└─ assets/
   ├─ style.css      All styling + colours
   └─ script.js      Products + interactions
```

## View it
Double-click `index.html` — it runs in any browser, no build step.
(Product filtering works from any local browser; the `?product=` prefill works best once hosted, or via a local server: `python3 -m http.server` then open `http://localhost:8000`.)

## Rebrand
Brand name is set to **Merit & Mint** across all three HTML files.
1. **Logo:** in each file, the `<a class="brand">…</a>` in the header/footer is text. Swap it for `<img src="assets/logo.svg" alt="Brand">` and drop your file in `assets/` once you have one.
2. **Colours:** open `assets/style.css`, edit the values under `:root` at the top — `--sage` and `--ink` drive most of the look.
3. **Fonts:** currently Cormorant Garamond + Jost (loaded from Google Fonts). Change the `<link>` in each file's `<head>` to swap.

## Products
Catalog covers six categories: **Liquid Soap, Hand Soap, Moisturizer, Shampoo, Conditioner, Shower Gel** (two products each, 12 total). All product data lives in one place: the `PRODUCTS` array at the top of `assets/script.js`. Edit names, prices, categories, descriptions, and detail bullets there — Home and Shop update automatically. Adding/removing a category also needs a matching filter button in `shop.html`. Product images are placeholder tiles; replace the `.card-img` / `.modal-img` blocks with `<img>` when you have photos.

## Make the contact form actually send
Right now the form is front-end only — it shows a success state but doesn't deliver mail. Two easy options, no server needed:
- **Formspree / Web3Forms / Getform:** sign up, get an endpoint URL, and set the form's `action` to it. Then remove the `e.preventDefault()` handler in `script.js` (the `contact-form` block) so it submits normally.
- **mailto:** change the form to a `mailto:` link if you just want it to open the customer's email app.

## Host it (free)
Netlify Drop, Cloudflare Pages, GitHub Pages, or Vercel — drag this folder in and it's live.

Everything reading "placeholder" is meant to be swapped.
