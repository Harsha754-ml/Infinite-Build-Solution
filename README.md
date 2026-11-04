\# Infinite Building Solutions Website



Marketing website for \*\*Infinite Building Solutions\*\*, a construction, architecture and interiors firm based in Mysuru, Karnataka. The site showcases the firm's completed and ongoing work, its background, and how to get in touch.



This is the pre-launch version, prepared for deployment at www.infinitebs.in.



It is a static site (HTML, CSS and JavaScript only). There is no build step and no dependencies.



\## Pages



\- \*\*Home\*\*: hero, services, a sneak peek of selected projects, overseas experience and a call to action

\- \*\*Our work\*\*: project gallery

\- \*\*About\*\*: the firm's story, team and approach

\- \*\*Contact\*\*: enquiry form, phone, WhatsApp, email and office address



Each page is its own HTML file so search engines can index them separately: `index.html` (Home), `our-work.html` (Our Work, including Glimpses of Abroad at `#abroad`), `about.html` and `contact.html`.

\## Project structure

```
index.html, our-work.html, about.html, contact.html   pages
404.html          not found page
sitemap.xml       list of pages for search engines
robots.txt        crawler rules and sitemap location
css/style.css     all styling and brand colours
js/script.js      project data, mobile menu and contact form
images/           logo and project photos
```

\## SEO

Every page has its own title, meta description, canonical URL, Open Graph and Twitter tags. Business details are added as JSON-LD structured data (GeneralContractor). The live domain is set to `https://www.infinitebs.in` in the canonical tags, `sitemap.xml` and `robots.txt`. If the domain changes, find and replace it in those files. After going live, submit `https://www.infinitebs.in/sitemap.xml` in Google Search Console and Bing Webmaster Tools.

\## Run locally



Open `index.html` in any browser. Keep the folder structure as it is so the images load.



\## Editing content



\*\*Add or change a project\*\*

Each project is one entry in the `P` list at the top of `js/script.js`. Add the photo to `images/`, then set the entry's `i` field to its path, for example `images/my-project.jpg`. Only projects that have a photo are shown on the Our work page.



\*\*Change hero images\*\*

The hero image for each page is set at the bottom of `css/style.css` (classes `.i1` to `.i5`). Replace the files in `images/` or update the paths.



\*\*Change colours\*\*

Brand colours are defined at the top of `css/style.css`:



| Variable | Use |

| --- | --- |

| `--or` | Logo orange, used for accents and buttons |

| `--ink` | Logo charcoal |

| `--pe` | Deep petrol teal, the complementary colour for dark sections |



\*\*Contact details\*\*

Update the phone number, email and address in `index.html` (Contact section and footer) and the email address in `js/script.js`.



\## Contact form



The form currently opens the visitor's email app with the enquiry filled in (`mailto:`). To receive enquiries directly in an inbox, connect a form service such as Formspree or add a small backend.



\## Deployment

Because the site is static, it can be hosted anywhere. Upload all files to the root of the web host for `www.infinitebs.in`, keeping the folder structure as it is. `sitemap.xml` and `robots.txt` must sit at the top level so they open at `https://www.infinitebs.in/sitemap.xml` and `https://www.infinitebs.in/robots.txt`.



\## To do



\- Replace the web-sized images with original, high-resolution project photos

\- Add a showreel from the firm's project videos

\- Add photos for the remaining projects

\- Add client testimonials

\- Connect the contact form to an inbox



\## Credits



Design and development by Arati. Project details and photographs are provided by Infinite Building Solutions.

