function FindProxyForURL(url, host) {
	if (shExpMatch(host, "*.google.com,twitter.com")||shExpMatch(host, "*.twitter.com")||shExpMatch(host, "*.twimg.com")||shExpMatch(host, "t.co"))
	{
			return "PROXY localhost:8787; DIRECT";
	}

	return "DIRECT";
}
