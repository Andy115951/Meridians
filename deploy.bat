@echo off
echo ========================================
echo Cloudflare Pages Deployment Script
echo ========================================
echo.

REM Check if dist folder exists
if not exist "dist" (
    echo [ERROR] dist folder not found!
    echo Please run: npm run build
    pause
    exit /b 1
)

echo Step 1: Login to Cloudflare...
echo (This will open a browser for authentication)
echo.
wrangler login

echo.
echo Step 2: Deploying to Cloudflare Pages...
echo.
wrangler pages publish dist --project-name=meridians

echo.
echo ========================================
echo Deployment complete!
echo ========================================
echo.
echo Your site should be available at:
echo https://meridians.pages.dev
echo.
echo (You can also set up a custom domain in Cloudflare dashboard)
echo.
pause
