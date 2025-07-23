@echo off
setlocal

:PROMPT
SET /P AREYOUSURE=Are you sure you want to publish? (Y/[N])?
IF /I "%AREYOUSURE%" NEQ "Y" GOTO END

echo Committing version bump...
git add package.json
git commit -m "chore: bump version to %VERSION%"
if errorlevel 1 (
    echo Git commit failed or nothing to commit.
)
echo Pushing changes to remote...
git push

echo Publishing to npm...
npm publish
if errorlevel 1 (
    echo npm publish failed.
    exit /b 1
)

echo Done!

:END
endlocal

