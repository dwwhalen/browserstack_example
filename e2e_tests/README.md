# Android - build the app
```
cd ./packages/myqhealth_mobile

flutter build apk --debug --dart-define BUILD_FOR_APPIUM=true
```

## Android upload the app to BrowserStack
```
export DEMO_APK_PATH="/Users/dennis.whalen/flutter_projects/browserstack_example/build/app/outputs/flutter-apk/app-debug.apk"

curl -u $BROWSERSTACK_USERNAME:$BROWSERSTACK_ACCESS_KEY -X POST "https://api-cloud.browserstack.com/app-automate/upload" -F "file=@$DEMO_APK_PATH" -F "custom_id=dennis_example"
```