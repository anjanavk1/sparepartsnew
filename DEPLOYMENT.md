# Hostinger Deployment Guide

## Prerequisites
- Hostinger account with subdomain configured
- FTP/File Manager access to your subdomain directory

## Step 1: Build the Production Files

1. Open terminal in the project directory:
   ```bash
   cd "c:\Users\Perfect Elect\Downloads\Spareparts\jesr-parts"
   ```

2. Run the build command:
   ```bash
   npm run build
   ```
   OR if using bun:
   ```bash
   bun run build
   ```

3. After successful build, you'll see an `out` folder created in your project directory.

## Step 2: Prepare Files for Upload

The `out` folder contains all your static website files:
- HTML pages
- CSS stylesheets
- JavaScript files
- Images and assets
- `_next` folder with optimized assets

## Step 3: Upload to Hostinger

### Option A: Using Hostinger File Manager (Recommended)

1. Log in to your Hostinger control panel (hPanel)
2. Navigate to **Files** → **File Manager**
3. Navigate to your subdomain directory (e.g., `public_html/subdomain` or `domains/subdomain.yourdomain.com`)
4. **Delete any existing files** in the subdomain directory (if this is a fresh deployment)
5. Upload ALL contents from the `out` folder:
   - Select all files and folders inside `out`
   - Upload them to your subdomain root directory
6. Upload the `.htaccess` file from the project root to your subdomain root directory

### Option B: Using FTP Client (FileZilla)

1. Get FTP credentials from Hostinger:
   - Go to **Files** → **FTP Accounts**
   - Note your FTP hostname, username, and password
2. Connect using FileZilla:
   - Host: Your FTP hostname
   - Username: Your FTP username
   - Password: Your FTP password
   - Port: 21
3. Navigate to your subdomain directory on the remote side
4. Upload all contents from the `out` folder
5. Upload the `.htaccess` file

## Step 4: Verify Deployment

1. Visit your subdomain URL: `https://yoursubdomain.yourdomain.com`
2. Test the following:
   - ✅ Home page loads correctly
   - ✅ Click on brand filters (Toyota, Nissan, Ford)
   - ✅ Navigate to Shop page
   - ✅ Click "View Details" on a product
   - ✅ Test WhatsApp and Call buttons
   - ✅ Check that images load properly

## Troubleshooting

### Issue: 404 errors on product pages
**Solution**: Make sure `.htaccess` file is uploaded and mod_rewrite is enabled on your server.

### Issue: Images not loading
**Solution**: 
- Check that the `_next` folder was uploaded
- Verify external image URLs are accessible
- Check browser console for CORS errors

### Issue: Styles not applying
**Solution**: 
- Clear browser cache
- Check that all CSS files in `_next/static/css/` were uploaded
- Verify file permissions (should be 644 for files, 755 for folders)

### Issue: Blank page
**Solution**: 
- Check browser console for JavaScript errors
- Verify all files in `_next/static/chunks/` were uploaded
- Ensure `.htaccess` is properly configured

## File Structure on Server

Your subdomain directory should look like this:
```
subdomain-root/
├── .htaccess
├── index.html
├── 404.html
├── shop.html
├── product/
│   ├── 1.html
│   ├── 2.html
│   └── ... (all product pages)
├── _next/
│   ├── static/
│   │   ├── css/
│   │   ├── chunks/
│   │   └── media/
│   └── ...
└── ... (other static files)
```

## Important Notes

1. **Rebuilding**: Whenever you make changes to your code, you must:
   - Run `npm run build` again
   - Re-upload the entire `out` folder contents
   - The `.htaccess` file only needs to be uploaded once (unless you modify it)

2. **External Images**: The current configuration uses external images from Google and Amazon. These should load fine, but consider hosting images locally for better reliability.

3. **Phone Number**: Update the phone number in the code before building:
   - Current: `+971501234567`
   - Location: `app/product/[id]/page.tsx` (line 21 and 92)

4. **WhatsApp Number**: Same as phone number, update before building.

## Next Steps

- Configure SSL certificate in Hostinger (usually automatic)
- Set up Google Analytics (if needed)
- Test on mobile devices
- Monitor for any errors

## Support

If you encounter issues:
1. Check Hostinger's knowledge base
2. Contact Hostinger support
3. Check browser console for specific error messages
