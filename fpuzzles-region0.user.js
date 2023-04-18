// ==UserScript==
// @name         Fpuzzles-Region-Zero
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Allows marking cells as "region 0" in f-puzzles (by pressing "delete" key).
// @author       Chameleon
// @updateURL    https://github.com/yusitnikov/fpuzzles-region0/raw/main/fpuzzles-region0.user.js
// @match        https://*.f-puzzles.com/*
// @match        https://f-puzzles.com/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

document.addEventListener("keydown", (event) => {
    const jsonEditorDiv = document.getElementById("jsoneditor");
    if (mode === "Setting" && currentTool === "Regions" && ["Delete", "Backspace"].includes(event.code) && !popup && !disableInputs && (!jsonEditorDiv || jsonEditorDiv.hidden)) {
        for (const cell of selection) {
            cell.region = -1;
        }
    }
});
