# Customization Guide

This guide will help you personalize your portfolio website.

## Quick Start

1. **Update Your Personal Information**

Open `src/app/app.ts` and modify:

```typescript
name = 'Your Name';  // Change to your actual name
title = 'Full Stack Developer';  // Change to your job title
```

2. **Add Your Projects**

In the same file, update the `projects` array:

```typescript
projects = [
  {
    title: 'Your Project Name',
    description: 'Brief description of your project',
    technologies: ['Tech1', 'Tech2', 'Tech3'],
    link: 'https://yourproject.com'  // or GitHub link
  },
  // Add more projects...
];
```

3. **Update Your Skills**

Modify the `skills` array:

```typescript
skills = [
  'Skill1', 'Skill2', 'Skill3', // Add your skills
];
```

## Styling Customization

### Change Colors

Edit `tailwind.config.js` to add custom colors:

```javascript
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#1e3a8a',
        'custom-purple': '#7c3aed',
      }
    },
  },
  plugins: [],
}
```

Then use them in your HTML:
```html
<div class="bg-custom-blue text-white">...</div>
```

### Modify the Hero Section

Open `src/app/app.html` and find the hero section (starts with `<section id="home">`).

Change the gradient:
```html
<section id="home" class="... bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500">
```

### Change Navigation Style

Find the `<nav>` element and modify classes:
- Background: `bg-white` → `bg-gray-900`
- Text color: `text-gray-700` → `text-white`

### Update Section Backgrounds

Search for sections and change:
- `bg-white` → `bg-gray-50` or any color
- `bg-gray-50` → `bg-gray-100` for contrast

## Content Sections

### About Section

Replace the placeholder text in the about section:

```html
<p class="text-lg text-gray-600 mb-6">
  Write your own introduction here...
</p>
```

### Add Profile Image

Replace the colored circle with your image:

```html
<!-- Find this: -->
<div class="w-64 h-64 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-full mx-auto"></div>

<!-- Replace with: -->
<img src="path/to/your/image.jpg" 
     alt="Your Name" 
     class="w-64 h-64 rounded-full mx-auto object-cover shadow-xl">
```

Place your image in the `public` folder.

### Contact Form

To make the contact form functional:

1. Add form handling in `app.ts`:

```typescript
onSubmit(formData: any) {
  // Add your form handling logic
  console.log('Form submitted:', formData);
  // You can integrate with services like EmailJS, Formspree, etc.
}
```

2. Update the form in `app.html`:

```html
<form (ngSubmit)="onSubmit(contactForm)" #contactForm="ngForm">
  <!-- form fields -->
</form>
```

### Social Media Links

Update the footer links:

```html
<a href="https://github.com/yourusername" class="hover:text-indigo-400 transition">
  GitHub
</a>
<a href="https://linkedin.com/in/yourusername" class="hover:text-indigo-400 transition">
  LinkedIn
</a>
```

## Advanced Customization

### Add New Sections

To add a new section (e.g., "Experience"):

```html
<section id="experience" class="py-20 bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="text-4xl font-bold text-center mb-12 text-gray-800">
      Experience
    </h2>
    <!-- Your content here -->
  </div>
</section>
```

Don't forget to add it to the navigation!

### Add Animations

Tailwind CSS doesn't include many animations by default. Add custom ones in `src/app/app.css`:

```css
@keyframes slideIn {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.animate-slide-in {
  animation: slideIn 0.5s ease-out;
}
```

Then use the class in your HTML:
```html
<div class="animate-slide-in">Content</div>
```

### Responsive Design

Test your changes on different screen sizes. Tailwind's responsive prefixes:

- `sm:` - Small screens (640px+)
- `md:` - Medium screens (768px+)
- `lg:` - Large screens (1024px+)
- `xl:` - Extra large screens (1280px+)

Example:
```html
<div class="text-base md:text-lg lg:text-xl">
  This text grows on larger screens
</div>
```

## Tips

1. **Keep it Simple**: Less is often more in portfolio design
2. **Focus on Content**: Your projects and skills are the star
3. **Test on Mobile**: Most visitors will view on mobile devices
4. **Keep Loading Fast**: Optimize images and minimize dependencies
5. **Update Regularly**: Keep your projects and skills current

## Need Help?

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Angular Documentation](https://angular.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

Happy customizing! 🚀

