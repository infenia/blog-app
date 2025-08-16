# blog-app
Blog Application
## Frontend SRS for Blog Application

### 1. User Roles
- **Guest**: Can read blogs, view author details, see tags.  
- **Certified User**: Can write and submit blogs (only after admin approval).  
- **Admin**: Approves users, verifies blog drafts, manages platform.  

---

### 2. Homepage (Blog Feed)
- Blog list in card layout with:
  - Title  
  - Author name  
  - Publish date  
  - Read time estimate  
  - Small preview  
  - Thumbnail / embed videos  

- Sorting and filtering:
  - By category (AI, ML, Web Dev, etc.)  
  - By author  
  - By trending / recent  

---

### 3. Blog Detail Page
- Full article view  
- Listening option  
- Like, Comments, Share options  
- Author profile card with:
  - Name  
  - Bio  
  - Author badge  

- Related blogs / recommended section  
- Word / Read time stats  
- Tags displayed as clickable chips  

---

### 4. Write Blog Page (Only for Certified Users)
- Rich Text Editor:  
  - Auto-save drafts  
  - “Submit for Review” button (only admin can publish)  
  - Preview mode toggle  

---

### 5. Admin Dashboard
- Approve certified users  
- Review and publish/reject submitted blogs  
- Mark blogs as “Featured” or “Trending”  

---

### 6. Certified User Request Page
Form with:  
- Name  
- Email  
- Portfolio or Resume link  
- Field of expertise  
- Reason for writing  
- Status shown (Pending / Approved / Rejected)  

---

### 7. Authentication
- Email / Password login  

---

### 8. My Blogs Page (for Certified Users)
- List of all their blog posts with:  
  - Status: Draft / Pending Review / Published / Rejected  
  - Edit/Delete buttons (only for Drafts)  
  - Analytics (optional): Views, Likes  

---

### 9. Tag and Topic System
- Each blog post must be tagged (e.g. `#AI`, `#Ethics`)  
- Homepage shows trending tags  
- Clicking a tag filters blogs by that topic  

---

### 10. Dark Mode / Responsive UI
- Dark/light theme toggle  
- Responsive layout  

---

### 11. Search Bar
- Search by title, author, or tag
