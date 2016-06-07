// Saves options to chrome.storage.sync
function save_options() {
	// Get value(s)
	var pagespeedKeyValue = document.getElementById('pagespeed-key').value;
	// Store value(s)
	chrome.storage.sync.set({
		// 'Key': Value
		"pagespeedKey": pagespeedKeyValue
	},
	function() {
		// Update status to let user know options were saved
		var status = document.getElementById('status');
		status.textContent = 'Option(s) saved.';
		// Clear the status div after 3/4 of a second
		setTimeout( function() { status.textContent = ''; }, 750 );
	});
}

// Restores using the preferences stored in chrome.storage
function restore_options() {
	// Get the value(s)
	chrome.storage.sync.get(
		"pagespeedKey"
	,
	function(obj) {
		// Set the values retrieved from chrome.storage
		document.getElementById('pagespeed-key').value = obj.pagespeedKey;
	});
}
// Restore values on page load
document.addEventListener('DOMContentLoaded', restore_options);
// Set save action on save button
document.getElementById('save').addEventListener('click', save_options);