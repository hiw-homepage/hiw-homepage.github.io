$('#ua').ready(function() {
	const UA = window.navigator.userAgent.toLowerCase();
});
async function sha256(text) {
	const uint8 = new TextEncoder().encode(text)
	const digest = await crypto.subtle.digest('SHA-256', uint8)
	return Array.from(new Uint8Array(digest)).map(v => v.toString(16).padStart(2, '0')).join('')
}
$(document).on('click', 'button', function() {
	var varId = $('#id').val();
	var varPIN = $('#pin').val();
	(async () => {
		let hashPIN = await sha256(varPIN);
		if (varId == "member" && hashPIN == "17dc3303cd10e0824497a0874a4b86275e63c943e3fefba5f5760959dd525fc2") {
			sha256(varPIN).then(hash => location.replace("./" + hash));
		}
	})();
});