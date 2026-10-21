adb forward tcp:9222 localabstract:chrome_devtools_remote

npx playwright test tests/searching_feature/ --headed --workers=1