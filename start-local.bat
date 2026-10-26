@echo off
setlocal
cd /d "%~dp0"

if exist "%ProgramFiles%\nodejs\node.exe" set "PATH=%ProgramFiles%\nodejs;%PATH%"
if exist "%LOCALAPPDATA%\Programs\nodejs\node.exe" set "PATH=%LOCALAPPDATA%\Programs\nodejs;%PATH%"

where node >nul 2>&1
if errorlevel 1 goto node_missing

where npm >nul 2>&1
if errorlevel 1 goto npm_missing

if not exist "node_modules\next\package.json" (
    echo Installing project dependencies for the first run...
    call npm ci
    if errorlevel 1 goto failed
)

echo Starting the local development server...
echo Open the URL shown below, usually http://localhost:3000
echo Press Ctrl+C to stop the server.
call npm run dev
exit /b %errorlevel%

:node_missing
echo Node.js is not available in PATH.
echo Install the Node.js LTS version from https://nodejs.org/ and reopen this terminal.
pause
exit /b 1

:npm_missing
echo npm is not available in PATH.
echo Repair or reinstall Node.js LTS from https://nodejs.org/ and reopen this terminal.
pause
exit /b 1

:failed
echo Dependency installation failed. Check the output above and try again.
pause
exit /b 1
