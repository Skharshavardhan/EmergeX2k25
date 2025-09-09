# TechFest 2025 - Easy Editing Guide

This guide explains how to easily customize your symposium website through GitHub's web interface.

## 🎯 Quick Edit Locations

### 1. Change Event Data (Rules, Form Links, Contacts)
**File**: `src/data/events.js`

Edit this file to:
- Update event rules and guidelines
- Change Google Form registration links
- Update coordinator phone numbers
- Modify event titles and taglines

### 2. Change Countdown Date
**File**: `src/data/events.js` (Line 4)
```javascript
export const SYMPOSIUM_DATE = new Date('2025-09-16T00:00:00');
```
Change the date to your symposium date.

### 3. Update Symposium Name & Details
**File**: `src/data/events.js` (Lines 7-11)
```javascript
export const SYMPOSIUM_INFO = {
  name: "TechFest 2025",
  subtitle: "Innovation • Technology • Excellence",
  description: "Join us for the most exciting technical symposium of the year!"
};
```

### 4. Replace Event Images
**Folders**: `public/events/<event-id>/hero.jpg`

Replace these image files:
- `public/events/debugging/hero.jpg`
- `public/events/websparx/hero.jpg`
- `public/events/gaming/hero.jpg`
- `public/events/innovation-pitch/hero.jpg`
- `public/events/photography/hero.jpg`
- `public/events/debate/hero.jpg`
- `public/events/adzap/hero.jpg`
- `public/events/poster-presentation/hero.jpg`

Images should be 896x512 pixels (16:9 aspect ratio) for best results.

## 📝 How to Edit via GitHub Web Interface

1. **Navigate to your repository** on GitHub
2. **Click on the file** you want to edit
3. **Click the pencil icon** (Edit this file) in the top right
4. **Make your changes** in the editor
5. **Scroll down** to "Commit changes"
6. **Add a commit message** describing your changes
7. **Click "Commit changes"**

## 🎨 Customizing Event Data

Each event in `src/data/events.js` has this structure:

```javascript
{
  id: "event-name",
  title: "Event Display Name",
  category: "Technical", // or "Non-Technical"
  tagline: "Short catchy description",
  image: "/events/event-name/hero.jpg",
  rules: [
    "Rule 1",
    "Rule 2",
    "Rule 3"
  ],
  formUrl: "https://forms.gle/YOUR_GOOGLE_FORM_LINK",
  contacts: {
    student: "+91-9000000001",
    staff: "+91-9000000101"
  }
}
```

## 🚀 Quick Start Checklist

- [ ] Update symposium name and details
- [ ] Set correct countdown date
- [ ] Replace all Google Form links
- [ ] Update all coordinator phone numbers
- [ ] Replace event images (optional)
- [ ] Customize event rules
- [ ] Update general contact information

## 🎯 Form Link Format

Google Forms links should be in this format:
`https://forms.gle/XXXXXXXXXX`

To get this link:
1. Create your Google Form
2. Click "Send" in the top right
3. Click the link icon
4. Copy the shortened link

## 💡 Tips

- **Image Size**: Use 896x512 pixel images for events
- **Phone Format**: Keep the +91-XXXXXXXXXX format
- **Testing**: Make a small change first to test the editing process
- **Backup**: Consider downloading a copy before major edits

## 🆘 Need Help?

If you encounter any issues:
1. Check that file paths are correct
2. Ensure JSON syntax is valid (commas, quotes, brackets)
3. Verify image file names match the paths in the data file

---

**Built with ❤️ for TechFest 2025**