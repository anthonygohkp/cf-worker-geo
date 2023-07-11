export default {
	async fetch(request) {
		const { cf } = request;
		const COUNTRY = cf['country'];
		const ASN = cf['asn'];
		const CLIENT_IP = request.headers.get('cf-connecting-ip');

		if (COUNTRY !== 'SG') {
			return Response.redirect('https://1.1.1.1/', 301);
		}


		const responseText = `This is your ${CLIENT_IP} and you are accessing this site from ${COUNTRY} | ${ASN}.`;

		return new Response(responseText, {
			headers: { 'Content-Type': 'text/html' },
		});

	},
};
