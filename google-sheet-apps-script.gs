/**
 * Zyrax Fitness — Lead capture → Google Sheet
 * =================================================================
 * Receives lead submissions from the landing page form and appends
 * one row per lead. Deploy as a Web App (see steps at the bottom).
 */

// Optional: paste your Sheet ID to target a specific spreadsheet.
// Leave '' to use the spreadsheet this script is bound to.
var SHEET_ID = '19EfPcXOceK-UitzErnuUDGSLKEXZxV9NPtlt9dTjWv4';
var SHEET_NAME = 'Leads';

// Column order written to the sheet (also used for the header row).
var HEADERS = [
  'Submitted At', 'Name', 'Phone', 'Age', 'Gender',
  'Weight', 'Goal', 'Health', 'Lifestyle', 'Paid Plan', 'Page',
];

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var sheet = getSheet_();

    // Write header row once.
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
      sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
    }

    sheet.appendRow([
      data.submittedAt || new Date().toISOString(),
      data.name || '',
      "'" + (data.phone || ''),   // leading quote keeps the number as text
      data.age || '',
      data.gender || '',
      data.weight || '',
      data.goal || '',
      data.health || '',
      data.lifestyle || '',
      data.paidPlan || '',
      data.page || '',
    ]);

    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  }
}

// Open the /exec URL in a browser to confirm it's live AND see exactly
// where leads are being written (spreadsheet URL, tab, and row count).
function doGet() {
  try {
    var sheet = getSheet_();
    var ss = sheet.getParent();
    return json_({
      ok: true,
      service: 'Zyrax lead capture',
      spreadsheetName: ss.getName(),
      spreadsheetUrl: ss.getUrl(),
      spreadsheetId: ss.getId(),
      sheetTab: sheet.getName(),
      rowsInLeads: sheet.getLastRow(),
    });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  }
}

// Run this once from the editor (▶ Run) to delete all lead rows but keep
// the header. Handy for clearing test data before going live.
function clearLeads() {
  var sheet = getSheet_();
  var last = sheet.getLastRow();
  if (last > 1) sheet.deleteRows(2, last - 1);
}

function getSheet_() {
  var ss = SHEET_ID ? SpreadsheetApp.openById(SHEET_ID) : SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = ss.insertSheet(SHEET_NAME);
  return sheet;
}

function json_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

/* =================================================================
   SETUP (once, ~2 minutes)
   -----------------------------------------------------------------
   1. Create a Google Sheet (e.g. "Zyrax Leads").
   2. Extensions → Apps Script. Delete the sample code, paste ALL of
      this file, and Save.
   3. Deploy → New deployment → gear icon → "Web app".
        - Execute as:  Me
        - Who has access:  Anyone
      Click Deploy, authorize when prompted.
   4. Copy the "Web app URL" (ends in /exec).
   5. In script.js, set:
        var SHEET_ENDPOINT = 'https://script.google.com/macros/s/.../exec';
   6. Submit a test lead — a new row appears in the sheet.

   To change the sheet later, just edit the code and Deploy → Manage
   deployments → Edit → Version: New version. The /exec URL stays the same.
   ================================================================= */
