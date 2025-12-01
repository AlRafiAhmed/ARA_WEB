## Rafi's Professional Portfolio Website

A complete, responsive multi-page portfolio website built with HTML, Tailwind CSS (via CDN), and vanilla JavaScript.

### 🌟 Key Features

- **7 complete pages**: `index`, `about`, `projects`, `certificates`, `services`, `cv`, and `contact`
- **100% responsive layout** for mobile, tablet, and desktop
- **Dark/Light mode** with preference saved in `localStorage`
- **Mobile-first navbar** with a **black background on small screens** for perfect visibility
- **Smooth animations**: scroll-triggered fade‑in sections
- **Interactive modals**: for projects and certificates
- **Embedded CV PDF**: CV page shows a PDF viewer for `Rafis CV Resume.pdf`

### 📁 Project Structure

```text
ARA_WEB/
├── index.html              # Home page
├── about.html              # About me page
├── projects.html           # Projects showcase
├── certificates.html       # Certificates gallery (driven by JS data)
├── services.html           # Services and pricing
├── cv.html                 # CV page (embeds the PDF)
├── contact.html            # Contact & social links
├── Rafis CV Resume.pdf     # CV shown inside cv.html
├── img/                    # Images used across the site
│   ├── gmn-1.JPG           # Home profile photo
│   ├── gmn-2.JPG           # About page photo
│   ├── c1.PNG ... c13.jpg  # Certificate images
│   └── other assets        # Project/placeholders
├── js/
│   └── main.js             # Shared JavaScript
└── README.md               # This file
```

## 🚀 Getting Started

### 1. Open the site locally

- Open `index.html` directly in your browser (double‑click or “Open With → Browser”).

### 2. Replace the profile photos

1. Put your own photos into the `img/` folder.
2. Update the `<img>` tags in:
   - `index.html` (home profile image)
   - `about.html` (about-page photo)
3. Recommended size: roughly square, e.g. 800×800px.  
4. Supported formats: JPG, JPEG, PNG.

### 3. Add or update certificate images

1. Place certificate images in the `img/` folder (the project currently uses names like `c1.PNG` … `c13.jpg`).
2. In `certificates.html`, edit the `certificates` array to match your filenames, titles, and descriptions.

### 3. Customize Content

#### Personal Information
Update the following in each HTML file:
- **Name**: Replace "Rafi" with your name
- **Email**: Update email in `contact.html`
- **Phone**: Update phone number in `contact.html`
- **Location**: Update location in `contact.html`
- **Social Media Links**: Update social media URLs in all pages

#### About Page (`about.html`)
- Update bio text
- Modify skills lists
- Update experience timeline
- Update education section

#### Projects Page (`projects.html`)
- Update project cards with your projects
- Modify project modals with your details
- Update tech stacks

#### Certificates Page (`certificates.html`)
- Update certificate names and details
- Add/remove certificate cards
- Update certificate modals

#### Services Page (`services.html`)
- Update service descriptions
- Modify pricing plans
- Update CTA text

#### CV Page (`cv.html`)
- Replace `Rafis CV Resume.pdf` with your own PDF (same name), **or** change the `<iframe src="...">` to point to your file.
- Adjust any text or headings if you change the CV file or purpose of the page.

## 🎨 Customization Guide

### Changing Colors

The website uses Indigo as the primary color. To change it:

1. Search and replace `indigo-600` with your color (e.g., `blue-600`, `purple-600`)
2. Search and replace `indigo-400` with your color variant
3. Search and replace `indigo-700` with your darker variant

**Files to update:**
- All HTML files (navbar, buttons, links, etc.)

### Modifying Navigation

The navigation is consistent across all pages. To update:

1. Edit the navbar section in any HTML file
2. Copy the updated navbar to all other pages
3. Update active page highlighting (change `text-indigo-600` to `text-gray-700` for inactive pages)

### Adding New Pages

1. Create a new HTML file (e.g., `blog.html`)
2. Copy the structure from an existing page
3. Update the navigation in all pages to include the new link
4. Update the active page indicator

## 📱 Responsive Design

The website is fully responsive using Tailwind's responsive utilities:
- **Mobile**: Default styles
- **Tablet**: `md:` prefix (768px+)
- **Desktop**: `lg:` prefix (1024px+)

## 🌙 Dark Mode

Dark mode is implemented using Tailwind's dark mode classes:
- Toggle button in the navbar
- Preference saved in localStorage
- Automatically applies on page load

## 🔧 JavaScript Features

### Main Functions (`js/main.js`)

1. **ThemeManager**: Handles dark/light mode toggle
2. **MobileNav**: Mobile hamburger menu functionality
3. **SmoothScroll**: Smooth scrolling for anchor links
4. **ScrollAnimations**: Fade-in animations on scroll
5. **ModalManager**: Opens/closes modals
6. **FormValidator**: Validates contact form

### Adding New Modals

1. Create modal HTML structure:
```html
<div id="my-modal" class="modal hidden fixed inset-0 z-50 overflow-y-auto">
    <div class="modal-overlay fixed inset-0 bg-black bg-opacity-50"></div>
    <div class="flex items-center justify-center min-h-screen px-4">
        <div class="modal-content bg-white dark:bg-slate-800 rounded-xl max-w-2xl w-full p-6 relative">
            <button class="modal-close absolute top-4 right-4">×</button>
            <!-- Modal content -->
        </div>
    </div>
</div>
```

2. Add open button:
```html
<button onclick="ModalManager.openModal('my-modal')">Open Modal</button>
```

## 📤 Deploying to GitHub Pages

### Method 1: Using GitHub Web Interface

1. Create a new repository on GitHub
2. Upload all files to the repository
3. Go to **Settings** → **Pages**
4. Select **Source**: `main` branch
5. Select **Folder**: `/ (root)`
6. Click **Save**
7. Your site will be live at: `https://yourusername.github.io/repository-name/`

### Method 2: Using Git Commands

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit"

# Add remote repository
git remote add origin https://github.com/yourusername/your-repo.git

# Push to GitHub
git push -u origin main
```

Then follow steps 3-7 from Method 1.

### Important Notes for GitHub Pages

- **Base Path**: If your repository name is not `yourusername.github.io`, you need to update all internal links
- Update all `href` attributes to include the repository name:
  ```html
  <!-- Change from: -->
  <a href="about.html">
  
  <!-- To: -->
  <a href="/repository-name/about.html">
  ```
  
  Or use relative paths (which should work if all files are in root):
  ```html
  <a href="./about.html">
  ```

## 🐛 Troubleshooting

### Images Not Showing
- Check file paths are correct
- Ensure image files exist in the specified folders
- Check file names match exactly (case-sensitive)

### Dark Mode Not Working
- Ensure `js/main.js` is loaded in all HTML files
- Check browser console for JavaScript errors
- Verify Tailwind CDN is loaded before the script

### Modals Not Opening
- Check modal IDs match between button and modal
- Ensure `ModalManager.init()` is called in `main.js`
- Verify JavaScript is loaded correctly

### Form Validation Not Working
- Ensure form has `id="contact-form"`
- Check input fields have `name` attributes
- Verify `FormValidator.init()` is called

## 📝 License

This project is open source and available for personal and commercial use.

## 🤝 Support

For issues or questions:
1. Check this README first
2. Review the code comments
3. Check browser console for errors

## ✨ Credits

- **Framework**: Tailwind CSS (CDN)
- **Icons**: Heroicons (SVG)
- **Design**: Custom design with Tailwind utilities

---

**Note**: Remember to replace placeholder content with your actual information, photos, and project details before deploying!
