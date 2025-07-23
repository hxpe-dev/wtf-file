@echo off
setlocal

:: Check for argument
if "%~1"=="" (
    echo Usage: npm_publish.bat [patch^|minor^|major]
    exit /b 1
)

:: Validate argument
set ARG=%~1
if /I not "%ARG%"=="patch" if /I not "%ARG%"=="minor" if /I not "%ARG%"=="major" (
    echo Invalid argument: %ARG%
    echo Use: patch, minor, or major
    exit /b 1
)

echo Pulling latest changes from Git...
git pull
if errorlevel 1 (
    echo Git pull failed. Aborting.
    exit /b 1
)

echo Incrementing version with: npm version %ARG%...
npm version %ARG% --no-git-tag-version
if errorlevel 1 (
    echo Version bump failed. Aborting.
    exit /b 1
)