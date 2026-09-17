# Hostinger Deployment Guide

This guide explains how to deploy the React-Vite project on **Hostinger Shared Web Hosting** and ensure that routes work correctly.

## 🚀 Deployment Packages Available

In the root folder, you will find:
1. `deploy.zip` — A compressed package of the ready-to-deploy build directory contents (`dist/*`), which includes:
   - Optimized HTML, CSS, JavaScript, and assets.
   - A `.htaccess` file configured to support client-side routing (`react-router-dom`).

---

## 💻 Step-by-Step Upload to Hostinger

### Step 1: Log in to Hostinger hPanel
1. Go to [Hostinger hPanel](https://hpanel.hostinger.com) and log in to your account.
2. Under **Hosting**, find your website and click **Manage**.

### Step 2: Open the File Manager
1. In the sidebar or search bar, look for **File Manager** (usually under the **Files** section).
2. Click **File Manager** to open it.
3. Navigate into the **`public_html`** folder (this is the root directory of your website).

### Step 3: Upload the Zip File
1. In the top-right corner of the File Manager, click the **Upload** button (arrow pointing up icon) and select **File**.
2. Select the **`deploy.zip`** file from your local machine.

### Step 4: Extract the Files
1. Right-click on the uploaded `deploy.zip` file inside `public_html`.
2. Select **Extract**.
3. In the extract window, type **`.`** (a single dot) or keep the destination path pointing directly to `public_html`. Click **Extract**.
4. Move the extracted files if they ended up inside a subfolder, so that they reside directly under `/public_html/`. Specifically, your `public_html` directory should look like this:
   - `assets/`
   - `.htaccess`
   - `index.html`
   - `favicon.svg`
   - `robots.txt`
   - `sitemap.xml`
5. You can now delete the `deploy.zip` file from the server to keep your space clean.

---

## 🛠️ Important Notes & Troubleshooting

### Client-Side Routing (React Router)
Since this app uses path-based routing (e.g. `/about`, `/services`), the `.htaccess` file included in `deploy.zip` is **critical**. Without it, refreshing the browser on any page other than the homepage will result in a `404 Not Found` error. 

The `.htaccess` file contains the following rules to rewrite all requests to `index.html`:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>
```
Ensure that this file is visible in your Hostinger File Manager (you might need to check "Show hidden files" in the settings if it's hidden).

### SSL & HTTPS Redirect (Optional)
If you want to force all visitors to use HTTPS, you can add this block inside the `.htaccess` file right below `RewriteEngine On`:
```apache
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```
