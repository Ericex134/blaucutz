# BLAU CUTZ - Rebellious Minimal Barbershop Website

A sleek, minimal, and rebellious website for Blau Cutz barbershop featuring a video background hero section and clean black/white aesthetic.

## 🌟 Features

- **Minimal Dark Design**: Clean black, white, and gray color scheme
- **Video Background Hero**: Dynamic video background with autoplay
- **Mobile-First Design**: Optimized for mobile devices with responsive layout
- **Services & Pricing**: Clear pricing display for all barbering services
- **Image Gallery**: Showcase your best work (placeholder images included)
- **Calendly Integration**: Direct booking link for appointments
- **Social Media Links**: Instagram, TikTok, and booking integration
- **Contact Information**: Complete business details and hours
- **Smooth Animations**: Minimal animations and hover effects
- **Fast Loading**: Optimized performance for all devices

## 🎨 Design Philosophy

**MINIMAL. REBELLIOUS. CLEAN.**

- Pure black backgrounds (#000000)
- Clean white text and accents (#ffffff) 
- Subtle gray elements (#999999)
- No flashy colors - just pure style
- Sharp, angular design elements
- Professional yet edgy aesthetic

## 📱 Mobile Optimization

This website is built with mobile users in mind:
- Touch-friendly navigation
- Video background optimized for mobile
- Fast loading times
- Responsive grid layouts
- Easy-to-read typography

## 🎬 Video Background Setup

### Adding Your Video

1. **Prepare your video file:**
   - **Format**: MP4 (best compatibility)
   - **Resolution**: 1920x1080 minimum (4K preferred)
   - **Duration**: 10-30 seconds (will loop)
   - **File size**: Keep under 10MB for fast loading
   - **Content ideas**: Barbershop action, clippers in motion, before/after cuts

2. **Optimize for web:**
   - Compress using tools like HandBrake or Adobe Media Encoder
   - Remove audio track (videos autoplay muted)
   - Use H.264 codec for best compatibility

3. **Add to website:**
   - Name your video file `hero-video.mp4`
   - Place it in the same folder as `index.html`
   - The video will autoplay, loop, and be muted automatically

### Video Requirements
- **Aspect ratio**: 16:9 (landscape)
- **No text overlays** (text is handled by HTML)
- **Dark/moody footage** works best with the minimal theme
- **Smooth, professional motion**

## 🛠️ Setup Instructions

1. **Upload Files**: Upload all files (`index.html`, `styles.css`, `script.js`) to your web hosting service
2. **Add Video**: Upload your `hero-video.mp4` file
3. **Update Links**: Replace placeholder links with your actual social media and Calendly URLs
4. **Add Images**: Replace gallery placeholders with your actual work photos
5. **Customize Content**: Update business information, services, and prices

## 📝 Customization Guide

### Update Business Information

In `index.html`, find and update:

```html
<!-- Business Name -->
<h2>BLAU<span class="accent">CUTZ</span></h2>

<!-- Address -->
<p>123 Street Name</p>
<p>City, State 12345</p>

<!-- Phone Number -->
<p>(555) 123-CUTZ</p>

<!-- Business Hours -->
<p>MON-FRI: 10AM - 8PM</p>
<p>SAT: 9AM - 7PM</p>
<p>SUN: 11AM - 5PM</p>
```

### Update Social Media Links

Replace these URLs with your actual links:

```html
<!-- Instagram Link -->
<a href="https://instagram.com/blaucutz" target="_blank">

<!-- TikTok Link -->
<a href="https://tiktok.com/@blaucutz" target="_blank">

<!-- Calendly Booking Link -->
<a href="https://calendly.com/blaucutz" target="_blank">
```

### Add Real Images

Replace the gallery placeholders in the `.gallery-grid` section with actual images:

```html
<div class="gallery-item">
    <img src="path/to/your/image.jpg" alt="Description">
</div>
```

### Update Services and Prices

Current pricing structure:

- **THE CLASSIC** - $30 (Clean fade, sharp lines)
- **BEARD GAME** - $20 (Sculpt that face fur)
- **THE FULL EXPERIENCE** - $45 (Cut + beard + styling)
- **SKIN FADE** - $35 (Precision blade work)
- **BUZZ CUT** - $15 (Keep it simple, keep it fresh)
- **KIDS CUT** - $20 (Little rebels deserve fresh cuts too)

## 🎨 Color Customization

The minimal theme uses CSS variables for easy customization:

```css
:root {
    --primary-bg: #000000;     /* Pure black background */
    --secondary-bg: #111111;   /* Slightly lighter black */
    --accent-color: #ffffff;   /* White accents */
    --text-light: #ffffff;     /* White text */
    --text-gray: #999999;      /* Gray secondary text */
    --border-color: #333333;   /* Subtle borders */
}
```

## 📋 To-Do After Setup

1. ✅ Add your barbershop video (`hero-video.mp4`)
2. ✅ Replace all placeholder content with real business information
3. ✅ Add real photos to the gallery section
4. ✅ Update social media links
5. ✅ Set up Calendly integration
6. ✅ Test video playback on mobile devices
7. ✅ Optimize video file size for fast loading
8. ✅ Set up Google Analytics (optional)

## 🔧 Technical Details

- **HTML5**: Semantic markup with video element
- **CSS3**: Modern styling with CSS variables and flexbox/grid
- **JavaScript**: Interactive features and video controls
- **Font Awesome**: Icons for visual elements
- **Google Fonts**: Bold typography (Bebas Neue + Oswald + Roboto)
- **Video**: HTML5 video with autoplay, loop, and muted attributes

## 📱 Browser Support

- Chrome (latest) ✅
- Firefox (latest) ✅
- Safari (latest) ✅
- Edge (latest) ✅
- Mobile browsers (iOS Safari, Chrome Mobile) ✅
- Video autoplay supported on all modern browsers

## 🚀 Performance Features

- Optimized video loading with fade-in effect
- Compressed CSS and JavaScript
- Efficient animations with GPU acceleration
- Mobile-optimized video settings
- Fast loading times with minimal assets

## 📞 Support

For any questions or customization help, please contact your web developer.

---

**MINIMAL. REBELLIOUS. FRESH.**

*Built for the streets, optimized for rebels* 🖤 